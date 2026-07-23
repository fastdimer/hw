console.log("перший рядок");
console.log(`другий рядок`);
console.log('третій рядок');

console.log("подвійні \'одинарні\' лапки");
console.log(`подвійні 'одинарні' лапки`);

let name = "Dima";
let age = 19;
let city = "Kyiv";
let me = (`Привіт! Мене звати ${name}, мені ${age} років, живу у ${city}, живу ${age * 12} місяців`);

console.log(me);

console.log(me.length);
console.log(me[0]);
console.log(me[4]);
console.log(me[me.length - 1]);

const greeting = 'Hello';
greeting[0] = 'J';
console.log(greeting);
//вивелось hello без помилок, очікував що виведе Jello