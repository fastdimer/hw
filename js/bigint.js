let bigInt = 10n;
console.log(bigInt);

let bigInt2 = BigInt(123);
console.log(bigInt2);

console.log(typeof bigInt);
console.log(typeof bigInt2);

let maxNumber2 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(maxNumber2 + 1n);
console.log(maxNumber2 + 2n);
console.log(maxNumber2 + 3n);
console.log(maxNumber2 + 4n);
console.log(maxNumber2 + 5n);
//теперь всі числа виводяться правильно через bigint, до цього ми використали звичайні числа та вони виводились неправильно (мається на увазі після макс. числа)

const a = 10n;
const b = 10;
console.log(a === b);
console.log(a == b);
console.log(typeof a);
console.log(typeof b);
//в першому порівнянні це сурова перевірка, тому повертає false, бо у них інші типи даних, а в іншому випадку це не сувора перевірка, тому повертає true, бо по факту і там і там числа

//console.log(10n + 5);
//bigint.js:26 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions at bigint.js:26:17