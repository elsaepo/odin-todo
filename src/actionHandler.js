import {
    Project,
    getProjectByID,
    getTaskByID,
    getCurrentProject,
    setCurrentProject,
    getProjectList,
    getFullTaskList
} from "./project.js";
import { Task } from "./task.js";
import "./style.css";
import domCreator from "./domCreator.js";
const { format, parseISO, addDays, isBefore, isToday, isSameWeek } = require("date-fns");

// eventEmitter listeners for selecting projects & displaying/removing them from DOM
domCreator.eventEmitter.on("deleteProject", (project) => {
    // If the project to delete is displayed, remove it and replace with default
    if (getCurrentProject() === project.id) {
        setCurrentProject(1);
        domCreator.drawProjectHeader(getProjectByID(1));
        domCreator.drawTaskList(getProjectByID(1).taskList, project);
    }
    project.deleteProject();
});

domCreator.eventEmitter.on("newProject", (projectName, projectLabel) => {
    let newProject = new Project(projectName, projectLabel);
    domCreator.drawProjectNav(newProject);
});

domCreator.eventEmitter.on("projectButton", (project) => {
    setCurrentProject(project.id);
    domCreator.drawProjectHeader(project);
    domCreator.drawTaskList(project.taskList, project);
});

domCreator.eventEmitter.on("taskListAll", function () {
    const projectTitle = {
        title: "All Tasks"
    };
    domCreator.drawProjectHeader(projectTitle);
    domCreator.drawTaskList(getFullTaskList());
});

domCreator.eventEmitter.on("taskListToday", function () {
    const projectTitle = {
        title: "Tasks due today"
    };
    const todayTasks = getFullTaskList().filter(task => isToday(task.dueDate));
    domCreator.drawProjectHeader(projectTitle);
    domCreator.drawTaskList(todayTasks);
});

domCreator.eventEmitter.on("taskListWeek", function () {
    const projectTitle = {
        title: "Tasks due this week"
    };
    const todayTasks = getFullTaskList().filter(task => isBefore(task.dueDate, addDays(new Date(), 7)));
    domCreator.drawProjectHeader(projectTitle);
    domCreator.drawTaskList(todayTasks);
});

domCreator.eventEmitter.on("taskListImportant", function () {
    const projectTitle = {
        title: "High priority tasks"
    };
    const highPrioTasks = getFullTaskList().filter(task => task.priority === "high");
    domCreator.drawProjectHeader(projectTitle);
    domCreator.drawTaskList(highPrioTasks);
});

domCreator.eventEmitter.on("taskListCompleted", function () {
    const projectTitle = {
        title: "Completed tasks. Go you!"
    };
    const completedTasks = getFullTaskList().filter(task => task.completed);
    domCreator.drawProjectHeader(projectTitle);
    domCreator.drawTaskList(completedTasks);
})

domCreator.eventEmitter.on("taskComplete", (task) => {
    task.completed = !task.completed;
});

domCreator.eventEmitter.on("taskDelete", (task) => {
    task.parentProject.removeTask(task);
});

domCreator.eventEmitter.on("sortTasks", (sorter, nodes, isDescending) => {
    let tasksToSort = [];
    nodes.forEach(node => tasksToSort.push(Number(node.id)));
    tasksToSort = tasksToSort.map(taskID => getTaskByID(taskID));
    if (sorter === "□") {
        tasksToSort = tasksToSort.sort((a, b) => a.completed - b.completed);
    };
    if (sorter === "Due") {
        tasksToSort = tasksToSort.sort((a, b) => {
            if (a.dueDate === b.dueDate) {
                return 0;
            } else if (!a.dueDate) {
                return -1;
            } else if (!b.dueDate) {
                return 1;
            } else {
                return isBefore(a.dueDate, b.dueDate) ? 1 : -1;
            };
        });
    };
    if (sorter === "Priority"){
        tasksToSort = tasksToSort.sort((a, b) => {
            let aPrio = (a.priority === "high") ? 3
                : (a.priority === "medium") ? 2 : 1;
            let bPrio = (b.priority === "high") ? 3
                : (b.priority === "medium") ? 2 : 1;
            return aPrio - bPrio;
        })
    }
    if (isDescending){ tasksToSort.reverse() }
    domCreator.drawTaskList(tasksToSort);
})

domCreator.eventEmitter.on("newTask", (projectID, taskTitle, taskDesc, taskDueDate, taskPriority) => {
    const newTask = new Task(taskTitle, taskDesc, taskDueDate, true, taskPriority);
    const project = getProjectByID(projectID);
    project.addTask(newTask);
    if (projectID === getCurrentProject()) {
        domCreator.taskContainer.appendChild(domCreator.drawTask(newTask, project));
    };
});

domCreator.eventEmitter.on("editTask", (projectID, taskTitle, taskDesc, taskDueDate, taskPriority, task) => {
    const project = getProjectByID(projectID);
    task.title = taskTitle;
    task.description = taskDesc;
    task.dueDate = taskDueDate;
    task.priority = taskPriority;
    if (task.parentProject !== project) {
        task.parentProject.removeTask(task);
        project.addTask(task);
    };
});

domCreator.eventEmitter.on("taskAddPopup", (project) => {
    const projectList = getProjectList();
    domCreator.drawAddTaskContainer(project, projectList);
});

domCreator.eventEmitter.on("taskEditPopup", (task, project, taskBox) => {
    const projectList = getProjectList();
    domCreator.drawAddTaskContainer(project, projectList, task, taskBox);
});


// Default projects for testing purposes
// title, description, dueDate, status, priority
let defaultProject = new Project("Uncategorised");
let defaultProject2 = new Project("To-do list", "Study");
let defaultProject3 = new Project("Driving game", "Work");
let myTask = new Task("Gym session", "To work on these quads for the upcoming ski weekend", new Date(), "uncompleted", "low");
let myTask2 = new Task("Call QANTAS", "Figure out where my points are", addDays(new Date(), 1), "uncompleted", "medium");
let myTask3 = new Task("Make travel insurance claim", "get some money back from the Canada trip shenanigans", false, "uncompleted", "medium");
let myTask4 = new Task("Make tasks beautiful", "add rounded corners similar to sidebar buttons, drop shadows, nice spacing", addDays(new Date(), 4), "uncompleted", "medium");
let myTask5 = new Task("Add task button", "have to make a way to add tasks somehow aye", false, "uncompleted", "high");
let myTask6 = new Task("Move tasks between projects", "this is a bit harder - will need to remove current task from current project taskList, then add it to the new project and format appropriately", false, "uncompleted", "medium");
let myTask7 = new Task("Add footer", "add footer with my name and github link to source code", addDays(new Date(), 12), "uncompleted", "low");
let myTask8 = new Task("Add driving physics", "first things first, make the car feel amazing to drive", addDays(new Date(), 16), "uncompleted", "medium");
let myTask9 = new Task("Make Falls Creek road", "To work on these quads for the upcoming ski weekend", addDays(new Date(), 54), "uncompleted", "medium");
let myTask10 = new Task("Add smoke particle effects", "To work on these quads for the upcoming ski weekend", new Date(), "uncompleted", "low");
myTask.completed = true;
defaultProject.addTask(myTask);
defaultProject.addTask(myTask2);
defaultProject.addTask(myTask3);
defaultProject2.addTask(myTask4);
defaultProject2.addTask(myTask5);
defaultProject2.addTask(myTask6);
defaultProject2.addTask(myTask7);
defaultProject3.addTask(myTask8);
defaultProject3.addTask(myTask9);
defaultProject3.addTask(myTask10);

domCreator.drawProjectNav(defaultProject);
domCreator.drawProjectNav(defaultProject2);
domCreator.drawProjectNav(defaultProject3);

domCreator.drawProjectHeader(defaultProject);
domCreator.drawTaskList(defaultProject.taskList, defaultProject);