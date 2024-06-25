// const request = new XMLHttpRequest();
// console.log(request.status, request.readyState);
// request.open("GET", "https://swapi.dev/api/people/2/");
// console.log(request.status, request.readyState);
// request.onreadystatechange = function () {
//     console.log(request.status, request.readyState);
//     // Запит готовий, відповідь присутня
//     if(request.status === 200 && request.readyState === 4) {
//         const response = JSON.parse(request.response);
//         console.log(response);
//     }
// };
// console.log(request.status, request.readyState);
// request.send();


// const request = fetch("https://swapi.dev/api/people/2/")
// request
//     .then((res) => res.json())
//     .then((value) => {
//         console.log(value);
//     })


const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const btnAll = document.querySelector('#btn-all');

btn.addEventListener('click', () => {
    const value = input.value === '' ? undefined : input.value;
    const list = document.querySelector('.container');
    list.textContent = "";

   const request = fetch(`https://ajax.test-danit.com/api/v2/cards/${value}`, {
        headers: {
            "Authorization": "Bearer 9a9dfcb9-fda9-4d28-9326-efe32196ba2c"
        }
    })
    request
        .then((res) => res.json())
        .then((value) => {
            const keys = Object.keys(value);

            keys.forEach((key => {
                const item = document.createElement('li');
                item.textContent = `${key} -- ${value[key]}`;
                list.append(item);
            }))

            console.log(value);
        })
})

btnAll.addEventListener('click', () => {
    const list = document.querySelector('.container');
    list.textContent = "";

    fetch("https://ajax.test-danit.com/api/v2/cards", {
        headers: {
            "Authorization": "Bearer 9a9dfcb9-fda9-4d28-9326-efe32196ba2c"
        }
    })
    .then((res) => res.json())
    .then((array) => {
        array.forEach((value) => {
            const keys = Object.keys(value);

            keys.forEach((key => {
                const item = document.createElement('li');
                item.textContent = `${key} -- ${value[key]}`;
                list.append(item);
            }))
            list.append(document.createElement("br"))
        })
    })
})