// Desafio 3 - Target Sistemas
// Código pode ser executado através do link: https://playcode.io/2216857

// Exemplo de JSON com faturamento diário (30 dias)
const faturamentoDiario = [
  { dia: 1, valor: 100.0 },
  { dia: 2, valor: 200.0 },
  { dia: 3, valor: 0.0 },
  { dia: 4, valor: 150.0 },
  { dia: 5, valor: 300.0 },
  { dia: 6, valor: 0.0 },
  { dia: 7, valor: 250.0 },
  { dia: 8, valor: 50.0 },
  { dia: 9, valor: 400.0 },
  { dia: 10, valor: 0.0 },
  { dia: 11, valor: 350.0 },
  { dia: 12, valor: 0.0 },
  { dia: 13, valor: 100.0 },
  { dia: 14, valor: 450.0 },
  { dia: 15, valor: 0.0 },
  { dia: 16, valor: 300.0 },
  { dia: 17, valor: 200.0 },
  { dia: 18, valor: 0.0 },
  { dia: 19, valor: 150.0 },
  { dia: 20, valor: 100.0 },
  { dia: 21, valor: 0.0 },
  { dia: 22, valor: 50.0 },
  { dia: 23, valor: 400.0 },
  { dia: 24, valor: 0.0 },
  { dia: 25, valor: 350.0 },
  { dia: 26, valor: 0.0 },
  { dia: 27, valor: 450.0 },
  { dia: 28, valor: 300.0 },
  { dia: 29, valor: 0.0 },
  { dia: 30, valor: 250.0 },
];

function calcularFaturamento(faturamento) {
  const diasComFaturamento = faturamento.filter((dia) => dia.valor > 0);

  if (diasComFaturamento.length === 0) {
    console.log("Não há dados de faturamento.");
    return;
  }

  const menorFaturamento = Math.min(...diasComFaturamento.map((dia) => dia.valor));
  const maiorFaturamento = Math.max(...diasComFaturamento.map((dia) => dia.valor));
  const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
  const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter((dia) => dia.valor > mediaFaturamento).length;

  console.log("Menor valor de faturamento:", menorFaturamento);
  console.log("Maior valor de faturamento:", maiorFaturamento);
  console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia);
}

calcularFaturamento(faturamentoDiario);