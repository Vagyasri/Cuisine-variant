const baseUrl = 'https://themealdb.com/api/json/v1/1/lookup.php?i=';
const mealId = 52772;
const mealUrl = `${baseUrl}${mealId}`;

const getData = async () => {
  const response = await fetch(mealUrl);
  const mealData = await response.json();
  return mealData;
};

export default getData;