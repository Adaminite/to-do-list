

function subHeader(){
    let subHeader = document.createElement('h2');
    subHeader.textContent = "Tasks";
    subHeader.id = "task-subheader";
    

    return subHeader;
}

function taskContainer(){
    let itemDiv = document.createElement('div');
    itemDiv.id = "items";

    itemDiv.appendChild( subHeader() );
    return itemDiv;
}

export default taskContainer;