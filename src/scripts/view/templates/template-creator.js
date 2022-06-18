import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="res-detail-header">
    <div class="image">
      <img src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" class="restaurant-picture" alt="${restaurant.name}">
    </div>
    <div class="desc">
      <h2>${restaurant.name}</h2>
      <div class="line"></div>
      <p>Alamat : ${restaurant.address}</p>
      <p>Kota : ${restaurant.city}</p>
      <p>Kategori : ${restaurant.categories.map((category) => `${category.name}`).join(', ')}</p><br>
      <p>${restaurant.description}</p>
    </div>
  </div>
  <div class="res-detail-content">
    <div class="menu-makanan">
      <strong>Menu makanan</strong>
      <div class="line"></div>
      <ol>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ol>
    </div>
    <div class="menu-minuman">
      <strong>Menu minuman</strong>
      <div class="line"></div>
      <ol>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ol>
    </div>
    <div class="customer-review">
      <strong>Customer Reviews</strong>
      <div class="line"></div>
      ${restaurant.customerReviews.map((review) => `
        <div class="customer-review-list">
          <strong class="customer-review-name">${review.name}</strong>
          <p class="customer-review-date">${review.date}</p>
          <em class="customer-review-review">"${review.review}"</em>
        </div>
      `).join('</br>')}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="res">
      <div class="res-image">
        <img src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}">
      </div>
      <div class="res-city">
        <p>${restaurant.city}</p>
      </div>
      <div class="res-description">
        <h3 class="restaurant-name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>Rating ⭐️${restaurant.rating}</p>
      </div>
    </div>
`;

const createUnclickedFavButtonTemplate = () => `
  <button aria-label="Add to favorite" id="favorite-button">
    <i class="fa-regular fa-star"></i>
  </button>
  `;

const createClickedFavButtonTemplate = () => `
  <button aria-label="Remove from favorite" id="favorite-button">
    <i class="fa-solid fa-star"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createUnclickedFavButtonTemplate,
  createClickedFavButtonTemplate,
};
