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

function validar() {
    const email = document.getElementById("email-comprador").value;
    const codigoPostal = document.getElementById("CP").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValido = emailRegex.test(email);
    let destino = document.getElementById("destino");
    let facturacion = document.getElementById("facturacion");
    let inputCP = document.getElementById("input-cp");

    if (email == 0 && codigoPostal == 0) {
        Swal.fire(
            'ERROR!',
            'Por favor, complete los campos.',
            'error'
        )
    } else if (!emailValido) {
        Swal.fire(
            'ERROR!',
            'Por favor, introduce un correo electrónico válido.',
            'error'
        )
    } else if (!(codigoPostal.length == 4)) {
        Swal.fire(
            'ERROR!',
            'Por favor, introduce un código postal válido.',
            'error'
        )
    } else {
        destino.classList.toggle("hidden");
        facturacion.classList.toggle("hidden");

        inputCP.innerHTML = `
        <div class="datos-postal">
            <i class="fa-solid fa-location-dot"></i>
            <div>
                <p>Código Postal ${codigoPostal}</p>
            </div>
        </div>
        <input type="button" class="btn-cp" value="Cambiar" onclick="cambiarCodigo();" />
        `;
    }
    // Insertar el correo en el form de Pago
    document.getElementById("correo-compra").innerText = email;
};

function cambiarCodigo() {
    let destino = document.getElementById("destino");
    let facturacion = document.getElementById("facturacion");
    let codigoPostal = document.getElementById("CP");
    let inputCP = document.getElementById("input-cp");
    let entrega = document.getElementById("envio");
    const datos = document.getElementById("datos-despacho");
    destino.classList.toggle("hidden");
    facturacion.classList.toggle("hidden");
    codigoPostal.value = "";
    inputCP.innerHTML = "";
    entrega.value = "default";
    datos.classList.add("hidden");
    datos.innerHTML = "";
};

// Mostrar campos a completar de envio si la opcion seleccionada fue "envio"
function entregaElegida() {
    // Obtener el value de la opcion seleccionada
    const entrega = document.getElementById("envio").value;
    // obtener el texto de la opcion seleciconada
    const texto = document.getElementById("envio");
    const selected = texto.options[texto.selectedIndex].text;
    const step = document.getElementById("envio-seleccionado");
    const datos = document.getElementById("datos-despacho");

    if ((entrega === "") || (entrega === "default")) {
        step.classList.add("hidden");
        datos.classList.add("hidden");
        datos.innerHTML = "";
    } else if (entrega === "envio") {
        step.classList.add("hidden");
        datos.classList.remove("hidden");
        datos.innerHTML = `<input type="text" name="calle" class="input-datos-personales" placeholder="Calle" required />
        <input type="text" name="num-calle" class="input-datos-personales" placeholder="Número" required />
        <input type="text" name="dpto" class="input-datos-personales" placeholder="Departamento (opcional)" />
        <input type="text" name="barrio" class="input-datos-personales" placeholder="Barrio (opcional)" />
        <input type="text" name="ciudad" class="input-datos-personales" placeholder="Ciudad" required />`;
    } else {
        datos.classList.add("hidden");
        step.classList.remove("hidden");
        datos.innerHTML = "";
        step.innerHTML = `
        <div class="datos-envio">
            <p>Método de Entrega:</p><span>${selected}</span>
        </div>
        `;
    }
}

// Mostrar o no form de datos de pago 
const checkbox = document.querySelector('input[type="checkbox"]').addEventListener('change', function () {
    let step = document.querySelector(".datos-abono");
    if (!(this.checked)) {
        step.classList.toggle("hidden");
    } else {
        step.classList.toggle("hidden");
    }
});

function validarDatos() {
    const ltEnvio = document.getElementById("select-envio");
    ltEnvio.classList.add("disabled");
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    const datos = document.getElementById("datos-de-compra");
    const pago = document.getElementById("datos-de-pago");
    datos.classList.add("hidden");
    pago.classList.remove("hidden");

    const datosUser = document.getElementById("user-datos");
    let nombre = document.getElementById("name-user").value;
    let apellido = document.getElementById("lastname-user").value;
    let telefono = document.getElementById("tel-user").value;
    const texto = document.getElementById("envio");
    const selected = texto.options[texto.selectedIndex].text;
    datosUser.innerHTML = `
        <div>
            <span>${nombre} ${apellido}</span>
            <span>${selected}</span>
            <span>+549${telefono}</span>
        </div>
        <input type="button" value="Cambiar" class="link-datos" onclick="cambiarDatos();"/>
    `;
}

function addDto() {
    let dto = document.getElementById("dto-label");
    dto.classList.toggle("hidden");
}

function validarDto() {
    Swal.fire(
        'ERROR!',
        'No existen descuentos compatibles. Revise su código.',
        'error'
    )
}

function cambiarDatos(){
    const ltEnvio = document.getElementById("select-envio");
    const datos = document.getElementById("datos-de-compra");
    const pago = document.getElementById("datos-de-pago");
    const codigoPostal = document.getElementById("CP");
    let facturacion = document.getElementById("facturacion");
    let destino = document.getElementById("destino");

    ltEnvio.classList.remove("disabled");
    datos.classList.remove("hidden");
    pago.classList.add("hidden");
    codigoPostal.value = "";
    facturacion.classList.add("hidden");
    destino.classList.toggle("hidden");
    
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};