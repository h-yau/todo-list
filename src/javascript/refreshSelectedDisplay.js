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
    const today = format(new Date(), 'MM/dd/yyyy');
    return today;
}

const isDueToday = (dueDate) => {

    return dueDate == getTodayDate();

}

const isDueThisWeek = (dueDate) => {


    // need some way to check if the date is this week
    let today = new Date()
    const timeZoneOffset = today.getTimezoneOffset();
    const utcToday = addMinutes(today, timeZoneOffset);

    if (differenceInDays(dueDate, utcToday) < 0) {
        return false;
    }

    return isSameWeek(utcToday, dueDate, { weekStartsOn: 1});

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