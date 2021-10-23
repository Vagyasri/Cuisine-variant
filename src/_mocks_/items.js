const mealsMock = () => {
  const result = Promise.resolve(
    new Array(14).fill({
      idMeal: '52959',
      strMeal: 'Mock for meal counter',
      strMealThumb: 'https://themealdb.com/api/json/v1/1/categories.php',
    }),
  );
  return result;
};

export default mealsMock;
