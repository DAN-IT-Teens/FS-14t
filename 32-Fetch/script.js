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

btn.addEventListener('click', () => {
    const value = input.value === '' ? undefined : input.value;
    const list = document.querySelector('.container');
    list.textContent = "";

   const request = fetch(`https://swapi.dev/api/people/${value}/`)
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