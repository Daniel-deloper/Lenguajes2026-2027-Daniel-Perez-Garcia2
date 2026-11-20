
/* ==========================================
   FONDO ANIMADO - PROYECTO FINAL
   ========================================== */

(() => {
    "use strict";

    const canvas = document.createElement("canvas");
    canvas.id = "fondo-animado";
    canvas.setAttribute("aria-hidden", "true");

    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");

    let ancho;
    let alto;
    let particulas = [];

    const colores = [
        "rgba(163, 255, 18,",
        "rgba(168, 85, 247,"
    ];

    function crearParticula() {
        return {
            x: Math.random() * ancho,
            y: Math.random() * alto,
            radio: Math.random() * 2 + 0.7,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            color: colores[Math.floor(Math.random() * colores.length)]
        };
    }

    function ajustarCanvas() {
        const escala = Math.min(window.devicePixelRatio || 1, 2);

        ancho = window.innerWidth;
        alto = window.innerHeight;

        canvas.width = ancho * escala;
        canvas.height = alto * escala;

        canvas.style.width = ancho + "px";
        canvas.style.height = alto + "px";

        ctx.setTransform(escala, 0, 0, escala, 0, 0);

        const cantidad = Math.min(
            90,
            Math.max(30, Math.floor(ancho * alto / 17000))
        );

        particulas = Array.from(
            { length: cantidad },
            crearParticula
        );
    }

    function animar() {
        ctx.clearRect(0, 0, ancho, alto);

        particulas.forEach((p, i) => {

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = ancho;
            if (p.x > ancho) p.x = 0;
            if (p.y < 0) p.y = alto;
            if (p.y > alto) p.y = 0;

            // Dibujar partículas
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radio, 0, Math.PI * 2);

            ctx.fillStyle = p.color + " 0.65)";
            ctx.shadowBlur = 12;
            ctx.shadowColor = p.color + " 0.65)";
            ctx.fill();

            ctx.shadowBlur = 0;

            // Conectar partículas cercanas
            for (let j = i + 1; j < particulas.length; j++) {

                const otra = particulas[j];

                const dx = p.x - otra.x;
                const dy = p.y - otra.y;

                const distancia = Math.hypot(dx, dy);

                if (distancia < 115) {

                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(otra.x, otra.y);

                    ctx.strokeStyle =
                        `rgba(168, 125, 220, ${(1 - distancia / 115) * 0.13})`;

                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animar);
    }

    window.addEventListener("resize", ajustarCanvas);

    ajustarCanvas();
    animar();

})();
console.log("FONDO ANIMADO ACTIVADO");
