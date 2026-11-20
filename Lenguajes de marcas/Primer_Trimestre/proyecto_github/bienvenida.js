
document.addEventListener("DOMContentLoaded", () => {

    const bienvenida = document.getElementById(
        "bienvenida-overlay"
    );

    if (!bienvenida) return;

    // Mantener la bienvenida durante 6 segundos
    setTimeout(() => {

        bienvenida.classList.add("ocultar");

        // Esperar a que termine la desaparición
        setTimeout(() => {
            bienvenida.remove();
        }, 1000);

    }, 6000);

});


document.addEventListener("DOMContentLoaded", () => {

    const bienvenida = document.getElementById("bienvenida-overlay");

    if (!bienvenida) return;

    // ==========================================
    // ANIMACIÓN DE LOS TRES PUNTOS
    // ==========================================

    const puntos = document.querySelectorAll(".puntos-carga span");

    function animarPuntos() {

        let indice = 0;

        puntos.forEach(punto => {
            punto.classList.remove("visible");
        });

        function siguientePunto() {

            if (indice < puntos.length) {

                puntos[indice].classList.add("visible");

                indice++;

                setTimeout(siguientePunto, 500);

            } else {

                // Mantener los tres puntos visibles
                setTimeout(() => {

                    // Desaparecer todos juntos
                    puntos.forEach(punto => {
                        punto.classList.remove("visible");
                    });

                    // Volver a comenzar
                    setTimeout(animarPuntos, 0);

                }, 2000);
            }
        }

        siguientePunto();
    }

    if (puntos.length > 0) {
        animarPuntos();
    }

    // ==========================================
    // DURACIÓN DE LA PANTALLA DE BIENVENIDA
    // ==========================================

    const duracionBienvenida = 6000;
    const duracionDesaparicion = 1600;

    setTimeout(() => {

        bienvenida.classList.add("ocultar");

        setTimeout(() => {
            bienvenida.remove();
        }, duracionDesaparicion);

    }, duracionBienvenida);

});
