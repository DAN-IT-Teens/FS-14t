const objectUser = {
    name: "Sviatoslav",
    age: 21,
    id: 2,
    city: 'Kyiv'
}

function showInfo(user) {
    console.log(`My name is ${user.name}. My id: ${user.id}`);
    console.log(`I am ${user.age} years old. Live in ${user.city}.`);
}

showInfo(objectUser);