import * as task from "./task.mjs";
import * as project from "./project.mjs";
import * as dom from "../utils/dom.mjs";

const $projectList = document.querySelector('.projectList');
export let hasBeenInitialisedBefore = [];


export function updateList() {
    dom.removeAllHtml($projectList); // ? Removes all the HTMl from inside $projectList

    project.projectList.forEach(currentItem => {
        if (!currentItem.visible) return 0;
        createProjectHtml(currentItem);
    })

    task.taskList.forEach(currentItem => {
        if (!currentItem.visible) return 0;
        createTaskHtml(currentItem);
    });
}

function createProjectHtml(projectObject) {
    // ? This create the HTML  for each project, as such .project>.project-title+.project-content
    let projectHtmlId = "project-" + projectObject.id;
    let projectContentId = "project-" + projectObject.id + "-content";

    let $projectDiv = dom.addHtmlElement("div", $projectList, null, "project", projectHtmlId);
    let $projectTitle = dom.addHtmlElement("div", $projectDiv, projectObject.name, "project-title");
    let $projectContent = dom.addHtmlElement("div", $projectDiv, null, "project-content", projectContentId);
}

function createTaskHtml(taskObject) {
    // ? This creates the HTML for each task, as such .task>.title+.description+.button
    let taskObjectProjectId = "project-" + taskObject.projectid + "-content";
    let $projectDiv = document.getElementById(taskObjectProjectId);

    let $taskDiv = dom.addHtmlElement("div", $projectDiv, null, "task", taskObject.id);
    let $taskTitle = dom.addHtmlElement("div", $taskDiv, taskObject.title, "title", null);
    let $taskDescription = dom.addHtmlElement("div", $taskDiv, taskObject.description, "description", null);

    let $taskButton = dom.addHtmlElement("input", $taskTitle, null, "task-button");

    $taskButton.type = "checkbox";
    $taskButton.dataset.id = taskObject.id;
    $taskButton.name = "checkbox";
    $taskButton.onclick = function () { task.removeTaskFromList(taskObject.id); }

    if (taskObject.initialized == false) {
        taskObject.initialized = true;
        $taskDiv.classList.add("appear");
    }
}
