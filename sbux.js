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

document.addEventListener('DOMContentLoaded', function () {
    const botonesAcordeon = document.querySelectorAll('.acordeón__botón');

    function manejarAcordeon() {
        const anchoPantalla = window.innerWidth;

        if (anchoPantalla <= 767) {
            // Pantallas pequeñas: activar acordeón
            botonesAcordeon.forEach(function (boton) {
                const panel = document.getElementById(boton.getAttribute('aria-controls'));

                panel.hidden = true; // Ocultar paneles por defecto
                boton.setAttribute('aria-expanded', 'false');

                if (!boton.hasAttribute('data-listener')) {
                    boton.addEventListener('click', function () {
                        const isHidden = panel.hidden;
                        panel.hidden = !isHidden;
                        boton.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
                    });
                    boton.setAttribute('data-listener', 'true');
                }
            });
        } else {
            // Pantallas grandes: desactivar acordeón y mostrar todo
            botonesAcordeon.forEach(function (boton) {
                const panel = document.getElementById(boton.getAttribute('aria-controls'));
                panel.hidden = false;
                boton.setAttribute('aria-expanded', 'true');
                
                // Remover listeners para evitar eventos no deseados
                boton.removeEventListener('click', null);
                boton.removeAttribute('data-listener');
            });
        }
    }

    manejarAcordeon();
    window.addEventListener('resize', manejarAcordeon);
});document.addEventListener('DOMContentLoaded', function () {
    const botonesAcordeon = document.querySelectorAll('.acordeón__botón');
    let acordeonActivo = false; // Bandera para evitar doble inicialización

    function manejarAcordeon() {
        const anchoPantalla = window.innerWidth;

        if (anchoPantalla <= 767 && !acordeonActivo) {
            // Inicializar acordeón en pantallas pequeñas
            botonesAcordeon.forEach(function (boton) {
                const panel = document.getElementById(boton.getAttribute('aria-controls'));

                panel.hidden = true; // Ocultar paneles por defecto
                boton.setAttribute('aria-expanded', 'false');

                if (!boton.hasAttribute('data-listener')) {
                    boton.addEventListener('click', function () {
                        const isHidden = panel.hidden;
                        panel.hidden = !isHidden;
                        boton.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
                    });
                    boton.setAttribute('data-listener', 'true');
                }
            });
            acordeonActivo = true;
        } else if (anchoPantalla > 767 && acordeonActivo) {
            // Desactivar acordeón en pantallas grandes
            botonesAcordeon.forEach(function (boton) {
                const panel = document.getElementById(boton.getAttribute('aria-controls'));

                panel.hidden = false; // Mostrar todos los paneles
                boton.setAttribute('aria-expanded', 'true');
            });
            acordeonActivo = false;
        }
    }

    manejarAcordeon();
    window.addEventListener('resize', manejarAcordeon);
});