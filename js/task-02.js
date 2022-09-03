const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

const ingredientsEl = document.querySelector('#ingredients');

const liEl = [];

ingredients.forEach(ingredient => {
 const liE = document.createElement('li');
  liE.textContent = ingredient;
  liE.classList.add('item');
  return liEl.push(liE);
})

ingredientsEl.append(...liEl);