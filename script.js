const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const botonRestar = document.getElementById("btn-restar");
const botonReiniciar = document.getElementById("btn-reiniciar");
const tabla = document.getElementById("tabla-registros");

let likes = 0;

function obtenerHora() {
  const ahora = new Date();
  const h = String(ahora.getHours()).padStart(2, "0");
  const m = String(ahora.getMinutes()).padStart(2, "0");
  const s = String(ahora.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

// 4. Actualizar contador y color (Reto 2)
function actualizarContador() {
  textoContador.textContent = likes;
  textoContador.classList.toggle("alto", likes > 10);
}

// 5. Evento click: sumar y registrar fila
boton.addEventListener("click", () => {
  likes++;
  actualizarContador();

  const fila = document.createElement("tr");
  const celdaNumero = document.createElement("td");
  const celdaHora = document.createElement("td");
  celdaNumero.textContent = likes;
  celdaHora.textContent = obtenerHora();
  fila.appendChild(celdaNumero);
  fila.appendChild(celdaHora);

  tabla.prepend(fila); // más reciente arriba
});

// Reto 1: restar
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