import commentsCounter from '../_mocks_/comments.js';

test('Should count the total number of comments', async () => {
  const comments = await commentsCounter();
  const count = comments.length;
  expect(count).toEqual(18);
});