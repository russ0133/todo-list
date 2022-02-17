import "./style/style.css";
import * as task from "./modules/task.mjs";
import * as project from "./modules/project.mjs";

const form = document.getElementById("form");

window.remove = task.removeTaskFromList;
window.tasklist = task.taskList;
window.projectlist = project.projectList;
window.deleteproject = project.deleteProject;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    if (taskname.value == "") return window.alert("You must write something");
    // eslint-disable-next-line no-undef
    task.createTask(taskname.value, 0);
});
project.createProject("Daily Life");
project.createProject("Work");


task.createTask("Clean the Bathroom", 0);
task.createTask("Cook Dinner", 0);
task.createTask("Go for a Run", 0);

task.createTask("Check e-mails", 1);