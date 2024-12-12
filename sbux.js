const menuToggle = document.querySelector("#menu-toggle"); // Correcto
const iconMenu = document.querySelector(".icon-menu"); // Selección del ícono de menú
const iconClose = document.querySelector(".icon-close"); // Selección del ícono de cierre
const sidebar = document.querySelector(".sidebar"); // Selección de la barra lateral

// Escuchar el cambio del checkbox
menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
        iconMenu.style.display = "none";
        iconClose.style.display = "block";
        sidebar.classList.add("active");
    } else {
        iconMenu.style.display = "block";
        iconClose.style.display = "none";
        sidebar.classList.remove("active");
    }
});