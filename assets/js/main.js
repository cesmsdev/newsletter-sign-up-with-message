const inputEmail = document.querySelector("#input-email");
const button = document.getElementById("btn-submit");
const message = document.getElementById("sign-up-message-warning");

inputEmail.addEventListener('keyup', () => {
    let value = inputEmail.value;
    let isValid = validarCorreo(value);

    if (value.length == 0 || isValid) {
        inputEmail.classList.remove("error");
        message.classList.remove("show");
        return;
    }

    if (!validarCorreo(value)) {
        inputEmail.classList.add("error");
        message.classList.add("show");
        button.setAttribute('disabled', 'true');
    }
});

document.getElementById('sign-up-form').addEventListener('submit', (event) =>{
    event.preventDefault();

    if (!validarCorreo(inputEmail.value)) {
        inputEmail.classList.add("error");
        message.classList.add("show");
        return;
    }

    
})

function validarCorreo(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}