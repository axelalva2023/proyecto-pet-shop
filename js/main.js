const texto = "¡Bienvenidos!";
let i = 0;
let escribiendo = true; // Controla si está escribiendo o borrando
const speed = 100; // Velocidad de la animación en milisegundos

function escribirEfecto() {
    const titulo = document.getElementById("texto");

    if (escribiendo) {
        if (i < texto.length) {
            titulo.innerHTML += texto.charAt(i);
            i++;
        } else {
            escribiendo = false; // Empieza a borrar cuando termina de escribir
            setTimeout(escribirEfecto, speed * 2); // Pausa antes de borrar
            return;
        }
    } else {
        if (i > 0) {
            i--;
            titulo.innerHTML = texto.substring(0, i);
        } else {
            escribiendo = true; // Cambia a escribir de nuevo
            setTimeout(escribirEfecto, speed * 2); // Pausa antes de escribir
            return;
        }
    }

    setTimeout(escribirEfecto, speed);
}

escribirEfecto();

function agregarEfectoCambioImagen(idElemento, imagenHover, imagenOriginal) {
    const elemento = document.getElementById(idElemento);
    
    if (!elemento) return; // Verifica si el elemento existe

    elemento.addEventListener("mouseenter", () => {
        elemento.src = imagenHover;
    });

    elemento.addEventListener("mouseleave", () => {
        elemento.src = imagenOriginal;
    });
}

// Aplicamos la función a cada imagen
agregarEfectoCambioImagen("fotoCard1", "./img/perro-hambre.jpg", "./img/carne-card.jpg");
agregarEfectoCambioImagen("fotoCard2", "./img/perro-hambre.jpg", "./img/pescado-card.jpg");
agregarEfectoCambioImagen("fotoCard3", "./img/perro-hambre.jpg", "./img/pollo-card.jpg");


