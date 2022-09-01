// module that creates projects & gets/sets their properties
    //adds, removes tasks
import { Project } from "./project.js";

// module that creates todos & gets/sets their properties
import { Task } from "./task.js";

let myProject = new Project("myNewProject", "shopping")
let myTask = new Task("myTaskTitle", "myTaskDescription");
let myTask2 = new Task("secondTaskTitle", "secondTaskDesc");
myProject.addTask(myTask);
myProject.addTask(myTask2);



    

// what happens when we move a task from one project to another?
// what happens when we delete a project?
// what happens when we set a task as completed? is that controller by the task module or an external module that manipulates it?

// dom module(s)
