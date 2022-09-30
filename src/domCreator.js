import "./style.css";
import { EventEmitter } from "events";
const eventEmitter = new EventEmitter();
const content = document.querySelector("#content");


// Functions for drawing elements to window
const drawSidebarLink = function (linkObj) {
    const navButton = document.createElement("div");
    navButton.id = linkObj.link || linkObj.id;
    navButton.classList.add("nav-button");
    const navIcon = document.createElement("i");
    linkObj.iconClasses.forEach(iconClass => navIcon.classList.add(iconClass));
    const navText = document.createElement("h3");
    navText.textContent = linkObj.title;
    navButton.appendChild(navIcon);
    navButton.appendChild(navText);
    return navButton;
}

const drawProjectNav = function (project) {
    const thisProjectButton = drawSidebarLink(project);
    thisProjectButton.addEventListener("mousedown", function() {
        eventEmitter.emit("projectButton", project);
    })
    if (project.id !== 1){
        const projectDeleteButton = document.createElement("div");
        projectDeleteButton.classList.add("nav-project-delete");
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-xmark");
        projectDeleteButton.appendChild(deleteIcon);
        thisProjectButton.appendChild(projectDeleteButton);
        projectDeleteButton.addEventListener("mousedown", function(event){
            event.stopPropagation();
            projectDeleteScreen.classList.remove("task-delete-hidden");
            projectDeleteYes.addEventListener("mousedown", deleteProjectSubmit)
        })
        projectDeleteCancel.addEventListener("mousedown", function(){
            projectDeleteYes.removeEventListener("mousedown", deleteProjectSubmit);
            projectDeleteScreen.classList.add("task-delete-hidden");
        })
    }
    const deleteProjectSubmit = function(){
        projectDeleteScreen.classList.add("task-delete-hidden");
        eventEmitter.emit("deleteProject", project);
        thisProjectButton.remove();
    }
    projectContainer.appendChild(thisProjectButton);
    return thisProjectButton;
}

const taskAddSubmit = function (event) {
    event.preventDefault();
    const taskForm = document.forms["add-task-form"];
    const formData = new FormData(taskForm);
    const taskTitle = formData.get("title");
    const taskDesc = formData.get("desc");
    // const taskDueDate = formData.get("date");
    // const taskStatus = formData.get("status");
    // const taskPriority = formData.get("priority");
    // const taskProject = formData.get("project");
    const projectID = 1;
    let validTask = true;
    if (validTask) {
        eventEmitter.emit("newTask", projectID, taskTitle, taskDesc);
        taskForm.reset();
    }
    taskAddScreen.classList.add("task-delete-hidden");
}

const drawProjectInfo = function (project) {
    addTaskInputContainer.removeEventListener("submit", taskAddSubmit);
    taskContainerTitle.textContent = project.title;
    taskContainerLabel.textContent = project.label;
    taskContainerAddButton.addEventListener("mousedown", function(event){
        taskAddScreen.classList.remove("task-delete-hidden");
    })
    taskAddCancel.addEventListener("mousedown", function(){
        taskAddScreen.classList.add("task-delete-hidden");
    })
    
    addTaskInputContainer.addEventListener("submit", taskAddSubmit);
    // this._id = getNewID();
    // this._title = title;
    // this._description = description;
    // this._dueDate = dueDate;
    // this._status = status;
    // this._priority = priority;
    // this._completed = false;
    // this._parentProject;
}

const drawTaskList = function (taskList) {
    while (taskContainer.firstChild) {
        taskContainer.firstChild.remove();
    };
    taskList.forEach(task => {
        taskContainer.appendChild(drawTask(task));
    });
    main.appendChild(taskContainer);
}

const drawTask = function (task) {
    const taskBox = document.createElement("div");
    taskBox.classList.add("task");
    const taskCompleteBox = document.createElement("div");
    taskCompleteBox.classList.add("task-complete-box");
    taskBox.appendChild(taskCompleteBox);
    if(task.completed){
        taskCompleteBox.classList.add("task-completed");
        taskCompleteBox.parentElement.classList.add("task-box-completed");
    };
    taskCompleteBox.addEventListener("mousedown", function(){
        eventEmitter.emit("taskComplete", task);
        taskCompleteBox.classList.toggle("task-completed");
        taskCompleteBox.parentElement.classList.toggle("task-box-completed");
    });
    const taskTitle = document.createElement("div");
    taskTitle.textContent = task.title;
    const taskDescription = document.createElement("div");
    taskDescription.textContent = task.description;
    const taskDate = document.createElement("div");
    taskDate.textContent = task.dueDate;
    const taskPriority = document.createElement("div");
    taskPriority.textContent = task.priority;
    const taskEditBox = document.createElement("i");
    taskEditBox.classList.add("fa-solid", "fa-pen-to-square", "task-edit");
    const taskDeleteBox = document.createElement("i");
    taskDeleteBox.classList.add("fa-solid", "fa-trash", "task-delete");
    taskDeleteBox.addEventListener("mousedown", function(){
        taskDeleteScreen.classList.remove("task-delete-hidden");
        taskDeleteYes.addEventListener("mousedown", deleteTaskSubmit)
    })
    taskDeleteCancel.addEventListener("mousedown", function(){
        taskDeleteYes.removeEventListener("mousedown", deleteTaskSubmit);
        taskDeleteScreen.classList.add("task-delete-hidden");
    })
    const deleteTaskSubmit = function(){
        eventEmitter.emit("taskDelete", task);
        taskDeleteScreen.classList.add("task-delete-hidden");
        taskDeleteBox.parentElement.remove();
    }
    taskBox.appendChild(taskTitle);
    taskBox.appendChild(taskDescription);
    taskBox.appendChild(taskDate);
    taskBox.appendChild(taskPriority);
    taskBox.appendChild(taskEditBox);
    taskBox.appendChild(taskDeleteBox);
    return taskBox;
}

// Creating DOM header
const header = document.createElement("div");
header.id = "header";
const titleText = document.createElement("h1");
titleText.classList.add("title-text");
titleText.textContent = "things to do.";
header.appendChild(titleText);

// Creating DOM body
const body = document.createElement("div");
body.id = "body-container";

// Creating DOM sidebar
const sidebar = document.createElement("div");
sidebar.id = "sidebar";

// DOM sidebar navigation
const navContainer = document.createElement("div");
navContainer.classList.add("nav-container");
const navArray = [
    { title: "All", iconClasses: ["fa-solid", "fa-calendar"], link: "all" },
    { title: "Today", iconClasses: ["fa-solid", "fa-calendar-day"], link: "today" },
    { title: "Week", iconClasses: ["fa-solid", "fa-calendar-week"], link: "week" },
    { title: "Important", iconClasses: ["fa-solid", "fa-circle-exclamation"], link: "important" },
    { title: "Completed", iconClasses: ["fa-solid", "fa-calendar-check"], link: "completed" }
];
navArray.forEach(button => {
    const thisNavButton = drawSidebarLink(button);
    navContainer.appendChild(thisNavButton);
});
const horizontalRule = document.createElement("hr");

// DOM sidebar projects list
const projectContainer = document.createElement("div");
projectContainer.classList.add("nav-container");
const addProjectButtonContainer = document.createElement("div");
addProjectButtonContainer.classList.add("nav-container", "nav-add-project-container");
const addProjectButton = drawSidebarLink(
    { title: "Add Project", iconClasses: ["fa-solid", "fa-plus"], link: "add-project" }
);
addProjectButtonContainer.appendChild(addProjectButton);

// Add Project container
const addProjectInputContainer = document.createElement("form");
addProjectInputContainer.id = "add-project-form";
addProjectInputContainer.classList.add("nav-hidden");

const projectNameInputContainer = document.createElement("div");
const projectNameInputLabel = document.createElement("label");
projectNameInputLabel.for = "title";
projectNameInputLabel.textContent = "Title:"
const projectNameInputText = document.createElement("input");
projectNameInputText.id = "project-title"
projectNameInputText.name = "title"
projectNameInputText.type = "text";
projectNameInputText.maxLength = 15;
projectNameInputText.required = true;
projectNameInputContainer.appendChild(projectNameInputLabel);
projectNameInputContainer.appendChild(projectNameInputText);
const projectLabelInputContainer = document.createElement("div");
const projectLabelInputLabel = document.createElement("label");
projectLabelInputLabel.for = "label";
projectLabelInputLabel.textContent = "Label:"
const projectLabelInputText = document.createElement("input");
projectLabelInputText.id = "project-label"
projectLabelInputText.name = "label"
projectLabelInputText.type = "text";
projectLabelInputText.maxLength = 80;
projectLabelInputContainer.appendChild(projectLabelInputLabel);
projectLabelInputContainer.appendChild(projectLabelInputText);
const projectSubmitInputContainer = document.createElement("div");
const projectSubmitInputButton = document.createElement("button");
projectSubmitInputButton.id = "project-submit";
projectSubmitInputButton.textContent = "ADD NEW PROJECT";
projectSubmitInputContainer.appendChild(projectSubmitInputButton);

addProjectInputContainer.appendChild(projectNameInputContainer);
addProjectInputContainer.appendChild(projectLabelInputContainer);
addProjectInputContainer.appendChild(projectSubmitInputContainer);
addProjectInputContainer.classList.add("nav-adding-project");

addProjectButtonContainer.insertBefore(addProjectInputContainer, addProjectButtonContainer.firstChild);

const toggleAddProjectContainer = function () {
    addProjectInputContainer.classList.toggle("nav-hidden");
    addProjectButton.firstChild.classList.toggle("fa-plus");
    addProjectButton.firstChild.classList.toggle("fa-minus");
}

addProjectInputContainer.addEventListener("submit", function (event) {
    event.preventDefault();
    const projectForm = document.forms["add-project-form"];
    const formData = new FormData(projectForm);
    const projectTitle = formData.get("title");
    const projectLabel = formData.get("label");
    let validProject = true;
    if (validProject) {
        eventEmitter.emit("newProject", projectTitle, projectLabel);
        toggleAddProjectContainer();
        projectForm.reset();
    }
}, false);
addProjectButton.addEventListener("mousedown", toggleAddProjectContainer);

sidebar.appendChild(navContainer);
sidebar.appendChild(horizontalRule);
sidebar.appendChild(projectContainer);
sidebar.appendChild(addProjectButtonContainer);

// Creating DOM main
const main = document.createElement("main");
main.id = "main";

// Creating DOM Task List
const taskContainerHeader = document.createElement("div");
taskContainerHeader.classList.add("task-container-header");
const taskContainerTitle = document.createElement("h2");
taskContainerTitle.textContent = "Project Name";
const taskContainerLabel = document.createElement("p");
taskContainerLabel.textContent = "Label";
const taskContainerAddButton = document.createElement("button");
taskContainerAddButton.classList.add("add-task")
taskContainerAddButton.textContent = "+ Task";
taskContainerHeader.appendChild(taskContainerTitle);
taskContainerHeader.appendChild(taskContainerLabel);
taskContainerHeader.appendChild(taskContainerAddButton);

const taskSorter = document.createElement("div");
taskSorter.classList.add("task-sorter");
const sortArray = [
    "",
    "Task",
    "Description",
    "Due Date",
    "Priority",
    "",
    ""
]
sortArray.forEach(sorter => {
    const header = document.createElement("h5");
    header.textContent = sorter;
    taskSorter.appendChild(header);
})

const taskContainer = document.createElement("div");
taskContainer.classList.add("task-container");

// Task delete popup
const taskDeleteScreen = document.createElement("div");
taskDeleteScreen.classList.add("task-delete-screen", "task-delete-hidden");
const taskDeleteFade = document.createElement("div");
taskDeleteFade.classList.add("task-delete-fade");
const taskDeleteContainer = document.createElement("div");
taskDeleteContainer.classList.add("task-delete-container");
taskDeleteScreen.appendChild(taskDeleteFade);
taskDeleteScreen.appendChild(taskDeleteContainer);
const taskDeletePrompt = document.createElement("p");
taskDeletePrompt.classList.add("task-delete-prompt")
taskDeletePrompt.textContent = "Are you sure you want to delete this task?";
const taskDeleteYes = document.createElement("button");
taskDeleteYes.classList.add("task-delete-button", "task-delete-button-yes");
taskDeleteYes.textContent = "DELETE";
const taskDeleteCancel = document.createElement("button");
taskDeleteCancel.classList.add("task-delete-button", "task-delete-button-cancel");
taskDeleteCancel.textContent = "CANCEL";
taskDeleteContainer.appendChild(taskDeletePrompt);
taskDeleteContainer.appendChild(taskDeleteYes);
taskDeleteContainer.appendChild(taskDeleteCancel);

// Project delete popup
const projectDeleteScreen = taskDeleteScreen.cloneNode();
const projectDeleteFade = taskDeleteFade.cloneNode();
const projectDeleteContainer = document.createElement("div");
projectDeleteContainer.classList.add("task-delete-container", "project-delete-container");
projectDeleteScreen.appendChild(projectDeleteFade);
projectDeleteScreen.appendChild(projectDeleteContainer);
const projectDeletePrompt = taskDeletePrompt.cloneNode();
projectDeletePrompt.textContent = "Are you sure you want to delete this project? This will also delete any associated tasks!";
const projectDeleteYes = taskDeleteYes.cloneNode();
projectDeleteYes.textContent = "DELETE";
const projectDeleteCancel = taskDeleteCancel.cloneNode();
projectDeleteCancel.textContent = "CANCEL";
projectDeleteContainer.appendChild(projectDeletePrompt);
projectDeleteContainer.appendChild(projectDeleteYes);
projectDeleteContainer.appendChild(projectDeleteCancel);

// Task add popup
const taskAddScreen = taskDeleteScreen.cloneNode();
const taskAddFade = taskDeleteFade.cloneNode();
const taskAddContainer = document.createElement("div");
taskAddContainer.classList.add("task-delete-container", "task-add-container");
taskAddScreen.appendChild(taskAddFade);
taskAddScreen.appendChild(taskAddContainer);
const taskAddPrompt = taskDeletePrompt.cloneNode();
taskAddPrompt.textContent = "Add a new task";
const taskAddYes = taskDeleteYes.cloneNode();
taskAddYes.textContent = "ADD";
const taskAddCancel = taskDeleteCancel.cloneNode();
taskAddCancel.textContent = "CANCEL";

// Add Task container
let addTaskInputContainer = document.createElement("form");
addTaskInputContainer.id = "add-task-form";

const taskNameInputContainer = document.createElement("div");
const taskNameInputLabel = document.createElement("label");
taskNameInputLabel.for = "title";
taskNameInputLabel.textContent = "Title:"
const taskNameInputText = document.createElement("input");
taskNameInputText.id = "task-title"
taskNameInputText.name = "title"
taskNameInputText.type = "text";
taskNameInputText.maxLength = 15;
taskNameInputText.required = true;
taskNameInputContainer.appendChild(taskNameInputLabel);
taskNameInputContainer.appendChild(taskNameInputText);
const taskDescInputContainer = document.createElement("div");
const taskDescInputLabel = document.createElement("label");
taskDescInputLabel.for = "desc";
taskDescInputLabel.textContent = "Description:"
const taskDescInputText = document.createElement("input");
taskDescInputText.id = "task-desc"
taskDescInputText.name = "desc"
taskDescInputText.type = "text";
taskDescInputText.maxLength = 80;
taskDescInputContainer.appendChild(taskDescInputLabel);
taskDescInputContainer.appendChild(taskDescInputText);
const taskSubmitInputContainer = document.createElement("div");
const taskSubmitInputButton = document.createElement("button");
taskSubmitInputButton.id = "task-submit";
taskSubmitInputButton.textContent = "ADD NEW TASK";
taskSubmitInputContainer.appendChild(taskSubmitInputButton);

addTaskInputContainer.appendChild(taskNameInputContainer);
addTaskInputContainer.appendChild(taskDescInputContainer);
addTaskInputContainer.appendChild(taskSubmitInputContainer);
addTaskInputContainer.classList.add("nav-adding-task");

taskAddContainer.appendChild(taskAddPrompt);
taskAddContainer.appendChild(addTaskInputContainer);
taskAddContainer.appendChild(taskAddYes);
taskAddContainer.appendChild(taskAddCancel);

// Appending to main and body
main.appendChild(taskContainerHeader);
main.appendChild(taskSorter);
main.appendChild(taskContainer);

body.appendChild(sidebar);
body.appendChild(main);
body.appendChild(taskDeleteScreen);
body.appendChild(projectDeleteScreen);
body.appendChild(taskAddScreen);
content.appendChild(header);
content.appendChild(body);





export default { eventEmitter, drawProjectNav, drawProjectInfo, drawTaskList, drawTask, navContainer, projectContainer, taskContainer, addProjectButton };