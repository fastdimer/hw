'use strict';

const typeTemp = prompt('Введіть значення температури в Цельсіях');

const isValidTemp = typeTemp !== null && typeTemp.trim() !== "" && !Number.isNaN(Number(typeTemp)) && Number.isFinite(Number(typeTemp));

if(isValidTemp === false){
    alert('Некоректний ввід');
}
else{
const temp = Number(typeTemp);


if(temp < -273.15){
    alert('Нижче абсолютного нуля')
}
else{
    const typeScale = prompt('Введіть цільову шкалу (f,k,r');


if(typeScale === null || typeScale.trim() === '') {
    alert('Невідома шкала');
}
else{
const scale = typeScale.toLowerCase();

let resultTemp = null;

switch (scale){
    case 'f':
        resultTemp = Math.round(((temp * 9 / 5) + 32) * 100) / 100;
        break;

    case 'k':
        resultTemp = Math.round((temp + 273.15) * 100) / 100;
        break;

    case 'r':
        resultTemp = Math.round(((temp + 273.15) * 9 / 5) * 100) / 100;
        break;

    default:
        resultTemp = null;
        break;
}

const scaleNames = {
    f: 'Фаренгейт',
    k: 'Кельвін',
    r: 'Ранкін',
};

let scaleName;

if(Object.hasOwn(scaleNames, scale)){
    scaleName = scaleNames[scale] ?? 'Невідома шкала'
}
else {
    scaleName = 'Невідома шкала';
}

if (resultTemp === null || scaleName === 'Невідома шкала') {
    alert('Невідома шкала');
}

else{
const tempResult =
temp < -10 ? 'мороз' :
temp <= 0 ? 'холодно' :
temp <= 15 ? 'прохолодно' :
temp <=25 ? 'комфортно' :
'спека';

alert(`${temp} °C = ${resultTemp} (${scaleName}) — ${tempResult}`);
}
}
}
}