import * as display from "./displayController.mjs";
import * as project from "./project.mjs";
let existingTodos = JSON.parse(localStorage.getItem('todos'));
export let taskList = existingTodos || [];

export class Task {
    constructor(title, description, id, date, priority, visible, projectid, initialized) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.date = date;
        this.priority = priority;
        this.visible = visible;
        this.projectid = projectid;
        this.initialized = initialized;
    }
    setProject(project) {
        this.projectid = project;
        console.log("setProject " + project);
    }
    getData() {
        console.log(this.title + this.description)
    }
    makeInvisible() {
        this.visible = false;
    }
}

export function loadTasks() {

    for (let i = 0; i < existingTodos.length; i++) {
        const element = existingTodos[i];
        console.log(typeof element);
        Object.setPrototypeOf(element, Task.prototype) // ? This sets the correct class prototype so you can access functions.
    }
}
loadTasks();
export function createTask(taskname, description, projectid) {
    // ? This creates a new object and pushes it into an array
    let taskObject = new Task(taskname, "-> " + description, 0, "22 / 01 / 2022", "big", true, false);
    let taskId = taskList.push(taskObject);

    taskObject.projectid = projectid;
    taskObject.initialized = false;
    taskObject.id = taskId - 1; // ! For some reason I need to do this so the id is equal to the array index

    localStorage.setItem('todos', JSON.stringify(taskList));
    display.updateList();


}

export function removeTaskFromList(taskId) {
    const taskSelector = document.getElementById(taskId);
    let taskObject = taskList[taskId];
    taskSelector.remove();
    console.log("removeTaskFromList: " + taskId);
    taskObject.makeInvisible();
    localStorage.setItem('todos', JSON.stringify(taskList));
}