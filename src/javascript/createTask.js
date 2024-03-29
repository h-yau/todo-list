import todoObject from "./todoObject";
import storeTask from "./tasksStorage";

const { format, addMinutes } = require("date-fns");

export default function createTask(form) {
    const title = form.querySelector('#title').value;
    const description = form.querySelector('#description').value;

    // to convert time to local time so there's no 1-day discrepency  
    const localDueDate = new Date(form.querySelector('#due-date').value);
    const utcDueDate = new Date( localDueDate.valueOf() + localDueDate.getTimezoneOffset() * 60 * 1000);
    const formattedDueDate = format(utcDueDate, 'MM/dd/yyyy');

    const priority = form.querySelector('#important').checked;

    const newtask = todoObject(title, description, formattedDueDate, priority);
    storeTask(newtask);
}

