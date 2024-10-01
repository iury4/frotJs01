//inicio do projeto calculadora html/css/js
const app = document.querySelector("#app");
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const btnCalcular = document.querySelector("btn-calcular");

const resultados = document.querySelector("#resultados");
const soma = document.querySelector(".soma");
const multiplicacao = document.querySelector(".multiplicação");
const subtracao = document.querySelector(".subtração");
const divisao = document.querySelector(".divisão");

function calcular() {
  const n1 = Number(numero1.value);
  const n2 = Number(numero2.value);
  soma.innerHTML = `A soma de ${n1} e ${n2} é: ${n1 + n2} `;
  //return res;
}

calcular();

btnCalcular.addEventLidtener("click", function (evento) {
  evento.preventDefaul();
  calcular();
});
