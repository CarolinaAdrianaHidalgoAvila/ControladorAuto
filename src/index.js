import controladorAuto from "./App";

const first = document.querySelector("#first-number");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
 

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
