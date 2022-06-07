import RestaurantDicodingSource from '../../data/restaurant-dicoding';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <article id="detail-content">
      </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDicodingSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-content');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
