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

const fotoCard1 =  document.getElementById("fotoCard1")

fotoCard1.addEventListener("mouseenter", () =>{
    fotoCard1.src = "./img/perro-hambre.jpg"
})

fotoCard1.addEventListener("mouseleave", () => {
    fotoCard1.src = "./img/carne-card.jpg"; // Imagen original o de reemplazo
});

const fotoCard2 =  document.getElementById("fotoCard2")

fotoCard2.addEventListener("mouseenter", () =>{
    fotoCard2.src = "./img/perro-hambre.jpg"
})

fotoCard2.addEventListener("mouseleave", () => {
    fotoCard2.src = "./img/pescado-card.jpg"; // Imagen original o de reemplazo
});

const fotoCard3 =  document.getElementById("fotoCard3")

fotoCard3.addEventListener("mouseenter", () =>{
    fotoCard3.src = "./img/perro-hambre.jpg"
})

fotoCard3.addEventListener("mouseleave", () => {
    fotoCard3.src = "./img/pollo-card.jpg"; // Imagen original o de reemplazo
});

