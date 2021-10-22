const commentId = 'KrIM1SfJgCtztyQoatez';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const commentUrl = `${baseUrl}${commentId}/comments/`;

const getComments = async () => {
  const response = await fetch(commentUrl);
  const data = await response.json();
  return data;
};

export default getComments;