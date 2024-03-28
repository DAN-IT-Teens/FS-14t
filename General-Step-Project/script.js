const productList = [
    {
        id: 0,
        title: "Vanilla Latte",
        info: ['hot', 'cold'],
        price: 21000,
        img: "./images/card-1.png"
    },
    {
        id: 1,
        title: "Latte",
        info: ['hot', 'cold'],
        price: 21000,
        img: "./images/card-1.png"
    },
    {
        id: 3,
        title: "Vanilla Cappucino",
        info: ['hot', 'cold'],
        price: 21000,
        img: "./images/card-1.png"
    }
]

function createProductCard(product) {
    const containerCard = document.createElement('div');
    containerCard.className = "popular-now-card";
    const image = document.createElement('img');
    image.src = product.img;

    const containerCardText = document.createElement('div');
    containerCardText.className = "popular-now-card-text";

    // start left block 
    const cardTextLeft = document.createElement('div');
    cardTextLeft.className = 'card-text-left';
    const cardTitle = document.createElement('div');
    cardTitle.textContent = product.title;
    const cardTextInfo = document.createElement('div');
    cardTextInfo.className = 'card-text-info';
    product.info.forEach((infoType) => {
        const info = document.createElement('div');
        info.className = `info ${infoType}`;
        info.textContent = infoType;

        cardTextInfo.append(info);
    })
    cardTextLeft.append(cardTitle, cardTextInfo);
    // end left block

    // start right block
    const cardTextRight = document.createElement('div');
    cardTextRight.className = 'card-text-right';
    const cardPrice = document.createElement('p');
    cardPrice.textContent = `${product.price}K`;

    const buttonBuy = document.createElement('button');
    buttonBuy.className = "card-button-buy";
    const buttonBuyImage = document.createElement('img');
    buttonBuyImage.src = "./images/icons/icon_cart.svg";
    buttonBuy.append(buttonBuyImage);
    // end left block
    buttonBuy.addEventListener('click', () => {
        const localCart = localStorage.getItem('cart');

        if(localCart) {
            const parsedLocalCart = JSON.parse(localCart);
            parsedLocalCart.push(product);
            localStorage.setItem('cart', JSON.stringify(parsedLocalCart));
        } else {
            const cart = [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    })

    cardTextRight.append(cardPrice, buttonBuy);
    containerCardText.append(cardTextLeft, cardTextRight);
    containerCard.append(image, containerCardText);
    return containerCard;
}

productList.forEach((product) => {
    const containerList = document.querySelector('.popular-now-list');

    containerList.append(createProductCard(product));
})


// cart logic

function createCartItem(product) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    const cartImage = document.createElement('img');
    cartImage.src = product.img;

    const cartTitle = document.createElement('h1');
    cartTitle.className = 'cart-title';
    cartTitle.textContent = product.title;
    
    const cartPrice = document.createElement('h2');
    cartPrice.className = 'cart-price';
    cartPrice.textContent = product.price;

    cartItem.append(cartImage, cartTitle, cartPrice);
    return cartItem;
}

const cartButton = document.querySelector('.action-cart');

cartButton.addEventListener('click', () => {
    const cartList = document.querySelector('.cart-list');
    cartList.textContent = "";
    const listCartProduct = JSON.parse(localStorage.getItem('cart'));
    console.log(listCartProduct);

    listCartProduct.forEach((product) => {
        cartList.append(createCartItem(product));
    })
})