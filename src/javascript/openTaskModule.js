import { createOverlay } from "./overlay";
import { tasks } from "./tasksStorage";

const createTaskModule = (index) => {

    ////// now I need to display the tasks
    console.log(tasks[index].getTitle());
}

export default function openTaskModule (taskIndex) {
    createOverlay();
    createTaskModule(taskIndex);
}


