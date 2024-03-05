const btn1 = document.querySelector("button");
console.log("button", btn1);

const btn2 = document.querySelector('.btn');
console.log(".btn2", btn2);

const btn3 = document.querySelector('#btn');
btn3.remove()
console.log("#btn3", btn3);

const newDiv = document.createElement("div");
newDiv.className = "js-menu";
newDiv.innerHTML = "<a href='#'>ABOUT</a>";

console.log(newDiv);

document.body.append(newDiv);


const array = [
    {
        name: "MENU",
        class: "test1"
    },
    {
        name: "MENU 2",
        class: "test2"
    },
    {
        name: "MENU 3",
        class: "test3"
    },
    {
        name: "EXIT",
        class: 'exit'
    }
]

array.forEach((elem) => {

    const button = document.createElement("button");
    button.className = elem.class;
    button.textContent = elem.name;

    document.body.append(button);
})