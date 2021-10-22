const commentId = 'KrIM1SfJgCtztyQoatez';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const commentUrl = `${baseUrl}${commentId}/comments/`;

const getComments = async () => {
  const response = await fetch(commentUrl);
  const data = await response.json();
  return data;
};

const addComment = () => {
  const name = document.querySelector('.userName');
  const comment = document.querySelector('.userComment');
  fetch(commentUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      creation_date: Date.now(),
      username: name.value,
      comment: comment.value,
    }),
  })
    .then((response) => response.json())
    .then(async () => {
      const allComments = await getComments();
      name.value = '';
      comment.value = '';
      // eslint-disable-next-line no-use-before-define
      displayComment(allComments.result);
    });
};

const displayComment = (data) => {
  const form = document.forms['form-dom'];
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment();
  });
  const commentList = document.querySelector('.comment-list');
  const listContent = document.createElement('li');
  listContent.classList = 'list-content';
  listContent.innerText = `${data.creation_date} ${data.username} : ${data.comment}`;
  commentList.appendChild(listContent);
};

export { addComment, displayComment };