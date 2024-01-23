import { tasks } from "./tasksStorage";
import refreshContent from "./refreshContent";

const { format } = require("date-fns");

const filters = {

    "due-today": (task) => isDueToday(task.getDueDate()),
    "this-week": (task) => isDueThisWeek(task.getDueDate()),
    "important": (task) => task.getPriority(),

}

const isDueToday = (dueDate) => {

    /// need testing
    const today = format(new Date());
    if (today == dueDate) {
        return true
    }
    return false

}

const isDueThisWeek = (dueDate) => {


    // need some way to check if the date is this week
    return false
}

const filterTasks = (tabName) => {

    const filterFunction = filters(tabName);
    const filteredTasks = tasks.filter(filterFunction);
    console.log(filterTasks);

}


export default function refreshSelectedDisplay (tabName) {
   if (tabName == "all-tasks") {
    refreshContent();
   } else {
    filterTasks(tabName);
   }
}