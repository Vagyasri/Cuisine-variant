import './style.css';
import Icon from './Images/logo-small.jpeg';

const element = document.querySelector('.logo');
function component() {
  const image = document.createElement('div');

  const myIcon = new Image();
  myIcon.src = Icon;

  image.appendChild(myIcon);

  return image;
}

element.appendChild(component());