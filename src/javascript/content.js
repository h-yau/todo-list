import todoObject from "./todoObject.js"

const testObject = todoObject("Run", "Run everyday!", "Tomorrow", "None");

const addlist = (mainSection) => {

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    mainSection.appendChild(contentDiv);

    const title = document.createElement('p');
    title.classList.add('content-title');
    title.textContent = testObject.getTitle();
    contentDiv.appendChild(title);

    const desc = document.createElement('p');
    desc.classList.add('content-desc');
    desc.textContent = testObject.getDescription();
    contentDiv.appendChild(desc);

    const dueDate = document.createElement('p');
    dueDate.classList.add('content-due-date');
    dueDate.textContent = testObject.getDueDate();
    contentDiv.appendChild(dueDate);

    const priority = document.createElement('p');
    priority.classList.add('content-priority');
    priority.textContent = testObject.getPriority();
    contentDiv.appendChild(priority);
}

export default function addContent() {

    const mainSection = document.createElement('main');
    
    addlist(mainSection);

    return mainSection
}