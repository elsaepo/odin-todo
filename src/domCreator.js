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
body.appendChild(sidebar);


content.appendChild(header);
content.appendChild(body);