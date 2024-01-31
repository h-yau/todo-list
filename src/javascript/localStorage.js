import storeTask, { tasks } from "./tasksStorage";
import todoObject from "./todoObject";

const storageAvailable = (type) => {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&

            (e.code === 22 ||

                e.code === 1014 ||
                
                e.name === "QuotaExceededError" ||
                
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&

                storage &&

                storage.length !== 0
        );
    }
}

const stringifyTasks = (selectedTasks) => {

    const preparedTasks = [];

    for (let i = 0; i < selectedTasks.length; i++) {
        const title = selectedTasks[i].getTitle();
        const description = selectedTasks[i].getDescription();
        const dueDate = selectedTasks[i].getDueDate();
        const priority = selectedTasks[i].getPriority();
        const stringTask = {title, description, dueDate, priority};
        preparedTasks.push(stringTask);
    }

    const stringifiedTasks = JSON.stringify(preparedTasks);
    return stringifiedTasks;
}

const isFirstTimeToSite = () => {
    if (localStorage.getItem('isFirstTime') === null || localStorage.getItem('isFirstTime') === undefined) {
        const testObject = todoObject("Run", "Run everyday!", "01/28/2024", true);
        storeTask(testObject);
        return true;
    } else {
        return false;
    }
}

export default function storeLocalTasks() {

    if (storageAvailable('localStorage')) {
        const tasksStrings = stringifyTasks(tasks);
        localStorage.setItem('tasks', tasksStrings);
    } else {
        console.error('No local storage available!');
    }
}

export function retrieveLocalStoredTasks() {

    if (isFirstTimeToSite()) {
        localStorage.setItem('isFirstTime', 'false');
        return;
    } else {
        const storedTasks = localStorage.getItem?.('tasks');
        const parsedTasks = JSON.parse(storedTasks);
        for (let i = 0; i < parsedTasks.length; i++) {
            console.log(parsedTasks);
            const task = todoObject(parsedTasks[i].title, parsedTasks[i].description, parsedTasks[i].dueDate, parsedTasks[i].priority);
            storeTask(task);
        }
    }

}