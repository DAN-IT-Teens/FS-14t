export class Product {
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
        
    }
}