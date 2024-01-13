export default function addContent() {

    const mainSection = document.createElement('main');
    document.body.appendChild(mainSection);
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    mainSection.appendChild(contentDiv);

    const title = document.createElement('p');
    title.classList.add('content-title');
    title.textContent = 'To do item 1';
    contentDiv.appendChild(title);


    return 
}