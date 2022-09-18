import { Project, getProjectByID } from "./project.js";
import { Task } from "./task.js";
import "./style.css";
import { eventEmitter, drawProjectNav, navContainer, projectContainer, addProjectButton } from "./domCreator.js";

// Event listener for adding new project & drawing it to DOM
// addProjectButton.addEventListener("mousedown", function () {
//     const newProjectTitle = prompt("what is the title");
//     const newProjectDescr = prompt("what is the desc");
//     const newProject = new Project(newProjectTitle, newProjectDescr);
//     drawProjectNav(newProject);
// })

// Event listeners for selecting projects & displaying/removing them from DOM
eventEmitter.on("deleteButton", (projectButton) => {
    projectButton.remove();
    getProjectByID(projectButton.id).deleteProject();
});

eventEmitter.on("projectButton", (projectButton) => {
    drawProjectContent(projectButton.id);
});

let defaultProject = new Project("Default Project", "This is a default project description");
let defaultProject2 = new Project("number 2", "ummm");
let defaultProject3 = new Project("number 3", "ummm");
let myTask = new Task("myTaskTitle", "myTaskDescription");
let myTask2 = new Task("secondTaskTitle", "secondTaskDesc");
let myTask3 = new Task("thirdTaskTitle", "thirdTaskDesc");
defaultProject.addTask(myTask);
defaultProject.addTask(myTask2);
defaultProject.addTask(myTask3);

console.log(`task list: ${defaultProject.taskList}`);


drawProjectNav(defaultProject);
drawProjectNav(defaultProject2);
drawProjectNav(defaultProject3);