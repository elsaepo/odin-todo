import { getCurrentID, setCurrentID } from "./idController.js";
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

const saveToLocal = function () {
    let projList = getProjectList().map(proj => {
        return {
            id: proj.id,
            title: proj.title,
            label: proj.label,
            taskList: proj.taskList.map(task => {
                return {
                    id: task.id,
                    title: task.title,
                    description: task.description,
                    dueDate: task.dueDate,
                    status: task.status,
                    priority: task.priority,
                    completed: task.completed
                }
            })
        }
    });
    localStorage.setItem("projectList", JSON.stringify(projList));
    localStorage.setItem("currentID", getCurrentID());
}

// eventEmitter listeners for selecting projects & displaying/removing them from DOM
domCreator.eventEmitter.on("deleteProject", (project) => {
    // If the project to delete is displayed, remove it and replace with default
    if (getCurrentProject() === project.id) {
        setCurrentProject(1);
        domCreator.drawProjectHeader(getProjectByID(1));
        domCreator.drawTaskList(getProjectByID(1).taskList, project);
    }
    project.deleteProject();
    saveToLocal();
});

domCreator.eventEmitter.on("newProject", (projectName, projectLabel) => {
    let newProject = new Project(projectName, projectLabel);
    setCurrentProject(newProject.id);
    domCreator.drawProjectNav(newProject);
    saveToLocal();
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
});

domCreator.eventEmitter.on("taskComplete", (task) => {
    task.completed = !task.completed;
    saveToLocal();
});

domCreator.eventEmitter.on("taskDelete", (task) => {
    getProjectByID(task.parentProjectID).removeTask(task);
    saveToLocal();
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
    if (sorter === "Priority") {
        tasksToSort = tasksToSort.sort((a, b) => {
            let aPrio = (a.priority === "high") ? 3
                : (a.priority === "medium") ? 2 : 1;
            let bPrio = (b.priority === "high") ? 3
                : (b.priority === "medium") ? 2 : 1;
            return aPrio - bPrio;
        })
    }
    if (isDescending) { tasksToSort.reverse() }
    domCreator.drawTaskList(tasksToSort);
})

domCreator.eventEmitter.on("newTask", (projectID, taskTitle, taskDesc, taskDueDate, taskPriority) => {
    const newTask = new Task(taskTitle, taskDesc, taskDueDate, true, taskPriority);
    const project = getProjectByID(projectID);
    console.log(project)
    project.addTask(newTask);
    console.log(project.taskList)
    console.log(projectID)
    console.log(getCurrentProject())
    if (projectID === Number(getCurrentProject())) {
        console.log("DRAWING TASK CONTAINER YUP")
        domCreator.taskContainer.appendChild(domCreator.drawTask(newTask, project));
    };
    saveToLocal();
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
    saveToLocal();
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
// let defaultProject = new Project("Uncategorised");
// let defaultProject2 = new Project("To-do list", "Study");
// let defaultProject3 = new Project("Driving game", "Work");
// let myTask = new Task("Gym session", "To work on these quads for the upcoming ski weekend", new Date(), "uncompleted", "low");
// let myTask2 = new Task("Call QANTAS", "Figure out where my points are", addDays(new Date(), 1), "uncompleted", "medium");
// let myTask3 = new Task("Make travel insurance claim", "get some money back from the Canada trip shenanigans", false, "uncompleted", "medium");
// let myTask4 = new Task("Make tasks beautiful", "add rounded corners similar to sidebar buttons, drop shadows, nice spacing", addDays(new Date(), 4), "uncompleted", "medium");
// let myTask5 = new Task("Add task button", "have to make a way to add tasks somehow aye", false, "uncompleted", "high");
// let myTask6 = new Task("Move tasks between projects", "this is a bit harder - will need to remove current task from current project taskList, then add it to the new project and format appropriately", false, "uncompleted", "medium");
// let myTask7 = new Task("Add footer", "add footer with my name and github link to source code", addDays(new Date(), 12), "uncompleted", "low");
// let myTask8 = new Task("Add driving physics", "first things first, make the car feel amazing to drive", addDays(new Date(), 16), "uncompleted", "medium");
// let myTask9 = new Task("Make Falls Creek road", "To work on these quads for the upcoming ski weekend", addDays(new Date(), 54), "uncompleted", "medium");
// let myTask10 = new Task("Add smoke particle effects", "To work on these quads for the upcoming ski weekend", new Date(), "uncompleted", "low");
// myTask.completed = true;
// defaultProject.addTask(myTask);
// defaultProject.addTask(myTask2);
// defaultProject.addTask(myTask3);
// defaultProject2.addTask(myTask4);
// defaultProject2.addTask(myTask5);
// defaultProject2.addTask(myTask6);
// defaultProject2.addTask(myTask7);
// defaultProject3.addTask(myTask8);
// defaultProject3.addTask(myTask9);
// defaultProject3.addTask(myTask10);

// domCreator.drawProjectNav(defaultProject);
// domCreator.drawProjectNav(defaultProject2);
// domCreator.drawProjectNav(defaultProject3);

// domCreator.drawProjectHeader(defaultProject);
// domCreator.drawTaskList(defaultProject.taskList, defaultProject);
// saveToLocal();



const rawData = '[{"id":1,"title":"Uncategorised","taskList":[{"id":4,"title":"Gym session","description":"To work on these quads for the upcoming ski weekend","dueDate":"2022-10-07T12:49:34.712Z","priority":"low","completed":true},{"id":5,"title":"Call QANTAS","description":"Figure out where my points are","dueDate":"2022-10-08T12:49:34.712Z","priority":"medium","completed":false},{"id":6,"title":"Make travel insurance claim","description":"get some money back from the Canada trip shenanigans","dueDate":false,"priority":"medium","completed":false}]},{"id":2,"title":"To-do list","label":"Study","taskList":[{"id":7,"title":"Make tasks beautiful","description":"add rounded corners similar to sidebar buttons, drop shadows, nice spacing","dueDate":"2022-10-11T12:49:34.712Z","priority":"medium","completed":false},{"id":8,"title":"Add task button","description":"have to make a way to add tasks somehow aye","dueDate":false,"priority":"high","completed":false},{"id":9,"title":"Move tasks between projects","description":"this is a bit harder - will need to remove current task from current project taskList, then add it to the new project and format appropriately","dueDate":false,"priority":"medium","completed":false},{"id":10,"title":"Add footer","description":"add footer with my name and github link to source code","dueDate":"2022-10-19T12:49:34.712Z","priority":"low","completed":false}]},{"id":3,"title":"Driving game","label":"Work","taskList":[{"id":11,"title":"Add driving physics","description":"first things first, make the car feel amazing to drive","dueDate":"2022-10-23T12:49:34.712Z","priority":"medium","completed":false},{"id":12,"title":"Make Falls Creek road","description":"To work on these quads for the upcoming ski weekend","dueDate":"2022-11-30T12:49:34.712Z","priority":"medium","completed":false},{"id":13,"title":"Add smoke particle effects","description":"To work on these quads for the upcoming ski weekend","dueDate":"2022-10-07T12:49:34.712Z","priority":"low","completed":false}]}]';
let parsedData = JSON.parse(rawData);
if (!localStorage.getItem("projectList")) {
    localStorage.setItem("projectList", rawData);
    localStorage.setItem("currentID", 16);
    setCurrentID(16);
} else {
    parsedData = JSON.parse(localStorage.getItem("projectList"));
    setCurrentID(Number(localStorage.getItem("currentID")));
};
parsedData.forEach(proj => {
    let newProj = new Project(proj.title, proj.label, proj.id);
    proj.taskList.forEach(task => {
        let newTask = new Task(task.title, task.description, new Date(task.dueDate), task.status, task.priority, false, Number(task.id));
        newProj.addTask(newTask);
    });
    domCreator.drawProjectNav(newProj);
    domCreator.drawProjectHeader(newProj);
    domCreator.drawTaskList(newProj.taskList, newProj);
    setCurrentProject(proj.id)
});
