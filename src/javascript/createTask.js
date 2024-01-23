import todoObject from "./todoObject";
import storeTask from "./tasksStorage";

const { format, addMinutes } = require("date-fns");

export default function createTask(form) {
    const title = form.querySelector('#title').value;
    const description = form.querySelector('#description').value;

    const localDueDate = new Date(form.querySelector('#due-date').value);
    const timeZoneOffset = localDueDate.getTimezoneOffset();
    const utcDueDate = addMinutes(localDueDate, timeZoneOffset);
    const formattedDueDate = format(utcDueDate, 'MM/dd/yyyy');

    const priority = form.querySelector('#important').checked;

    const newtask = todoObject(title, description, formattedDueDate, priority);
    storeTask(newtask);
}

