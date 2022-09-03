const categoriesEl = document.querySelector('#categories');

console.log(`Number of categories:${categoriesEl.children.length}`);

console.log(`Category: ${categoriesEl.firstElementChild.firstElementChild.textContent}`);

console.log(`Elements: ${categoriesEl.firstElementChild.lastElementChild.children.length}`);

console.log(`Category: ${categoriesEl.lastElementChild.previousElementSibling.firstElementChild.textContent}`);

console.log(`Elements: ${categoriesEl.lastElementChild.previousElementSibling.lastElementChild.children.length}`);

console.log(`Category: ${categoriesEl.lastElementChild.firstElementChild.textContent}`);

console.log(`Elements: ${categoriesEl.lastElementChild.lastElementChild.children.length}`);