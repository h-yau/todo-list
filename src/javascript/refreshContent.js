import addContent from "./content";

export default function refreshContent(tasksToDisplay) {
    clearMain();
    displayMain(tasksToDisplay);
}


const clearMain = () => {
    const mainSection = document.querySelector('main');
    if (!mainSection) {
        console.error('No main section found.');
        return
    }
    mainSection.remove();
}

const displayMain = (tasksToDisplay) => {
    const contentPage = document.querySelector('.content-page');
    contentPage.appendChild(addContent(tasksToDisplay));
}