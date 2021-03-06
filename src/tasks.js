import createTask from './task.js';

const tasks = ( () => {

    let allTasks = [];

    let currProject = "All";

    const addTask = (name, date) => {

        const newTask = createTask(name, date, currProject);
        allTasks.push(newTask);

        createTaskDiv(newTask);
    }

    const createTaskDiv = (task) => {

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskName = document.createElement('p');
        taskName.textContent = task.getName();

        const rightItems = document.createElement('div');
        
        const taskDate = document.createElement('p');
        taskDate.textContent = task.getDate();

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Remove";
        deleteButton.addEventListener('click', (e) => {
            let idx = e.target.parentElement.parentElement.id;

            let taskToRem = allTasks[idx];

            allTasks = allTasks.filter( (task, index) => {
                return index != idx;
            });

            displayTasks(currProject, true);
        });


        rightItems.appendChild(taskDate);
        rightItems.appendChild(deleteButton);
        rightItems.classList.add('right-items');

        taskDiv.appendChild(taskName);
        taskDiv.appendChild(rightItems);

        taskDiv.id = allTasks.map( (item) => {
            return item.asString();
        }).indexOf(task.asString());

        const taskList = document.querySelector('#task-list');
        taskList.appendChild( taskDiv );

    }

    const displayTasks = (project, bypass=false) => {

        if(project !== currProject || bypass){

            currProject = project;

            const tasks = document.querySelector('#task-list');

            tasks.textContent = "";

            if(project === "All"){
                for(let task of allTasks){
                    createTaskDiv(task);
                }
            }

            else{

                let filteredTasks = allTasks.filter( (indTask) => (indTask.getProject() === project));
                for(let task of filteredTasks){
                    createTaskDiv(task);
                }
            }
        }
    }

    const deleteProjectTasks = (project) => {
        allTasks = allTasks.filter( (task) => task.getProject() !== project);
        
        if(currProject === project){
            displayTasks("All");
        }

        else{
            displayTasks(currProject, true);
        }
    }

    return{addTask, displayTasks, deleteProjectTasks};

})();

export default tasks;