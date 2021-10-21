// eslint-disable-next-line import/no-cycle
import accessComment from './accessButton.js';
import { allHearts, likesDisplay } from './likes_api.js';

const foodApi = 'https://themealdb.com/api/json/v1/1/categories.php';
const mealList = document.querySelector('.meal-list');

const getMeals = async () => {
  const response = await fetch(`${foodApi}`);
  const data = await response.json();
  const meal = data.categories;
  return meal;
};

const loadData = async () => {
  const displayData = await getMeals();
  let display = '';
  displayData.forEach((element) => {
    display += `   
    <li id="${element.idCategory}">
    <img src="${element.strCategoryThumb}" alt="Food">
    <h4>${element.strCategory}</h4>
    <i data-id="${element.idCategory}" class="far fa-heart like"></i>
    <span id="like${element.idCategory}" class="likes-count"></span>
    <button type="submit" class="pop" id="${element.idCategory}">Comments</button>
    </li>`;
  });
  mealList.innerHTML = display;
  allHearts();
  accessComment();
  await likesDisplay();
};

export { loadData, getMeals };