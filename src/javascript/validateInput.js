export default function validateTaskInputs(form) {
    const title = form.querySelector('#title').value;
    const dueDate = form.querySelector('#due-date').value;
    if (!title) {
        console.error('It needs a title!');
        return false
    }
    if (!dueDate) {
        console.error('It needs a due date!');
        return false
    }

    return true
}