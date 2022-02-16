export let projectList = [];
projectList.length = 0;

export class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

export function createProject(projectName) {
    let project = new Project(projectName);
    projectList.push(project);
    console.log("🚀 ~ file: project.mjs ~ line 11 ~ createNewProject ~ createNewProject(projectName)", projectName)
}