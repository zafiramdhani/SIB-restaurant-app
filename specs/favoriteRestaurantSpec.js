/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import FavoriteRestaurantDB from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

describe('Favorite a restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  // {+} TEST 1 (FAVORITE A RESTAURANT)
  it('Should show the favorite button when a restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="Add to favorite"]'))
      .toBeTruthy();
  });

  // {+} TEST 2 (MAKE SURE UNFAVORITE BUTTON IS NOT DISPLAYED)
  it('Should not show the unfavorite button when the movie has not been liked before', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="Remove from favorite"]'))
      .toBeFalsy();
  });

  // {+} TEST 3 (CHECK IF IT'S ABLE TO FAVORITE A RESTAURANT)
  it('Should be able to favorite a restaurant', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantDB.getRestaurant('rqdv5juczeskfw1e867');

    expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e867' });
    FavoriteRestaurantDB.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  // {-} TEST 4 (SHOULD NOT ADD RESTAURANT IF IT'S ALREADY FAVORITED)
  it('Should not add restaurant again if it\'s already favorited', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    await FavoriteRestaurantDB.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDB.getAllRestaurant()).toEqual([{ id: 'rqdv5juczeskfw1e867' }]);
    FavoriteRestaurantDB.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  // {-} TEST 5 (CHECK IF A RESTAURANT HAVE NO ID)
  it('Should not add restaurant if it has no id', async () => {
    await TestFactories.createFavoriteButtonWithRestaurant({});

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantDB.getAllRestaurant()).toEqual([]);
  });
});
