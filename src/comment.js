// eslint-disable-next-line import/no-cycle
import { getMeals } from './displayImage.js';

const commentSection = document.querySelector('.comment-popup');

const displayPop = async () => {
  getMeals().then((getMeal) => {
    console.log(getMeal);
    commentSection.innerHTML = `<div class="popup-top">
    <div class="meal-data">
    <h3> ${getMeal[0].strCategory} <h3>
    <img src="${getMeal[0].strCategoryThumb}" alt="Meal Image" class="meal-img">
    </div>

    <div class="com-count">
    <img src="https://c.tenor.com/CePpbsVdFRMAAAAC/love-beating.gif" alt="heart-icon" class="heart-icon"> <span class="like-count">likes count</span>
    </div>

    <p class="description"> <b>Description:</b><br><br>${getMeal[0].strCategoryDescription} </p>
</div>

<form class="popup-bottom">
<input type="text" class="userName" id="name-id" name="user-name" placeholder="Type Your Name" required>
<textarea class="userComment" id="comment-id" name="comment-name" placeholder="Comment here ..." rows="10" cols="50" required></textarea>
<button type="submit" class="comm-sub">Submit</button>
</form>
<ul class="comment-list"> </ul>
<p class="com-count">comment counts</p>`;
  });
};

export default displayPop;
