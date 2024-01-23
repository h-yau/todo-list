import todoObject from "./todoObject.js"
import storeTask, { tasks } from "./tasksStorage.js";
import refreshContent from "./refreshContent.js";


// 2 lines below are tasks objects. Make sure they're deleted after testing
const testObject = todoObject("Run", "Run everyday!", "01/21/2025", "None");
storeTask(testObject);

const addlist = (mainSection) => {

    for (let i = 0; i < tasks.length; i++) {

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content-div');
        mainSection.appendChild(contentDiv);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.classList.add('collapse');
        contentDiv.appendChild(closeButton);
        closeButtonListener(closeButton, i);
    
        const title = document.createElement('p');
        title.classList.add('content-title');
        title.textContent = tasks[i].getTitle();
        contentDiv.appendChild(title);
    
        const desc = document.createElement('p');
        desc.classList.add('content-desc');
        desc.textContent = tasks[i].getDescription();
        contentDiv.appendChild(desc);
    
        const dueDate = document.createElement('p');
        dueDate.classList.add('content-due-date');
        dueDate.textContent = tasks[i].getDueDate();
        contentDiv.appendChild(dueDate);
    
        const priority = document.createElement('p');
        priority.classList.add('content-priority');
        priority.textContent = tasks[i].getPriority();
        contentDiv.appendChild(priority);

    }
}

const closeButtonListener = (button, index) => {
    if (button) {
        button.addEventListener('click', () =>{
            tasks.splice(index, 1);
            refreshContent();
        });
    }
}

export default function addContent() {

    const mainSection = document.createElement('main');
    
    addlist(mainSection);

    return mainSection
}