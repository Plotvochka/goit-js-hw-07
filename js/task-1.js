'use strict';

const categoriesName = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesName.length}`);

categoriesName.forEach(num => {
  const article = num.querySelector('h2').textContent;
  const numberOfPositions = num.querySelectorAll('ul > li').length;
  console.log(`Category : ${article}`);
  console.log(`Elements : ${numberOfPositions}`);
});
