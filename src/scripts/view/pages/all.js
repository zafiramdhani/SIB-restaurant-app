import RestaurantDicodingSource from '../../data/restaurant-dicoding';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const All = {
  async render() {
    return `
      <article id="content">
      </article>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDicodingSource.allRestaurants();
    const restaurantsContainer = document.querySelector('#content');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default All;
