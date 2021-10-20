// eslint-disable-next-line import/no-cycle
import accessComment from './accessButton.js';

const foodApi = 'https://themealdb.com/api/json/v1/1/categories.php';
const mealList = document.querySelector('.meal-list');

const getMeals = async () => {
  const response = await fetch(`${foodApi}`);
  const data = await response.json();
  const meal = data.categories.slice(0, 9);
  return meal;
};
const loadData = async () => {
  const displayData = await getMeals();
  let display = '';
  displayData.forEach((element) => {
    const check = element.completed ? 'checked' : '';
    display += `   
    <li id=${element.idCategory}>
    <img src=${element.strCategoryThumb} alt="Food">
    <h4>${element.strCategory}</h4>
    <i class="far fa-heart like">${check}</i>
    <button type="submit" class="pop">Comments</button>
    </li>`;
    mealList.innerHTML = display;
    accessComment();
  });
};

export { loadData, getMeals };