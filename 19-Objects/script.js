let firstName1 = "Ivan";
let lastName1 = "Ivanov";
let age1 = 20;

const user1 = {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 20,
};

// console.log(firstName1);
// console.log(lastName1);
// console.log(age1);

console.log(user1);
console.log(user1.age);

user1.city = "Kyiv";

console.log(user1);

Object.freeze(user1);

user1.firstName = 'Kolya';
console.log(user1.firstName);

console.log(user1.hasOwnProperty("age"));