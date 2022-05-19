import Component from "./Components/Component.js";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import Content from "./Components/Content/Content.js";

class App extends Component {
    constructor() {
        super();
        this.setTitle('Главная');
    }

    render() {
        return  `
        ${new Sidebar()}
        ${new Content()}
        `;
    }
}


document.querySelector('#app').innerHTML = new App();