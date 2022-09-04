const refs = {
    inputEl: document.querySelector('#validation-input')
};

refs.inputEl.addEventListener('blur', eventOnImput);

function eventOnImput(event) {
  const ev = event.currentTarget;


  if (String(ev.value.length) === refs.inputEl.dataset.length) {
    ev.classList.remove('invalid');
    ev.classList.add('valid');
    return;
    }
    ev.classList.remove('valid')
    ev.classList.add('invalid');
};