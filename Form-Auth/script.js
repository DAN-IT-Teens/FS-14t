const inputEmail = document.querySelector(".input-email");
const inputPassword = document.querySelector(".input-password");

const buttonLogin = document.querySelector(".login-button");

buttonLogin.onclick = function () {
    const errors = document.querySelector('.errors');

    if(inputEmail.value === "") {
        errors.textContent = "Ви не ввели email!";
    } else {
        errors.textContent = "";
    }

    if(inputPassword.value === "") {
        errors.textContent = "Ви не ввели password!";
    } else {
        errors.textContent = "";
    }

    if(inputEmail.value === "" && inputPassword.value === "") {
        errors.textContent = "Ви не ввели email та password!";
    }
    
    console.log(inputEmail.value);
    console.log(inputPassword.value);
}