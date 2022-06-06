import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-name">${restaurant.name}</h2>
  <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" class="restaurant-picture" alt="${restaurant.name}">
  <div class="restaurant-info">
    <p>Alamat : ${restaurant.address}</p>
    <p>Kota : ${restaurant.city}</p>
    <p>Deskripsi : ${restaurant.description}</p>
    <p>Menu makanan : ${restaurant.menus.foods}</p>
    <p>Menu minuman : ${restaurant.menus.drinks}</p>
    <p>Customer review : ${restaurant.customerReviews}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="res">
      <div class="res-image">
        <img src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="">
      </div>
      <div class="res-city">
        <p>${restaurant.city}</p>
      </div>
      <div class="res-description">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>Rating ⭐️${restaurant.rating}</p>
      </div>
    </div>
`;

const createUnclickedFavButtonTemplate = () => {

};

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createUnclickedFavButtonTemplate,
};
