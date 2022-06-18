/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unfavoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Favoriting a restaurant', async ({ I }) => {
  I.seeElement('#all-content');
  I.amOnPage('/');
  I.waitForElement('.res', 10);
  I.seeElement('.restaurant-name a');

  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#favorite-button', 10);
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.res');
  const favoritedRestaurantName = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  I.click(firstRestaurant);
  I.waitForElement('#favorite-button', 10);
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
});
