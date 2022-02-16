import * as task from "./tasks.mjs";

const $TaskLists = document.querySelector('.TaskLists');

export function updateList() {
    removeAllHtml($TaskLists); // ? Removes all the HTMl from inside $TaskLists
    task.TaskArray.forEach(currentItem => {
        if (!currentItem.visible) return;
        createTaskHtml(currentItem);
    });
}

function createTaskHtml(taskObject) {
    // ? This creates the HTML for each button, as such .task>.title+.description+.button
    // ? Task Div
    let $taskDiv = document.createElement("div");
    $taskDiv.classList.add("task");
    $taskDiv.id = taskObject.id;
    $TaskLists.appendChild($taskDiv);

    // ? Task Title
    let $taskTitle = document.createElement("div");
    $taskTitle.innerText = taskObject.title;
    $taskTitle.classList.add("title");
    $taskDiv.appendChild($taskTitle);

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

function removeAllHtml(selector) {
    selector.innerHTML = "";
}