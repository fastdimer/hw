const products = [
  { id: 1, name: "Mouse", price: 25, inStock: true },
  { id: 2, name: "Keyboard", price: 70, inStock: false },
  { id: 3, name: "Monitor", price: 210, inStock: true },
];

const transformProducts = products.map((product) => {
    return `${product.name} ${product.price} ${product.inStock ? "" : "(out of stock)"}`;
});

console.log(transformProducts);