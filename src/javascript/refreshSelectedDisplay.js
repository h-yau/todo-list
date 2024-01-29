import { tasks } from "./tasksStorage";
import refreshContent from "./refreshContent";

const { format, isSameWeek, differenceInDays, addMinutes } = require("date-fns");

export let filteredTasksArray = [];

const filters = {

    "due-today": (task) => isDueToday(task.getDueDate()),
    "this-week": (task) => isDueThisWeek(task.getDueDate()),
    "important": (task) => task.getPriority(),

}

const getTodayDate = () => {

    // does not need to convert since local machine's time is corecct

    const today = new Date();
    const formattedToday = format(today, "MM/dd/yyyy");
    return formattedToday;
}

const isDueToday = (dueDate) => {

    return dueDate == getTodayDate();

}

const isDueThisWeek = (dueDate) => {

    const today = format(new Date(), "MM/dd/yyyy");

    if (differenceInDays(dueDate, today) < 0) {
        return false;
    }

    return isSameWeek(today, dueDate, { weekStartsOn: 1});

}

const filterTasks = (tabName) => {

    const filterFunction = filters[tabName];
    const filteredTasks = tasks.filter(filterFunction);
    return filteredTasks;

}


export default function refreshSelectedDisplay (tabName) {
   if (tabName == "all-tasks") {
    refreshContent(tasks);
   } else {
    refreshContent(filterTasks(tabName));
   }
}