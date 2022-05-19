import Component from "../Component.js";

export default class Sidebar extends Component {
    constructor() {
        super();
    }

    render() {
        return `
        <aside class="sidebar">
            <div class="sidebar-close button-reset">Закрыть</div>
            <div class="sidebar-header">Фильтры</div>
            <div class="sidebar-bottom">
                <button class="sidebar-button button-reset" data-action="reset-filter">Сбросить</button>
            </div>
        </aside>
        `;
    }
}