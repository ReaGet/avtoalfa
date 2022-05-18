export default class AbstractView {
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
