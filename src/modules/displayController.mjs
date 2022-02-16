import * as task from "./task.mjs";
import * as project from "./project.mjs";
import * as dom from "../utils/dom.mjs";

const $TaskLists = document.querySelector('.TaskLists');

export function updateList() {
    removeAllHtml($TaskLists); // ? Removes all the HTMl from inside $TaskLists
    task.taskList.forEach(currentItem => {
        if (!currentItem.visible) return;
        createTaskHtml(currentItem);
    });
}

function createTaskHtml(taskObject) {
    // ? This creates the HTML for each button, as such .task>.title+.description+.button
    // ? Task Div
    let $taskDiv = dom.addHtmlElement("div", $TaskLists, null, "task", taskObject.id);
    let $taskTitle = dom.addHtmlElement("div", $taskDiv, taskObject.title, "title");

    // ? Task Description (Child of Task Title)
    let $taskDescription = document.createElement("div");
    $taskDescription.innerText = taskObject.description;
    $taskDescription.classList.add("description");
    $taskDiv.appendChild($taskDescription);


    // ? Task Button (Child of Task Title)
    let $taskButton = document.createElement("input");
    $taskButton.type = "checkbox";
    $taskButton.classList.add("task-button");
    $taskButton.dataset.id = taskObject.id;
    $taskButton.name = "checkbox";
    let testarrr = `task.removeTaskFromList(${taskObject.id});`
    $taskButton.onclick = function () { task.removeTaskFromList(taskObject.id); }
    $taskTitle.appendChild($taskButton);
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