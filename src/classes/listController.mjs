let todoArray = [];

export class List {
    constructor(content, id, toggle) {
        this.content = content;
        this.id = id;
        this.toggle = toggle;
    }
}

export function addToList(content, isToggle) {
    let array = todoArray.push(content + " - isToggle: " + isToggle);
    let object = new List(content, array, isToggle);
}

export function getListItems() {
    todoArray.forEach(currentItem => {
        console.log(currentItem);
    });
}

export function getAllList() {
    console.log(todoArray);
}


/* export const listController = (() => {

    const init = () => {
        // List.purge();
    }
    const addToList = (content, isToggle) => {
        todoArray.push(content + " - isToggle: ", isToggle);
        console.log(content + " - isToggle: ", isToggle);
    }

})(); */
/* 
listController {
    constructor() {
        // creates variables
    }
    addToList() {
        // adds a new todo list
    }
    removeFromList() {
        // removes from list
    }
    toggleIsComplete() {
        // marks the "X" on the complete checkbox
    }
} */