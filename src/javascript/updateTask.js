import { tasks } from "./tasksStorage";

export default function updateTask (form, taskIndex) {
    tasks[taskIndex].setTitle(form.querySelector('#title').value);
    tasks[taskIndex].setDescription(form.querySelector('#description').value);
    tasks[taskIndex].setDueDate(form.querySelector('#due-date').value);
    tasks[taskIndex].setPriority(form.querySelector('#important').checked);
}