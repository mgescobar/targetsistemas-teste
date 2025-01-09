// Desafio 2 - Target Sistemas
// Código pode ser executado através do link: https://playcode.io/2216859

function isFibonacci(num) {
  let a = 0, b = 1;

  while (a <= num) {
      if (a === num) {
          console.log(`O número ${num} pertence à sequência de Fibonacci.`);
          return true;
      }
      [a, b] = [b, a + b];
  }

  console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
  return false;
}

isFibonacci(21)
isFibonacci(22)