// JavaScript para el funcionamiento del FAQ
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
          // Cerrar todos los items abiertos
          faqItems.forEach(otherItem => {
              if (otherItem !== item && otherItem.classList.contains('active')) {
                  otherItem.classList.remove('active');
              }
          });
          
          // Alternar el estado del item actual
          item.classList.toggle('active');
      });
  });
});


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



//////////////////////////////
class Circle {
  constructor(x, y, radius) {
    this.position = { x: x, y: y };
    this.radius = radius;
  }
}

class TextileAnimation {
  constructor(container) {
    this.canvas = document.createElement("canvas");
    container.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");

    const fps = 120;
    this.fpsInterval = 5000 / fps;
    this.then = Date.now();
    
    // Tiempo para reiniciar la animación (en milisegundos)
    this.resetInterval = 10000; // 10 segundos
    this.lastReset = Date.now();

    this.resize();

    this.lineWidth = 0.6;
    this.maxLineAngle = 180;
    this.generateCircles();

    this.bind();
    this.loop();
  }

  generateCircles() {
    this.circles = [];
    const circlesNumber = 200;
    let failsNumber = 0;

    let i = 0;
    while (i < circlesNumber) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      const radius = Math.random() * 70 + 10;

      const newCircle = new Circle(x, y, radius);
      this.circles.push(newCircle);
      i++;

      for (let circle of this.circles) {
        if (circle != newCircle) {
          const distanceX = circle.position.x - x;
          const distanceY = circle.position.y - y;
          const distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY
          );

          if (distance < circle.radius + radius) {
            this.circles.pop();
            failsNumber++;
            i--;
          }
        }
      }

      if (failsNumber > 10000) {
        break;
      }
    }
  }

  bind() {
    window.addEventListener("resize", this.resize.bind(this), false);
  }

  render() {
    for (let circle of this.circles) {
      const startAngle = (Math.random() * 360 * Math.PI) / 180;
      const endAngle =
        startAngle + (Math.random() * this.maxLineAngle * Math.PI) / 180;

      this.context.save();
      this.context.translate(circle.position.x, circle.position.y);
      this.context.beginPath();
      this.context.moveTo(
        Math.cos(startAngle) * circle.radius,
        Math.sin(startAngle) * circle.radius
      );
      this.context.lineTo(
        Math.cos(endAngle) * circle.radius,
        Math.sin(endAngle) * circle.radius
      );
      this.context.lineWidth = this.lineWidth;
      this.context.strokeStyle = this.getRandomColor();
      this.context.stroke();
      this.context.closePath();
      this.context.restore();
    }
  }

  loop() {
    this.raf = window.requestAnimationFrame(this.loop.bind(this));

    const now = Date.now();
    const delta = now - this.then;

    // Verificar si es tiempo de reiniciar la animación
    if (now - this.lastReset > this.resetInterval) {
      this.reset();
      this.lastReset = now;
    }

    if (delta > this.fpsInterval) {
      this.render();
      this.then = now;
    }
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.screen = {
      center: { x: this.canvas.width / 2, y: this.canvas.height / 2 },
      hypotenuse: Math.sqrt(
        ((this.canvas.width / 2) * this.canvas.width) / 2 +
          ((this.canvas.height / 2) * this.canvas.height) / 2
      )
    };

    this.reset();
  }

  reset() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.generateCircles();
  }

  getRandomColor() {
    // Colores en tonos café/marrón para TextilFlow
    const colors = [
      '#2A1905', // Marrón oscuro
      '#866C52', // Marrón medio
      '#A08B7A', // Marrón claro
      '#755E48', // Marrón terroso
      '#D9C3A9'  // Beige
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

// Inicializar la animación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.textile-canvas');
  if (container) {
    new TextileAnimation(container);
  }
});

