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
    thisProjectButton.addEventListener("mousedown", function () {
        eventEmitter.emit("projectButton", project);
    })
    if (project.id !== 1) {
        const projectDeleteButton = document.createElement("div");
        projectDeleteButton.classList.add("nav-project-delete");
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-xmark");
        projectDeleteButton.appendChild(deleteIcon);
        thisProjectButton.appendChild(projectDeleteButton);
        projectDeleteButton.addEventListener("mousedown", function (event) {
            event.stopPropagation();
            projectDeleteScreen.classList.remove("popup-hidden");
            projectDeleteYes.addEventListener("mousedown", deleteProjectSubmit)
        })
        projectDeleteCancel.addEventListener("mousedown", function () {
            projectDeleteYes.removeEventListener("mousedown", deleteProjectSubmit);
            projectDeleteScreen.classList.add("popup-hidden");
        })
    }
    const deleteProjectSubmit = function () {
        projectDeleteScreen.classList.add("popup-hidden");
        eventEmitter.emit("deleteProject", project);
        thisProjectButton.remove();
    }
    projectContainer.appendChild(thisProjectButton);
    return thisProjectButton;
}



const drawProjectHeader = function (project) {

    // this method of removing header could be cleaned up quite a bit

    const currentHeader = document.querySelector(".task-container-header");
    if (currentHeader) { currentHeader.remove() };

    const taskContainerHeader = document.createElement("div");
    taskContainerHeader.classList.add("task-container-header");
    const taskContainerTitle = document.createElement("h2");
    taskContainerTitle.textContent = project.title;
    const taskContainerLabel = document.createElement("p");
    taskContainerLabel.textContent = project.label;
    let taskContainerAddButton = document.createElement("button");
    taskContainerAddButton.classList.add("add-task")
    taskContainerAddButton.textContent = "+ Task";
    taskContainerHeader.appendChild(taskContainerTitle);
    taskContainerHeader.appendChild(taskContainerLabel);
    taskContainerHeader.appendChild(taskContainerAddButton);
    main.insertBefore(taskContainerHeader, main.firstChild);


    // taskContainerTitle.textContent = project.title;
    // taskContainerLabel.textContent = project.label;
    // taskContainerAddButton = taskContainerAddButton.cloneNode();

    // when i click the add button here, only then should it create the DOM elements
    taskContainerAddButton.addEventListener("mousedown", function (event) {
        eventEmitter.emit("taskAddPopup", project);
    })



    // this._id = getNewID();
    // this._title = title;
    // this._description = description;
    // this._dueDate = dueDate;
    // this._status = status;
    // this._priority = priority;
    // this._completed = false;
    // this._parentProject;

    return taskContainerHeader;
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
    if (task.completed) {
        taskCompleteBox.classList.add("task-completed");
        taskCompleteBox.parentElement.classList.add("task-box-completed");
    };
    taskCompleteBox.addEventListener("mousedown", function () {
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
    taskDeleteBox.addEventListener("mousedown", function () {
        taskDeleteScreen.classList.remove("popup-hidden");
        taskDeleteYes.addEventListener("mousedown", deleteTaskSubmit)
    })
    taskDeleteCancel.addEventListener("mousedown", function () {
        taskDeleteYes.removeEventListener("mousedown", deleteTaskSubmit);
        taskDeleteScreen.classList.add("popup-hidden");
    })
    const deleteTaskSubmit = function () {
        eventEmitter.emit("taskDelete", task);
        taskDeleteScreen.classList.add("popup-hidden");
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

const createPopup = function (container) {
    const popupScreen = document.createElement("div");
    popupScreen.classList.add("popup-screen", "popup-hidden");
    const popupFade = document.createElement("div");
    popupFade.classList.add("popup-fade");
    container.classList.add("popup-container");
    popupScreen.appendChild(popupFade);
    popupScreen.appendChild(container);
    return popupScreen;
}

const createPopupPrompt = function (prompt) {
    const popupPrompt = document.createElement("p");
    popupPrompt.classList.add("popup-prompt");
    popupPrompt.textContent = prompt;
    return popupPrompt;
}

const createButton = function (type) {
    const button = document.createElement("button");
    button.classList.add(`popup-button`, `popup-button-${type}`);
    button.textContent = `${type.toUpperCase()}`;
    return button;
}

// Task delete popup
const taskDeleteContainer = document.createElement("div");
const taskDeleteScreen = createPopup(taskDeleteContainer);
const taskDeletePrompt = createPopupPrompt("Are you sure you want to delete this task?");
const taskDeleteYes = createButton("delete");
const taskDeleteCancel = createButton("cancel");
taskDeleteContainer.appendChild(taskDeletePrompt);
taskDeleteContainer.appendChild(taskDeleteYes);
taskDeleteContainer.appendChild(taskDeleteCancel);

// Project delete popup
const projectDeleteContainer = document.createElement("div");
projectDeleteContainer.classList.add("project-delete-container");
const projectDeleteScreen = createPopup(projectDeleteContainer);
const projectDeletePrompt = createPopupPrompt("Are you sure you want to delete this project? This will also delete any associated tasks!");
const projectDeleteYes = createButton("delete");
const projectDeleteCancel = createButton("cancel");
projectDeleteContainer.appendChild(projectDeletePrompt);
projectDeleteContainer.appendChild(projectDeleteYes);
projectDeleteContainer.appendChild(projectDeleteCancel);

// Add Task container
const drawAddTaskContainer = function (project, projectList, task) {
    const taskAddContainer = document.createElement("div");
    taskAddContainer.classList.add("task-add-container");
    const taskAddScreen = createPopup(taskAddContainer);
    const taskAddPrompt = createPopupPrompt("Add a new task");
    const taskAddCancel = createButton("cancel");

    const addTaskInputContainer = document.createElement("form");
    addTaskInputContainer.id = "add-task-form";

    const taskNameInputContainer = document.createElement("div");
    const taskNameInputLabel = document.createElement("label");
    taskNameInputLabel.for = "task-title";
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
    taskDescInputLabel.for = "task-desc";
    taskDescInputLabel.textContent = "Description:"
    const taskDescInputText = document.createElement("input");
    taskDescInputText.id = "task-desc"
    taskDescInputText.name = "desc"
    taskDescInputText.type = "text";
    taskDescInputText.maxLength = 80;
    taskDescInputContainer.appendChild(taskDescInputLabel);
    taskDescInputContainer.appendChild(taskDescInputText);

    const taskDateInputContainer = document.createElement("div");
    const taskDateInputLabel = document.createElement("label");
    taskDateInputLabel.for = "date";
    taskDateInputLabel.textContent = "Due Date:";
    const taskDateInputDate = document.createElement("input");
    taskDateInputDate.type = "date";
    taskDateInputDate.id = "task-date";
    taskDateInputDate.name = "date";
    taskDateInputContainer.appendChild(taskDateInputLabel);
    taskDateInputContainer.appendChild(taskDateInputDate);

    const taskStatusInputContainer = document.createElement("div");

    const taskPriorityInputContainer = document.createElement("div");
    const taskPriorityInputLowContainer = document.createElement("div");
    const taskPriorityInputLow = document.createElement("input");
    taskPriorityInputLow.type = "radio";
    taskPriorityInputLow.id = "task-priority-low";
    taskPriorityInputLow.name = "task-priority";
    taskPriorityInputLow.value = "low";
    taskPriorityInputLow.checked = "true";
    const taskPriorityInputLowLabel = document.createElement("label");
    taskPriorityInputLowLabel.for = "task-priority-low";
    taskPriorityInputLowLabel.textContent = "LOW";
    taskPriorityInputLowContainer.appendChild(taskPriorityInputLow);
    taskPriorityInputLowContainer.appendChild(taskPriorityInputLowLabel);
    const taskPriorityInputMedContainer = document.createElement("div");
    const taskPriorityInputMed = document.createElement("input");
    taskPriorityInputMed.type = "radio";
    taskPriorityInputMed.id = "task-priority-med";
    taskPriorityInputMed.name = "task-priority";
    taskPriorityInputMed.value = "med";
    taskPriorityInputMed.checked = "true";
    const taskPriorityInputMedLabel = document.createElement("label");
    taskPriorityInputMedLabel.for = "task-priority-med";
    taskPriorityInputMedLabel.textContent = "MEDIUM";
    taskPriorityInputMedContainer.appendChild(taskPriorityInputMed);
    taskPriorityInputMedContainer.appendChild(taskPriorityInputMedLabel);
    const taskPriorityInputHighContainer = document.createElement("div");
    const taskPriorityInputHigh = document.createElement("input");
    taskPriorityInputHigh.type = "radio";
    taskPriorityInputHigh.id = "task-priority-high";
    taskPriorityInputHigh.name = "task-priority";
    taskPriorityInputHigh.value = "high";
    taskPriorityInputHigh.checked = "true";
    const taskPriorityInputHighLabel = document.createElement("label");
    taskPriorityInputHighLabel.for = "task-priority-high";
    taskPriorityInputHighLabel.textContent = "HIGH";
    taskPriorityInputHighContainer.appendChild(taskPriorityInputHigh);
    taskPriorityInputHighContainer.appendChild(taskPriorityInputHighLabel);
    taskPriorityInputContainer.appendChild(taskPriorityInputLowContainer);
    taskPriorityInputContainer.appendChild(taskPriorityInputMedContainer);
    taskPriorityInputContainer.appendChild(taskPriorityInputHighContainer);

    const taskProjectInputContainer = document.createElement("div");
    const taskProjectInputLabel = document.createElement("label");
    taskProjectInputLabel.for = "task-project";
    taskProjectInputLabel.textContent = "Project:";
    const taskProjectInputSelect = document.createElement("select");
    taskProjectInputSelect.name = "task-project";
    taskProjectInputSelect.id = "task-project";

    projectList.forEach(proj => {
        const projectOption = document.createElement("option");
        projectOption.value = proj.id;
        projectOption.textContent = proj.title;
        if (proj.id === project.id) { projectOption.selected = "selected" };
        taskProjectInputSelect.appendChild(projectOption);
    })

    taskProjectInputContainer.appendChild(taskProjectInputLabel);
    taskProjectInputContainer.appendChild(taskProjectInputSelect);

    const taskSubmitInputContainer = document.createElement("div");
    const taskSubmitInputButton = document.createElement("button");
    taskSubmitInputButton.classList.add("popup-button", "popup-button-add");
    taskSubmitInputButton.id = "task-submit";
    taskSubmitInputButton.textContent = "ADD NEW TASK";
    taskSubmitInputContainer.appendChild(taskSubmitInputButton);
    taskSubmitInputContainer.appendChild(taskAddCancel);

    addTaskInputContainer.appendChild(taskNameInputContainer);
    addTaskInputContainer.appendChild(taskDescInputContainer);
    addTaskInputContainer.appendChild(taskDateInputContainer);
    addTaskInputContainer.appendChild(taskPriorityInputContainer);
    addTaskInputContainer.appendChild(taskProjectInputContainer);
    addTaskInputContainer.appendChild(taskSubmitInputContainer);
    // addTaskInputContainer.classList.add("nav-adding-task");

    taskAddContainer.appendChild(taskAddPrompt);
    taskAddContainer.appendChild(addTaskInputContainer);

    const taskAddSubmit = function (event) {
        event.preventDefault();
        const taskForm = document.forms["add-task-form"];
        const formData = new FormData(taskForm);
        const taskTitle = formData.get("title");
        const taskDesc = formData.get("desc");
        const taskDueDate = formData.get("date");
        // const taskStatus = formData.get("status");
        const taskPriority = formData.get("task-priority");
        const taskProjectID = formData.get("task-project");
        let validTask = true;
        if (validTask) {
            eventEmitter.emit("newTask", Number(taskProjectID), taskTitle, taskDesc, taskDueDate, taskPriority);
            taskForm.reset();
        }
        taskAddScreen.remove();
    }

    addTaskInputContainer.addEventListener("submit", taskAddSubmit);
    taskAddCancel.addEventListener("mousedown", function () {
        taskAddScreen.remove();
    });
    taskAddScreen.classList.remove("popup-hidden");
    body.appendChild(taskAddScreen);


}


// Appending to main and body
// main.appendChild(taskContainerHeader);
main.appendChild(taskSorter);
main.appendChild(taskContainer);

body.appendChild(sidebar);
body.appendChild(main);
body.appendChild(taskDeleteScreen);
body.appendChild(projectDeleteScreen);

content.appendChild(header);
content.appendChild(body);





export default { eventEmitter, drawProjectNav, drawProjectHeader, drawTaskList, drawTask, drawAddTaskContainer, navContainer, projectContainer, taskContainer, addProjectButton };