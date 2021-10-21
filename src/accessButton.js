// eslint-disable-next-line import/no-cycle
import displayPop from './comment.js';

const accessComment = () => {
  const popUps = [...document.querySelectorAll('.pop')];
  popUps.forEach((popUp) => {
    popUp.addEventListener('click', () => {
      const { id } = popUp;
      displayPop(id);
    });
  });
};

export default accessComment;