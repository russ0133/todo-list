import "./style/style.css";
import * as task from "./modules/task.mjs";
import * as project from "./modules/project.mjs";
import * as display from "./modules/displayController.mjs";

const form = document.getElementById("form");
const $FormHeader = document.querySelector(".header");

window.remove = task.removeTaskFromList;
window.tasklist = task.taskList;
window.projectlist = project.projectList;
window.deleteproject = project.deleteProject;

$FormHeader.addEventListener('click', function (e) {
    e.preventDefault();
    form.classList.toggle("appearFromTop");
    console.log("test");
});
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    if (taskname.value == "") return window.alert("You must write in the title");
    // eslint-disable-next-line no-undef
    task.createTask(taskname.value, taskdescription.value, 0);
});
project.createProject("Default Project");
project.createProject("Work");

display.updateList();