import FavoriteRestaurantDB from '../data/favorite-restaurant';
import { createUnclickedFavButtonTemplate, createClickedFavButtonTemplate } from '../view/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ favButtonContainer, restaurant }) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderClicked();
    } else {
      this._renderUnclicked();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantDB.getRestaurant(id);
    return !!restaurant;
  },

  _renderUnclicked() {
    this._favButtonContainer.innerHTML = createUnclickedFavButtonTemplate();
    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantDB.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderClicked() {
    this._favButtonContainer.innerHTML = createClickedFavButtonTemplate();
    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantDB.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
