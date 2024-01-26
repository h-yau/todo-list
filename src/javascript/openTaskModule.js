import { createOverlay } from "./overlay";
import { createModule } from "./addtask";
import { tasks } from "./tasksStorage";

const createTaskModule = (index) => {

    ////// now I need to display the tasks
    createModule();
    console.log(tasks[index].getTitle());
}

export default function openTaskModule (taskIndex) {
    createOverlay();
    createTaskModule(taskIndex);
}


