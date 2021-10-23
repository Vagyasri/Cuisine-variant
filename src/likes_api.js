const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiId = 'PPe1jteASeyGFemQLBaU/likes';

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
  return returnObject;
};

const getLikes = async () => {
  const res = await fetch(`${involvementApi}${apiId}`);
  return res.json();
};

const allHearts = async () => {
  const allLikes = document.querySelectorAll('.like');
  console.log(allLikes);
  allLikes.forEach((like) => {
    like.addEventListener('click', async (e) => {
      const id = e.target.getAttribute('data-id');
      await likeId(id);
      const allLikesArray = await getLikes();
      localStorage.setItem('likes', JSON.stringify(allLikesArray));
      const getNewLikes = allLikesArray.find((element) => element.item_id === id).likes;
      like.parentElement.querySelector(`#like${id}`).textContent = `${getNewLikes} Likes`;
    });
  });
};

const likesDisplay = async () => {
  const allLikesArray = await getLikes();
  allLikesArray.forEach((obj) => {
    document.querySelector(`#like${obj.item_id}`).textContent = `${obj.likes} Likes`;
  });
};

export { allHearts, likesDisplay };