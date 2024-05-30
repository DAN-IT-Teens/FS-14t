class Task {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this._resolved = false;
        console.log(`Створена задача - ${this.title}.`);
    }

    get resolved() {
        return this._resolved ? "Виконано" : "Не виконано";
    }

    set resolved(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._resolved = value;
        } else {
            console.error("Помилка! Вкажіть корренктне значення true або false");
        }
    }

    complete() {
        if(this._resolved) {
            console.error("Задача вже виконана! Дія не можлива!")
        } else {
            this.resolved = "true";
            console.log(`Задачу ${this.title} виконано!`);
        }
    }
}

const task1 = new Task("Перша задача", "Це опис першої задачі");

console.log(task1);
console.log(task1.resolved);
task1.complete();
console.log(task1.resolved);