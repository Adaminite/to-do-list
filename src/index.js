import renderMainDiv from "./mainwindow.js";
import '../styles/style.css';
const displayController = ( () => {

    const body = document.querySelector('body');

    const renderPage = () => {
        body.appendChild( renderMainDiv() );
    }

    return {renderPage};
})(); 


displayController.renderPage();
