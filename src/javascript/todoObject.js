import { format } from "date-fns";

export default function todoObject(title, description, dueDate, priority) {
    
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;


    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;

    const setTitle = (newTitle) => {
        _title = newTitle;
    };
    const setDescription = (newDescription) => {
        _description = newDescription;
    };
    const setDueDate = (newDueDate) => {
        const localDueDate = new Date(newDueDate);
        const utcDueDate = new Date( localDueDate.valueOf() + localDueDate.getTimezoneOffset() * 60 * 1000);
        const formattedNewDueDate = format(utcDueDate, 'MM/dd/yyyy');
        _dueDate = formattedNewDueDate;
    }
    const setPriority = (newPriority) => {
        _priority = newPriority;
    }

    return { getTitle, getDescription, getDueDate, getPriority, setTitle, setDescription, setDueDate, setPriority };
}