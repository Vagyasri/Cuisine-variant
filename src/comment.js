// eslint-disable-next-line import/no-cycle
import { getMeals } from './displayImage.js';
import { displayComment } from './newComment.js';

const commentSection = document.querySelector('.comment-popup');

const displayPop = async (index) => {
  const meals = await getMeals();
  commentSection.innerHTML = `
  <div class="popup-top">
  <button class="close"> <i class="fas fa-times"></i> </button>
    <div class="meal-data">
    <img src="${meals[index - 1].strCategoryThumb}" alt="s Image" class="meal-img">
    <h3> ${meals[index - 1].strCategory} <h3>
    </div>

    <p class="description"> ${meals[index - 1].strCategoryDescription} </p>

    <div class="new-comments">
    <h3> Comments <span class="comments-count"></span> </h3>
    <ul data-id="${meals[index - 1].idCategory}" class="comment-list"> </ul>
    </div>
</div>

  <form class="popup-bottom" name="form-dom">
  <h3> Add your comment</h3>
  <input type="text" class="userName" id="${meals[index - 1].idCategory}" name="user-name" placeholder="Type Your Name" required>
  <textarea class="userComment" id="comment-id" name="comment-name" placeholder="Comment here ..." rows="10" cols="50" required></textarea>
  <button type="submit" class="comm-sub">Submit</button>
  </form>`;

  const popupWrapper = document.querySelector('.popup-wrapper');
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popupWrapper.classList.remove('show');
  });
  displayComment();
};

export default displayPop;
