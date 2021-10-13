import controladorAuto from "./App";

const cadenaComandos = document.querySelector("#cadenaComandos");
const form = document.querySelector("#controlador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>"+ "Posicion y Orientacion Final: "+ controladorAuto(cadenaComandos.value)+ "</p>";
});
