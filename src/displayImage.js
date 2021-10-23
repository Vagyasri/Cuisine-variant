// eslint-disable-next-line import/no-cycle
import accessComment from './accessButton.js';
import { allHearts, likesDisplay } from './likes_api.js';

const foodApi = 'https://themealdb.com/api/json/v1/1/categories.php';
const mealList = document.querySelector('.meal-list');
const itemList = document.querySelector('.item-list');

const getMeals = async () => {
  const response = await fetch(`${foodApi}`);
  const data = await response.json();
  const meal = data.categories;
  return meal;
};

const loadData = async () => {
  const likesStorage = JSON.parse(localStorage.getItem('likes') || '[]');
  const displayData = await getMeals();
  let display = '';
  displayData.forEach((element) => {
    let likeVariable = 0;
    likesStorage.forEach((likes) => {
      if (element.idCategory === likes.item_id) {
        likeVariable = likes.likes;
      }
    });
    display += `   
      <li id="${element.idCategory}">
      <img src="${element.strCategoryThumb}" alt="Food">
      <h4>${element.strCategory}</h4>
      <i data-id="${element.idCategory}" class="far fa-heart like"></i>
      <span id="like${element.idCategory}" class="likes-count">${likeVariable} Likes</span>
      <button type="submit" class="pop" id="${element.idCategory}">Comments</button>
      </li>`;
  });
  mealList.innerHTML = display;
  allHearts();
  accessComment();
  await likesDisplay();
};

const totalItems = (arg) => {
  let displayLength = '';
  displayLength += `
  <h3>Cuisine ${arg.length}</h3>`;
  itemList.innerHTML = displayLength;
};

const fetchData = () => {
  fetch('https://themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json())
    .then((data) => totalItems(data.categories))
    .catch((error) => new Error(error));
};
fetchData();

export { loadData, getMeals };