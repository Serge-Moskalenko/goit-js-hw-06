const refs = {
    inputEl: document.querySelector('#validation-input')
};

refs.inputEl.addEventListener('blur', eventOnImput);

function eventOnImput(event) {
  const ev = event.currentTarget;

  return String(ev.value.length) === refs.inputEl.dataset.length
    ? ev.classList.add('valid')
    : ev.classList.add('invalid');
};