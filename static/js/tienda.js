const container = document.getElementById('contenedor-items');
const cartContainer = document.getElementById('product-container');
const btnVaciarCarrito = document.querySelector('.btn-vaciar-carrito');
// Obtener los datos del carrito guardado o que se inicialice como un array vacío
let carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];
actualizarCarrito();

// Funcionalidad del Carrito de Compras
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    const productosDelCarrito = carritoItems.find(p => p.id === productoId);
    if (!productosDelCarrito) {
        carritoItems.push({ ...producto, cant: 1 });

        carrito.classList.toggle('hidden')
        // Oculta el carrito luego de 3 segundos.
        setTimeout(function () {
            carrito.classList.toggle('hidden')
        }, 3000);
    } else {
        Swal.fire({
            title: "¡El producto ya se encuentra en el carrito!",
            text: "Modifique la cantidad desde allí.",
            icon: "warning"
          });
    }

    actualizarCarrito();
    guardarEnLocal();
}

function cambiarCantidad(action, productoId) {
    const productosDelCarrito = carritoItems.find(p => p.id === productoId);
    if (action === 'sumar') {
        if (productosDelCarrito) {
            productosDelCarrito.cant += 1;
        } else {
            agregarAlCarrito(productoId);
        }
    } else if (action === 'restar' && productosDelCarrito && productosDelCarrito.cant > 1) {
        productosDelCarrito.cant -= 1;
    }

    actualizarCarrito();
    guardarEnLocal();
}

btnVaciarCarrito.addEventListener("click", () => {
    cartContainer.innerHTML = '';
    carritoItems = []

    if (carritoItems.length === 0) {
        let total = document.querySelector('.carrito-total');
        let emptyCart = document.querySelector('.cart-empty')

        total.classList.remove('hidden');
        emptyCart.classList.add('hidden');
        carrito.classList.toggle('hidden');
        Swal.fire({
            title: "Se ha vaciado el carrito con éxito.",
            icon: "success"
          });
        
    }


    calcularTotales();
    guardarEnLocal();
});

function actualizarCarrito() {
    cartContainer.innerHTML = '';
    carritoItems.forEach(item => {
        cartContainer.innerHTML += `
            <div class="cart-product">
                <div class="info-cart-product">
                    <span class="cantidad-producto-carrito">${item.cant}x</span>
                    <span class="titulo-producto-carrito">${item.title}</span>
                    <span class="precio-producto-carrito">$${item.price}</span> 
                </div>
                <button class="icon-remove" onclick="removeFromCart(${item.id})">X</button>
            </div>
        `;
    });

    if (carritoItems.length >= 1) {
        let total = document.querySelector('.carrito-total');
        let carritoVacio = document.querySelector('.cart-empty')

        total.classList.remove('hidden');
        carritoVacio.classList.add('hidden');
    }

    calcularTotales();
}

function removeFromCart(productId) {
    carritoItems = carritoItems.filter(item => item.id !== productId);
    actualizarCarrito();
    guardarEnLocal();
}

function calcularTotales() {
    let totalPagar = 0;
    let totalItems = 0;
    carritoItems.forEach(item => {
        totalPagar += item.price * item.cant;
        totalItems += item.cant;
    });
    document.getElementById('total-amount').textContent = `$${totalPagar}`;
    document.getElementById('contador-productos').textContent = totalItems;

    if (totalItems === 0) {
        let total = document.querySelector('.carrito-total');
        let carritoVacio = document.querySelector('.cart-empty')

        total.classList.add('hidden');
        carritoVacio.classList.remove('hidden');
    }
}

// Guardamos el carrito en el localStorage
const guardarEnLocal = () => {
    localStorage.setItem('carrito', JSON.stringify(carritoItems));
};

