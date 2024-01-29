import { createOverlay } from "./overlay";
import { createUpdateModule } from "./addtask";
import { tasks } from "./tasksStorage";

const createTaskModule = (index) => {

    ////// now I need to display the tasks
    createUpdateModule(index);
    console.log(tasks[index].getTitle());
}

export default function openTaskModule (taskIndex) {
    createOverlay();
    createTaskModule(taskIndex);
}


