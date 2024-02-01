// дії калькулятора + - * / 

const action = prompt("Яку дію виконати? ( + - / * ) ");
if(action == "+" || action == "-" || action == "*" || action == "/") {

    const num1 = +prompt("Введіть перше число: ");
    const num2 = +prompt("Введіть друге число: ");

    if(isNaN(num1) || isNaN(num2)) {
        alert('Ви ввели не число, оновіть сторінку та спробуйте ще раз!');
    } else {
        switch(action) {
            case "+":
                console.log(num1 + num2);
                break;
            case "-":
                console.log(num1 - num2);
                break;
            case "*":
                console.log(num1 * num2);
                break;
            case "/":
                console.log(num1 / num2);
                break;
        }
    }
} else {
    alert("Ви ввели недоступну дію, доступні дії: + - * / ")
}

// &&