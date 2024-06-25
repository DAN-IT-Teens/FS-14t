let cart = [];

class Product {
    constructor({title, available, additional, price, id}) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.available = available;
        this.additional = additional;
        this.selectedAdditional = 'Не обрано';
        this._quantity = 1;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        switch(value) {
            case '-': 
                if(this._quantity <= 0) {
                    return new throwError({
                        type: 'unknown action',
                        message: "Дія неможлива. Спробуйте збільшувати кількість"
                    }) 
                } else {
                    return this._quantity--;
                }
                break;
            case '+': 
                return this._quantity++;
                break;
                
        }
    }


    addToCart() {
        const currentProduct = {
            title: this.title,
            id: this.id, 
            quantity: this._quantity,
            currentAdditional: this.selectedAdditional,
            clientName: document.querySelector('#name').value
        }
        if (cart.length !== 0) {
            let isFindProduct = {
                id: undefined,
                finded: false,
                quantity: undefined
            };
            cart.forEach((item, index) => {
                if (item.id === currentProduct.id) {
                    isFindProduct.finded = true;
                    isFindProduct.id = index;
                    isFindProduct.quantity = item.quantity;
                }
            })

            if (isFindProduct.finded) {
                cart[isFindProduct.id].quantity += isFindProduct.quantity;
            } else {
                cart.push(currentProduct);
            }
        } else {
            cart.push(currentProduct);
        }
        console.log(currentProduct);
        console.log(cart);
       
    }

    render() {
        const productList = document.querySelector(".products__list");

        const container = document.createElement('div');
        container.className = "product__container";

        const title = document.createElement('h2');
        const price = document.createElement('h3');
        const additional = document.createElement('select');
        const defaultOption = document.createElement('option');
        defaultOption.textContent = 'Оберіть значення';
        defaultOption.selected = true;
        additional.append(defaultOption);

        this.additional.forEach((item) => {
            const option = document.createElement('option');
            option.textContent = item;
            additional.append(option);
        })

        title.textContent = this.title;
        price.textContent = `Ціна: ${this.price}`;

        const btnCart = document.createElement('button');
        btnCart.textContent = 'Додати в корзину';

        btnCart.addEventListener('click', () => {
            this.addToCart();
        });
        additional.addEventListener('change', () => {
            this.selectedAdditional = additional.value;
        })

        container.append(title, price, additional, btnCart);
        productList.append(container);
    }
}

class Coffee extends Product {
    constructor(...args) {
        super(...args);
    }
}

function getAllProducts() { 
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        headers: {
            "Authorization": "Bearer 9a9dfcb9-fda9-4d28-9326-efe32196ba2c"
        }
    })
    .then((res) => res.json())
    .then(array => {
        console.log(array);
        array.forEach((item => {
            const currentProduct = new Product(item);
            currentProduct.render();
        }))
    })

}


getAllProducts();