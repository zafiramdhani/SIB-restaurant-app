/* eslint-disable no-undef */
import FavoriteRestaurantDB from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

describe('Unfavorite a restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantDB.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
  });

  afterEach(async () => {
    await FavoriteRestaurantDB.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  // {+} TEST 1 (SHOW UNFAVORITE BUTTON)
  it('Should show the unfavorite button when a restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="Remove from favorite"]'))
      .toBeTruthy();
  });

  // {+} TEST 2 (SHOULD NOT SHOW FAVORITE BUTTON)
  it('Should not show favorite button when a restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="Add to favorite"]'))
      .toBeFalsy();
  });

  // {+} TEST 3 (DELETE FAVORITED RESTAURANT)
  it('Should be able to delete favorited restaurant', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('[aria-label="Remove from favorite"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantDB.getAllRestaurant()).toEqual([]);
  });

  // {+} TEST 4 {UNFAVORITE A RESTAURANT THAT IS NOT IN THE LIST}
  it('Should not throw error if unfavorited restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    await FavoriteRestaurantDB.deleteRestaurant('rqdv5juczeskfw1e867');
    document.querySelector('[aria-label="Remove from favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDB.getAllRestaurant()).toEqual([]);
  });
});
