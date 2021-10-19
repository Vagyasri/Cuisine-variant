const commentSection = document.querySelector('.comment-popup');

const display = () => {
  commentSection.innerHTML = `<div class="popup-bottom">
        <h3> Meal name<h3>
        <img src="#" alt="Meal Image" class="meal-img">
        <img src="#" alt="heart-icon">likes</img>
        <p class="ingredients"> Ingredients </p>
    </div>
    
    <form class="popup-bottom">
    <input type="text" class="userName" id="name-id" name="user-name" placeholder="Type Your Name" required>
    <textarea class="userComment" id="comment-id" name="comment-name" placeholder="Comment here ..." rows="10" cols="50" required></textarea>
    <button type="submit" class="comm-sub">Submit</button>
    </form>
    <ul class="comment-list"> </ul>
    <p>comment counts</p>`;
};

export default display();
