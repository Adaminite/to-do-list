import renderMainDiv from "./mainwindow.js";
import header from "./header.js";
import footer from "./footer.js";
import taskModal from "./taskmodal.js";
import '../styles/style.css';

const displayController = ( () => {

    const body = document.querySelector('body');

    const renderPage = () => {
        body.appendChild(header);
        body.appendChild( renderMainDiv() );
        body.appendChild( taskModal() );
        body.appendChild(footer);
    }

    return {renderPage};
})(); 


displayController.renderPage();
