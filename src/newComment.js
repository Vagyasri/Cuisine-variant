const commentId = 'KrIM1SfJgCtztyQoatez';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const commentUrl = `${baseUrl}${commentId}/comments`;

const commentAccess = async (id) => {
  const getPath = `?item_id=${id}`;
  const finalUrl = await fetch(`${commentUrl}${getPath}`);
  const finalResult = await finalUrl.json();

  finalResult.forEach((result) => {
    const commentCount = document.querySelector('.comments-count');
    const commentList = document.querySelector('.comment-list');
    const listContent = document.createElement('li');
    listContent.classList = 'list-content';
    listContent.innerText = `${result.creation_date} ${result.username}: ${result.comment}`;
    commentCount.innerText = `(${finalResult.length} Comments)`;
    result.username = '';
    result.comment = '';
    commentList.appendChild(listContent);
  });
};

const displayComment = () => {
  const form = document.forms['form-dom'];
  const name = document.querySelector('.userName');
  const comment = document.querySelector('.userComment');
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
    }).then((response) => response.text()).then(async () => {
      await commentAccess(name.id);
      name.value = '';
      comment.value = '';
    });
  });
};

export { displayComment, commentAccess };