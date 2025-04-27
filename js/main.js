// Script para cambiar el header a hamburguesa al hacer scroll
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const menuToggle = document.getElementById('menu-toggle');

let isScrolled = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('mobile-header');
        menuToggle.style.display = 'flex'; // Mostrar el menú toggle
        nav.style.display = 'none'; // Ocultar los links normales
        isScrolled = true;
    } else {
        header.classList.remove('mobile-header');
        menuToggle.style.display = 'none'; // Ocultar el menú toggle
        nav.style.display = 'flex'; // Mostrar los links normales
        nav.classList.remove('show-nav');
        isScrolled = false;
    }
});

// Toggle al hacer click en el menú
menuToggle.addEventListener('click', () => {
    if (nav.classList.contains('show-nav')) {
        nav.classList.remove('show-nav');
        nav.style.display = 'none';
    } else {
        nav.classList.add('show-nav');
        nav.style.display = 'flex';
    }
});

// Cerrar si el mouse sale del menú
nav.addEventListener('mouseleave', () => {
    if (isScrolled) {
        nav.classList.remove('show-nav');
        nav.style.display = 'none';
    }
});

// Smooth Scroll Manual con cierre de menú
const menuLinks = document.querySelectorAll('nav a[href^="#"]');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar comportamiento por defecto

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 100, // Ajusta el offset según el header
                behavior: 'smooth'
            });

            // Si el menú está abierto, lo cerramos
            if (nav.classList.contains('show-nav')) {
                nav.classList.remove('show-nav');
                nav.style.display = 'none';
            }
        }
    });
});
