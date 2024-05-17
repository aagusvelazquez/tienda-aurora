const btnConfirmarCompra = document.getElementById('confirmar-compra');
const nav = document.querySelector(".nav");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");
let currentStep = 1;
const maxSteps = 3;
const cartContainer = document.querySelector('.dropdown-content');
let carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];

/*******************************************************************************/
/* Funcionalidad del navbar */
navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});
/*******************************************************************************/
/* Obtener los datos del carrito guardado o que se inicialice como un array vacío */
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
};
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
};
function calcularTotales() {
    let totalPagar = 0;
    carritoItems.forEach(item => {
        totalPagar += item.price * item.cant;
    });
    document.getElementById('total-amount').textContent = `$${totalPagar}`;
    document.querySelector('.total-compra').textContent = `$${totalPagar}`;
};

/*******************************************************************************/

/* Validar Correo electrónico */
const validarBTN = document.getElementById("validar-btn").addEventListener("click", () => {
    const email = document.getElementById("to_email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValido = emailRegex.test(email);
    let destino = document.getElementById("destino");
    const btn = document.getElementById("validar-btn");

    if (email == 0) {
        Swal.fire(
            'ERROR!',
            'Por favor, indique su correo electrónico.',
            'error'
        );
    } else if (!emailValido) {
        Swal.fire(
            'ERROR!',
            'Por favor, introduce un correo electrónico válido.',
            'error'
        );
    } else {
        destino.classList.toggle("hidden");

        //Inhabilita el boton
        btn.disabled = true;
        window.scroll({
            top: 350,
            left: 0,
            behavior: "smooth",
        });
    };
});
/* Mostrar campos a completar si la opcion de entrega elegida es "Envio" */
function entregaElegida() {
    // Obtener el value de la opcion seleccionada
    const entrega = document.getElementById("to_entrega").value;
    // obtener el texto de la opcion seleciconada
    const texto = document.getElementById("to_entrega");
    const selected = texto.options[texto.selectedIndex].text;
    const step = document.getElementById("envio-seleccionado");
    const datos = document.getElementById("datos-despacho");

    if ((entrega === "") || (entrega === "default")) {
        step.classList.add("hidden");
        datos.classList.add("hidden");
    } else if (entrega === "envio") {
        step.classList.remove("hidden");
        step.innerHTML = `
        <div class="datos-envio">
            <p>Método de Entrega:</p><span>${selected}</span>
        </div>
        `;
        datos.classList.remove("hidden");
    } else {
        datos.classList.add("hidden");
        step.classList.remove("hidden");
        step.innerHTML = `
        <div class="datos-envio">
            <p>Método de Entrega:</p><span>${selected}</span>
        </div>
        `;
    }
};
/* Validar datos de contacto, envio y facturacion */
const validarDatosBTN = document.getElementById("validar-datos").addEventListener('click', () => {
    const nombre = document.getElementById("to_name").value;
    const apellido = document.getElementById("to_lastname").value;
    const telefono = document.getElementById("to_telefono").value;
    const dni = document.getElementById("to_dni").value;
    const entrega = document.getElementById("to_entrega").value;

    if ((nombre.length <= 2) || (apellido.length <= 2) || !telefono || !dni) {
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
        } else if (dni.length < 8) {
            Swal.fire(
                'ERROR!',
                'Por favor, ingrese un DNI o CUIL válidos.',
                'error'
            )
        } else if (entrega === "envio") {
            const calle = document.getElementById("to_calle").value;
            const numCalle = document.getElementById("to_numero").value;
            const localidad = document.getElementById("to_localidad").value;
            const prov = document.getElementById("to_provincia").value;
            const codigoPostal = document.getElementById("to_codigo_postal").value;

            if ((calle.length <= 2) || (numCalle.length <= 1) || (localidad.length <= 3) || (prov.length <= 3) || (codigoPostal.length <= 3)) {
                Swal.fire(
                    'ERROR!',
                    'Por favor, complete los campos de envío correctamente.',
                    'error'
                )
            } else {
                pagoDatos();
            };
        } else {
            pagoDatos();
        };
    };
});
/* Cambiar el front a los datos de pago */
function pagoDatos() {
    const ltEnvio = document.getElementById("select-envio");
    const inputCorreo = document.getElementById("datos-de-compra");
    const entrega = document.getElementById("destino");
    const pago = document.getElementById("datos-de-pago");

    ltEnvio.classList.add("disabled");
    inputCorreo.classList.add("hidden");
    entrega.classList.add("hidden");
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
};
/* Agregar los datos del cliente */
function datosUser() {
    const datosUser = document.getElementById("user-datos");
    const nombre = document.getElementById("to_name").value;
    const apellido = document.getElementById("to_lastname").value;
    const telefono = document.getElementById("to_telefono").value;
    const dni = document.getElementById("to_dni").value;
    const email = document.getElementById("to_email").value;

    document.getElementById("correo-compra").innerText = email;
    datosUser.innerHTML = `
        <div>
            <span>${nombre} ${apellido}</span>
            <span>${dni}</span>
            <span>+549${telefono}</span>
        </div>
        <input type="button" value="Cambiar" class="link-datos" onclick="cambiarDatosUser();"/>
    `;
};
/* Agregar los datos de entrega */
function datosEntrega() {
    const datosEnvio = document.getElementById("datos-de-envio");
    const texto = document.getElementById("to_entrega");
    const selected = texto.options[texto.selectedIndex].text;
    let entrega = document.getElementById("to_entrega").value;

    if (entrega === "retiro") {
        datosEnvio.innerHTML = `
        <div>
            <span>${selected}</span>
            <p>A convenir. Antes deberá coordinar vía Whatsapp.</p>
        </div>
        <input type="button" value="Cambiar" class="link-datos" onclick="cambiarDatosEntrega();" />
        `;
    } else if (entrega === "encuentro") {
        datosEnvio.innerHTML = `
        <div>
            <span>${selected}</span>
            <p>A convenir. Encuentro Gratuito - Antes deberá coordinar vía Whatsapp.</p>
        </div>
        <input type="button" value="Cambiar" class="link-datos" onclick="cambiarDatosEntrega();" />
        `;
    } else if (entrega === "envio") {
        entrega = "Deberá coordinar por Whatsapp el método de envío que se prefiera, se abona el mismo una vez confirmado."
        const calle = document.getElementById("to_calle").value;
        const num = document.getElementById("to_numero").value;
        const dpto = document.getElementById("to_dpto").value;
        const localidad = document.getElementById("to_localidad").value;
        const prov = document.getElementById("to_provincia").value;
        const codigoPostal = document.getElementById("to_codigo_postal").value;

        if (dpto == "") {
            datosEnvio.innerHTML = `
            <div>
                <span>${selected}</span>
                <p>${calle} ${num}.</p>
                <p>${localidad},${codigoPostal} - ${prov}.</p>
                <p>A convenir. ${entrega}</p>
            </div>
            <input type="button" value="Cambiar" class="link-datos" onclick="cambiarDatosEntrega();" />
            `;
        } else {
            datosEnvio.innerHTML = `
            <div>
                <span>${selected}</span>
                <p>${calle} - ${dpto}, ${num}.</p>
                <p>${localidad},${codigoPostal} - ${prov}.</p>
                <p>A convenir. ${entrega}</p>
            </div>
            <input type="button" value="Cambiar" class="link-datos" onclick="cambiarDatosEntrega();" />
            `;
        };
    };
};
/* Muestra input para cargar cupon de de3scuento y lo valida */
const descuento = document.getElementById("descuento").addEventListener("click", () => {
    const dto = document.getElementById("dto-label");
    const dtoLabel = document.getElementById("input-dto");
    dto.classList.toggle("hidden");
    dtoLabel.value = "";
});
const validarDto = document.getElementById("validar-dto").addEventListener("click", () => {
    Swal.fire(
        'ERROR!',
        'No existen descuentos compatibles. Revise su código.',
        'error'
    );
});
/* Agregar o Quitar Notas de pedido */
const btnNotasAdd = document.getElementById("btn-nota-add").addEventListener("click", () => {
    // Captura el elemento que contiene el textarea
    const nota = document.getElementById("nota");
    // Lo hago visible
    nota.classList.remove("hidden");

    // Capturo el boton de 'Agregar' para ocultarlo
    const btnAdd = document.getElementById("btn-nota-add");
    btnAdd.classList.add("hidden");

    // Capturo el boton de 'Quitar' para mostrarlo
    const btnRemove = document.getElementById("btn-nota-remove");
    btnRemove.classList.remove("hidden");
});
const btnNotasRemove = document.getElementById("btn-nota-remove").addEventListener("click", () => {
    // Captura el elemento que contiene el textarea
    const nota = document.getElementById("nota");
    // Vacío el textarea
    document.getElementById("to_nota").value = "";
    // Lo oculto
    nota.classList.add("hidden");

    // Capturo el boton de 'Agregar' para mostrarlo
    const btnAdd = document.getElementById("btn-nota-add");
    btnAdd.classList.remove("hidden");

    // Capturo el boton de 'Quitar' para ocultarlo
    const btnRemove = document.getElementById("btn-nota-remove");
    btnRemove.classList.add("hidden");
});
/* Funcionalidad para mostras la info de cada método de pago */
const efectivo = document.getElementById("btn-efectivo").addEventListener("click", () => {
    const div = document.getElementById("label-efectivo");
    const metodos = document.getElementById("metodos");

    div.classList.remove("hidden");
    metodos.classList.add("hidden");
});
const backEfectivo = document.getElementById("lbl-efectivo-back").addEventListener("click", () => {
    const div = document.getElementById("label-efectivo");
    const metodos = document.getElementById("metodos");

    div.classList.add("hidden");
    metodos.classList.remove("hidden");
});
const tranferencia = document.getElementById("btn-transferencia").addEventListener("click", () => {
    const div = document.getElementById("label-transferencia");
    const metodos = document.getElementById("metodos");

    div.classList.remove("hidden");
    metodos.classList.add("hidden");
});
const backTranferencia = document.getElementById("lbl-transferencia-back").addEventListener("click", () => {
    const div = document.getElementById("label-transferencia");
    const metodos = document.getElementById("metodos");

    div.classList.add("hidden");
    metodos.classList.remove("hidden");
});
const mp = document.getElementById("btn-mp").addEventListener("click", () => {
    const div = document.getElementById("label-mp");
    const metodos = document.getElementById("metodos");

    div.classList.remove("hidden");
    metodos.classList.add("hidden");
});
const backMp = document.getElementById("lbl-mp-back").addEventListener("click", () => {
    const div = document.getElementById("label-mp");
    const metodos = document.getElementById("metodos");

    div.classList.add("hidden");
    metodos.classList.remove("hidden");
});

/*******************************************************************************/

/* FUNCIONES PARA CAMBIAR DATOS */
// Cambiar datos del comprador desde los pasos de Pago
function cambiarDatosUser() {
    const ltEnvio = document.getElementById("select-envio");
    const datos = document.getElementById("datos-de-compra");
    const pago = document.getElementById("datos-de-pago");
    const nombre = document.getElementById("to_name");
    const apellido = document.getElementById("to_lastname");
    const telefono = document.getElementById("to_telefono");
    const dniCuil = document.getElementById("to_dni");
    const destino = document.getElementById("destino");

    // Marca que se volvió al step'Entrega'
    ltEnvio.classList.remove("disabled");
    // Muestra el step de datos de comprador y envio, y oculta step de pago
    datos.classList.remove("hidden");
    pago.classList.add("hidden");
    // Borra los datos del cliente
    nombre.value = "";
    apellido.value = "";
    telefono.value = "";
    dniCuil.value = "";
    // Muestra el step que tiene los inputs de datos y select de metodo de entrega
    destino.classList.remove("hidden");

    window.scroll({
        top: 350,
        left: 0,
        behavior: "smooth",
    });
};
// Cambiar datos de la entrega desde los pasos de Pago
function cambiarDatosEntrega() {
    const ltEnvio = document.getElementById("select-envio");
    const datos = document.getElementById("datos-de-compra");
    const pago = document.getElementById("datos-de-pago");
    let entrega = document.getElementById("to_entrega");
    let calle = document.getElementById("to_calle").value;
    let num = document.getElementById("to_numero").value;
    let dpto = document.getElementById("to_dpto").value;
    let localidad = document.getElementById("to_localidad").value;
    let prov = document.getElementById("to_provincia").value;
    const lblDespacho = document.getElementById("envio-seleccionado");
    const datosDeEnvio = document.getElementById("datos-despacho");
    const destino = document.getElementById("destino");

    // Marca que se volvió al step'Entrega'
    ltEnvio.classList.remove("disabled");
    // Muestra el step de datos de comprador y envio, y oculta step de pago
    datos.classList.remove("hidden");
    pago.classList.add("hidden");
    // Borra los datos de la entrega seleccionada
    entrega.value = "default";
    // Borra los datos en los inputs de envio
    calle = "";
    num = "";
    dpto = "";
    localidad = "";
    prov = "";
    // Oculta el step que muestra la opcion seleccionada
    lblDespacho.classList.add("hidden");
    // Oculta el step que muestra los inputs para completar en caso de que la opcion sea 'envio'
    datosDeEnvio.classList.add("hidden");
    // Muestra el step que tiene el select de metodo de entrega
    destino.classList.remove("hidden");

    window.scroll({
        top: 520,
        left: 0,
        behavior: "smooth",
    });
};

/*******************************************************************************/
/* Enviar el formulario por mail */
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    btnConfirmarCompra.textContent = 'Comprando...';
    const serviceID = 'default_service';
    const templateEnvio = 'template_envio';
    const templateRespuestaAuto = 'template_respuesta_auto';

    emailjs.sendForm(serviceID, templateEnvio, this)
        .then(() => {
            btnConfirmarCompra.textContent = 'Confirmar Compra';
            Swal.fire({
                title: "¡Su compra se ha realizado con éxito!",
                icon: "success"
            });
        }, (err) => {
            btnConfirmarCompra.textContent = 'Confirmar Compra';
            alert(JSON.stringify(err));
        });
});