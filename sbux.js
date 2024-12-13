const menuToggle = document.querySelector("#menu-toggle"); 
const iconMenu = document.querySelector(".icon-menu"); 
const iconClose = document.querySelector(".icon-close"); 
const sidebar = document.querySelector(".sidebar"); 

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
            botonesAcordeon.forEach(function (boton) {
                const panel = document.getElementById(boton.getAttribute('aria-controls'));

                panel.hidden = true; 
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
            botonesAcordeon.forEach(function (boton) {
                const panel = document.getElementById(boton.getAttribute('aria-controls'));
                panel.hidden = false;
                boton.setAttribute('aria-expanded', 'true');
                
                boton.removeEventListener('click', null);
                boton.removeAttribute('data-listener');
            });
        }
    }

    manejarAcordeon();
    window.addEventListener('resize', manejarAcordeon);
});document.addEventListener('DOMContentLoaded', function () {
    const botonesAcordeon = document.querySelectorAll('.acordeón__botón');
    let acordeonActivo = false; 

    function manejarAcordeon() {
        const anchoPantalla = window.innerWidth;

        if (anchoPantalla <= 767 && !acordeonActivo) {
            botonesAcordeon.forEach(function (boton) {
                const panel = document.getElementById(boton.getAttribute('aria-controls'));

                panel.hidden = true; 
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
            botonesAcordeon.forEach(function (boton) {
                const panel = document.getElementById(boton.getAttribute('aria-controls'));

                panel.hidden = false; 
                boton.setAttribute('aria-expanded', 'true');
            });
            acordeonActivo = false;
        }
    }

    manejarAcordeon();
    window.addEventListener('resize', manejarAcordeon);
});

const closeButton = document.getElementById('closeBannerButton')
const cookieBanner = document.getElementById('cookieBanner')
closeButton.addEventListener('click', () => {
    cookieBanner.classList.add('invisible')
})