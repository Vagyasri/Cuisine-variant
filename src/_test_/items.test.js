/**
 * @jest-environment jsdom
 */

import mealsMock from '../_mocks_/items.js';

test('Should count the total number of meals', async () => {
  const meals = await mealsMock();
  const count = meals.length;
  expect(count).toBe(14);
});

// test('Should count the total number of meals', () => {
//   const meals = totalItems();
//   const count = meals.length;
//   expect(count).toHaveLength(14);
// });

// describe('test for item counter function', () => {
//   test('count total items', () => {
//     const counterItems = [
//       { idCategory: '1' },
//       { idCategory: '2' },
//       { idCategory: '4' },
//       { idCategory: '5' },
//       { idCategory: '6' },
//       { idCategory: '7' },
//       { idCategory: '8' },
//       { idCategory: '9' },
//       { idCategory: '10' },
//       { idCategory: '11' },
//       { idCategory: '12' },
//     ];
//     totalItems().then(() => {
//       expect(counterItems.length).toHaveLength(12);
//     });
//   });
// });