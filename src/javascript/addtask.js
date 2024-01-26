import validateInputs from "./validateInput";
import createTask from "./createTask.js";
import refreshContent from "./refreshContent.js";
import { tasks } from "./tasksStorage.js";
import { createOverlay, clearModule } from "./overlay.js";

const createAddTaskButton = () => {
    
    const createTaskButton = document.createElement('button');
    createTaskButton.classList.add('add-task-button');
    createTaskButton.textContent = 'Add Task';

    return createTaskButton
}

const buttonListener = (button) => {
    if (button && button.className) {

        const buttonFunction = buttonFunctions[button.className];

        if (buttonFunction && typeof buttonFunction === 'function') {
            button.addEventListener('click', buttonFunction);
        }
    }
}

const submitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        attemptSubmit(form);
    });
}

const openModule = () => {

    createOverlay();
    createModule();
}

const createModule = () => {

    const moduleDiv = document.createElement('div');
    moduleDiv.classList.add('module');

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.classList.add('collapse');
    moduleDiv.appendChild(closeButton);
    buttonListener(closeButton);

    const moduleForm = document.createElement('form');
    moduleForm.classList.add('module-form');
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

    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');
    moduleForm.appendChild(checkboxContainer);

    const importantLabel = document.createElement('label');
    importantLabel.htmlFor = 'important';
    importantLabel.textContent = 'Important';
    checkboxContainer.appendChild(importantLabel);

    const importantCheckbox = document.createElement('input');
    importantCheckbox.type = 'checkbox';
    importantCheckbox.name = 'important';
    importantCheckbox.id = 'important';
    checkboxContainer.appendChild(importantCheckbox);

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-form');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    moduleForm.appendChild(submitButton);
    submitListener(moduleForm);

    document.body.appendChild(moduleDiv);
}

const attemptSubmit = (form) => {
    const isSuccess = validateInputs(form);
    if (!isSuccess) {
        console.log('Unable to add task.');
    }
    if (isSuccess) {
        createTask(form);
        clearModule();
        refreshContent(tasks);
    }
}

const buttonFunctions = {
    'add-task-button': openModule,
    'collapse': clearModule,
}

export default function prepareAddTask() {
    const taskButton = createAddTaskButton();
    buttonListener(taskButton);
    document.body.appendChild(taskButton);
    return
}