let kopecks = [1999, 50, 100000, 7];
kopecks.forEach((value) => {
let grivnas = Math.floor(value / 100);
let reminder = value % 100;

console.log("Ціна товару: " + grivnas + " грн " + reminder + " коп ");
});