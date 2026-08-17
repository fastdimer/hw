'use strict';

const userAge = prompt("Напишіть ваш вік");

const isValidAge = userAge !== null && userAge.trim() !== "" && !isNaN(userAge) && Number.isFinite(Number(userAge)) && Number.isInteger(Number(userAge));

const age = Number(userAge);

if (isValidAge === false) {
    alert("Некоректний ввід");
}
else {
    
if (age < 0) {
    alert("Такого віку не існує");
}
else if (age >= 0 && age <= 6) {
    alert("Дошкільник");
}
else if (age >= 7 && age <= 17) {
    alert("Неповнолітній");
}
else if (age >= 18 && age <= 64) {
    alert("Дорослий");
}
else if (age >= 65 && age <= 120) {
    alert("Пенсіонер");
}
    else {
        alert("Ви точно не бот?");
    }
}

const canDrive = age >= 18 ? 'Може керувати авто' : 'Не може керувати авто';
const ticket =
age < 7 ? 'безкоштовно' :
age >= 7 && age <=17 || age >= 65 ? '50 грн' :
'100 грн';