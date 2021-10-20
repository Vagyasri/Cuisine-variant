import accessComment from './accessButton.js';

const foodApi = 'https://themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const mealList = document.querySelector('.meal-list');

const getMeals = async () => {
  const response = await fetch(`${foodApi}`);
  const data = await response.json();
  const meal = data.meals.slice(0, 9);
  return meal;
};
const loadData = async () => {
  const displayData = await getMeals();
  let display = '';
  displayData.forEach((element) => {
    const check = element.completed ? 'checked' : '';
    display += `   
    <li id=${element.idMeal}>
    <img src=${element.strMealThumb} alt="Food">
    <h4>${element.strMeal}</h4>
    <i class="far fa-heart like">${check}</i>
    <button type="submit" class="pop">Comments</button>
    </li>`;
    mealList.innerHTML = display;
    accessComment();
  });
};

export default loadData;