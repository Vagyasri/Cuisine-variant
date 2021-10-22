const commentId = 'KrIM1SfJgCtztyQoatez';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const commentUrl = `${baseUrl}${commentId}/comments`;

const getComments = async () => {
  const response = await fetch(commentUrl);
  const data = await response.json();
  return data;
};

// const addComment = async (date, name, comment) => {
//   fetch(commentUrl, {
//     method: 'POST',
//     mode: 'cors',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       creation_date: date.value,
//       username: name.value,
//       comment: comment.value,
//     }),
//   })
//     .then((response) => response.json())
//     .then(async () => {
//       const allComments = await getComments();
//       // eslint-disable-next-line no-use-before-define
//       displayComment(allComments);
//     });
// };

const displayComment = () => {
  const form = document.forms['form-dom'];
  const name = document.querySelector('.userName');
  const comment = document.querySelector('.userComment');
  // const x = `?item_id=${name.id}`;
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(commentUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: name.id,
        username: name.value,
        comment: comment.value,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.text()).then((data) => {
      console.log(data);
      const commentList = document.querySelector('.comment-list');
      const listContent = document.createElement('li');
      listContent.classList = 'list-content';
      listContent.innerText = `${name.value} : ${comment.value}`;
      name.value = '';
      comment.value = '';
      commentList.appendChild(listContent);
    });
    // addComment();
  });
};

export default displayComment;