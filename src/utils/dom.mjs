export function addHtmlElement(type, parent, content, classList, id) {
    let element = document.createElement(type);

    if (content != null) { element.innerHTML = content; }
    element.classList.add(classList);

    parent.appendChild(element);
    console.log("Create element: " + element.classList);

    return element;
}