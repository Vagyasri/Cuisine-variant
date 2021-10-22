// eslint-disable-next-line import/no-cycle
import { getMeals } from './displayImage.js';

const commentSection = document.querySelector('.comment-popup');

const displayPop = async (index) => {
  const meals = await getMeals();
  commentSection.innerHTML = `
  <div class="popup-top">
  <button class="close"> Close </button>
    <div class="meal-data">
    <img src="${meals[index - 1].strCategoryThumb}" alt="s Image" class="meal-img">
    <h3> ${meals[index - 1].strCategory} <h3>
    </div>

    <p class="description"> ${meals[index - 1].strCategoryDescription} </p>

    <div class="user-comments">
    <h3> Comments (count) </h3>
    <span class="comments-count"></span>
    <ul class="comment-list"> </ul>
    </div>
</div>

<form class="popup-bottom">
<h3> Add your comment</h3>
<input type="text" class="userName" id="name-id" name="user-name" placeholder="Type Your Name" required>
<textarea class="userComment" id="comment-id" name="comment-name" placeholder="Comment here ..." rows="10" cols="50" required></textarea>
<button type="submit" class="comm-sub">Submit</button>
</form>`;

  const popupWrapper = document.querySelector('.popup-wrapper');
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popupWrapper.classList.remove('show');
  });
};

export default displayPop;
