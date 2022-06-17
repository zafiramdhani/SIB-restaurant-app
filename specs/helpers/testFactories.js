/* eslint-disable import/prefer-default-export */
import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createFavoriteButtonWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favButtonContainer: document.querySelector('#favorite-button-container'),
    restaurant,
  });
};

export { createFavoriteButtonWithRestaurant };
