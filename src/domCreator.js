import "./style.css";
const content = document.querySelector("#content");

const header = document.createElement("div");
header.id = "header";
const titleText = document.createElement("h1");
titleText.classList.add("title-text");
titleText.textContent = "things to do."
header.appendChild(titleText);

const body = document.createElement("div");
body.id= "body-container";

const sidebar = document.createElement("div");
sidebar.id = "sidebar";

const navContainer = document.createElement("div");
navContainer.classList.add("nav-container");
const navArray = [
    { title: "All", iconClasses: ["fa-solid", "fa-calendar"], link: "all" },
    { title: "Today", iconClasses: ["fa-solid", "fa-calendar-day"], link: "today" },
    { title: "Week", iconClasses: ["fa-solid", "fa-calendar-week"], link: "week" },
    { title: "Important", iconClasses: ["fa-solid", "fa-circle-exclamation"], link: "important" },
    { title: "Completed", iconClasses: ["fa-solid", "fa-calendar-check"], link: "completed" }
];
const drawSidebarLink = function(linkObj){
    const navButton = document.createElement("div");
    navButton.id = linkObj.link;
    navButton.classList.add("nav-button")
    const navIcon = document.createElement("i");
    linkObj.iconClasses.forEach(iconClass => navIcon.classList.add(iconClass));
    const navText = document.createElement("h3");
    navText.textContent = linkObj.title;
    navButton.appendChild(navIcon);
    navButton.appendChild(navText);
    return navButton;
}
navArray.forEach(obj => {
    let thisButton = drawSidebarLink(obj);
    navContainer.appendChild(thisButton);
});

const horizontalRule = document.createElement("hr");

sidebar.appendChild(navContainer);
sidebar.appendChild(horizontalRule);

const projectContainer = document.createElement("div");
projectContainer.classList.add("nav-container");
//const projectArray = [];
const drawProjectNav = function(project){
    let thisProjectButton = drawSidebarLink(project);
    projectContainer.appendChild(thisProjectButton);
}

sidebar.appendChild(projectContainer);


body.appendChild(sidebar);

content.appendChild(header);
content.appendChild(body);

export { drawProjectNav };