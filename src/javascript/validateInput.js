export default function validateTaskInputs(form) {
    const title = form.querySelector('#title').value;
    const description = form.querySelector('#description').value;
    const dueDate = form.querySelector('#due-date').value;
    const isImportant = form.querySelector('#important').checked;
    if (!title) {
        console.error('It needs a title!');
        return false
    }
    

    return true
}