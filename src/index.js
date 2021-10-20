import './style.css';

const foodApi = 'https://themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const mealList = document.querySelector('.meal-list');

const getMeals = async () => {
  const response = await fetch(`${foodApi}`);
  const data = await response.json();
  const meal = data.meals.slice(0, 9);
  console.log(meal, 'Hello World', meal.length);
  return meal;
};
const loadData = async () => {
  const displayData = await getMeals();
  let display = '';
  displayData.forEach((element) => {
    display += `   
    <li id=${element.idMeal}>
    <img src=${element.strMealThumb} alt="Food">
    <h4>${element.strMeal}<i class="far fa-heart"></i></h4>
    <button type="submit">Comments</button>
    </li>`;
    mealList.innerHTML = display;
  });
};
window.addEventListener('DOMContentLoaded', loadData);
