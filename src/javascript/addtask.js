const createAddTaskButton = () => {
    
    const createTaskButton = document.createElement('button');
    createTaskButton.classList.add('add-task-button');
    createTaskButton.textContent = 'Add Task';

    return createTaskButton
}

const buttonListener = (button) => {

    button.addEventListener('click', () => {
        openModule();
    });
}

const openModule = () => {
    // needs to edit so it opens, instead of create
    createOverlay();
    createModule();
}

const createOverlay = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
}

const createModule = () => {

    const moduleDiv = document.createElement('div');
    moduleDiv.classList.add('module');

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.classList.add('collapse');
    moduleDiv.appendChild(closeButton);
    closeModuleListener(closeButton);

    const moduleForm = document.createElement('form');
    moduleDiv.appendChild(moduleForm);

    const legend = document.createElement('legend');
    legend.textContent = "Add task here!"
    moduleForm.appendChild(legend);

    const textItems = ['Title', 'Description'];
    
    for (let i = 0; i < textItems.length; i++) {
        const item = document.createElement('input');
        item.type = "text";
        item.placeholder = textItems[i]
        item.id = textItems[i].toLowerCase();
        moduleForm.appendChild(item);
    }

    const dateEntry = document.createElement('input');
    dateEntry.type = 'date';
    dateEntry.id = 'due-date';
    moduleForm.appendChild(dateEntry);

    const importantLabel = document.createElement('label');
    importantLabel.htmlFor = 'important';
    importantLabel.textContent = 'Important';
    moduleForm.appendChild(importantLabel);

    const importantCheckbox = document.createElement('input');
    importantCheckbox.type = 'checkbox';
    importantCheckbox.name = 'important';
    importantCheckbox.id = 'important';
    moduleForm.appendChild(importantCheckbox);

    document.body.appendChild(moduleDiv);
}

const closeModuleListener = (button) => {
    if (button) {
        button.addEventListener('click', clearModule);
    }
}

const removeElement = (select) => {
    const element = document.querySelector(select);
    if (element) {
        element.remove();
    }
}

const clearModule = () => {
    removeElement('.module');
    removeElement('.overlay');
}

export default function prepareAddTask() {
    const taskButton = createAddTaskButton();
    buttonListener(taskButton);
    document.body.appendChild(taskButton);
    return
}