const commentSection = document.querySelector('.comment-popup');

const display = () => {
  commentSection.innerHTML = `<div class="popup-bottom">
        <h3> Meal name<h3>
        <img src="https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg" alt="Meal Image" class="meal-img">
        <img src="https://c.tenor.com/CePpbsVdFRMAAAAC/love-beating.gif" alt="heart-icon">likes count</img>
        <p class="instructions"> <b>Instructions<b><br>Crush the meat so that it is finite and we put it on a griddle to brown.
        Put the eggs, bacon and ham to fry.
        Cut the bread in half, put the beef brisket, the fried eggs, the bacon, the ham, the mozzarella, the tomato and the lettuce.
        Cover with the other half of the bread and serve. </p>
    </div>
    
    <form class="popup-bottom">
    <input type="text" class="userName" id="name-id" name="user-name" placeholder="Type Your Name" required>
    <textarea class="userComment" id="comment-id" name="comment-name" placeholder="Comment here ..." rows="10" cols="50" required></textarea>
    <button type="submit" class="comm-sub">Submit</button>
    </form>
    <ul class="comment-list"> </ul>
    <p class="com-count">comment counts</p>`;
};

export default display;
