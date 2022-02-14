export function addHtmlElement(type, parent, content, classList) {
    let element = document.createElement(type);

    element.innerHTML = content;
    element.classList.add(classList);

    parent.appendChild(element);
    console.log("Create element: " + element.classList);

    return element;
}