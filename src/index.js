import './style.css';
import display from './comment.js';
import { getData } from './create.js';

const popUp = document.querySelector('.pop');

popUp.addEventListener('click', display);

console.log(getData());