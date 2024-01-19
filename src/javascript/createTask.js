import todoObject from "./todoObject";
import storeTask from "./tasksStorage";

export default function createTask(form) {
    const title = form.querySelector('#title').value;
    const description = form.querySelector('#description').value;
    const dueDate = new Date(form.querySelector('#due-date').value);
    const priority = form.querySelector('#important').checked;
    
    const newtask = todoObject(title, description, dueDate, priority);
    storeTask(newtask);
}

