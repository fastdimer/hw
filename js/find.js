const orders = [
  { id: 101, items: [{ sku: "A1", qty: 1 }, { sku: "C3", qty: 2 }] },
  { id: 102, items: [{ sku: "B2", qty: 1 }] },
  { id: 103, items: [{ sku: "B2", qty: 3 }, { sku: "A1", qty: 1 }] },
];

const orderB2 = orders.find((order) => {
    return order.items.some((item) => item.sku === "B2");
});

console.log(orderB2);