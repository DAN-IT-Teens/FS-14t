const arr = new Array();
const arr1 = [];

// Створення пустого масиву

const arr2 = [
    false,
    true,
    "",
    undefined,
    null,
    0,
    2,
    5,
];

const arrNames = [
    'Іван', // 0
    "Микита", // 1
    "Микола", // 2
    "Анастасія", // 3
    "Вікторія", // 4
    "Ірина", // 5
]

console.log(arrNames[3]); // "Анастасія"

arrNames[3] = "Олексій";

console.log(arrNames[3]); // "Олексій";

console.log(arrNames.length) // "6"

console.log(arrNames[arrNames.length - 1]); // "Ірина"

console.log(arrNames.at(-1));

console.log(arrNames);

arrNames.push("Ростислав"); // Додано "Ростислав" в кінці

arrNames.push("Наталія", "Каміла"); // Додано "Наталія" та "Каміла" в кінці

console.log(arrNames);

arrNames.pop(); // Видалено "Каміла" в кінці

arrNames.unshift("Каміла"); // Додано "Каміла" в початку

arrNames.shift(); // Видалено "Каміла" в початку

console.log(arrNames);

for(let i = 0; i < arrNames.length; i++) {
    console.log(arrNames[i]);
}