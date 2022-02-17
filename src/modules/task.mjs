import * as display from "./displayController.mjs";
import * as project from "./project.mjs";

export let taskList = [];
taskList.splice(0, taskList.length); // Resets the array.

export class Task {
    constructor(title, description, id, date, priority, visible, projectid) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.date = date;
        this.priority = priority;
        this.visible = visible;
        this.projectid = projectid;
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

export function createTask(taskname, description, projectid) {
    // ? This creates a new object and pushes it into an array
    let taskObject = new Task(taskname, "-> " + description, 0, "22 / 01 / 2022", "big", true);
    let taskId = taskList.push(taskObject);

    taskObject.projectid = projectid;
    taskObject.id = taskId - 1; // ! For some reason I need to do this so the id is equal to the array index

    display.updateList();


}

export function removeTaskFromList(taskId) {
    const taskSelector = document.getElementById(taskId);
    let taskObject = taskList[taskId];
    taskSelector.remove();
    taskObject.getData();
    taskObject.makeInvisible();
}