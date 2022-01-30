import taskDisplayController from "./tasks.js";

const sidebar = ( () => {
    
    let a = 10;
    const projects = [];

    const renderSidebar = () => {
        let sidebar = document.createElement('div');
        sidebar.id = "sidebar";
        
        sidebar.appendChild( mainSidebars() );
        sidebar.appendChild( projectHeader() );
        sidebar.appendChild( projectList() );
        sidebar.appendChild( addProjectBtn() );

        return sidebar;
    }

    const projectList = () => {
        let projectList = document.createElement('div');
        projectList.id = "project-list";

        return projectList;
    }

    const mainSidebars = () => {
        let timeDiv = document.createElement('div');
        timeDiv.id = "main-sidebars";

        let all = document.createElement('button');
        all.textContent = "All";
        all.classList.add("sidebar-tab");
        all.addEventListener('click', () => {
            taskDisplayController.displayTasks(all.textContent);
        });

        let today = document.createElement('button');
        today.textContent = "Today";
        today.classList.add("sidebar-tab");
        today.addEventListener('click', () => {
            taskDisplayController.displayTasks(today.textContent);
        });

        let thisWeek = document.createElement('button');
        thisWeek.textContent = "This Week";
        thisWeek.classList.add("sidebar-tab");
        thisWeek.addEventListener('click', () => {
            taskDisplayController.displayTasks(thisWeek.textContent);
        });

        timeDiv.appendChild(all);
        timeDiv.appendChild(today);
        timeDiv.appendChild(thisWeek);

        return timeDiv;
        
    }

    const projectHeader = () => {
        let header = document.createElement('h2');
        header.textContent = "Projects";
        header.id = "projects-header";

        return header;
    }

    const addProjectBtn = () => {
        let addBtn = document.createElement('button');
        addBtn.textContent = "+ Add Project";
        addBtn.id = "add-project-btn";

        addBtn.addEventListener('click', () => {
            const projectModal = document.querySelector("#project-modal");
            projectModal.style.display = "flex";
        });

        return addBtn;
    }

    const addProject = (name) => {
        let projectList = document.querySelector("#project-list");

        let newProject = document.createElement('button');
        newProject.textContent = name;
        newProject.classList.add("sidebar-tab");

        newProject.addEventListener('click', (e) => {
            taskDisplayController.displayTasks(newProject.textContent);
        });

        projectList.appendChild(newProject);

    }

    return {renderSidebar, addProject};

})();


export default sidebar;