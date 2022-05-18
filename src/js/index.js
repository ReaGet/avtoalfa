import AbstractView from "./Components/AbsctractView";

class App extends AbstractView {
    constructor() {
        super();
    }

    render() {
        return  `
        Works!
        `;
    }
}


document.querySelector('#app').innerHTML = new App();