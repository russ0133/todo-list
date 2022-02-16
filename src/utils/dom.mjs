export function addHtmlElement(type, parent, content, classList, id) {
    let element = document.createElement(type);

    if (content != null) { element.innerHTML = content; }
    element.classList.add(classList);
    element.id = id;

    parent.appendChild(element);
    return element;
}