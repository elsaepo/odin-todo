# To-Do List
A To-Do list app as part of The Odin Project. Created with Css & JavaScript, utilising webpack and the date-fns npm package.

Part of The Odin Project's [curriculum](https://www.theodinproject.com/lessons/node-path-javascript-todo-list).

Created by Carl Madsen, 2022.

**[Live page!](https://elsaepo.github.io/odin-todo/)**

## Functionality

* **Projects** - Add, delete or projects for the to-do list, which will be displayed in the sidebar.
* **Labels** - Add and edit labels for projects, of which you can select the colour - this colour is displayed on the tasks so you can easily see what category the task is a part of (work, study, life admin, etc.).
* **Tasks** - Create tasks and attach them to projects. Tasks can have a title, description, due date, priority and completed status. Tasks are fully editable and can be moved between projects.

## Contributions

* [Google Fonts](https://fonts.google.com/)
* [Font Awesome](https://fontawesome.com/) is my go-to icon library for small apps like these. Really easy and fast to insert common icons into websites.

## Learning outcomes & challenges

* **Flexible code** became very important very quickly, as I decided to add new features along the way. For example, when implementing **localStorage**, I needed a way to recreate the project and task objects from the respective class constructors. Initially, the classes just took arguments seperate by commas, which was fine at first but became hard to remember the order and prone to error. I refactored the classes so that they took an object as an argument, and then created the project/task based on that object's properties, if they existed. This meant I didn't have to worry about the order of the properties, and could simply ignore them if unused.
* Implementing **npm modules**, specifically the date-fns module, was a great help. Really easy to see how important this is, and getting experience in navigating various documentation.
* A lot of time and thinking to make my code **DRY**. I'm not saying it's perfect, but a lot of mental energy was spent here. Little things like turning the form creation into functions, creating all the buttons from functions, etc. really helped to clean up the code and make it a lot easier to incorporate new features.
* **UX/UI design** was something I've done along the way in my previous projects, but it was much more important here - not just for the user, but also in the codebase. The way the user interacts with the site really informed a lot of how I set up the code. For example, the projects have a taskList array, which contains all of the task objects for the site. Wanting the user to be able to edit the task and subsequently edit the project it was a part of required me to store the parent project in the task - which quickly occured to me that this creates an infinitely deep nest of objects. To fix this, instead of storing the parent project in the task, I just stored the parent project's ID, which can be used in the getProjectFromID() function.
* This is the first time I've created a **responsive sidebar**, which save for a bit of CSS jiggling, was much simpler than I was expecting. Great feeling.
* Implementing **dark mode** functionality made it clear how important clean CSS is, as I spent some time refactoring styles to make it work - something that, if I had thought of it initially, would have been a lot quicker. I also made the app detect the user's default browser settings, but not override their preference if they had switched to light mode on the app.

## Future Development

* Refactoring code - this is the biggest project I've done to date, and I've added a lot of functionality to the app. Along the way, the code has gotten more and more complex - I've refactored a few modules along the way, but a lot more could be done to clean it up and make it more readable and modular.
* Login system - I've started using this app in my day to day life, and as such I've felt the need to be able to sync my to-do list between various devices. As I progress through The Odin Project, I'll learn how to make a login system, which I'll want to insert into this app.