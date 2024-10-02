//inicio do projeto calculadora html/css/js
const app = document.querySelector("#app");
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const btnCalcular = document.querySelector("#btn-calcular");
const btnLimpar = document.querySelector("#btn-limpar");

const resultados = document.querySelector("#resultados");
const soma = document.querySelector(".soma");
const multiplicacao = document.querySelector(".multiplicacao");
const subtracao = document.querySelector(".subtracao");
const divisao = document.querySelector(".divisao");

function calcular() {
  const n1 = Number(numero1.value);
  const n2 = Number(numero2.value);
  

  soma.innerHTML = `A soma de ${n1} e ${n2} é: ${n1 + n2} `;

  subtracao.innerHTML = `A subtracação de ${n1} e ${n2} é: ${n1 - n2} `;

  multiplicacao.innerHTML = `A multiplicação de ${n1} e ${n2} é: ${n1 * n2} `;

  divisao.innerHTML = `A DIVISÃO de ${n1} e ${n2} é: ${n1 / n2} `;
}
btnCalcular.addEventListener("click", function (evento) {
  evento.preventDefault();
  calcular();
});
btnLimpar.addEventListener("click", function (evento) {
  evento.preventDefault();
  limparFormulario();
});


function limparFormulario() {
  const n1 = Number(numero1.value);
  const n2 = Number(numero2.value);
  if (n1 || n2) {
    const form = document.querySelector("form");
    form.reset();
    document.querySelector("#numero1").focus();