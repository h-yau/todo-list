import { createOverlay } from "./overlay";
import { createUpdateModule } from "./addtask";

const createTaskModule = (index) => {

    createUpdateModule(index);
}

export default function openTaskModule (taskIndex) {
    createOverlay();
    createTaskModule(taskIndex);
}


