function Product(title, price) {
    this.title = title;
    this.price = price;
}

const whiteTShirt = new Product("White T-Shirt", 35);
const blackTShirt = new Product("Black T-Shirt", 35);


console.log(whiteTShirt);

const createWhiteTShirt = (title, price) => {
    let product = document.querySelector('.white-t-shirt');

    product.innerHTML = `
    <div class="product-card">
        <div class="product-image">
            <img src="/img/stagefright_white-shirt.png" alt="product image here">
        </div>
        <div class="product-description">
            <div class="product-name">
                <h3>${title}</h3>
            </div>
            <div class="product-price">
                <h3>$${price}</h3>
            </div>
        </div>
    </div>`
}

const createBlackTShirt = (title, price) => {
    let product = document.querySelector('.black-t-shirt');

    product.innerHTML = `
    <div class="product-card">
        <div class="product-image">
            <img src="/img/stagefright_black-shirt.png" alt="product image here">
        </div>
        <div class="product-description">
            <div class="product-name">
                <h3>${title}</h3>
            </div>
            <div class="product-price">
                <h3>$${price}</h3>
            </div>
        </div>
    </div>`
}

createWhiteTShirt(whiteTShirt.title, whiteTShirt.price);
createBlackTShirt(blackTShirt.title, blackTShirt.price);