import { Project } from "./project.js";
import { Task } from "./task.js";

let myProject = new Project("myNewProject", "shopping")
let myTask = new Task("myTaskTitle", "myTaskDescription");
let myTask2 = new Task("secondTaskTitle", "secondTaskDesc");
console.log(`my project: ${myProject}`);
console.log(`my project task list: ${myProject.taskList}`);
console.log(`my task: ${myTask}`);
console.log(`my task title: ${myTask.title}`);
myProject.addTask(myTask);
myProject.addTask(myTask2);
console.log(`my project task list: ${myProject.taskList[0]}`);

// module that creates todos & gets/sets their properties
// module that creates projects & gets/sets their properties


// module that adds or removes todos from projects (controls todo management)

// dom module(s)