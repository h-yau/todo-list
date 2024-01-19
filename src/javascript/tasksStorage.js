export const tasks = []

export default function storeTask(task) {
    tasks.push(task);
    tasks.forEach(item => {
        ////// NEEDS edit so it doesn't just console, but to be stored
        console.log(item.getTitle());
        console.log(item.getDescription());
        console.log(item.getDueDate());
        console.log(item.getPriority());
    })
}