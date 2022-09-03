const refs = {
    inputEl: document.querySelector('#font-size-control'),
    spamEl: document.querySelector('#text')
};

refs.inputEl.addEventListener('input', makeRange);

let rangeEl = 0;

function makeRange(event) {
    rangeEl = event.currentTarget.value;
    refs.spamEl.style.fontSize = `${Number(rangeEl)}px`;
};
