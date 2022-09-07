// module that creates projects & gets/sets their properties
// adds, removes tasks
import { Project } from "./project.js";

// module that creates todos & gets/sets their properties
import { Task } from "./task.js";
import "./domCreator.js";


let myProject = new Project("myNewProject", "shopping")
let myTask = new Task("myTaskTitle", "myTaskDescription");
let myTask2 = new Task("secondTaskTitle", "secondTaskDesc");
let myTask3 = new Task("thirdTaskTitle", "thirdTaskDesc");
myProject.addTask(myTask);
myProject.addTask(myTask2);
myProject.addTask(myTask3);

console.log(`task list: ${myProject.taskList}`);
    

// what happens when we move a task from one project to another?
// what happens when we delete a project?
// what happens when we set a task as completed? is that controlled by the task module or an external module that manipulates it?

// dom module(s)

// i think a module that you call upon to add projects/tasks - also adds to dom as well
// sort of a facilitator of dom + classes - so we just call that module instead of calling dom + class