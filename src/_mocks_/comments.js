const commentsCounter = async () => {
  const result = Promise.resolve(
    new Array(14).fill({
      comment: 'Indian Cuisine',
      creation_date: '2021-10-23',
      username: 'Lucky',
    }),
  );
  return result;
};

export default commentsCounter;