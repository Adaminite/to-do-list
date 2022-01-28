function renderFooter(){
    const footer = document.createElement('div');
    footer.id = "footer";
    footer.textContent = "Copyright \u00A9 Omar Niazi";

    return footer;
}

export default renderFooter();
