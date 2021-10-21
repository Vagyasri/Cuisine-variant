const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiId = 'mzNfNflh4BGiNqUNLXME/likes';

const likeId = async (id) => {
  const response = await fetch(`${involvementApi}${apiId}`,
    {
      method: 'POST',
      body: JSON.stringify({
        // eslint-disable-next-line quote-props
        'item_id': id,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
  const returnObject = await response.json;
  // console.log(returnObject);
  return returnObject;
};

const getLikes = async () => {
  const res = await fetch(`${involvementApi}${apiId}`);
  return res.json();
};

const spanCount = document.querySelector('.likes-count');
console.log(spanCount);

const allHearts = async () => {
  const allLikes = document.querySelectorAll('.like');
  allLikes.forEach((like) => {
    like.addEventListener('click', async (e) => {
      const id = e.target.getAttribute('data-id');
      const likeObject = await likeId(id);
      // console.log(likeObject);
      const allLikesArray = await getLikes();
      const getNewLikes = allLikesArray.find((element) => element.item_id === id).likes;
      // count.innerText = `${getNewLikes}`;
      console.log(getNewLikes);
    });
  });
};

export default allHearts;
