import AbstractView from "./Components/AbstractView.js";

class App extends AbstractView {
    constructor() {
        super();
        this.setTitle('Главная');
    }

    render() {
        return  `
        Works!
        `;
    }
}


document.querySelector('#app').innerHTML = new App();