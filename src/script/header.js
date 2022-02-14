import { addHtmlElement } from "../utils/dom";

const body = document.querySelector('body');
let header = addHtmlElement("div", body, "", "header");

const headerElementOne = addHtmlElement("div", header, "Menu", "header-menu-one");
const headerElementTwo = addHtmlElement("div", header, "Home", "header-menu-two");
const headerElementTri = addHtmlElement("div", header, "Contact", "header-menu-tri");