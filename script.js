document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.querySelector(".navLinks");
    const heroSection = document.getElementById("hero");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("showMenu"); // Mostra/oculta o menu
        heroSection.classList.toggle("marginTop"); // Empurra o conteúdo para baixo
    });
});