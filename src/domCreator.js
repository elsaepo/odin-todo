import "./style.css";
import { EventEmitter } from "events";
const eventEmitter = new EventEmitter();
const content = document.querySelector("#content");

// Creating DOM header
const header = document.createElement("div");
header.id = "header";
const titleText = document.createElement("h1");
titleText.classList.add("title-text");
titleText.textContent = "things to do.";
header.appendChild(titleText);

const body = document.createElement("div");
body.id = "body-container";

// Creating DOM sidebar
const sidebar = document.createElement("div");
sidebar.id = "sidebar";

// Creating DOM navigation - to be put in sidebar
const drawSidebarLink = function (linkObj) {
    const navButton = document.createElement("div");
    navButton.id = linkObj.link || linkObj.id;
    navButton.classList.add("nav-button")
    const navIcon = document.createElement("i");
    linkObj.iconClasses.forEach(iconClass => navIcon.classList.add(iconClass));
    const navText = document.createElement("h3");
    navText.textContent = linkObj.title;
    navButton.appendChild(navIcon);
    navButton.appendChild(navText);
    return navButton;
}

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

// Creating DOM projects navigation
const projectContainer = document.createElement("div");
projectContainer.classList.add("nav-container");
const drawProjectNav = function (project) {
    const thisProjectButton = drawSidebarLink(project);
    const projectDeleteButton = document.createElement("div");
    projectDeleteButton.classList.add("nav-project-delete");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-xmark");
    projectDeleteButton.appendChild(deleteIcon);
    projectDeleteButton.addEventListener("mousedown", function(){
        eventEmitter.emit("deleteButton", thisProjectButton)
    })
    thisProjectButton.appendChild(projectDeleteButton);
    projectContainer.appendChild(thisProjectButton);
    return thisProjectButton;
}

const addProjectButtonContainer = document.createElement("div");
addProjectButtonContainer.classList.add("nav-container", "nav-add-project-container");
const addProjectButton = drawSidebarLink(
    { title: "Add Project", iconClasses: ["fa-solid", "fa-plus"], link: "add-project" }
);
addProjectButtonContainer.appendChild(addProjectButton);

sidebar.appendChild(navContainer);
sidebar.appendChild(horizontalRule);
sidebar.appendChild(projectContainer);
sidebar.appendChild(addProjectButtonContainer);

body.appendChild(sidebar);
content.appendChild(header);
content.appendChild(body);

export { eventEmitter, drawProjectNav, navContainer, projectContainer, addProjectButton };