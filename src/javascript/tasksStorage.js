export const tasks = []

export default function storeTask(task) {
    tasks.push(task);
    console.table(tasks[0].getTitle());
}

