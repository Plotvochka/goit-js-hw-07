'use strict';

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  box.innerHTML = '';
  if (input.value >= 1 && input.value <= 100) {
    for (let i = 0; i < input.value; i++) {
      const boxes = `<div style="width: ${size}px;height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
      box.insertAdjacentHTML('beforeend', boxes);
      size += 10;
    }
    input.value = '';
  }
}

function destroyBoxes() {
  box.innerHTML = '';
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
