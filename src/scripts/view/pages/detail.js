import RestaurantDicodingSource from '../../data/restaurant-dicoding';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import LoadingInitiator from '../../utils/loading-initiator';

const Detail = {
  async render() {
    return `
      <article id="detail-content">
      </article>
      <div id="loader"></div>
      <div id="favorite-button-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#detail-content');
    const loader = document.getElementById('loader');

    loader.innerHTML = LoadingInitiator.ELEMENT;

    const restaurant = await RestaurantDicodingSource.detailRestaurant(url.id);
    loader.style.display = 'none';

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#favorite-button-container'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
