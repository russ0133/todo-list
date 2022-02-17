import * as displayController from "./displayController.mjs";
import * as task from "./task.mjs";

export let projectList = [];
projectList.length = 0;

export class Project {
    constructor(name, id, visible) {
        this.name = name;
        this.id = id;
        this.visible = visible;
    }
}

export function createProject(projectName) {
    let project = new Project(projectName, null, true);
    let projectid = projectList.push(project);
    project.id = projectid - 1;
    console.log(projectid);
}

export function deleteProject(projectId) {
    let tasksInThisProject = task.taskList.filter(ele => ele.projectid == projectId);
    tasksInThisProject.forEach(element => element.visible = false);

    console.log(tasksInThisProject);
    projectList[projectId].visible = false;
    displayController.updateList();
}