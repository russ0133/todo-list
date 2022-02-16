export function addHtmlElement(tag, parent, content, classList, id) {
    let element = document.createElement(tag);

    if (content != null) { element.innerText = content; }
    if (classList != null) { element.classList.add(classList); }
    if (id != null) { element.id = id; }

    parent.appendChild(element);
    return element;
}