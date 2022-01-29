function modalContent(){
    const modal = document.createElement('div');
    modal.id = "task-modal-content";

    return modal;
}

function taskModal(){
    const container = document.createElement('div');

    container.classList.add('modal');
    container.id = "task-modal";

    container.appendChild( modalContent() );

    return container;

}

export default taskModal;