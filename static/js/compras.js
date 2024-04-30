let currentStep = 1;
const maxSteps = 3;
const cartContainer = document.querySelector('.dropdown-content');
// Obtener los datos del carrito guardado o que se inicialice como un array vacío
let carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito() {
    var dropdownContent = document.querySelector('.dropdown-content');
    var dropdownBtn = document.querySelector('.dropdown-btn');

    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        dropdownBtn.classList.remove('active');
    } else {
        dropdownContent.style.display = 'block';
        dropdownBtn.classList.add('active');
    }
}
actualizarCarrito();
calcularTotales();

function actualizarCarrito() {
    cartContainer.innerHTML = '';
    carritoItems.forEach(item => {
        cartContainer.innerHTML += `
            <div class="cart-product">
                <img class="img-producto" src="${item.thumbnail}">
                <div class="info-cart-product">
                    <span class="titulo-producto-carrito">${item.title} x${item.cant}</span>
                </div>
                <div class="info-price-product">
                    <span class="precio-producto-carrito">$${item.price}</span>
                </div>
            </div>
        `;
    });
    cartContainer.innerHTML += `
    <div class="carrito-total">
        <div class="carrito-precio-total">
            <h3>Total:</h3><span id="total-amount"></span>
        </div>
    </div>`;

    calcularTotales();
}

function calcularTotales() {
    let totalPagar = 0;
    carritoItems.forEach(item => {
        totalPagar += item.price * item.cant;
    });
    document.getElementById('total-amount').textContent = `$${totalPagar}`;
    document.querySelector('.total-compra').textContent = `$${totalPagar}`;
}

/*******************************************************************************/

function codigoPostal() {
    const codigoPostal = document.getElementById("CP").value;
    let step = document.getElementById("step");
    let facturacion = document.querySelector(".facturacion");
    let inputCP = document.getElementById("input-cp");
    step.classList.toggle("hidden");
    facturacion.classList.toggle("hidden");


    inputCP.innerHTML += `
    <div class="datos-postal">
        <i class="fa-solid fa-location-dot"></i>
        <div>
            <p>Código Postal ${codigoPostal}</p>
        </div>
    </div>
    <input type="button" class="btn-cp" value="Cambiar" onclick="cambiarCodigo();" />
    `;
};

function cambiarCodigo() {
    let step = document.getElementById("step");
    step.classList.toggle("hidden");
    let codigoPostal = document.getElementById("CP");
    codigoPostal.value = "";
};

// Mostrar o no form de datos de pago 
const checkbox = document.querySelector('input[type="checkbox"]').addEventListener('change', function () {
    let step = document.querySelector(".datos-abono");
    if (!(this.checked)) {
        console.log('Checkbox is unchecked');
        step.classList.toggle("hidden");
    } else {
        console.log('Datos de facturacion y entrega iguales');
        step.classList.toggle("hidden");
    }
});

function refresh() {
    let facturacion = document.querySelector(".facturacion");
    let abono = document.querySelector(".datos-abono");    
    let step = document.getElementById("step");
    step.classList.toggle("hidden");
    facturacion.classList.toggle("hidden");
    abono.classList.toggle("hidden");
}