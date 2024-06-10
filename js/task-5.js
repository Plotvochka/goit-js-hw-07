'use strict';

const bodyBackground = document.querySelector('body');
const btnColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btnColor.addEventListener('click', changeBg);

function changeBg() {
  bodyBackground.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
