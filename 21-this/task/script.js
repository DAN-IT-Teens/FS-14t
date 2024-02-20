function Manager(name) {
    this.name = name;
    this.sales = 0;

    this.sell = function(product, client) {
        client.cart.push(product);
        this.sales += 1;
        return `Менеджер ${this.name} продав ${product} клієнту ${client.name}`;
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

console.log(manager1);
console.log(client1);

console.log(manager1.sell("Apple Watch", client1));
console.log(manager2.sell("Apple", client1));


// у нас буде список товарів, конкретних, їх можна буде обрати та продати клієнту.
// продумати перевірку якщо товару немає, або якщо товарів декілька
// це масив з обьектами