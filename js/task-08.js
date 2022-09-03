const refs = {
    formEl: document.querySelector('.login-form')
};

refs.formEl.addEventListener('submit', formEvent);

function formEvent(event) {
    event.preventDefault();

    const ev = event.currentTarget.elements;

    const formData = new FormData(event.currentTarget);
    
    if (ev.password.value === '' || ev.email.value === '') {
        alert('Пожалуйста, заполните все поля!!!')
    } else {
        formData.forEach((value, name) => {
            console.log(`${name}:${value}`)
        });
        event.currentTarget.reset();
    } 
};