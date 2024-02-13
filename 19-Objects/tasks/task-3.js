// нам потрібно звенутись до товару, та перевірити и є цей товар у наявності.
// якщо так - вивести в консоль назву товару та його ціну.
// якщо ні - написати назву товару, та повідомити про відсутність

const product = {
    name: "laptop",
    price: 2500,
    availablity: true,
    gift: null,
}



if (product.availablity) {
    console.log(`Данний товар: ${product.name} доступний для покупки. Його ціна: ${product.price}$`);
} else {
    console.log(`Данний товар: ${product.name} відсутній.`);
}