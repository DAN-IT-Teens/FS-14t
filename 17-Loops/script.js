for(let i = 0; i < 5; i++) {
    console.log(i);
}

let firstName; // to boolean === false

// while(!firstName) {
//     firstName = prompt('Введіть число від 0 до 10: ');
//     if(firstName < 10) {
//         firstName = undefined;
//         continue;
//     }
// }

while(!firstName) {
    firstName = prompt('Введіть число від 0 до 10: ');
    if(firstName == 5) {
        alert('Ви вгадали цифру 5')
        break;
    } else {
        firstName = undefined; // to boolean === false
    }
}

console.log(firstName);



