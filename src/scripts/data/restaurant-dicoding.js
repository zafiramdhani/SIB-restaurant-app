import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDicodingSource {
  static async allRestaurants() {
    const response = await fetch(API_ENDPOINT.ALL);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  // eslint-disable-next-line no-unused-vars
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL);
    return response.json();
  }
}

export default RestaurantDicodingSource;
