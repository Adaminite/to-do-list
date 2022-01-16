import sidebar from "./sidebar.js";
import items from "./items.js";


function renderMainDiv() {
    let mainDiv = document.createElement('div');
    mainDiv.id = "content";
    
    mainDiv.appendChild( sidebar() );
    mainDiv.appendChild( items() );
    
    return mainDiv;
}

export default renderMainDiv;