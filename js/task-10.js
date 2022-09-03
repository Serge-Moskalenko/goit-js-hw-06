const refs = {
  controlsEl: document.querySelector('#controls'),
  buttonEl: document.querySelectorAll('button'),
  boxEl: document.querySelector('#boxes')
};

let amount = 0;

refs.controlsEl.firstElementChild.addEventListener('input', event => amount = event.currentTarget.value);

refs.buttonEl[0].addEventListener('click', () => { createBoxes(amount) });

function createBoxes(amount) {
  for (let i = 0, boxDef = 30; i < amount; i += 1,boxDef += 10){
    const box = document.createElement('div');
    box.style.width = `${boxDef}px`;
    box.style.height = `${boxDef}px`;
    box.style.backgroundColor = getRandomHexColor();

    refs.boxEl.append(box);
  }
};

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

refs.buttonEl[1].addEventListener('click', () => refs.boxEl.innerHTML = '');