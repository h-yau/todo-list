import refreshSelectedDisplay from "./refreshSelectedDisplay";

const validTabNames = ["all-tasks", "due-today", "this-week", "important"];

export default function handleNavButton (button) {
    if (button) {
        button.addEventListener('click', () => {
            const tabName = button.className.split(' ')[0];
            if (!tabName) {
                console.error('No button found!');
                return
            }
            if (!validTabNames.includes(tabName)) {
                console.error('No valid button found!');
                return 
            }
            refreshSelectedDisplay(tabName);
        });
    }
}