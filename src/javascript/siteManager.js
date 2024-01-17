import createContent from "./gridContent.js";

function createLogo() {
    const logo = document.createElement('div');
    logo.textContent = 'To Do List';
    logo.classList.add('logo-text');
    document.body.appendChild(logo);
    return
}

export default function prepareSite() {
    createLogo();
    createContent();
}