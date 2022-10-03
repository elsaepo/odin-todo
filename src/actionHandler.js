import {
    Project,
    getProjectByID,
    getCurrentProject,
    setCurrentProject,
    getProjectList
} from "./project.js";
import { Task } from "./task.js";
import "./style.css";
import domCreator from "./domCreator.js";

// Event emitter listeners for selecting projects & displaying/removing them from DOM
domCreator.eventEmitter.on("deleteProject", (project) => {
    // if the current project is displayed, remove it and replace with uncategorised
    if (getCurrentProject() === project.id) {
        setCurrentProject(1);
        domCreator.drawProjectHeader(getProjectByID(1));
        domCreator.drawTaskList(getProjectByID(1).taskList);
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
    domCreator.drawTaskList(project.taskList);
});

domCreator.eventEmitter.on("taskComplete", (task) => {
    task.completed = !task.completed;
});

domCreator.eventEmitter.on("taskDelete", (task) => {
    task.parentProject.removeTask(task);
})

domCreator.eventEmitter.on("newTask", (projectID, taskTitle, taskDesc, taskDueDate, taskPriority) => {
    let newTask = new Task(taskTitle, taskDesc, taskDueDate, true, taskPriority);
    getProjectByID(projectID).addTask(newTask);
    if (projectID === getCurrentProject()) {
        domCreator.taskContainer.appendChild(domCreator.drawTask(newTask));
    };
})

domCreator.eventEmitter.on("taskAddPopup", (project) => {
    const projectList = getProjectList();
    domCreator.drawAddTaskContainer(project, projectList);
})


// Default projects for testing purposes
// title, description, dueDate, status, priority
let defaultProject = new Project("Uncategorised");
let defaultProject2 = new Project("To-do list", "Study");
let defaultProject3 = new Project("Driving game", "Work");
let myTask = new Task("Gym session", "To work on these quads for the upcoming ski weekend", 220823, "uncompleted", "medium");
let myTask2 = new Task("Call QANTAS", "Figure out where my points are", 220902, "uncompleted", "medium");
let myTask3 = new Task("Make travel insurance claim", "get some money back from the Canada trip shenanigans", 220902, "uncompleted", "medium");
let myTask4 = new Task("Make tasks beautiful", "add rounded corners similar to sidebar buttons, drop shadows, nice spacing", false, "uncompleted", "medium");
let myTask5 = new Task("Add task button", "have to make a way to add tasks somehow aye", false, "uncompleted", "high");
let myTask6 = new Task("Move tasks between projects", "this is a bit harder - will need to remove current task from current project taskList, then add it to the new project and format appropriately", false, "uncompleted", "medium");
let myTask7 = new Task("Add footer", "add footer with my name and github link to source code", false, "uncompleted", "low");
let myTask8 = new Task("Add driving physics", "first things first, make the car feel amazing to drive", 221130, "uncompleted", "medium");
let myTask9 = new Task("Make Falls Creek road", "To work on these quads for the upcoming ski weekend", 230215, "uncompleted", "medium");
let myTask10 = new Task("Add smoke particle effects", "To work on these quads for the upcoming ski weekend", 221130, "uncompleted", "low");
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
domCreator.drawTaskList(defaultProject.taskList);