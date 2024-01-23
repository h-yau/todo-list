import todoObject from "./todoObject.js"
import storeTask, { tasks } from "./tasksStorage.js";
import refreshContent from "./refreshContent.js";
import { filteredTasksArray } from "./refreshSelectedDisplay.js";


// 2 lines below are tasks objects. Make sure they're deleted after testing
const testObject = todoObject("Run", "Run everyday!", "01/22/2024", "None");
storeTask(testObject);

const addlist = (tasksToDisplay) => {

    const mainContentDiv = document.createElement('div');

    for (let i = 0; i < tasksToDisplay.length; i++) {

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content-div');
        mainContentDiv.appendChild(contentDiv);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.classList.add('collapse');
        contentDiv.appendChild(closeButton);
        closeButtonListener(closeButton, i);
    
        const title = document.createElement('p');
        title.classList.add('content-title');
        title.textContent = tasksToDisplay[i].getTitle();
        contentDiv.appendChild(title);
    
        const desc = document.createElement('p');
        desc.classList.add('content-desc');
        desc.textContent = tasksToDisplay[i].getDescription();
        contentDiv.appendChild(desc);
    
        const dueDate = document.createElement('p');
        dueDate.classList.add('content-due-date');
        dueDate.textContent = tasksToDisplay[i].getDueDate();
        contentDiv.appendChild(dueDate);
    
        const priority = document.createElement('p');
        priority.classList.add('content-priority');
        priority.textContent = tasksToDisplay[i].getPriority();
        contentDiv.appendChild(priority);
    }
    
    return mainContentDiv;
}

const closeButtonListener = (button, index) => {
    if (button) {
        button.addEventListener('click', () =>{
            tasks.splice(index, 1);
            refreshContent();
        });
    }
}

export default function addContent(tasksPassedIn) {

    const mainSection = document.createElement('main');
    
    mainSection.appendChild(addlist(tasksPassedIn));

    return mainSection
}