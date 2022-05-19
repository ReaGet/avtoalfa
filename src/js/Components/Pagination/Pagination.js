import Component from "../Component.js";

export default class Pagination extends Component {
    constructor() {
        super();
    }

    render() {
        return `
            <ul class="pagination list-reset">
                <li class="pagination-item active" data-page="">1</li>
                <li class="pagination-item" data-page="">2</li>
                <li class="pagination-item" data-page="">3</li>
                <li class="pagination-item" data-page="">4</li>
                <li class="pagination-item" data-page="">5</li>
            </ul>
        `;
    }
}