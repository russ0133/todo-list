import * as display from "./displayController.mjs";
const $TaskLists = document.querySelector('.TaskLists');

export let TaskArray = [];
TaskArray.splice(0, TaskArray.length); // Resets the array.

export class Task {
    constructor(title, description, id, date, priority, visible) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.date = date;
        this.priority = priority;
        this.visible = visible;
    }
    getTaskData() {
        console.log(this.title + this.description)
    }
    makeTaskInvisible() {
        this.visible = false;
    }
}

export function addTaskToList(task) {
    // ? This creates a new object and pushes it into an array
    let taskObject = new Task(task, "Task Description", 0, "22 / 01 / 2022", "big", true);
    let taskId = TaskArray.push(taskObject);
    taskObject.id = taskId - 1; // ! For some reason I need to do this so the id is equal to the array index
    display.updateList();
}

export function removeTaskFromList(taskId) {
    const taskSelector = document.getElementById(taskId);
    let taskObject = TaskArray[taskId];
    taskSelector.remove();
    taskObject.getTaskData();
    taskObject.makeTaskInvisible();
    console.log("removeTaskFromList");
}