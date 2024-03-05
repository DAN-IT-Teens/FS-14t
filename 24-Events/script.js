const btn = document.querySelector('.btn');
const text = document.querySelector('#text');

btn.addEventListener('click', (event) => {
    console.log("click on btn", event);
})

document.body.addEventListener('keydown', (event) => {
    console.log(event);
    if(event.code === "KeyL") {
        console.log('work');
    }
})