function generateNoise() {
    const canvas = document.getElementById('noise-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function drawNoise() {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const buffer = new Uint32Array(imageData.data.buffer);

        for (let i = 0; i < buffer.length; i++) {
            const value = (Math.random() * 255) | 0;
            buffer[i] = (255 << 24) | (value << 16) | (value << 8) | value; // RGBA
        }

        ctx.putImageData(imageData, 0, 0);
    }

    setInterval(drawNoise, 5); // Ajustá la velocidad del parpadeo si querés animación más suave
}

window.addEventListener('load', generateNoise);

        // Pantalla de carga inicial
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('loader').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('loader').style.display = 'none';
                    
                    // Mostrar primera sección
                    document.querySelector('section').classList.add('visible');
                }, 1000);
            }, 1500); // Tiempo que se muestra el logo solo (1.5 segundos)
        });


        document.addEventListener('DOMContentLoaded', function () {
            const statItems = document.querySelectorAll('.stat-item');
            const statNumbers = document.querySelectorAll('.stat-number[data-count]');

            // Configuración del Intersection Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const statNumber = entry.target.querySelector('.stat-number');
                        const statItem = entry.target;

                        // Activar animación de la línea
                        statItem.classList.add('in-view');

                        // Animación del contador si tiene data-count
                        if (statNumber && statNumber.hasAttribute('data-count')) {
                            const target = +statNumber.getAttribute('data-count');
                            animateCounter(statNumber, target);
                        }
                    }
                });
            }, { threshold: 0.5 });

            // Observar cada stat-item
            statItems.forEach(item => {
                observer.observe(item);
            });

            // Función de animación del contador
            function animateCounter(element, target) {
                if (element.hasAttribute('data-animated')) return;

                element.setAttribute('data-animated', 'true');
                let current = 0;
                const duration = 2000; // 2 segundos
                const increment = target / (duration / 16);

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        clearInterval(timer);
                        current = target;
                        element.textContent = target === 500 ? target + '+' : target;
                    } else {
                        element.textContent = Math.floor(current);
                    }
                }, 16);
            }
        });

        document.querySelectorAll('.seleccionar-plan').forEach(boton => {
        boton.addEventListener('click', function () {
            const plan = this.getAttribute('data-plan');
            
            // Seleccionar automáticamente "Desarrollo web"
            const servicioSelect = document.getElementById('servicio');
            if (servicioSelect) {
            servicioSelect.value = 'web';
            }

            // Autocompletar mensaje
            const mensaje = document.getElementById('mensaje');
            if (mensaje) {
            mensaje.value = `Hola! Estoy interesado en contratar el ${plan}. Me gustaría recibir más información sobre el proceso y cómo comenzamos.`;
            }
        });
        });

        document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('.formulario-contacto');
        const blurOverlay = document.getElementById('blurOverlay');
        const successMessage = document.getElementById('successMessage');
        const closeBtn = document.querySelector('.close-btn');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Mostrar mensaje de éxito y blur
      successMessage.style.display = 'flex';
    blurOverlay.style.display = 'block';

      // Ocultar automáticamente luego de 5 segundos
      setTimeout(() => {
        successMessage.style.display = 'none';
        blurOverlay.style.display = 'none';
      }, 4000);

      form.reset();
    });
  }
});

