const tabs = document.querySelector(".tabs");
const tabHeader = tabs.querySelector(".tab-header");
const tabHeaderElements = tabs.querySelectorAll(".tab-header > div");
const tabBody = tabs.querySelector(".tab-body");
const tabBodyElements = tabs.querySelectorAll(".tab-body > div");
const tabIndicator = tabs.querySelector(".tab-indicator > div");
const destacadosSaphirus = document.getElementById('container-saphirus');
const destacadosMilano = document.getElementById('container-milano');
const destacadosAmbar = document.getElementById('container-ambar');

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
for (let i = 0; i < tabHeaderElements.length; i++) {
  tabHeaderElements[i].addEventListener("click", function () {
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderElements[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyElements[i].classList.add("active");
    tabIndicator.style.left = `${i * 33}%`;
  });
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
      <button class="restar-cantidad" onclick="cambiarCantidad('restar', ${producto.id})">-</button>
      <button class="boton-item" onclick="agregarAlCarrito(${producto.id})">Comprar</button>
      <button class="sumar-cantidad" onclick="cambiarCantidad('sumar', ${producto.id})">+</button>
    </div>
</div>
  `;
})
destacadosSaphirus.innerHTML += `<a href="./templates/tienda.html" class="tab-body-btn">Ver todos los productos</a>`;

// Productos Tab 'Milano'
prodDestMilano.forEach(producto => {
  destacadosMilano.innerHTML += `
  <div class="producto-tab">
    <img src="${producto.thumbnail}" alt="${producto.title}" class="img-item">
    <h3 class="titulo-item">${producto.title}</h3>
    <p class="badge">${producto.brand}</p>
    <p class="precio-item">$${producto.price}</p>
    <div class="btns-producto">
      <button class="restar-cantidad" onclick="cambiarCantidad('restar', ${producto.id})">-</button>
      <button class="boton-item" onclick="agregarAlCarrito(${producto.id})">Comprar</button>
      <button class="sumar-cantidad" onclick="cambiarCantidad('sumar', ${producto.id})">+</button>
    </div>
</div>
  `;
});
destacadosMilano.innerHTML += `<a href="./templates/tienda.html" class="tab-body-btn">Ver todos los productos</a>`;

// Productos Tab 'Ambar'
prodDestAmbar.forEach(producto => {
  destacadosAmbar.innerHTML += `
  <div class="producto-tab">
    <img src="${producto.thumbnail}" alt="${producto.title}" class="img-item">
    <h3 class="titulo-item">${producto.title}</h3>
    <p class="badge">${producto.brand}</p>
    <p class="precio-item">$${producto.price}</p>
    <div class="btns-producto">
      <button class="restar-cantidad" onclick="cambiarCantidad('restar', ${producto.id})">-</button>
      <button class="boton-item" onclick="agregarAlCarrito(${producto.id})">Comprar</button>
      <button class="sumar-cantidad" onclick="cambiarCantidad('sumar', ${producto.id})">+</button>
    </div>
</div>
  `;
});
destacadosAmbar.innerHTML += `<a href="./templates/tienda.html" class="tab-body-btn">Ver todos los productos</a>`;