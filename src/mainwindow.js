import {sidebar} from "./sidebar.js";
import taskContainer from "./taskcontainer.js";


function renderMainDiv() {
    let mainDiv = document.createElement('div');
    mainDiv.id = "content";
    
    mainDiv.appendChild( sidebar.renderSidebar() );
    mainDiv.appendChild( taskContainer() );
    
    return mainDiv;
}

export default renderMainDiv;