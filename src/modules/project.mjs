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
    let projectid = projectList.push(project);
    project.id = projectid - 1;
    console.log(projectid);
}