export default function addContent() {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    document.body.appendChild(contentDiv);

    const title = document.createElement('p');
    title.classList.add('content-title');
    title.textContent = 'To do item 1';
    contentDiv.appendChild(title);


    return 
}