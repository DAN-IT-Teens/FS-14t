// 5. Запитувати у користувача логін, поки він не введе "admin"
// Danil Shramko

let i;
while(i) {
    i = prompt('Enter you login')
    if(i === 'admin') {
        alert('true')
        break
    } else {
        i = undefined
    }
}