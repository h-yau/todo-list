import todoObject from "./todoObject";
import storeTask from "./tasksStorage";

const { format } = require("date-fns");

export default function createTask(form) {
    const title = form.querySelector('#title').value;
    const description = form.querySelector('#description').value;
    const dueDate = format(new Date(form.querySelector('#due-date').value), 'MM/dd/yyyy');
    const priority = form.querySelector('#important').checked;
    
    const newtask = todoObject(title, description, dueDate, priority);
    storeTask(newtask);
}

