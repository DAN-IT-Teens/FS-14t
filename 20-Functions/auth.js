// Створити сторінку авторизації

const userList = [
    {
        login: "admin",
        password: "admin",
        name: "Адміністратор Іван"
    },
    {
        login: "superuser",
        password: "superuser",
        name: "Власник Олег"
    },
    {
        login: "user",
        password: "user1",
        name: "Користувач Невідомий"
    },
]
const erorrs = {};

function auth() {
    const currentLogin = prompt("Ваш логін: ");
    const currentPassword = prompt("Ваш пароль: ");
    if(currentLogin === "" && currentPassword === "") {
        erorrs.auth = "Логін або пароль не введені.";
    } else {
        const resultVerify = verifyAuth(currentLogin, currentPassword);
        console.log(resultVerify);
    }

    if(erorrs.length !== 0) {
        checkErrors();
        return false;
    }
}

function verifyAuth(login, password) {
    for(let i = 0; i < userList.length; i++) {
        const currentUser = userList[i];
        if(currentUser.login === login) {
            if(currentUser.password === password) {
                return true
            }
        }
    }

    return false
}


function checkErrors() {
    for(let key in erorrs) {
        const errorText = erorrs[key];
        console.error(`Помилка!! Тип помилки: ${key}. Текст: ${errorText}`);
    }
}

auth();