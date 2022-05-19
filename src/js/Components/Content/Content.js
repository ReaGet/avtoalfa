import Component from "../Component.js";
import Pagination from "../Pagination/Pagination.js";

export default class Content extends Component {
    constructor() {
        super();
    }

    render() {
        return `
            <main class="content">
                <div class="content-header content-header--mobile">
                    <div class="content-header-filter content-header-button button-reset">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 472.615 472.615" style="enable-background:new 0 0 472.615 472.615;" xml:space="preserve"><g><g><polygon points="472.615,12.908 0,12.908 180.081,202.629 180.066,459.708 292.55,401.525 292.534,202.629"/></g></g></svg>
                        Фильтры
                    </div>
                    <div class="content-header-sort content-header-button button-reset">                        
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489.389 489.389" style="enable-background:new 0 0 489.389 489.389;" xml:space="preserve"><g><g><path d="M261.294,326.102c-8.3-7.3-21.8-6.2-29.1,2.1l-77,86.8v-346.9c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v346.9 l-77-86.8c-8.3-8.3-20.8-9.4-29.1-2.1c-8.3,8.3-9.4,20.8-2.1,29.1l113.4,126.9c8.5,10.5,23.5,8.9,30.2,0l114.4-126.9
                            C270.694,347.002,269.694,333.402,261.294,326.102z"/><path d="M483.994,134.702l-112.4-126.9c-10-10.1-22.5-10.7-31.2,0l-114.4,126.9c-7.3,8.3-6.2,21.8,2.1,29.1 c12.8,10.2,25.7,3.2,29.1-2.1l77-86.8v345.9c0,11.4,9.4,20.8,20.8,20.8s20.8-8.3,20.8-19.8v-346.8l77,86.8
                            c8.3,8.3,20.8,9.4,29.1,2.1C490.194,155.502,491.294,143.002,483.994,134.702z"/></g></g></svg>    
                        Сортировка
                    </div>
                </div>
                <div class="content-header">
                    <div class="content-header-close button-reset">Закрыть</div>
                    <div class="label-toggle-wrapper">
                        <input type="checkbox" class="checkbox-toggle" id="instock" checked>
                        <label for="instock" class="products-label label-toggle">
                            В наличие
                        </label>
                    </div>
                    <label for="sort" class="products-label">
                        Сортировать по:
                        <select id="sort">
                            <option value="alphabet">алфавиту А-Я</option>
                            <option value="price">цене</option>
                        </select>
                    </label>
                    <label for="perPage" class="products-label">
                        Показывать по:
                        <select id="perPage">
                            <option value="30">30</option>
                            <option value="10">10</option>
                        </select>
                    </label>
                </div>
                <div class="products">
                </div>
                <div class="content-bottom">
                    ${new Pagination()}
                </div>
            </main>
        `;
    }
}