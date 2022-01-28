const sidebar = ( () => {
    
    let a = 10;
    const projects = [];

    const renderSidebar = () => {
        let sidebar = document.createElement('div');
        sidebar.id = "sidebar";
    
        return sidebar;
    }

    const addProject = () => {

    }

    return {renderSidebar, addProject};

})();


export {sidebar};