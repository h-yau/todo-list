import removeElement from "./removeElement.js";

const overlayListener = () => {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.addEventListener('click', clearModule);
    }
}

const createOverlay = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    overlayListener();
}

const clearModule = () => {
    removeElement('.module');
    removeElement('.overlay');
}

export {overlayListener, createOverlay, clearModule};