const products = [
    {
        id: 1,
        title: "Sensaciones Aqua Rose",
        description: "An apple mobile which is nothing like apple",
        price: 1000,
        brand: "Saphirus",
        category: "aerosol",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/sensaciones-aquarose-800x800.jpg",
        images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]
    },
    {
        id: 2,
        title: "Textil Naranja y Pimienta",
        description: "An apple mobile which is nothing like apple",
        price: 1100,
        brand: "Saphirus",
        category: "textil",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/saphirus-textil-naranja-pimienta-800x800.jpg",
        images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]
    },
    {
        id: 3,
        title: "Difusor Premium Lavanda y Romero",
        description: "An apple mobile which is nothing like apple",
        price: 1000,
        brand: "Saphirus",
        category: "aerosol",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/difusor-premium-lavanda-y-romero-01-016-800x800.jpg",
        images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]
    },
    {
        id: 4,
        title: "Caritas de Manzana",
        description: "An apple mobile which is nothing like apple",
        price: 2500,
        brand: "Saphirus",
        category: "textil",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/Manzana-1200x1200-1-800x800.png",
        images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]
    }
];
let cart = [];

const container = document.querySelector('.contenedor-items');
products.forEach(product => {
    container.innerHTML += `
        <div class="producto">
            <img src="${product.thumbnail}" alt="${product.title}" class="img-item">
            <h3 class="titulo-item">${product.title}</h3>
            <p class="badge">${product.brand}</p>
            <p class="precio-item">$${product.price}</p>
            <div class="btns-producto">
                <button class="restar-cantidad" onclick="changeQuantity('minus', ${product.id})">-</button>
                <button class="boton-item" onclick="addToCart(${product.id})">Comprar</button>
                <button class="sumar-cantidad" onclick="changeQuantity('plus', ${product.id})">+</button>
            </div>
        </div>
    `;
});

// Hacer visible el carrito
let btnCarrito = document.querySelector('.btn-carrito');
let btnListaCarrito = document.querySelector('.icon-close');
const carrito = document.querySelector('.carrito');

btnCarrito.addEventListener('click', () => {
    carrito.classList.toggle('hidden')
})

btnListaCarrito.addEventListener('click', () => {
    carrito.classList.toggle('hidden')
})

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const productInCart = cart.find(p => p.id === productId);
    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    carrito.classList.toggle('hidden')
    updateCart();
}

function changeQuantity(action, productId) {
    const productInCart = cart.find(p => p.id === productId);
    console.log(productInCart);
    if (action === 'plus') {
        if (productInCart) {
            productInCart.quantity += 1;
        } else {
            addToCart(productId);
        }
    } else if (action === 'minus' && productInCart && productInCart.quantity > 1) {
        productInCart.quantity -= 1;
    } else if (productInCart && productInCart.quantity === 1) {
        cart = cart.filter(p => p.id !== productId);
    }
    updateCart();
}

function updateCart() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    cart.forEach(item => {
        container.innerHTML += `
            <div class="cart-product">
                <div class="info-cart-product">
                    <span class="cantidad-producto-carrito">${item.quantity}x</span>
                    <span class="titulo-producto-carrito">${item.title}</span>
                    <span class="precio-producto-carrito">$${item.price}</span> 
                </div>
                <button class="icon-remove" onclick="removeFromCart(${item.id})">X</button>
            </div>
        `;
    });

    if (cart.length >= 1) {
        let total = document.querySelector('.carrito-total');
        let emptyCart = document.querySelector('.cart-empty')

        total.classList.remove('hidden');
        emptyCart.classList.add('hidden');
    }

    calculateTotals();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function calculateTotals() {
    let totalAmount = 0;
    let totalItems = 0;
    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
        totalItems += item.quantity;
    });
    document.getElementById('total-amount').textContent = `$${totalAmount}`;
    document.getElementById('contador-productos').textContent = totalItems;

    if (totalItems === 0) {
        let total = document.querySelector('.carrito-total');
        let emptyCart = document.querySelector('.cart-empty')

        total.classList.add('hidden');
        emptyCart.classList.remove('hidden');
    }
}

