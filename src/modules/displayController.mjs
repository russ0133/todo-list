import * as task from "./task.mjs";
import * as project from "./project.mjs";
import * as dom from "../utils/dom.mjs";

const $projectList = document.querySelector('.projectList');

export function updateList() {
    removeAllHtml($projectList); // ? Removes all the HTMl from inside $projectList
    project.projectList.forEach(currentItem => {
        createProjectHtml(currentItem);
    })
    task.taskList.forEach(currentItem => {
        if (!currentItem.visible) return;
        createTaskHtml(currentItem);
    });
}

function createProjectHtml(projectObject) {
    let projectHtmlId = "project-" + projectObject.id;
    let projectContentId = "project-" + projectObject.id + "-content";

    let $projectDiv = dom.addHtmlElement("div", $projectList, null, "project", projectHtmlId);
    let $projectTitle = dom.addHtmlElement("div", $projectDiv, projectObject.name, "project-title");
    let $projectContent = dom.addHtmlElement("div", $projectDiv, null, "project-content", projectContentId);
}
function createTaskHtml(taskObject) {
    // ? This creates the HTML for each button, as such .task>.title+.description+.button
    let taskObjectProjectId = "project-" + taskObject.projectid + "-content";
    let $projectDiv = document.getElementById(taskObjectProjectId);


    let $taskDiv = dom.addHtmlElement("div", $projectDiv, null, "task", taskObject.id);
    let $taskTitle = dom.addHtmlElement("div", $taskDiv, taskObject.title, "title", null);
    let $taskDescription = dom.addHtmlElement("div", $taskDiv, taskObject.description, "description", null);
    let $taskProject = dom.addHtmlElement("div", $taskDiv, project.projectList[taskObject.projectid].name, "test", 0);

    let $taskButton = dom.addHtmlElement("input", $taskTitle, null, "task-button");
    $taskButton.type = "checkbox";
    $taskButton.dataset.id = taskObject.id;
    $taskButton.name = "checkbox";
    $taskButton.onclick = function () { task.removeTaskFromList(taskObject.id); }
}

/* 
// ? Task Button (Child of Task Title)
let $taskButton = document.createElement("input");
$taskButton.type = "checkbox";
$taskButton.classList.add("task-button");
$taskButton.dataset.id = taskObject.id;
$taskButton.name = "checkbox";
let testarrr = `task.removeTaskFromList(${taskObject.id});`
$taskButton.onclick = function () { task.removeTaskFromList(taskObject.id); }
$taskTitle.appendChild($taskButton); */

function removeAllHtml(selector) {
    selector.innerHTML = "";
}