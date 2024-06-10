'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', submit);

const obj = {};

function submit(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    return console.log('Please fill in all the fields!');
  }
  obj.email = email;
  obj.password = password;

  form.reset();
  return console.log(obj);
}
