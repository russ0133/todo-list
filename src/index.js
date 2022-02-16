import "./style/style.css";
import * as task from "./modules/task.mjs";
import * as project from "./modules/project.mjs";

const form = document.getElementById("form");

window.remove = task.removeTaskFromList;
window.array = task.taskList;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    task.createTask(taskname.value);
});

task.createTask("Test Task 1");
task.createTask("Test Task 2");
task.createTask("Test Task 3");

project.createProject("test");
