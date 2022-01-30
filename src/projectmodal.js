import projectDisplayController from "./sidebar.js";
import img from "../images/project_img.png";

function closeButton(){
    const close = document.createElement('button');
    close.textContent = "+";
    
    close.classList.add('close');

    close.addEventListener('click', (e) => {
        const modal = document.querySelector("#project-modal");
        modal.style.display = "none";
    });

    return close;
}

function header(){
    const header = document.createElement('h2');
    header.textContent = "Add Project";

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
    const newProject = document.createElement('form');
    newProject.id = 'add-project-form';

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('form-input');

    const projectInput = document.createElement('input');
    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('name', 'name');
    projectInput.required = true;
    projectInput.classList.add('add-input');

    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for', 'name');
    projectLabel.textContent = "Name:";
    projectLabel.classList.add("add-label");

    mainDiv.appendChild(projectLabel);
    mainDiv.appendChild(projectInput);

    const submitDiv = document.createElement('div');
    submitDiv.classList.add('form-input');

    const submitBtn = document.createElement('input');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Add Project');
    submitBtn.classList.add("submitBtn");

    submitDiv.appendChild(submitBtn);

    newProject.appendChild(mainDiv);
    newProject.appendChild(submitDiv);

    newProject.addEventListener('submit', (e) => {
        e.preventDefault();
        projectDisplayController.addProject(newProject.elements[0].value);
        newProject.reset();

        const modal = document.querySelector("#project-modal");
        modal.style.display = "none";
    });

    return newProject;

}

function modalContent(){
    const modal = document.createElement('div');
    modal.id = "project-modal-content";
    modal.classList.add("modal-content");

    modal.appendChild( closeButton() );
    modal.appendChild( header() );
    modal.appendChild( modalImg() );
    modal.appendChild( inputForm() );

    return modal;
}

function projectModal(){
    const container = document.createElement('div');
    container.id = "project-modal";
    container.classList.add("modal");

    container.appendChild( modalContent() );

    return container;
}

export default projectModal;