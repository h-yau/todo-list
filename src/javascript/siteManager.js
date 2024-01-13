import addNav from './nav.js';

function createLogo() {
    const logo = document.createElement('div');
    logo.textContent = 'To Do List';
    document.body.appendChild(logo);
    return
}

export default function prepareSite() {
    createLogo();
    addNav();
}