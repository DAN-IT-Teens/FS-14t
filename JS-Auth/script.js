// Реалізувати логіку авторизації користувача використовуючи вбудовані модальні вікна

let username;
let password;
let errors;

username = prompt("Введіть ваш логін");

if(username) {
    password = prompt("Введіть ваш пароль");
} else {
    errors = "Ви не ввели логін, оновіть сторінку та спробуйте знову!";
}

if(password) {
    alert('Вітаємо на сторінці!');
} else {
    errors = "Ви не ввели пароль, оновіть сторінку та спробуйте знову!";
}



if (errors) {
    alert(errors);
}

// 