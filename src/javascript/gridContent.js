import addNav from "./nav";
import addContent from "./content";
import { tasks } from "./tasksStorage";

export default function prepareContent() {

    const allContentDiv = document.createElement('div');
    allContentDiv.classList.add('content-page');
    document.body.appendChild(allContentDiv);

    allContentDiv.appendChild(addNav());
    allContentDiv.appendChild(addContent(tasks));    
    
    return 

}