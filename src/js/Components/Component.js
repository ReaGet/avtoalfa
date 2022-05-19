export default class Component {
    constructor() {

    }

    setTitle(title) {
        document.title = title;
    }

    beforeRender() {}

    render() {}

    afterRender() {}

    toString() {
        return this.render();
    }

}
