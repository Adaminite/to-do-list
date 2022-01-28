

const sidebar = ( () => {
    
    const renderSidebar = () => {
        let sidebar = document.createElement('div');
        sidebar.id = "sidebar";
    
        return sidebar;
    }

    
    return {renderSidebar};
})();


export default sidebar.renderSidebar;