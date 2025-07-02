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

