// Desafio 4 - Target Sistemas
// Código pode ser executado através do link: https://playcode.io/2216860

// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor, 0);

const percentuais = {};
for (const estado in faturamento) {
  percentuais[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2);
}

console.log("Percentual de representação por estado:");
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado]}%`);
}