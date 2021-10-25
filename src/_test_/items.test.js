/**
 * @jest-environment jsdom
 */

import mealsMock from '../_mocks_/items.js';

test('Should count the total number of meals', async () => {
  const meals = await mealsMock();
  const count = meals.length;
  expect(count).toBe(14);
});