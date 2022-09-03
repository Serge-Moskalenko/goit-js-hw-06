const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output')
};

let resalt="";

refs.inputEl.addEventListener('input', inputEvent);

function inputEvent(event) { 
    event.currentTarget.value === ''  ? resalt = "Anonymous" : resalt = event.currentTarget.value ;
    refs.spanEl.textContent = resalt;
};