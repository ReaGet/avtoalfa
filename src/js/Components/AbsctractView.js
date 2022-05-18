export default class AbstractView {
    constructor() {

    }

    beforeRender() {}

    render() {}

    afterRender() {}

    toString() {
        return this.render();
    }

}
