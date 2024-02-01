// Реалізувати логіку авторизації користувача використовуючи вбудовані модальні вікна

let username;
let password;
let errors;
let isRegistation;

isRegistation = confirm("У вас є аккаунт на нашому сайті?");

if(isRegistation) {
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
} else {
    username = prompt("Введіть ваш новий логін");

    if(username) {
        password = prompt("Введіть ваш пароль");
    } else {
        errors = "Ви не ввели логін, оновіть сторінку та спробуйте знову!";
    }

    if(password) {
        const confirmPassword = prompt('Введіть пароль повторно');
        if(password === confirmPassword) {
            alert('Регістрація успішна! Вітаємо на сторінці!')
        } else {
            errors = 'Помилка! Паролі не співпадають. Оновіть сторінку'
        }
    } else {
        errors = "Ви не ввели пароль, оновіть сторінку та спробуйте знову!";
    }   
}



if (errors) {
    alert(errors);
}