import { getCurrentID, setCurrentID, getLabelID, setLabelID } from "./idController.js";
import {
    Project,
    getProjectByID,
    getTaskByID,
    getCurrentProject,
    setCurrentProject,
    getProjectList,
    getFullTaskList,
    getLabelList,
    setLabelList
} from "./project.js";
import { Task } from "./task.js";
import "./style.css";
import domCreator from "./domCreator.js";
const { addDays, isBefore, isToday } = require("date-fns");

// localStorage - saves the project list, the current ID from idController.js, and the current project
const saveToLocal = function () {
    let projList = getProjectList().map(proj => {
        return {
            id: proj.id,
            title: proj.title,
            labelID: proj.labelID,
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
    localStorage.setItem("labelList", JSON.stringify(getLabelList()));
    localStorage.setItem("currentID", getCurrentID());
    localStorage.setItem("currentLabelID", getLabelID());
    localStorage.setItem("currentProjectID", getCurrentProject());
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

domCreator.eventEmitter.on("newProjectButton", () => {
    domCreator.drawAddProjectContainer(getLabelList());
})

domCreator.eventEmitter.on("newProject", (projectName, projectLabelID) => {
    const projectLabel = getLabelList().filter(label => label.id === projectLabelID)[0];
    const newProject = new Project(projectName, projectLabelID);
    setCurrentProject(newProject.id);
    domCreator.drawProjectNav(newProject);
    domCreator.drawProjectHeader(newProject);
    domCreator.drawTaskList(newProject.taskList, newProject);
    saveToLocal();
});

domCreator.eventEmitter.on("projectButton", (project) => {
    setCurrentProject(project.id);
    domCreator.drawProjectHeader(project);
    domCreator.drawTaskList(project.taskList, project);
    saveToLocal();
});

domCreator.eventEmitter.on("taskListAll", function () {
    const projectTitle = {
        title: "All Tasks"
    };
    domCreator.drawProjectHeader(projectTitle);
    domCreator.drawTaskList(getFullTaskList());
    setCurrentProject("taskListAll");
    saveToLocal();
});

domCreator.eventEmitter.on("taskListToday", function () {
    const projectTitle = {
        title: "Tasks due today"
    };
    const todayTasks = getFullTaskList().filter(task => isToday(task.dueDate));
    domCreator.drawProjectHeader(projectTitle);
    domCreator.drawTaskList(todayTasks);
    setCurrentProject("taskListToday");
    saveToLocal();
});

domCreator.eventEmitter.on("taskListWeek", function () {
    const projectTitle = {
        title: "Tasks due this week"
    };
    const todayTasks = getFullTaskList().filter(task => isBefore(task.dueDate, addDays(new Date(), 7)));
    domCreator.drawProjectHeader(projectTitle);
    domCreator.drawTaskList(todayTasks);
    setCurrentProject("taskListWeek");
    saveToLocal();
});

domCreator.eventEmitter.on("taskListImportant", function () {
    const projectTitle = {
        title: "High priority tasks"
    };
    const highPrioTasks = getFullTaskList().filter(task => task.priority === "high");
    domCreator.drawProjectHeader(projectTitle);
    domCreator.drawTaskList(highPrioTasks);
    setCurrentProject("taskListImportant");
    saveToLocal();
});

domCreator.eventEmitter.on("taskListCompleted", function () {
    const projectTitle = {
        title: "Completed tasks. Go you!"
    };
    const completedTasks = getFullTaskList().filter(task => task.completed);
    domCreator.drawProjectHeader(projectTitle);
    domCreator.drawTaskList(completedTasks);
    setCurrentProject("taskListCompleted");
    saveToLocal();
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
    const newTaskObj = {
        title: taskTitle,
        description: taskDesc,
        dueDate: taskDueDate,
        priority: taskPriority
    };
    const newTask = new Task(newTaskObj);
    const project = getProjectByID(projectID);
    project.addTask(newTask);
    if (projectID === Number(getCurrentProject())) {
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
    if (task.parentProjectID !== project.id) {
        getProjectByID(task.parentProjectID).removeTask(task);
        project.addTask(task);
    };
    saveToLocal();
});

domCreator.eventEmitter.on("editProject", (projectTitle, projectLabelID, project) => {
    project.title = projectTitle;
    project.labelID = projectLabelID;
    domCreator.drawProjectHeader(project);
    domCreator.drawTaskList(project.taskList, project);
    saveToLocal();
});

domCreator.eventEmitter.on("editLabels", (labelObjectsArray) => {
    setLabelList(labelObjectsArray);
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

domCreator.eventEmitter.on("projectEditPopup", (project, projectBox) => {
    const labelList = getLabelList();
    domCreator.drawEditProjectContainer(project, labelList, projectBox);
});

domCreator.eventEmitter.on("labelsEditPopup", (selectInputContainer, project) => {
    const labelList = getLabelList();
    domCreator.drawEditLabelsContainer(labelList, selectInputContainer, project);
});

if (!localStorage.getItem("projectList")) {
    // Default projects and tasks
    localStorage.removeItem("currentID");
    localStorage.removeItem("currentProjectID");
    setLabelID(4);
    const taskObjectCreator = function (title, description, dueDate, completed, priority) {
        return { title, description, dueDate, completed, priority }
    }
    let defaultProject = new Project("Uncategorised", 0);
    let defaultProject2 = new Project("To-do list", 1);
    let defaultProject3 = new Project("Driving game", 2);
    let myTask = new Task(taskObjectCreator("Gym session", "To work on these quads for the upcoming ski weekend", new Date(), false, "low"));
    let myTask2 = new Task(taskObjectCreator("Call QANTAS", "Figure out where my points are", addDays(new Date(), 1), false, "medium"));
    let myTask3 = new Task(taskObjectCreator("Make travel insurance claim", "get some money back from the Canada trip shenanigans", false, false, "medium"));
    let myTask4 = new Task(taskObjectCreator("Make tasks beautiful", "add rounded corners similar to sidebar buttons, drop shadows, nice spacing", addDays(new Date(), 4), false, "medium"));
    let myTask5 = new Task(taskObjectCreator("Add task button", "have to make a way to add tasks somehow aye", false, false, "high"));
    let myTask6 = new Task(taskObjectCreator("Move tasks between projects", "this is a bit harder - will need to remove current task from current project taskList, then add it to the new project and format appropriately", false, false, "medium"));
    let myTask7 = new Task(taskObjectCreator("Add footer", "add footer with my name and github link to source code", addDays(new Date(), 12), false, "low"));
    let myTask8 = new Task(taskObjectCreator("Add driving physics", "first things first, make the car feel amazing to drive", addDays(new Date(), 16), false, "medium"));
    let myTask9 = new Task(taskObjectCreator("Make Falls Creek road", "To work on these quads for the upcoming ski weekend", addDays(new Date(), 54), false, "medium"));
    let myTask10 = new Task(taskObjectCreator("Add smoke particle effects", "To work on these quads for the upcoming ski weekend", new Date(), false, "low"));
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
    saveToLocal();
} else {
    setLabelList(JSON.parse(localStorage.getItem("labelList")));
    setCurrentID(Number(localStorage.getItem("currentID")));
    setLabelID(Number(localStorage.getItem("currentLabelID")));
    setCurrentProject(localStorage.getItem("currentProjectID"));
    const storedProjectList = JSON.parse(localStorage.getItem("projectList"));
    storedProjectList.forEach(proj => {
        let newProj = new Project(proj.title, proj.labelID, proj.id);
        proj.taskList.forEach(task => {
            const newTaskObj = {
                id: Number(task.id),
                title: task.title,
                description: task.description,
                dueDate: new Date(task.dueDate),
                status: task.status,
                priority: task.priority,
                completed: task.completed,
                parentProjectID: task.parentProjectID
            }
            let newTask = new Task(newTaskObj);
            newTask.completed = task.completed;
            newProj.addTask(newTask);
        });
        domCreator.drawProjectNav(newProj);
    });
};
let lastOpenProject = getCurrentProject();
if (isNaN(lastOpenProject)){
    domCreator.eventEmitter.emit(lastOpenProject);
} else {
    lastOpenProject = getProjectByID(lastOpenProject);
    domCreator.drawProjectHeader(lastOpenProject);
    domCreator.drawTaskList(lastOpenProject.taskList, lastOpenProject);
};