const refs = {
  bodyEl: document.querySelector('body'),
  buttonEl: document.querySelector('.change-color'),
  spamEl:document.querySelector('.color')
}

refs.buttonEl.addEventListener('click', getRandomHexColor);

let colorEl;

function getRandomHexColor() {
  colorEl = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  refs.bodyEl.style.backgroundColor = colorEl;
  refs.spamEl.innerHTML = colorEl;
};