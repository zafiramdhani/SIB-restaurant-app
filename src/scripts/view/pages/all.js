import RestaurantDicodingSource from '../../data/restaurant-dicoding';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import '../templates/navbar-active';

const All = {
  async render() {
    return `
      <article id="all-content">
      </article>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDicodingSource.allRestaurants();
    const restaurantsContainer = document.querySelector('#all-content');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default All;
