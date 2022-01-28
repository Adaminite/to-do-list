function renderHeader(){
    const header = document.createElement('div');
    header.id = "header";
    header.textContent = "Todo List";

    return header;
}

export default renderHeader();