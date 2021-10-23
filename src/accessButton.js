// eslint-disable-next-line import/no-cycle
import displayPop from './comment.js';
import { commentAccess } from './newComment.js';

const popupWrapper = document.querySelector('.popup-wrapper');

const accessComment = () => {
  const popUps = [...document.querySelectorAll('.pop')];
  popUps.forEach((popUp) => {
    popUp.addEventListener('click', () => {
      popupWrapper.classList.add('show');
      const { id } = popUp;
      displayPop(id);
      commentAccess(id);
    });
  });
};

export default accessComment;