import "./style/style.css";
import * as task from "./modules/tasks.mjs";

const form = document.getElementById("form");

window.remove = task.removeTaskFromList;
window.array = task.TaskArray;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    task.addTaskToList(taskname.value);
});

task.addTaskToList("Test Task 1");
task.addTaskToList("Test Task 2");
task.addTaskToList("Test Task 3");
