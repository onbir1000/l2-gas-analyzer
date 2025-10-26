// analyzer.js
// Simulated L2 Gas Analyzer

function analyzeTransactions(transactions) {
  let totalGas = 0;
  for (let tx of transactions) {
    totalGas += tx.gasUsed;
  }

  const avgGas = totalGas / transactions.length;
  console.log("📊 Average Gas Used:", avgGas.toFixed(2));
}

const exampleTxs = [
  { id: 1, gasUsed: 21000 },
  { id: 2, gasUsed: 32000 },
  { id: 3, gasUsed: 28000 },
  { id: 4, gasUsed: 25000 },
];

analyzeTransactions(exampleTxs);

Add L2 Gas Analyzer script
