const currentPlayer = document.querySelector('#currentPlayer');
const playButton = document.querySelector('#start');

const gameField = document.querySelector('.game-field');

const fieldList = document.querySelectorAll('.field');

let player;

const winnerFields = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
];

function generateFields() {
    for(let i = 0; i < 9; i++) {
        const field = document.createElement('div');
        field.className = 'field';
        field.id = i;
        gameField.append(field);
    }
}

function trakingFields() {
    gameField.addEventListener('click', (event) => {
        const currentField = event.target;
    
        if(currentField.textContent === "") {
            currentField.textContent = player;

            if(player === "X") {
                player = "0";
            } else {
                player = "X";
            }

            currentPlayer.textContent = player;
        }

    })
}

function startGame(event) {
    event.target.style.display = "none";
    generateFields();
    player = "X";
    currentPlayer.textContent = "X";
    trakingFields();
}

playButton.addEventListener('click', startGame);