console.log("ціле додатнє", 13);
console.log("ціле від'ємне", -13);
console.log("число з плаваючою крапкою", 13.6);
console.log("дуже велике число, записане через e", 24e6);
console.log("дуже мале число, записане через e-", 24e-6);
console.log("велике число з роздільником _", 13_000_000);

console.log(13/0);
console.log(-Infinity); //або -13/0
console.log("stringa" /0);

console.log(0.1 + 0.2); //думав буде 0.3, але нам вже встигли розповісти про це, тому я знав що буде 0.30000000000000004

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber + 1);
console.log(maxNumber + 2);
console.log(maxNumber + 3);
console.log(maxNumber + 4);
console.log(maxNumber + 5);
//після макс. числа при додаванні 1 2 3 4 5 рахується неправильно

let nan = "stringa" /0;
console.log(nan + 1);
console.log(nan - 1);
console.log(nan * 1);
console.log(nan / 1);
//щоб я не робив, повертає nan у всіх випадках