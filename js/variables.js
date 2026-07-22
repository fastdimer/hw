"use strict";

const name = "Dima"; //це моє ім'я тому воно не зміниться
const surname = "Boiko"; //це прізвище тому воно не зміниться
let age = 19; //це вік і тому воно може змінитися коли настане день народження
let city = "Kyiv"; //це місто тому воно може змінитися якщо я переїду
let hobby = "playing computer games"; //це хобі тому воно може змінитися
const birthdayYear = "2006"; //це рік народження тому воно не зміниться
let favoriteColor = "red"; //це улюблений колір тому воно може змінитися

console.log(name,surname,age,city,hobby,birthdayYear,favoriteColor);

age = 20; //змінився вік
city = "Lviv"; //змінилося місто
favoriteColor = "blue"; //змінився улюблений колір

console.log(name,surname,age,city,hobby,birthdayYear,favoriteColor);

//birthdayYear = "2007"; //variables.js:19 Uncaught TypeError: Assignment to constant variable. at variables.js:19:14

//let name = "Max"; Uncaught SyntaxError: Identifier 'name' has already been declared (at variables.js:21:5)

console.log("Привіт! Мене звати " + name + " " + surname + ", Мені " + age + " років, живу у " + city + ".");