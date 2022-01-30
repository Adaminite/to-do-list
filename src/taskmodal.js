import img from "../images/modal_img.png";
import displayController from './tasks.js';

function closeButton(){
    const close = document.createElement('button');
    close.textContent = "+";
    
    close.classList.add('close');

    close.addEventListener('click', (e) => {
        const modal = document.querySelector("#task-modal");
        modal.style.display = "none";
    });

    return close;
}

function header(){
    const header = document.createElement('h2');
    header.textContent = "Add Task";

    header.classList.add("modal-header");

    return header;
}

function modalImg(){
    const image = document.createElement('img');
    image.setAttribute('src', img);
    image.setAttribute('alt', "A picture of a to-do list");
    image.classList.add('modal-img');

    return image;
}

function inputForm(){
    const addTask = document.createElement('form');
    addTask.id = 'add-task-form';

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('form-input');

    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('name', 'name');
    taskInput.required = true;
    taskInput.classList.add('add-input');

    const taskLabel = document.createElement('label');
    taskLabel.setAttribute('for', 'name');
    taskLabel.textContent = "Name:";
    taskLabel.classList.add("add-label");

    taskDiv.appendChild(taskLabel);
    taskDiv.appendChild(taskInput);


    const dateDiv = document.createElement('div');
    dateDiv.classList.add('form-input');

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'date');
    dateInput.required = true;
    dateInput.classList.add('add-input');

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = "Date:";
    dateLabel.classList.add("add-label");

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);


    const submitDiv = document.createElement('div');
    submitDiv.classList.add('form-input');

    const submitBtn = document.createElement('input');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Add Task');
    submitBtn.id = "submitBtn";

    submitDiv.appendChild(submitBtn);

    addTask.appendChild(taskDiv);
    addTask.appendChild(dateDiv);
    addTask.appendChild(submitDiv);

    addTask.addEventListener('submit', (e) => {
        e.preventDefault();
        createTask(addTask);
        addTask.reset();

        const modal = document.querySelector("#task-modal");
        modal.style.display = "none";
    });

    return addTask;

}

function createTask(form){
    const queries = form.elements;

    const name = queries[0].value;
    const date = queries[1].value;

    displayController.addTask(name, date);

}

function modalContent(){
    const modal = document.createElement('div');
    modal.id = "task-modal-content";

    modal.appendChild( closeButton() );
    modal.appendChild( header() );
    modal.appendChild( modalImg() );
    modal.appendChild( inputForm() );

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