const tx = [
  { id: 1, category: "food", amount: 12 },
  { id: 2, category: "food", amount: 8 },
  { id: 3, category: "taxi", amount: 15 },
  { id: 4, category: "books", amount: 20 },
  { id: 5, category: "taxi", amount: 7 },
];

const groupedTx = tx.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = 0;
    }
    acc[item.category] += item.amount;
    return acc;
}, {});

console.log(groupedTx);