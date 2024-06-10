'use strict';

const nameOutput = document.querySelector('#name-output');

const nameInput = document.querySelector('#name-input');

nameInput.addEventListener('input', event => {
  if (event.currentTarget.value.trim() !== '') {
    nameOutput.textContent = event.currentTarget.value.trim();
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
