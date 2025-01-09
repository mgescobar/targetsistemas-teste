// Desafio 5 - Target Sistemas
// Código pode ser executado através do link: https://playcode.io/2216863

function inverterString(str) {
  let stringInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
  }

  return stringInvertida;
}

const stringOriginal = "Desafio 5 - Target Sistemas";

const resultado = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", resultado);