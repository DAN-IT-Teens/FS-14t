let list = [
    {
        id: 0,
        title: "Task 1",
        text: "Task 1 description",
        resolved: false
    },
    {
        id: 1,
        title: "Task 2",
        text: "Task 2 description",
        resolved: false
    },
    {
        id: 2,
        title: "Task 3",
        text: "Task 3 description",
        resolved: false
    }
]

function createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    if (text) {
        element.textContent = text;
    }
    return element;
}


function createCard({title, text, resolved, id}) {
    const card = createElement('div', 'card');
    const cardBody = createElement('div', 'card-body');
    const cardTitle = createElement('h5', 'card-title', title);
    const cardText = createElement('p', 'card-text', text);
    const btnSuccess = createElement('button', 'btn btn-success', 'Виконано');
    btnSuccess.addEventListener("click", () => {
        list[id].resolved = true;
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
    list.forEach((item) => {
        container.append(createCard(item));
    })
}

updateList();