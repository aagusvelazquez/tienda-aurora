/* Funcionalidad del navbar */
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

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

// Accediendo a todos los div con clase de section
const boxes = document.querySelectorAll('.section');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
	const triggerBottom = window.innerHeight / 5 * 4;
	boxes.forEach((box, idx) => {
		const boxTop = box.getBoundingClientRect().top;
		
		if(boxTop < triggerBottom) {
			box.classList.add('show');
		} else {
			box.classList.remove('show');
		}
	});
}

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
let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabHeaderElements = tabs.querySelectorAll(".tab-header > div");
let tabBody = tabs.querySelector(".tab-body");
let tabBodyElements = tabs.querySelectorAll(".tab-body > div");
let tabIndicator = tabs.querySelector(".tab-indicator > div");

for(let i=0;i<tabHeaderElements.length;i++){
  tabHeaderElements[i].addEventListener("click",function(){
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderElements[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyElements[i].classList.add("active");
    tabIndicator.style.left = `${i*33}%`;
  });
}

// Lógica para el boton de ¿scroll to top'
const scrollTop = document.getElementById('scrolltop')

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