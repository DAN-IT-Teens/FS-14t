function getMessage(text) {
    const type = confirm("Це буде попереджувательне повідомлення?");

    if (type) {
        alert(`Увага!!! Попередження! ${text}`);
    } else {
        alert(text);
    }
}

// getMessage("просто текст......");

const newFunc = function() {
    alert("Це анонімна функція записана в константу.")
}

newFunc();

const newFunc1 = () => {
    
}
