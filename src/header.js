function renderHeader(){
    const header = document.createElement('div');
    header.id = "header";

    const text = document.createElement('h1');
    text.textContent = "To Do List";

    return header;
}

export default renderHeader();