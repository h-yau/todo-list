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

const createModuleDiv = () => {
    const moduleDiv = document.createElement('div');
    moduleDiv.classList.add('module');
    return moduleDiv;
}

const createCloseButton = () => {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.classList.add('collapse');
    buttonListener(closeButton);
    return closeButton;
}

const createForm = () => {
    const moduleForm = document.createElement('form');
    moduleForm.classList.add('module-form');

    submitListener(moduleForm);

    return moduleForm;
}

const createLegend = () => {
    const legend = document.createElement('legend');
    legend.textContent = "Add task here!"
    return legend;
}

const createTitleInput = () => {
    const title = document.createElement('input');
    title.type = 'text';
    title.placeholder = "Title";
    title.id = "title";
    return title
}

const createDescriptionInput = () => {
    const description = document.createElement('input');
    description.type = "text";
    description.placeholder = 'Description'
    description.id = 'description'
    return description;
}

const createDateInput = () => {
    const dateEntry = document.createElement('input');
    dateEntry.type = 'date';
    dateEntry.id = 'due-date';
    return dateEntry;
}

const createCheckboxInput = () => {
    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');

    const importantLabel = document.createElement('label');
    importantLabel.htmlFor = 'important';
    importantLabel.textContent = 'Important';

    const importantCheckbox = document.createElement('input');
    importantCheckbox.type = 'checkbox';
    importantCheckbox.name = 'important';
    importantCheckbox.id = 'important';

    checkboxContainer.appendChild(importantCheckbox);
    checkboxContainer.appendChild(importantLabel);

    return checkboxContainer;
}

const createSubmitButton = () => {
    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-form');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    return submitButton;
}

const createUpdateModule = (index) => {

    const moduleDiv = createModuleDiv();
    const closeButton = createCloseButton();
    const moduleForm = createForm();

    moduleDiv.appendChild(closeButton);
    moduleDiv.appendChild(moduleForm);

    // want to be able to pass in an index and look for the task... so can't just copy and paste



    document.body.appendChild(moduleDiv);
}

const createModule = () => {

    const moduleDiv = createModuleDiv();
    const closeButton = createCloseButton();
    const moduleForm = createForm();

    moduleDiv.appendChild(closeButton);
    moduleDiv.appendChild(moduleForm);

    moduleForm.appendChild(createLegend());
    moduleForm.appendChild(createTitleInput());
    moduleForm.appendChild(createDescriptionInput());
    moduleForm.appendChild(createDateInput());
    moduleForm.appendChild(createCheckboxInput());
    moduleForm.appendChild(createSubmitButton());

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

export {createUpdateModule};