import "./style/style.css";
import * as task from "./modules/task.mjs";
import * as project from "./modules/project.mjs";

const form = document.getElementById("form");
const $FormHeader = document.querySelector(".header");

window.remove = task.removeTaskFromList;
window.tasklist = task.taskList;
window.projectlist = project.projectList;
window.deleteproject = project.deleteProject;

$FormHeader.addEventListener('click', function (e) {
    e.preventDefault();
    form.classList.toggle("hidden");
});
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    if (taskname.value == "") return window.alert("You must write in the title");
    // eslint-disable-next-line no-undef
    task.createTask(taskname.value, taskdescription.value, 0);
});
project.createProject("Daily Life");
project.createProject("Work");


task.createTask("Clean the Bathroom", "test", 0);
task.createTask("Cook Dinner", "testa", 0);
task.createTask("Go for a Run", "test", 0);

task.createTask("Check e-mails", "folaos", 1);