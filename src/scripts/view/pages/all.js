import RestaurantDicodingSource from '../../data/restaurant-dicoding';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import '../templates/navbar-active';
import LoadingInitiator from '../../utils/loading-initiator';

const All = {
  async render() {
    return `
      <article id="all-content">
      </article>
      <div id="loader"></div>
      `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#all-content');
    const loader = document.getElementById('loader');

    loader.innerHTML = LoadingInitiator.ELEMENT;

    const restaurants = await RestaurantDicodingSource.allRestaurants();

    loader.style.display = 'none';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default All;
