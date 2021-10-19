// const getMeal = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);

// const getComment = async () => {
//   const response = await fetch(getMeal);
//   const data = await response.json();
//   return data;
// };

const commentSection = document.querySelector('.comment-popup');

const display = () => {
  const topPart = document.createElement('div');
  const mealName = document.createElement('h3');
  const mealImage = document.createElement('img');
  const ingredients = document.createElement('p');
  const bottomPart = document.createElement('form');
  const userName = document.createElement('input');
  const userComment = document.createElement('textarea');
  const commentSubmit = document.createElement('button');

  userName.type = 'text';
  userName.class = 'userName';
  userName.id = 'text';
  userName.name = 'text';
  userName.placeholder = 'Type Your Name';
  userName.required = true;

  userComment.class = 'userComment';
  userComment.id = 'text';
  userComment.name = 'text';
  userComment.placeholder = 'Comment here ...';
  userComment.rows = '10';
  userComment.cols = '50';
  userComment.required = true;

  commentSubmit.type = 'submit';
  commentSubmit.innerText = 'Submit';

  topPart.appendChild(mealName);
  topPart.appendChild(mealImage);
  topPart.appendChild(ingredients);
  bottomPart.appendChild(userName);
  bottomPart.appendChild(userComment);
  bottomPart.appendChild(commentSubmit);
  commentSection.appendChild(topPart);
  commentSection.appendChild(bottomPart);
};

export default display();
