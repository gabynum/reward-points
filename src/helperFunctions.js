function cleanupJsonString(string) {
  return string.replaceAll(/\n/g, '')
    .replaceAll(' ', '')
    .replaceAll('\'', '"');
}

// alternative function limits single points for purchases over $50 at $100
// function calculatePoints(purchaseAmount) {
//   if (purchaseAmount > 100) {
//     return ((purchaseAmount - 100) * 2) + 50;
//   } else if (purchaseAmount > 50) {
//     return (purchaseAmount - 50);
//   } else {
//     return 0;
//   }
// }

function calculatePoints(purchaseAmount) {
  let points = 0;
  if (purchaseAmount > 100) {
    points += ((purchaseAmount - 100) * 2);
  }
  if (purchaseAmount > 50) {
    points += (purchaseAmount - 50);
  }
  return points;
}

export function parseTransactions(transactions) {
  const transactionsJson = JSON.parse(cleanupJsonString(transactions));

  return transactionsJson.reduce((records, transaction) => {
    if (!records[transaction.name]) records[transaction.name] = {};
    
    const record = records[transaction.name];
    const month = new Date(transaction.date).toLocaleDateString('default', { month: 'short'});
    const rewardPoints = calculatePoints(transaction.amount);

    if (!record[month]) record[month] = 0;
    record[month] += rewardPoints;

    return records;
  }, {});
}