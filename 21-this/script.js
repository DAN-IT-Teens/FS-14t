const student1 = {
    firstName: "Ivan",
    lastName: "Ivanov",
    sumGrades: 0,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    getGrade: function(grade) {
        this.sumGrades += grade;
        return `${this.getFullName()} отримав оцінку ${grade}. Оцінку успішно записано!`;
    }
}

function newStudent(firstName, lastName) {
    return {
        firstName,
        lastName,
        sumGrades: 0,
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        getGrade: function(grade) {
            this.sumGrades += grade;
            return `${this.getFullName()} отримав оцінку ${grade}. Оцінку успішно записано!`;
        }
    }
}

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sumGrades = 0;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
    this.getGrade = function(grade) {
        this.sumGrades += grade;
        return `${this.getFullName()} отримав оцінку ${grade}. Оцінку успішно записано!`;
    };
}

const student10 = new Student("Ivan", "Ivanov");

console.log(student10);

