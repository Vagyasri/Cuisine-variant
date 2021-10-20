const baseUrl = 'https://themealdb.com/api/json/v1/1/lookup.php?i=';
const mealId = 52772;
const mealUrl = `${baseUrl}${mealId}`;

const getData = async () => {
  const response = await fetch(mealUrl);
  const meals = await response.json();
  return meals;
};

export { getData, mealUrl };

// (async () => {
//     const initialScores = await getData();
//     display(initialScores.result);
//   })();
