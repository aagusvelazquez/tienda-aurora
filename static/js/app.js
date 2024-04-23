const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");
const btnCarrito = document.querySelector('.btn-carrito');
const btnListaCarrito = document.querySelector('.icon-close');
const carrito = document.querySelector('.carrito');
const scrollTop = document.getElementById('scrolltop');
const destacadosSaphirus = document.querySelector('.container-saphirus');
const destacadosMilano = document.querySelector('.container-milano');
const destacadosAmbar = document.querySelector('.container-ambar');
const container = document.getElementById('contenedor-items');
const cartContainer = document.getElementById('product-container');
const btnVaciarCarrito = document.querySelector('.btn-vaciar-carrito');
// Obtener los datos del carrito guardado o que se inicialice como un array vacío
let carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];

actualizarCarrito();

const productos = [
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
    },
    {
        id: 5,
        title: "Equipo Analógico Black - Línea Deco",
        price: 1000,
        brand: "Saphirus",
        category: "equipos",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/saphirus-dispensador-linea-deco-black-800x800.jpg"
    },
    {
        id: 6,
        title: "Hornillo Eléctrico",
        price: 1000,
        brand: "Saphirus",
        category: "hornillos",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/hornillo.png"
    },
    {
        id: 7,
        title: "Difusor Flowers",
        price: 1000,
        brand: "Saphirus",
        category: "difusor",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/06/saphirus-difusores-flowers-800x800.jpg"
    },
    {
        id: 8,
        title: "Difusor Premium Lavanda & Romero",
        price: 1000,
        brand: "Saphirus",
        category: "dif-premium",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/difusor-premium-lavanda-y-romero-01-016.jpg"
    },
    {
        id: 9,
        title: "Caritas Manzana",
        price: 1000,
        brand: "Saphirus",
        category: "caritas",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/saphirus-textil-naranja-pimienta-800x800.jpg"
    },
    {
        id: 10,
        title: "Air Cool Aqua",
        price: 1000,
        brand: "Saphirus",
        category: "air-cool",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/1ovA3O26hl4h9iFMgkZjhLNa5S9eYMqLJccmzS4U-1-800x800.jpeg"
    },
    {
        id: 11,
        title: "Sensaciones Aqua Rose",
        price: 1000,
        brand: "Saphirus",
        category: "sensaciones",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/sensaciones-aquarose-800x800.jpg"
    },
    {
        id: 12,
        title: "Textil Naranja y Pimienta",
        price: 1000,
        brand: "Saphirus",
        category: "textil",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/saphirus-textil-naranja-pimienta-800x800.jpg"
    },
    {
        id: 13,
        title: "Jabón Líquido Manzana",
        price: 1000,
        brand: "Milano",
        category: "jabon",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/jabon-manzana-2.jpg"
    },
    {
        id: 14,
        title: "Perfume 503 - Red Door",
        price: 1000,
        brand: "Milano",
        category: "perfumes",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/Perfume-503-rdr-800x800.jpg"
    },
    {
        id: 15,
        title: "Perfume Mini 205 OML",
        price: 1000,
        brand: "Milano",
        category: "perfumes-mini",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/12/mini-milano-205-oml-800x800.jpg"
    },
    {
        id: 16,
        title: "Body Splash Miami Summer",
        price: 1000,
        brand: "Milano",
        category: "body-splash",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/miamisummer-body-splash-800x800.jpg"
    },
    {
        id: 17,
        title: "Body Splash Flowers",
        price: 1000,
        brand: "Milano",
        category: "body-splash",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/flowers-body-splash-800x800.jpg"
    },
    {
        id: 18,
        title: "Perfume 510 - Chanel N°5",
        price: 1000,
        brand: "Milano",
        category: "perfumes",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/Perfume-510-ch5-800x800.jpg"
    },
    {
        id: 19,
        title: "Agua Micelar",
        price: 1000,
        brand: "Milano",
        category: "agua-micelar",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/agua-micelar-800x800.jpg"
    },
    {
        id: 20,
        title: "Jabón Líquido Cítrico",
        price: 1000,
        brand: "Milano",
        category: "jabon",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/jabon-citrico-2-800x800.jpg"
    },
    {
        id: 21,
        title: "Aerosol Antitabaco",
        price: 1000,
        brand: "Ambar",
        category: "aerosol",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/antitabaco-latas-ambar-800x800.jpg"
    },
    {
        id: 22,
        title: "Aceite para Hornillos Coco Vai",
        price: 1000,
        brand: "Ambar",
        category: "aceites",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/07/ambar-aceite-esencial-cocovai-800x800.jpg"
    },
    {
        id: 23,
        title: "Sahumerios Amber",
        price: 1000,
        brand: "Ambar",
        category: "sahumerios",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/08/ambar-sahumerios-amber-3-800x800.jpg"
    },
    {
        id: 24,
        title: "Sahumerios Benzoin",
        price: 1000,
        brand: "Ambar",
        category: "sahumerios",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/08/ambar-sahumerios-benzoin-3-800x800.jpg"
    },
    {
        id: 25,
        title: "Aerosol Uva",
        price: 1000,
        brand: "Ambar",
        category: "aerosol",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/uva-latas-ambar-800x800.jpg"
    },
    {
        id: 26,
        title: "Aerosol Flowers",
        price: 1000,
        brand: "Ambar",
        category: "aerosol",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/flowers-latas-ambar-800x800.jpg"
    },
    {
        id: 27,
        title: "Aceite para Hornillos Oriente",
        price: 1000,
        brand: "Ambar",
        category: "aceites",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/07/ambar-aceite-esencial-oriente-800x800.jpg",
    },
    {
        id: 28,
        title: "Aerosol Invictus",
        price: 1000,
        brand: "Ambar",
        category: "aerosol",
        thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/invicto-latas-ambar-800x800.jpg"
    },
];
const prodDestSaphirus = [
  {
      id: 5,
      title: "Equipo Analógico Black - Línea Deco",
      price: 1000,
      brand: "Saphirus",
      category: "equipos",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/saphirus-dispensador-linea-deco-black-800x800.jpg"
  },
  {
      id: 6,
      title: "Hornillo Eléctrico",
      price: 1000,
      brand: "Saphirus",
      category: "hornillos",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/hornillo.png"
  },
  {
      id: 7,
      title: "Difusor Flowers",
      price: 1000,
      brand: "Saphirus",
      category: "difusor",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/06/saphirus-difusores-flowers-800x800.jpg"
  },
  {
      id: 8,
      title: "Difusor Premium Lavanda & Romero",
      price: 1000,
      brand: "Saphirus",
      category: "dif-premium",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/difusor-premium-lavanda-y-romero-01-016.jpg"
  },
  {
      id: 9,
      title: "Caritas Manzana",
      price: 1000,
      brand: "Saphirus",
      category: "caritas",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/saphirus-textil-naranja-pimienta-800x800.jpg"
  },
  {
      id: 10,
      title: "Air Cool Aqua",
      price: 1000,
      brand: "Saphirus",
      category: "air-cool",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/1ovA3O26hl4h9iFMgkZjhLNa5S9eYMqLJccmzS4U-1-800x800.jpeg"
  },
  {
      id: 11,
      title: "Sensaciones Aqua Rose",
      price: 1000,
      brand: "Saphirus",
      category: "sensaciones",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/sensaciones-aquarose-800x800.jpg"
  },
  {
      id: 12,
      title: "Textil Naranja y Pimienta",
      price: 1000,
      brand: "Saphirus",
      category: "textil",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/saphirus-textil-naranja-pimienta-800x800.jpg"
  }
];
const prodDestMilano = [
  {
      id: 13,
      title: "Jabón Líquido Manzana",
      price: 1000,
      brand: "Milano",
      category: "jabon",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/jabon-manzana-2.jpg"
  },
  {
      id: 14,
      title: "Perfume 503 - Red Door",
      price: 1000,
      brand: "Milano",
      category: "perfumes",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/Perfume-503-rdr-800x800.jpg"
  },
  {
      id: 15,
      title: "Perfume Mini 205 OML",
      price: 1000,
      brand: "Milano",
      category: "perfumes-mini",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/12/mini-milano-205-oml-800x800.jpg"
  },
  {
      id: 16,
      title: "Body Splash Miami Summer",
      price: 1000,
      brand: "Milano",
      category: "body-splash",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/miamisummer-body-splash-800x800.jpg"
  },
  {
      id: 17,
      title: "Body Splash Flowers",
      price: 1000,
      brand: "Milano",
      category: "body-splash",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/flowers-body-splash-800x800.jpg"
  },
  {
      id: 18,
      title: "Perfume 510 - Chanel N°5",
      price: 1000,
      brand: "Milano",
      category: "perfumes",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/Perfume-510-ch5-800x800.jpg"
  },
  {
      id: 19,
      title: "Agua Micelar",
      price: 1000,
      brand: "Milano",
      category: "agua-micelar",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/agua-micelar-800x800.jpg"
  },
  {
      id: 20,
      title: "Jabón Líquido Cítrico",
      price: 1000,
      brand: "Milano",
      category: "jabon",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/jabon-citrico-2-800x800.jpg"
  }
];
const prodDestAmbar = [
  {
      id: 21,
      title: "Aerosol Antitabaco",
      price: 1000,
      brand: "Ambar",
      category: "aerosol",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/antitabaco-latas-ambar-800x800.jpg"
  },
  {
      id: 22,
      title: "Aceite para Hornillos Coco Vai",
      price: 1000,
      brand: "Ambar",
      category: "aceites",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/07/ambar-aceite-esencial-cocovai-800x800.jpg"
  },
  {
      id: 23,
      title: "Sahumerios Amber",
      price: 1000,
      brand: "Ambar",
      category: "sahumerios",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/08/ambar-sahumerios-amber-3-800x800.jpg"
  },
  {
      id: 24,
      title: "Sahumerios Benzoin",
      price: 1000,
      brand: "Ambar",
      category: "sahumerios",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/08/ambar-sahumerios-benzoin-3-800x800.jpg"
  },
  {
      id: 25,
      title: "Aerosol Uva",
      price: 1000,
      brand: "Ambar",
      category: "aerosol",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/uva-latas-ambar-800x800.jpg"
  },
  {
      id: 26,
      title: "Aerosol Flowers",
      price: 1000,
      brand: "Ambar",
      category: "aerosol",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/flowers-latas-ambar-800x800.jpg"
  },
  {
      id: 27,
      title: "Aceite para Hornillos Oriente",
      price: 1000,
      brand: "Ambar",
      category: "aceites",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/07/ambar-aceite-esencial-oriente-800x800.jpg",
  },
  {
      id: 28,
      title: "Aerosol Invictus",
      price: 1000,
      brand: "Ambar",
      category: "aerosol",
      thumbnail: "https://saphirus.com.ar/wp-content/uploads/2022/04/invicto-latas-ambar-800x800.jpg"
  },
];

/* Funcionalidad del navbar */
searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
});
navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});

/* Funcionalidad del botón del Carrito de Compras */
document.getElementById("abrirCarrito").addEventListener("click", function () {
    document.getElementById("cart").style.width = "100vw";
});

document.getElementById("cerrarCarrito").addEventListener("click", function () {
    document.getElementById("cart").style.width = "0";
});


/* Funcionalidad del botón 'scroll to top' */
window.onload = () => {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
}
window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = 1;
    } else {
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = 0;
    }
};

// Accediendo a todos los div con clase de section
/*
const boxes = document.querySelectorAll('.section');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach((box, idx) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
*/

// Deslizar el carrusel de Colecciones screen max-width: 1730px
document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.item-carrusel');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let index = 0;

  function moveSlider(step) {
    index += step;
    const cardWidth = document.querySelector('.tarjeta-carrusel').clientWidth;
    if (index >= wrapper.children.length) {
      index = 0;
    } else if (index < 0) {
      index = wrapper.children.length - 1;
    }
    wrapper.style.transform = `translateX(${-index * cardWidth}px)`;
  }

  prev.addEventListener('click', function () {
    moveSlider(-1);
  });

  next.addEventListener('click', function () {
    moveSlider(1);
  });
});

// Deslizar el carrusel de Colecciones screen min-width: 1920px
document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.item-desktop');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let index = 0;

  function moveSlider(step) {
    index += step;
    const cardWidth = document.querySelector('.tarjeta-desktop').clientWidth;
    if (index >= wrapper.children.length) {
      index = 0;
    } else if (index < 0) {
      index = wrapper.children.length - 1;
    }
    wrapper.style.transform = `translateX(${-index * cardWidth}px)`;
  }

  prev.addEventListener('click', function () {
    moveSlider(-1);
  });

  next.addEventListener('click', function () {
    moveSlider(1);
  });
});

// Acceder a las tabs de Destacados
function mostrarTab(numeroTab) {
    // Ocultar todos los tabs
    var tabs = document.getElementsByClassName("tab");
    let btnTab = document.getElementsByClassName("tab-btn")
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
      btnTab[i].classList.remove("active");
    }

    // Mostrar el tab correspondiente
    document.getElementById("tab" + numeroTab).classList.add("active");
    document.getElementById("tab-btn" + numeroTab).classList.add('active');
  }

// Productos Tab 'Saphirus'
prodDestSaphirus.forEach(producto => {
  destacadosSaphirus.innerHTML += `
  <div class="producto-tab">
    <img src="${producto.thumbnail}" alt="${producto.title}" class="img-item">
    <h3 class="titulo-item">${producto.title}</h3>
    <p class="badge">${producto.brand}</p>
    <p class="precio-item">$${producto.price}</p>
    <div class="btns-producto">
      <button class="boton-item" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
    </div>
</div>
  `;
})
destacadosSaphirus.innerHTML += `<a href="../templates/tienda.html" class="tab-body-btn">Ver todos los productos</a>`;

// Productos Tab 'Milano'
prodDestMilano.forEach(producto => {
  destacadosMilano.innerHTML += `
  <div class="producto-tab">
    <img src="${producto.thumbnail}" alt="${producto.title}" class="img-item">
    <h3 class="titulo-item">${producto.title}</h3>
    <p class="badge">${producto.brand}</p>
    <p class="precio-item">$${producto.price}</p>
    <div class="btns-producto">
      <button class="boton-item" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
    </div>
</div>
  `;
});
destacadosMilano.innerHTML += `<a href="../templates/tienda.html" class="tab-body-btn">Ver todos los productos</a>`;

// Productos Tab 'Ambar'
prodDestAmbar.forEach(producto => {
  destacadosAmbar.innerHTML += `
  <div class="producto-tab" id="${producto.id}">
    <img src="${producto.thumbnail}" alt="${producto.title}" class="img-item">
    <h3 class="titulo-item">${producto.title}</h3>
    <p class="badge">${producto.brand}</p>
    <p class="precio-item">$${producto.price}</p>
    <div class="btns-producto">
      <button class="boton-item" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
    </div>
</div>
  `;
});
destacadosAmbar.innerHTML += `<a href="../templates/tienda.html" class="tab-body-btn">Ver todos los productos</a>`;

// Funcionalidad del Carrito de Compras
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    const productosDelCarrito = carritoItems.find(p => p.id === productoId);
    if (!productosDelCarrito) {
        carritoItems.push({ ...producto, cant: 1 });
        document.getElementById("cart").style.width = "100vw";
        // Oculta el carrito luego de 3 segundos.
        setTimeout(function () {
            document.getElementById("cart").style.width = "0vw";
        }, 2000);
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
                    <img class="img-producto" src="${item.thumbnail}">
                    <span class="titulo-producto-carrito">${item.title}</span>
                    <button class="icon-remove" onclick="removeFromCart(${item.id})"><i class="fa-regular fa-trash-can"></i></button>
                </div>
                <div class="info-cant-product">
                    <div class="btns">
                    <button class="less-cantidad" onclick="cambiarCantidad('restar', ${item.id})">-</button>
                    <span class="cantidad-producto-carrito">${item.cant}</span>
                    <button class="more-cantidad" onclick="cambiarCantidad('sumar', ${item.id})">+</button>
                    </div>
                    <span class="precio-producto-carrito">$${item.price}</span>
                </div>
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
