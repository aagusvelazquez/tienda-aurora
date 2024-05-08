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
// Valida correo y cógio postal
const validarBTN = document.getElementById("validar-btn").addEventListener("click", () => {
    const btn = document.getElementById("validar-btn");
    const email = document.getElementById("email-comprador").value;
    const codPostal = document.getElementById("CP");
    const cp = document.getElementById("CP").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValido = emailRegex.test(email);
    let destino = document.getElementById("destino");
    let facturacion = document.getElementById("facturacion");
    let inputCP = document.getElementById("input-cp");

    if (email == 0 && cp == 0) {
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
    } else if (!(cp.length == 4)) {
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
                <p>Código Postal ${cp}</p>
            </div>
        </div>
        <input type="button" class="btn-cp" value="Cambiar" onclick="cambiarCodigo();" />
        `;
    }
    // Insertar el correo en el form de Pago
    document.getElementById("correo-compra").innerText = email;
    // Deshabilita el botón para que no vuelva a generar la acción
    btn.disabled = true;
    codPostal.disabled = true;
})
// Cambia el cóogio postal en el link "cambiar"
function cambiarCodigo() {
    let destino = document.getElementById("destino");
    let facturacion = document.getElementById("facturacion");
    let codigoPostal = document.getElementById("CP");
    let inputCP = document.getElementById("input-cp");
    let entrega = document.getElementById("envio");
    const datos = document.getElementById("datos-despacho");
    const btn = document.getElementById("validar-btn");
    const codPostal = document.getElementById("CP");
    destino.classList.toggle("hidden");
    facturacion.classList.toggle("hidden");
    codigoPostal.value = "";
    inputCP.innerHTML = "";
    entrega.value = "default";
    datos.classList.add("hidden");
    datos.innerHTML = "";
    // Habilita el botón "Continuar""
    btn.disabled = false;
    codPostal.disabled = false;
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
        step.classList.remove("hidden");
        step.innerHTML = `
        <div class="datos-envio">
            <p>Método de Entrega:</p><span>${selected}</span>
        </div>
        `;
        datos.classList.remove("hidden");
        datos.innerHTML = `<input type="text" id="calle" name="calle" class="input-datos-personales" placeholder="Calle" required />
        <input type="text" id="num-calle" name="num-calle" class="input-datos-personales" placeholder="Número" required />
        <input type="text" id="dpto" name="dpto" class="input-datos-personales" placeholder="Departamento (opcional)" />
        <input type="text" id="localidad" name="localidad" class="input-datos-personales" placeholder="Barrio-Localidad" />
        <input type="text" id="prov" name="provincia" class="input-datos-personales" placeholder="Provincia" required />`;
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
// Mostrar o no form de datos de pago si el DNI de facturación y entrega no es el mismo
const checkbox = document.querySelector('input[type="checkbox"]').addEventListener('change', () => {
    let step = document.querySelector(".datos-abono");
    if (!(this.checked)) {
        step.classList.toggle("hidden");
    } else {
        step.classList.toggle("hidden");
    }
});
// Valida todos los datos de contacto, envio y facturación antes de pasar al pago
const validarDatosBTN = document.getElementById("validar-datos").addEventListener('click', () => {
    const nombre = document.getElementById("name-user").value;
    const apellido = document.getElementById("lastname-user").value;
    const telefono = document.getElementById("tel-user").value;
    const dniCuil = document.getElementById("dniCuil").value;
    const entrega = document.getElementById("envio").value;

    if ((nombre.length <= 2) || (apellido.length <= 2) || !telefono || !dniCuil) {
        Swal.fire(
            'ERROR!',
            'Por favor, complete los campos.',
            'error'
        )
    } else if ((entrega === "") || (entrega === "default")) {
        Swal.fire(
            'ERROR!',
            'Por favor, seleccione un método de entrega.',
            'error'
        )
    } else {
        if (telefono.length <= 9) {
            Swal.fire(
                'ERROR!',
                'Por favor, ingrese un teléfono válido.',
                'error'
            )
        } else if (dniCuil.length < 8) {
            Swal.fire(
                'ERROR!',
                'Por favor, ingrese un DNI o CUIL válidos.',
                'error'
            )
        } else if (entrega === "envio") {
            const calle = document.getElementById("calle").value;
            const numCalle = document.getElementById("num-calle").value;
            const localidad = document.getElementById("localidad").value;
            const prov = document.getElementById("prov").value;

            if ((calle.length <= 2) || (numCalle.length <= 1) || (localidad.length <= 3) || (prov.length <= 3)) {
                Swal.fire(
                    'ERROR!',
                    'Por favor, complete los campos de envío.',
                    'error'
                )
            } else {
                pagoDatos();
            }
        } else {
            pagoDatos();
        }
    }
})

// Carga pasos de pago
function pagoDatos() {
    
    const ltEnvio = document.getElementById("select-envio");
    const datos = document.getElementById("datos-de-compra");
    const pago = document.getElementById("datos-de-pago");
    
    ltEnvio.classList.add("disabled");
    datos.classList.add("hidden");
    pago.classList.remove("hidden");

    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    // Agrega los datos del comprador
    datosUser();

    // Agrega bloque de codigo que captura los datos de entrega
    datosEntrega();

    // Agrega bloque de codigo para sumar comentarios al pedido
    bloqueNota();

    // Generar la parte de formulario para seleccionar el metodo de pago

}

// Muestra el input de cupón de descuento
const descuento = document.getElementById("descuento").addEventListener("click", () => {
    const dto = document.getElementById("dto-label");
    const dtoLabel = document.getElementById("input-dto");
    dto.classList.toggle("hidden");
    dtoLabel.value = "";
});
// Valida el cupón de descuento
const validarDto = document.getElementById("validar-dto").addEventListener("click", () => {
    Swal.fire(
        'ERROR!',
        'No existen descuentos compatibles. Revise su código.',
        'error'
    )
});
// Cambiar datos desde los pasos de Pago
function cambiarDatos() {
    const ltEnvio = document.getElementById("select-envio");
    const datos = document.getElementById("datos-de-compra");
    const pago = document.getElementById("datos-de-pago");
    const codigoPostal = document.getElementById("CP");
    const nombre = document.getElementById("name-user");
    const apellido = document.getElementById("lastname-user");
    const telefono = document.getElementById("tel-user");
    const dniCuil = document.getElementById("dniCuil");
    const entrega = document.getElementById("envio");
    const entregaInput = document.getElementById("envio-seleccionado");
    const destino = document.getElementById("destino");
    const facturacion = document.getElementById("facturacion");
    const btn = document.getElementById("validar-btn");
    const codPostal = document.getElementById("CP");

    ltEnvio.classList.remove("disabled");
    datos.classList.remove("hidden");
    pago.classList.add("hidden");
    codigoPostal.value = "";
    nombre.value = "";
    apellido.value = "";
    telefono.value = "";
    entrega.value = "default";
    entregaInput.classList.toggle("hidden");
    dniCuil.value = "";
    destino.classList.toggle("hidden");
    facturacion.classList.toggle("hidden");
    btn.disabled = false;
    codPostal.disabled = false;

    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};
// Agrega los datos del comprador
function datosUser() {
    const datosUser = document.getElementById("user-datos");
    const nombre = document.getElementById("name-user").value;
    const apellido = document.getElementById("lastname-user").value;
    const telefono = document.getElementById("tel-user").value;
    const dniCuil = document.getElementById("dniCuil").value;

    datosUser.innerHTML = `
        <div>
            <span>${nombre} ${apellido}</span>
            <span>${dniCuil}</span>
            <span>+549${telefono}</span>
        </div>
        <input type="button" value="Cambiar" class="link-datos" onclick="cambiarDatos();"/>
    `;
}
// Agrega datos de entrega
function datosEntrega() {
    const datosEnvio = document.getElementById("datos-de-envio");
    const texto = document.getElementById("envio");
    const selected = texto.options[texto.selectedIndex].text;
    let entrega = document.getElementById("envio").value;

    if (entrega === "retiro") {
        datosEnvio.innerHTML = `
        <div>
            <span>${selected}</span>
            <p>A convenir. Antes deberá coordinar vía Whatsapp.</p>
        </div>
        <input type="button" value="Cambiar" class="link-datos" onclick="cambiarDatos();" />
        `;
    } else if (entrega === "encuentro") {
        datosEnvio.innerHTML = `
        <div>
            <span>${selected}</span>
            <p>A convenir. Encuentro Gratuito - Antes deberá coordinar vía Whatsapp.</p>
        </div>
        <input type="button" value="Cambiar" class="link-datos" onclick="cambiarDatos();" />
        `;
    } else if (entrega === "envio") {
        entrega = "Deberá coordinar por Whatsapp el método de envío que se prefiera, se abona el mismo una vez confirmado."
        const calle = document.getElementById("calle").value;
        const num = document.getElementById("num-calle").value;
        const dpto = document.getElementById("dpto").value;
        const localidad = document.getElementById("localidad").value;
        const prov = document.getElementById("prov").value;

        if (dpto == "") {
            datosEnvio.innerHTML = `
            <div>
                <span>${selected}</span>
                <p>${calle} ${num}.</p>
                <p>${localidad}, ${prov}.</p>
                <p>A convenir. ${entrega}</p>
            </div>
            <input type="button" value="Cambiar" class="link-datos" onclick="cambiarDatos();" />
            `;
        } else {
            datosEnvio.innerHTML = `
            <div>
                <span>${selected}</span>
                <p>${calle} - ${dpto}, ${num}.</p>
                <p>${localidad}, ${prov}.</p>
                <p>A convenir. ${entrega}</p>
            </div>
            <input type="button" value="Cambiar" class="link-datos" onclick="cambiarDatos();" />
            `;
        }
    }
}
// Agrega bloque de codigo de nota de pedido
function bloqueNota() {
    const notas = document.getElementById("notas");
    const notaBtn = document.getElementById("btn-nota");

    notas.innerHTML = `
        <div>
            <span>Notas de pedido</span>
            <div id="nota"></div>
        </div>
        <div id="btn-nota" class="link-datos">Agregar</div>
    `;

    // Funcion que agrega la nota
    notaBtn.addEventListener("click", () => {
        const nota = document.getElementById("nota");
        nota.innerHTML = `
            <textarea id="nota-pedido" name="nota-pedido">
        `;
    });
}