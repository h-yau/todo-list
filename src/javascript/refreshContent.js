import addContent from "./content";

export default function refreshContent() {
    clearMain();
    displayMain();
}


const clearMain = () => {
    const mainSection = document.querySelector('main');
    if (!mainSection) {
        console.error('No main section found.');
        return
    }
    mainSection.remove();
}

const displayMain = () => {
    const contentPage = document.querySelector('.content-page');
    contentPage.appendChild(addContent());
}