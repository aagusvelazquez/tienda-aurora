const nav = document.querySelector(".nav");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});

let currentStep = 1;
const maxSteps = 3;

function nextStep() {
    if (currentStep < maxSteps) {
        const currentDiv = document.getElementById(`step${currentStep}`);
        const nextDiv = document.getElementById(`step${currentStep + 1}`);
        const currentLi = document.getElementById(`li${currentStep}`);
        const nextLi = document.getElementById(`li${currentStep + 1}`);

        currentDiv.classList.remove('active');
        nextDiv.classList.add('active');
        currentLi.classList.remove('active');
        nextLi.classList.add('active');

        currentStep++;
    } else {
        alert('Este es el último paso.');
        // Aquí puedes implementar la lógica para enviar el formulario, por ejemplo.
    }
}

