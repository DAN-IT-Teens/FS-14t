// import { Product, Coffee } from "./scripts/modules";

class Product {
    constructor({title, description, type, price}) {
        this.title = title;
        this.description = description;
        this.type = type;
        this.price = price;
        this._quantity = 0;
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
        console.log('test');
    }
}

class Coffee extends Product {
    constructor(...args) {
        super(...args);
    }
}

const item = {
    title: "Product Test",
    description: "Product Description Test",
    type: "Product",
    price: 1000
};

function uploadProdct(item) {
    return new Promise((resolved, reject) => {
        console.log(`Upload product ${item.title}`);

        setTimeout(() => {
            resolved(new Product(item));
        }, 5000)
    })
}

uploadProdct(item)
    .then((product) => {
        console.log(product);
    })