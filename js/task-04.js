const refs = {
    counterValue : document.querySelector('#value'),
    actionsRemoveValue : document.querySelector('[data-action="decrement"]'),
    actionAddValue: document.querySelector('[data-action="increment"]'),
    resaltEl: document.querySelector('#counter')
};

let resalt = 0;

refs.actionAddValue.addEventListener('click', addValue);
function addValue() {
  resalt += Number(refs.actionAddValue.textContent);
  refs.counterValue.textContent = resalt;
};

refs.actionsRemoveValue.addEventListener('click', removeValue);
function removeValue() {
  resalt -= Number(refs.actionAddValue.textContent);
  refs.counterValue.textContent = resalt;
};