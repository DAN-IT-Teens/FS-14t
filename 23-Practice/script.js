// 1. Передбачений список слів які можна використати
// 2. Порахувати кількість букв в обраному слові та відобразити користувачу
// 3. Запитувати в користувача букву для відгадування слова
// 4. Перевірити наявність букви в слові, якщо так - відобразити
// якщо ні - ми пишемо про мінусування спроби
// Потрібно враховувати вже використану букву, якщо така була спроба не мінусується.
// 5. Якщо користувач вгадав слово - привітаємо, якщо ні - то повідомимо про поразку.

const listWords = [
    "ПРОГРАММА",
    "навчання",
    "ручка",
    "телефон"
];

function selectRandomWord(array) {
    const currentRandomNumber = Math.floor(Math.random() * array.length);
    return array[currentRandomNumber];
}

function selectedAnswerArray(word) {
    let answerArray = [];
    for(let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

function startGame() {
    const selectedWord = selectRandomWord(listWords);
    const answerWordArray = selectedAnswerArray(selectedWord);
    let remainingLetters = selectedWord.length;
    let remainingAttempt = 5;

    while (remainingAttempt > 0 && remainingLetters > 0) {
        alert(`Вітаємо! Ваше слово: ${answerWordArray.join(" ")}`);
        const currentLetter = prompt("Напишіть літеру, або натисніть 'Отмена' для завершення гри");

        if(currentLetter === null) {
            break;
        } else if(currentLetter.length !== 1) {
            alert("Введіть тільки 1 літеру!");
        } else {
            let isFindedLetter = false;

            for(let i = 0; i < selectedWord.length; i++) {
                if(selectedWord[i].toLowerCase() === currentLetter.toLowerCase()) {
                    isFindedLetter = true;
                    answerWordArray[i] = currentLetter.toLowerCase();
                    remainingLetters--;
                }
            }

            if (!isFindedLetter) {
                remainingAttempt--;
                alert(`У вас залишилось ${remainingAttempt} спроби з 5.`);
                alert(`Нажаль, літера ${currentLetter} не знаходиться в цьому слові..`);
            }

        }
    }

    if(remainingAttempt === 0) {
        alert("Нажаль ви програли! Слово яке було потрібно вгадати: " + selectedWord);
    } else {
        alert("Вітаємо ви відгадали слово: " + selectedWord);
    }
}

startGame();


