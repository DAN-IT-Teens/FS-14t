// Створити обʼєкт студента, який містить властивості firstName, lastName, tabel
// В властивості tabel створити обʼєкт який буде містити в собі декілька
// властивостей з назвою предмету та оцінкою як значення.
// Створити метод пошуку оцінки конкретного предмету по назві.
// Порахувати середній бал всіх оцінок, створити метод.


const student = {
    firstName: "Ivan",
    lastName: "Ivanov",
    tabel: {
        math: 50,
        history: 80,
        english: 100
    }
}

let listSubjects = [];
let sumNumbers = 0;

for(let key in student.tabel) {
    listSubjects.push(key);
}

const selectedSubject = prompt(`В студента доступні такі предмети: ${listSubjects}. Оберіть зі списку`);

if(student.tabel.hasOwnProperty(selectedSubject)) {
    console.log(student.tabel[selectedSubject])
}

for(let key in student.tabel) {
    sumNumbers += student.tabel[key];
}

console.log(`Середній бал студента: ${sumNumbers / listSubjects.length}`);

