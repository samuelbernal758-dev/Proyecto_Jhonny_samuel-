const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const botonRestar = document.getElementById("btn-restar");
const botonReiniciar = document.getElementById("btn-reiniciar");
const tabla = document.getElementById("tabla-registros");

let likes = 0;


// Retos 1
botonRestar.addEventListener("click", () => {
  if (likes > 0) {
    likes--;
    actualizarContador();
  }
});

// Reto 1: reiniciar
botonReiniciar.addEventListener("click", () => {
  likes = 0;
  actualizarContador();
  tabla.innerHTML = "";
});