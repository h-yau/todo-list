import todoObject from "./todoObject.js"
import storeTask, { tasks } from "./tasksStorage.js";
import refreshContent from "./refreshContent.js";
import openTaskModule from "./openTaskModule.js";
import storeLocalTasks from "./localStorage.js";

const addlist = (tasksToDisplay) => {

    const mainContentDiv = document.createElement('div');

    if (!tasksToDisplay) {
        return mainContentDiv;
    }

    for (let i = 0; i < tasksToDisplay.length; i++) {

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content-div');
        mainContentDiv.appendChild(contentDiv);
        displayTaskModule(contentDiv, i);

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
    
        const priorityLabel = document.createElement('label');
        priorityLabel.id = 'priority';
        priorityLabel.textContent = 'Important';

        const priority = document.createElement('input');
        priority.type = 'checkbox';
        priority.id = 'priority';
        priority.classList.add('content-priority');
        priority.checked = tasksToDisplay[i].getPriority();
        disableCheckbox(priority);
        priorityLabel.appendChild(priority);

        contentDiv.appendChild(priorityLabel);
    }
    
    return mainContentDiv;
}

const closeButtonListener = (button, index) => {
    if (button) {
        button.addEventListener('click', () =>{
            tasks.splice(index, 1);
            storeLocalTasks();
            refreshContent();
        });
    }
}

const displayTaskModule = (taskDiv, taskIndex) => {
    taskDiv.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target.classList.contains('collapse')) {
            event.stopPropagation();
            return;
        }
        openTaskModule(taskIndex);
    });
}

const disableCheckbox = (checkbox) => {
    checkbox.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
    })
}

export default function addContent(tasksPassedIn) {

    const mainSection = document.createElement('main');
    
    mainSection.appendChild(addlist(tasksPassedIn));

    return mainSection
}