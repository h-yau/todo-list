export default function removeElement (select) {
    const element = document.querySelector(select);
    if (element) {
        element.remove();
    } else {
        console.error(`Element with selector ${element} not found.`);
    }
}