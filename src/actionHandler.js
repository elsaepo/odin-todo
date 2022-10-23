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
const { addDays, subDays, isBefore, isToday } = require("date-fns");

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
    // Creates default project and task objects if no storage exists
    localStorage.removeItem("currentID");
    localStorage.removeItem("currentProjectID");
    setLabelID(4);
    const taskObjectCreator = function (title, description, dueDate, completed, priority) {
        return { title, description, dueDate, completed, priority }
    }
    let defaultProject = new Project("Uncategorised", 0);
    let defaultProject2 = new Project("To-do list", 2);
    let defaultProject3 = new Project("Groceries", 3);
    let myTask = new Task(taskObjectCreator("Renew gym membership", "The ski season is coming, and it's coming hard", addDays(new Date(), 4), false, "low"));
    let myTask2 = new Task(taskObjectCreator("Pay electricity bill", "It's always a doozy. Also, use less electricity", addDays(new Date(), 1), false, "high"));
    let myTask3 = new Task(taskObjectCreator("Buy a new hat", "Thinking cyan, but also open to magenta, yellow or black", false, false, "medium"));
    let myTask4 = new Task(taskObjectCreator("Create an example task", "To pad out the website upon a user's initial load, so they can see the options and functionality", new Date(), true, "medium"));
    let myTask5 = new Task(taskObjectCreator("Add hidden reset button", "Need to have a way for user to reset entire list, and hide it in the header title period", false, true, "medium"));
    let myTask6 = new Task(taskObjectCreator("Implement localStorage", "Needed in order for tasks to be saved to user's computer, and to remember their preferences in the app", subDays(new Date(), 6), true, "high"));
    let myTask7 = new Task(taskObjectCreator("Add dark mode", "Make it toggle via a  visual button, and detect browser's default preference for initial toggle", new Date(), true, "low"));
    let myTask8 = new Task(taskObjectCreator("Milk", "", false, false, "medium"));
    let myTask9 = new Task(taskObjectCreator("Bread", "", false, false, "medium"));
    let myTask10 = new Task(taskObjectCreator("Pistachio Nuts", "", new Date(), false, "high"));
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
    // Creates project and task objects from simplified storage objects, and implements the stored label list
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