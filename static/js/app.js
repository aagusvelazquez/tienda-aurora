const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");
const btnCarrito = document.querySelector('.btn-carrito');
const btnListaCarrito = document.querySelector('.icon-close');
const carrito = document.querySelector('.carrito');
const scrollTop = document.getElementById('scrolltop');

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
btnCarrito.addEventListener('click', () => {
    carrito.classList.toggle('hidden')
})
btnListaCarrito.addEventListener('click', () => {
    carrito.classList.toggle('hidden')
})

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
