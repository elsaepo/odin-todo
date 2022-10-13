import "./style.css";
import { EventEmitter } from "events";
import { getProjectByID } from "./project.js";
const { format } = require("date-fns");
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
    navButton.addEventListener("mousedown", function (event) {
        removeSort(false);
        eventEmitter.emit(`taskList${linkObj.title}`, navText);
        sidebar.classList.add("sidebar-hidden");
    })
    return navButton;
}

const drawProjectNav = function (project) {
    const thisProjectButton = drawSidebarLink(project);
    thisProjectButton.addEventListener("mousedown", function () {
        removeSort(false);
        eventEmitter.emit("projectButton", project);
        sidebar.classList.add("sidebar-hidden");
    });
    if (project.id !== 1) {
        const projectDeleteButton = document.createElement("div");
        projectDeleteButton.classList.add("nav-project-delete");
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-xmark");
        projectDeleteButton.appendChild(deleteIcon);
        thisProjectButton.appendChild(projectDeleteButton);
        projectDeleteButton.addEventListener("mousedown", function (event) {
            event.stopPropagation();
            drawDeleteProjectContainer(project, thisProjectButton);
        })
    };
    projectContainer.appendChild(thisProjectButton);
    return thisProjectButton;
}

const drawProjectHeader = function (project) {
    // this method of removing header could be cleaned up a bit?
    const currentHeader = document.querySelector(".task-container-header");
    if (currentHeader) { currentHeader.remove() };
    const taskContainerHeader = document.createElement("div");
    taskContainerHeader.classList.add("task-container-header");
    const taskContainerHeaderLeft = document.createElement("div");
    taskContainerHeaderLeft.classList.add("task-container-header-left");
    const taskContainerHeaderRight = document.createElement("div");
    taskContainerHeaderRight.classList.add("task-container-header-right");

    const taskContainerTitle = document.createElement("h2");
    taskContainerTitle.classList.add("project-header-title");
    taskContainerTitle.textContent = project.title;
    taskContainerHeaderLeft.appendChild(taskContainerTitle);
    if (project.label) {
        const taskContainerLabelBox = document.createElement("div");
        taskContainerLabelBox.classList.add("project-header-label");
        const taskContainerLabelColor = document.createElement("div");
        taskContainerLabelColor.classList.add("project-header-label-color");
        taskContainerLabelColor.style.backgroundColor = project.label.color;
        const taskContainerLabel = document.createElement("p");
        taskContainerLabel.textContent = project.label.label;
        taskContainerLabelBox.appendChild(taskContainerLabelColor);
        taskContainerLabelBox.appendChild(taskContainerLabel);
        taskContainerHeaderLeft.appendChild(taskContainerLabelBox);
    };
    const taskContainerAddButton = document.createElement("button");
    taskContainerAddButton.classList.add("add-task");
    taskContainerAddButton.textContent = "+ Task";
    taskContainerAddButton.addEventListener("mousedown", function (event) {
        eventEmitter.emit("taskAddPopup", project);
    });
    taskContainerHeaderRight.appendChild(taskContainerAddButton);
    if (project.id && project.id !== 1) {
        const projectEditBox = document.createElement("i");
        projectEditBox.classList.add("fa-solid", "fa-pen-to-square", "project-header-edit");
        projectEditBox.addEventListener("mousedown", function (event) {
            eventEmitter.emit("projectEditPopup", project, event.target.parentElement);
        });
        const projectDeleteBox = document.createElement("i");
        projectDeleteBox.classList.add("fa-solid", "fa-trash", "project-header-delete");
        projectDeleteBox.addEventListener("mousedown", function () {
            drawDeleteProjectContainer(project, document.getElementById(`${project.id}`));
        });
        taskContainerHeaderRight.appendChild(projectEditBox);
        taskContainerHeaderRight.appendChild(projectDeleteBox);
    };
    taskContainerHeader.appendChild(taskContainerHeaderLeft);
    taskContainerHeader.appendChild(taskContainerHeaderRight);
    main.insertBefore(taskContainerHeader, main.firstChild);
    return taskContainerHeader;
}

const drawTaskList = function (taskList, project) {
    while (taskContainer.firstChild) {
        taskContainer.firstChild.remove();
    };
    taskList.forEach(task => {
        taskContainer.appendChild(drawTask(task, project));
    });
}

const drawTask = function (task, project) {
    const taskBox = document.createElement("div");
    taskBox.id = task.id;
    taskBox.classList.add("task");
    const parentProjectLabel = getProjectByID(task.parentProjectID).label;
    if (parentProjectLabel){
        taskBox.style.border = `1px solid ${parentProjectLabel.color}`;
        taskBox.style.borderLeft = `6px solid ${parentProjectLabel.color}`;
        taskBox.style.paddingLeft = `12px`
    };
    const taskCompleteBox = document.createElement("div");
    taskCompleteBox.classList.add("task-container-complete");
    taskBox.appendChild(taskCompleteBox);
    if (task.completed) {
        taskCompleteBox.classList.add("task-completed");
        taskCompleteBox.parentElement.classList.add("task-box-completed");
    };
    taskCompleteBox.addEventListener("mousedown", function (event) {
        event.stopPropagation();
        eventEmitter.emit("taskComplete", task);
        taskCompleteBox.classList.toggle("task-completed");
        taskCompleteBox.parentElement.classList.toggle("task-box-completed");
    });
    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-container-title");
    taskTitle.textContent = task.title;
    const taskDescription = document.createElement("div");
    taskDescription.classList.add("task-container-description");
    taskDescription.textContent = task.description;
    taskDescription.classList.add("hide-overflow");
    const taskDate = document.createElement("div");
    taskDate.classList.add("task-container-due");
    if (task.dueDate) {
        let taskDateDay = format(task.dueDate, "do");
        let taskDateDayNumber = taskDateDay.match(/\d+/);
        let taskDateDayOrdinal = taskDateDay.match(/[a-z]+/);
        let taskDateMonth = format(task.dueDate, "LLL");
        taskDate.innerHTML = `${taskDateDayNumber}<sup>${taskDateDayOrdinal}</sup> ${taskDateMonth}`
    } else {
        taskDate.classList.add("task-date-na");
        taskDate.textContent = "N/A";
    }
    const taskPriority = document.createElement("div");
    taskPriority.classList.add("task-container-priority");
    taskPriority.classList.add(`task-priority-${task.priority}`)
    const taskPriorityText = document.createElement("p");
    taskPriorityText.textContent = task.priority.toUpperCase();
    taskPriority.appendChild(taskPriorityText);
    const taskEditBox = document.createElement("i");
    taskEditBox.classList.add("fa-solid", "fa-pen-to-square", "task-container-edit");
    taskEditBox.addEventListener("mousedown", function (event) {
        event.stopPropagation();
        eventEmitter.emit("taskEditPopup", task, project, event.target.parentElement);
    })
    const taskDeleteBox = document.createElement("i");
    taskDeleteBox.classList.add("fa-solid", "fa-trash", "task-container-delete");
    taskDeleteBox.addEventListener("mousedown", function (event) {
        event.stopPropagation();
        drawDeleteTaskContainer(task, event.target.parentElement);
    });
    taskBox.addEventListener("mousedown", function (event) {
        taskDescription.classList.toggle("hide-overflow");
        taskBox.classList.toggle("task-expanded");
    })
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
const dropdownButton = document.createElement("div");
dropdownButton.id = "dropdown";
const dropdownIcon = document.createElement("i");
dropdownIcon.classList.add("fa-solid", "fa-bars", "fa-xl");
dropdownButton.appendChild(dropdownIcon);

dropdownButton.addEventListener("mousedown", function () {
    sidebar.classList.toggle("sidebar-hidden");
})
header.appendChild(dropdownButton);
header.appendChild(titleText);

// Creating DOM body
const body = document.createElement("div");
body.id = "body-container";

// Creating DOM sidebar
const sidebar = document.createElement("div");
sidebar.id = "sidebar";
sidebar.classList.add("sidebar-hidden")

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
const drawAddProjectContainer = function(labelList){
    const addProjectInputContainer = document.createElement("form");
    addProjectInputContainer.id = "add-project-form";
    // addProjectInputContainer.classList.add("nav-hidden");
    const projectNameInputContainer = document.createElement("div");
    const projectNameInputLabel = document.createElement("label");
    projectNameInputLabel.for = "title";
    projectNameInputLabel.textContent = "Title:";
    const projectNameInputText = document.createElement("input");
    projectNameInputText.id = "project-title";
    projectNameInputText.name = "title";
    projectNameInputText.type = "text";
    projectNameInputText.maxLength = 20;
    projectNameInputText.required = true;
    projectNameInputContainer.appendChild(projectNameInputLabel);
    projectNameInputContainer.appendChild(projectNameInputText);
    const projectLabelInputContainer = document.createElement("div");
    const projectLabelInputLabel = document.createElement("label");
    projectLabelInputLabel.for = "label";
    projectLabelInputLabel.textContent = "Label:";
    const projectLabelInputSelect = document.createElement("select");
    projectLabelInputSelect.id = "project-label";
    projectLabelInputSelect.name = "label";
    labelList.forEach(label => {
        const labelOption = document.createElement("option");
        labelOption.value = label.label;
        labelOption.textContent = label.label;
        projectLabelInputSelect.appendChild(labelOption);
    });
    projectLabelInputContainer.appendChild(projectLabelInputLabel);
    projectLabelInputContainer.appendChild(projectLabelInputSelect);
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

    addProjectInputContainer.addEventListener("submit", function (event) {
        event.preventDefault();
        const projectForm = document.forms["add-project-form"];
        const formData = new FormData(projectForm);
        const projectTitle = formData.get("title");
        const projectLabelText = formData.get("label");
        let validProject = true;
        if (validProject) {
            eventEmitter.emit("newProject", projectTitle, projectLabelText);
            toggleAddProjectContainer();
            projectForm.reset();
        }
    }, false);
}



const toggleAddProjectContainer = function () {
    const currentAddProjectContainer = document.querySelector(".nav-adding-project");
    if (currentAddProjectContainer) { 
        currentAddProjectContainer.remove();
    } else {
        eventEmitter.emit("newProjectButton");
    }
    //what does this do? removing hidden form the sidebar?
    sidebar.classList.remove("sidebar-hidden");
    addProjectButton.firstChild.classList.toggle("fa-plus");
    addProjectButton.firstChild.classList.toggle("fa-minus");
    // Automatically scrolls smoothly to the bottom of the sidebar to accommodate add project container
    const smoothScrollToBottom = function () {
        sidebar.scrollTo({ top: sidebar.scrollHeight });
    };
    const stopSmoothScrollToBottom = function () {
        clearInterval(scrollInterval);
    };
    const scrollInterval = setInterval(smoothScrollToBottom, 20);
    setInterval(scrollInterval);
    setTimeout(stopSmoothScrollToBottom, 100);
}


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
    {
        title: "completed",
        display: "□"
    },
    {
        title: "task",
        display: "Task"
    },
    {
        title: "description",
        display: "Description"
    },
    {
        title: "due",
        display: "Due"
    },
    {
        title: "priority",
        display: "Priority"
    },
    {
        title: "edit",
        display: ""
    },
    {
        title: "delete",
        display: ""
    }
];

const removeSort = function (event) {
    const currentSorters = document.querySelectorAll(".task-sort-descending, .task-sort-ascending");
    currentSorters.forEach(node => {
        if (event && node !== event.target || !event) {
            node.classList.remove("task-sort-descending");
            node.classList.remove("task-sort-ascending");
        };
    })
};

sortArray.forEach(sorter => {
    const header = document.createElement("h5");
    header.classList.add(`task-sorter-${sorter.title}`);
    if (sorter.title === "completed" || sorter.title === "due" || sorter.title === "priority") {
        header.classList.add("task-sort-button");
        header.addEventListener("mousedown", function (event) {
            removeSort(event);
            let isDescending = true;
            if (!header.classList.contains("task-sort-descending")) {
                header.classList.remove("task-sort-ascending");
                header.classList.add("task-sort-descending");
            } else {
                header.classList.remove("task-sort-descending");
                header.classList.add("task-sort-ascending");
                isDescending = false;
            };
            eventEmitter.emit("sortTasks", sorter.display, taskContainer.childNodes, isDescending);
        })
    }
    header.textContent = sorter.display;
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

// Popup container draw functions
// Task Delete popup
const drawDeleteTaskContainer = function (task, taskBox) {
    const taskDeleteContainer = document.createElement("div");
    const taskDeleteScreen = createPopup(taskDeleteContainer);
    const taskDeletePrompt = createPopupPrompt("Are you sure you want to delete this task?");
    const taskDeleteYes = createButton("delete");
    const taskDeleteCancel = createButton("cancel");
    taskDeleteYes.addEventListener("mousedown", function () {
        eventEmitter.emit("taskDelete", task);
        taskDeleteScreen.remove();
        taskBox.remove();
    });
    taskDeleteCancel.addEventListener("mousedown", function () {
        taskDeleteScreen.remove();
    });
    taskDeleteContainer.appendChild(taskDeletePrompt);
    taskDeleteContainer.appendChild(taskDeleteYes);
    taskDeleteContainer.appendChild(taskDeleteCancel);
    body.appendChild(taskDeleteScreen);
}

// Project Delete popup
const drawDeleteProjectContainer = function (project, projectBox) {
    const projectDeleteContainer = document.createElement("div");
    projectDeleteContainer.classList.add("project-delete-container");
    const projectDeleteScreen = createPopup(projectDeleteContainer);
    const projectDeletePrompt = createPopupPrompt(`Are you sure you want to delete this project? This will also delete any associated tasks!`);
    const projectDeleteYes = createButton("delete");
    const projectDeleteCancel = createButton("cancel");
    projectDeleteYes.addEventListener("mousedown", function () {
        eventEmitter.emit("deleteProject", project);
        projectDeleteScreen.remove();
        projectBox.remove();
    });
    projectDeleteCancel.addEventListener("mousedown", function () {
        projectDeleteScreen.remove();
    });
    projectDeleteContainer.appendChild(projectDeletePrompt);
    projectDeleteContainer.appendChild(projectDeleteYes);
    projectDeleteContainer.appendChild(projectDeleteCancel);
    body.appendChild(projectDeleteScreen);
}

// Add Task popup
const drawAddTaskContainer = function (project, projectList, task, taskBox) {
    const createInputContainer = function () {
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("input-container");
        return inputContainer;
    }

    const taskAddContainer = document.createElement("div");
    taskAddContainer.classList.add("task-add-container");
    const taskAddScreen = createPopup(taskAddContainer);
    const taskAddPrompt = task
        ? createPopupPrompt("Editing task")
        : createPopupPrompt("Add a new task");
    const taskAddCancel = createButton("cancel");

    const addTaskInputContainer = document.createElement("form");
    addTaskInputContainer.id = "add-task-form";

    const taskNameInputContainer = createInputContainer();
    const taskNameInputLabel = document.createElement("label");
    taskNameInputLabel.for = "task-title";
    taskNameInputLabel.textContent = "Title:"
    const taskNameInputText = document.createElement("input");
    taskNameInputText.id = "task-title"
    taskNameInputText.name = "title"
    taskNameInputText.type = "text";
    taskNameInputText.maxLength = 30;
    taskNameInputText.required = true;
    taskNameInputContainer.appendChild(taskNameInputLabel);
    taskNameInputContainer.appendChild(taskNameInputText);

    const taskDescInputContainer = createInputContainer();
    const taskDescInputLabel = document.createElement("label");
    taskDescInputLabel.for = "task-desc";
    taskDescInputLabel.textContent = "Description:"
    const taskDescInputText = document.createElement("textarea");
    taskDescInputText.id = "task-desc"
    taskDescInputText.name = "desc"
    taskDescInputText.rows = 3;
    taskDescInputText.maxLength = 80;
    taskDescInputContainer.appendChild(taskDescInputLabel);
    taskDescInputContainer.appendChild(taskDescInputText);

    const taskDateInputContainer = createInputContainer();
    const taskDateInputLabel = document.createElement("label");
    taskDateInputLabel.for = "date";
    taskDateInputLabel.textContent = "Due Date:";
    const taskDateInputDate = document.createElement("input");
    taskDateInputDate.type = "date";
    taskDateInputDate.id = "task-date";
    taskDateInputDate.name = "date";
    taskDateInputContainer.appendChild(taskDateInputLabel);
    taskDateInputContainer.appendChild(taskDateInputDate);

    // Not utilising the task status property as of now
    // const taskStatusInputContainer = createInputContainer();

    const createPriorityRadio = function (priority) {
        const inputPriorityContainer = document.createElement("div");
        const inputPriority = document.createElement("input");
        inputPriority.classList.add("input-radio");
        inputPriority.type = `radio`;
        inputPriority.id = `task-priority-${priority}`;
        inputPriority.name = `task-priority`;
        inputPriority.value = `${priority}`;
        inputPriority.required = true;
        if (task) {
            if (task.priority === priority) {
                inputPriority.checked = "checked";
            }
        } else if (priority === "medium") {
            inputPriority.checked = "checked"
        };
        const inputPriorityLabel = document.createElement("label");
        inputPriorityLabel.classList.add("input-radio-label");
        inputPriorityLabel.setAttribute("for", inputPriority.id);
        inputPriorityLabel.textContent = `${priority.toUpperCase()}`;
        inputPriorityContainer.appendChild(inputPriority);
        inputPriorityContainer.appendChild(inputPriorityLabel);
        return inputPriorityContainer;
    }

    const taskPriorityInputContainer = createInputContainer();
    const taskPriorityInputLabel = document.createElement("label");
    taskPriorityInputLabel.for = "task-priority";
    taskPriorityInputLabel.textContent = "Priority:";
    const taskPriorityInputRadios = document.createElement("div");
    taskPriorityInputRadios.classList.add("input-radio-container");
    const taskPriorityInputLowContainer = createPriorityRadio("low");
    const taskPriorityInputMedContainer = createPriorityRadio("medium");
    const taskPriorityInputHighContainer = createPriorityRadio("high");
    taskPriorityInputRadios.appendChild(taskPriorityInputLowContainer);
    taskPriorityInputRadios.appendChild(taskPriorityInputMedContainer);
    taskPriorityInputRadios.appendChild(taskPriorityInputHighContainer);
    taskPriorityInputContainer.appendChild(taskPriorityInputLabel);
    taskPriorityInputContainer.appendChild(taskPriorityInputRadios);

    const taskProjectInputContainer = createInputContainer();
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
        if (task) {
            if (task.parentProjectID === proj.id) {
                projectOption.selected = "selected";
            };
        } else if (proj.id === project.id) { projectOption.selected = "selected" };
        taskProjectInputSelect.appendChild(projectOption);
    });
    taskProjectInputContainer.appendChild(taskProjectInputLabel);
    taskProjectInputContainer.appendChild(taskProjectInputSelect);

    if (task) {
        taskNameInputText.value = task.title;
        taskDescInputText.value = task.description;
        taskDateInputDate.value = task.dueDate ? format(task.dueDate, "yyyy-MM-dd") : false;
    }

    const taskSubmitInputContainer = document.createElement("div");
    taskSubmitInputContainer.classList.add("task-add-submit");
    const taskSubmitInputButton = document.createElement("button");
    taskSubmitInputButton.classList.add("popup-button", "popup-button-add");
    taskSubmitInputButton.id = "task-submit";
    taskSubmitInputButton.textContent = task
        ? "CONFIRM EDIT"
        : "ADD NEW TASK";
    taskSubmitInputContainer.appendChild(taskSubmitInputButton);
    taskSubmitInputContainer.appendChild(taskAddCancel);

    addTaskInputContainer.appendChild(taskNameInputContainer);
    addTaskInputContainer.appendChild(taskDescInputContainer);
    addTaskInputContainer.appendChild(taskDateInputContainer);
    addTaskInputContainer.appendChild(taskPriorityInputContainer);
    addTaskInputContainer.appendChild(taskProjectInputContainer);
    addTaskInputContainer.appendChild(taskSubmitInputContainer);
    taskAddContainer.appendChild(taskAddPrompt);
    taskAddContainer.appendChild(addTaskInputContainer);

    const taskAddSubmit = function (event) {
        event.preventDefault();
        const taskForm = document.forms["add-task-form"];
        const formData = new FormData(taskForm);
        const taskTitle = formData.get("title");
        const taskDesc = formData.get("desc");
        const taskDueDate = (formData.get("date"))
            ? new Date(formData.get("date"))
            : false;
        // const taskStatus = formData.get("status")
        const taskPriority = formData.get("task-priority");
        const taskProjectID = Number(formData.get("task-project"));
        let validTask = true;
        if (validTask) {
            if (task) {
                const parentProjectChange = (taskProjectID !== Number(task.parentProjectID));
                eventEmitter.emit("editTask", taskProjectID, taskTitle, taskDesc, taskDueDate, taskPriority, task);
                if (!parentProjectChange || project === undefined) {
                    taskBox.parentElement.insertBefore(drawTask(task, project), taskBox);
                };
                taskBox.remove();
                taskForm.reset();
                taskAddScreen.remove();
            } else {
                eventEmitter.emit("newTask", taskProjectID, taskTitle, taskDesc, taskDueDate, taskPriority);
                taskForm.reset();
                taskAddScreen.remove();
            }
        };
    }

    addTaskInputContainer.addEventListener("submit", taskAddSubmit);
    taskAddCancel.addEventListener("mousedown", function () {
        taskAddScreen.remove();
    });
    body.appendChild(taskAddScreen);
}

// Edit Project popup
const drawEditProjectContainer = function (project, labelList, projectBox) {
    const createInputContainer = function () {
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("input-container");
        return inputContainer;
    }
    const projectEditContainer = document.createElement("div");
    projectEditContainer.classList.add("task-add-container");
    const projectEditScreen = createPopup(projectEditContainer);
    const projectEditPrompt = createPopupPrompt("Editing project");
    const projectEditCancel = createButton("cancel");

    const projectEditInputContainer = document.createElement("form");
    projectEditInputContainer.id = "edit-project-form";

    const projectNameInputContainer = createInputContainer();
    const projectNameInputLabel = document.createElement("label");
    projectNameInputLabel.for = "project-title";
    projectNameInputLabel.textContent = "Title:"
    const projectNameInputText = document.createElement("input");
    projectNameInputText.id = "project-title"
    projectNameInputText.name = "title"
    projectNameInputText.type = "text";
    projectNameInputText.maxLength = 30;
    projectNameInputText.required = true;
    projectNameInputContainer.appendChild(projectNameInputLabel);
    projectNameInputContainer.appendChild(projectNameInputText);

    const projectLabelInputContainer = createInputContainer();
    const projectLabelInputLabel = document.createElement("label");
    projectLabelInputLabel.for = "project-label";
    projectLabelInputLabel.textContent = "Label:"
    const projectLabelInputSelect = document.createElement("select");
    projectLabelInputSelect.id = "project-label";
    projectLabelInputSelect.name = "label";
    
    labelList.forEach(label => {
        const labelOption = document.createElement("option");
        labelOption.value = label.label;
        labelOption.textContent = label.label;

        console.log(project.label.label);

        if (project.label.label === label.label){
            labelOption.selected = "selected";
        };
        projectLabelInputSelect.appendChild(labelOption);
    });
    
    projectLabelInputContainer.appendChild(projectLabelInputLabel);
    projectLabelInputContainer.appendChild(projectLabelInputSelect);

    projectNameInputText.value = project.title;
    // projectLabelInputSelect.value = project.label.label;

    const projectSubmitInputContainer = document.createElement("div");
    projectSubmitInputContainer.classList.add("task-add-submit");
    const projectSubmitInputButton = document.createElement("button");
    projectSubmitInputButton.classList.add("popup-button", "popup-button-add");
    projectSubmitInputButton.id = "project-submit";
    projectSubmitInputButton.textContent = "CONFIRM EDIT";
    projectSubmitInputContainer.appendChild(projectSubmitInputButton);
    projectSubmitInputContainer.appendChild(projectEditCancel);

    projectEditInputContainer.appendChild(projectNameInputContainer);
    projectEditInputContainer.appendChild(projectLabelInputContainer);
    projectEditInputContainer.appendChild(projectSubmitInputContainer);
    projectEditContainer.appendChild(projectEditPrompt);
    projectEditContainer.appendChild(projectEditInputContainer);

    const projectEditSubmit = function (event) {
        event.preventDefault();
        const projectForm = document.forms["edit-project-form"];
        const formData = new FormData(projectForm);
        const projectTitle = formData.get("title");
        const projectLabel = formData.get("label");
        let validProject = true;
        if (validProject) {
            eventEmitter.emit("editProject", projectTitle, projectLabel, project);
            projectForm.reset();
            projectEditScreen.remove();
            console.log(projectBox)
            projectBox.querySelector("h2").textContent = projectTitle;
            document.getElementById(`${project.id}`).querySelector("h3").textContent = projectTitle;
        }
    };

    projectEditInputContainer.addEventListener("submit", projectEditSubmit);
    projectEditCancel.addEventListener("mousedown", function () {
        projectEditScreen.remove();
    });
    body.appendChild(projectEditScreen);
}

// Appending to main and body
main.appendChild(taskSorter);
main.appendChild(taskContainer);
body.appendChild(sidebar);
body.appendChild(main);
content.appendChild(header);
content.appendChild(body);

export default { eventEmitter, drawProjectNav, drawProjectHeader, drawTaskList, drawTask, drawAddTaskContainer, drawEditProjectContainer, drawAddProjectContainer, navContainer, projectContainer, taskContainer, addProjectButton };