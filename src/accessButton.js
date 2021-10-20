// eslint-disable-next-line import/no-cycle
import displayPop from './comment.js';

const accessComment = () => {
  const popUp = document.querySelector('.pop');
  popUp.addEventListener('click', displayPop);
};

export default accessComment;