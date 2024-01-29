import validateInputs from "./validateInput";
import createTask from "./createTask.js";
import refreshContent from "./refreshContent.js";
import { tasks } from "./tasksStorage.js";
import { createOverlay, clearModule } from "./overlay.js";
import updateTask from "./updateTask.js";

const { format } = require("date-fns");

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
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                buttonFunction();
            });
        }
    }
}

const submitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        attemptSubmit(form);
    });
}

const updateListener = (form, index) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        attemptSubmit(form, index);
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

const createUpdateForm = (index) => {
    const moduleForm = document.createElement('form');
    moduleForm.classList.add('module-form');

    updateListener(moduleForm, index);

    return moduleForm;
}

const createLegend = (message) => {
    const legend = document.createElement('legend');
    legend.textContent = message;
    return legend;
}

const createTitleInput = (taskTitle) => {
    const title = document.createElement('input');
    title.type = 'text';
    title.placeholder = "Title";
    title.id = "title";
    if (taskTitle) {
        title.value = taskTitle;
    }
    return title
}

const createDescriptionInput = (taskDescription) => {
    const description = document.createElement('input');
    description.type = "text";
    description.placeholder = 'Description'
    description.id = 'description'
    if (taskDescription) {
        description.value = taskDescription;
    }
    return description;
}

const createDateInput = (taskDueDate) => {
    const dateEntry = document.createElement('input');
    dateEntry.type = 'date';
    dateEntry.id = 'due-date';
    if (taskDueDate) {

        // dates need reformatting so it can appear on the display form
        dateEntry.value = format(taskDueDate, 'yyyy-MM-dd');
    }
    return dateEntry;
}

const createCheckboxInput = (taskImportance) => {
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

    if (taskImportance) {
        importantCheckbox.checked = taskImportance;
    }

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
    const moduleForm = createUpdateForm(index);

    moduleDiv.appendChild(closeButton);
    moduleDiv.appendChild(moduleForm);

    moduleForm.appendChild(createLegend('Update task!'));
    moduleForm.appendChild(createTitleInput(tasks[index].getTitle()));
    moduleForm.appendChild(createDescriptionInput(tasks[index].getDescription()));
    moduleForm.appendChild(createDateInput(tasks[index].getDueDate()));
    moduleForm.appendChild(createCheckboxInput(tasks[index].getPriority()));
    moduleForm.appendChild(createSubmitButton());


    document.body.appendChild(moduleDiv);
}

const createModule = () => {

    const moduleDiv = createModuleDiv();
    const closeButton = createCloseButton();
    const moduleForm = createForm();

    moduleDiv.appendChild(closeButton);
    moduleDiv.appendChild(moduleForm);

    moduleForm.appendChild(createLegend('Add task here!'));
    moduleForm.appendChild(createTitleInput());
    moduleForm.appendChild(createDescriptionInput());
    moduleForm.appendChild(createDateInput());
    moduleForm.appendChild(createCheckboxInput());
    moduleForm.appendChild(createSubmitButton());

    document.body.appendChild(moduleDiv);
}


const attemptSubmit = (form, index) => {
    const isSuccess = validateInputs(form);
    if (!isSuccess) {
        console.log('Unable to add task.');
    }
    if (isSuccess && (index == null || index == undefined)) {
        createTask(form);
        clearModule();
        refreshContent(tasks);
    }
    if (isSuccess && (index != null || index != undefined)) {
        updateTask(form, index);
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