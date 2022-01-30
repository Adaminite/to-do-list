import taskModal from "./taskmodal.js";

function subHeader(){
    let subHeader = document.createElement('h2');
    subHeader.textContent = "Tasks";
    subHeader.id = "task-subheader";
    

    return subHeader;
}

function addTaskButton(){
    const btn = document.createElement('button');
    btn.textContent = "+ Add Task";
    btn.id = "add-btn";

    btn.addEventListener('click', (e) =>{
        const modal = document.querySelector('#task-modal');
        modal.style.display = "flex";
    } );

    return btn;
}

function taskList(){
    const taskList = document.createElement('div');
    taskList.id = "task-list";

    return taskList;

}
function taskContainer(){
    let itemDiv = document.createElement('div');
    itemDiv.id = "items";

    itemDiv.appendChild( subHeader() );
    itemDiv.appendChild( taskList() );
    itemDiv.appendChild( addTaskButton() );

    return itemDiv;
}

export default taskContainer;