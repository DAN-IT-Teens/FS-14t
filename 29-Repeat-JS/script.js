let list = [
]

const form = document.querySelector('#todoForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for(const [key, value] of formData.entries()) {
        data[key] = value;
    }
    data.id = Math.floor(Math.random() * 9999999);
    list.push(data);
    updateList();
})

function createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    if (text) {
        element.textContent = text;
    }
    return element;
}


function createCard({title, text, resolved, id}, index) {
    const card = createElement('div', 'card');
    const cardBody = createElement('div', 'card-body');
    const cardTitle = createElement('h5', 'card-title', title);
    const cardText = createElement('p', 'card-text', text);
    const btnSuccess = createElement('button', 'btn btn-success', 'Виконано');
    btnSuccess.addEventListener("click", () => {
        list[index].resolved = true;
        updateList();
    })
    const btnDanger = createElement('button', 'btn btn-danger', 'Видалити');
    btnDanger.addEventListener("click" , () => {
        list = list.filter((item) => item.id !== id);
        updateList();
    })
    cardBody.append(cardTitle, cardText);
    if(resolved) {
        cardBody.append(btnDanger);
        cardTitle.classList.add('text-decoration-line-through');
        cardText.classList.add('text-decoration-line-through');
    } else {
        cardBody.append(btnSuccess);
    }
    card.append(cardBody);
    return card;
}

function updateList() {
    const container = document.querySelector('.container');
    container.textContent = "";
    list.forEach((item, index) => {
        container.append(createCard(item, index));
    })
    localStorage.setItem('todo', JSON.stringify(list));
}

const localStorageTodo = localStorage.getItem('todo');

if(localStorageTodo) {
    list = JSON.parse(localStorageTodo);
    updateList();
}

updateList();