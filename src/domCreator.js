import "./style.css";
console.log("loaded domcreator")
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
    { title: "All", icon: "a", link: "all" },
    { title: "Today", icon: "b", link: "today" },
    { title: "Week", icon: "c", link: "week" },
    { title: "Important", icon: "d", link: "important" },
    { title: "Completed", icon: "e", link: "completed" }
];
navArray.forEach(obj => {
    const navButton = document.createElement("div");
    navButton.id = obj.link;
    navButton.classList.add("nav-button")
    const navIcon = document.createElement("p");
    navIcon.textContent = obj.icon;
    const navText = document.createElement("h3");
    navText.textContent = obj.title;
    navButton.appendChild(navIcon);
    navButton.appendChild(navText);
    navContainer.appendChild(navButton);
})

sidebar.appendChild(navContainer);
body.appendChild(sidebar);


content.appendChild(header);
content.appendChild(body);