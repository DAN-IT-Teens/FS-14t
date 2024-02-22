const productList = [
    {
        name: "Apple",
        quantity: 10
    },
    {
        name: "iPhone",
        quantity: 2
    },
    {
        name: "Laptop",
        quantity: 5
    },
    {
        name: "Notebook",
        quantity: 1
    }
]

function Manager(name) {
    this.name = name;
    this.sales = 0;

    this.sell = function(productList, client) {
        const productListOnlyNames = productList.map((element, index) => {
            return `${index}. ${element.name}`;
        })
        const product = prompt(`Оберіть товар який бажаєте придбати за номером: ${productListOnlyNames}`);
        const selectedProduct = productList[+product];
        if (selectedProduct) {
            client.cart.push(selectedProduct);
            this.sales += 1;
            return `Менеджер ${this.name} продав ${selectedProduct.name} клієнту ${client.name}`;
        } else {
            return `Менеджер ${this.name} не знайшов такий товар: ${product}`;
        }
    }
}

function Client(name) {
    this.name = name;
    this.cart = [];

    this.getCart = function() {
        if(this.cart.length === 0) {
            return `Список покупок у користувача ${name} пустий.`
        } else {
            return `Список покупок у користувача ${name}: ${this.cart}`;
        }
    }
}

const manager1 = new Manager("Kolya");
const client1 = new Client("Ivan");
const manager2 = new Manager('Sviatoslav');

console.log(manager1.sell(productList, client1));


// у нас буде список товарів, конкретних, їх можна буде обрати та продати клієнту.
// продумати перевірку якщо товару немає, або якщо товарів декілька
// це масив з обьектами


// 1. модальне вікно зі списком товару, перевірка введеного, його відображення ( if else )
// 2. 1 + можливість оновлювати список
// 3. 