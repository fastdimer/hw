// const typeTime = prompt('Напишіть кількість секунд');

// if(typeTime === null || typeTime.trim() === ''){
//     alert('Некоректний ввід');
// }
// else{
//     const time = Number(typeTime);

// if(!Number.isInteger(time) || isNaN(time)){
//     alert('Некоректний ввід');
// }
// else{
//     const hours = String(Math.floor(time / 3600)).padStart(2,'0');
//     const minutes = String(Math.floor((time % 3600) / 60)).padStart(2,'0');
//     const seconds = String(Math.floor(time % 60)).padStart(2,'0');
//     alert(`${time}: ${hours}:${minutes}:${seconds}`);
// }
// }

// const typeNumber = prompt('Введіть ціле додатне число');

// if(typeNumber === null || typeNumber.trim() === ''){
//     alert('Некоректний ввід');
// }
// else{
//     let number = Number(typeNumber);

// if(!Number.isInteger(number) || isNaN(number)){
//     alert('Некоректний ввід');
// }
// else{
// let chain = `${number}`;
// let sum = null;


// while(number >= 10){
//     let finalSum = 0;

//     while(number > 0){
//         finalSum += number % 10;
//         number = Math.floor(number / 10);
//     }


// if(sum === null){
//     sum = finalSum;
// }

// number = finalSum;
// chain += `: ${number}`;
// }

// if(sum === null){
//     sum = number;
// }


// console.log(chain);
// console.log(`Сума цифр: ${sum}, корінь: ${number}`);

// }
// }



const typeGrivni = prompt('Напишіть суму в гривнях');

if(typeGrivni === null || typeGrivni.trim() === ''){
    alert('Некоректний ввід');
}
else{
    let grivni = Number(typeGrivni);

if(!Number.isInteger(grivni) || isNaN(grivni)){
    alert('Некоректний ввід');
}
else{
const nominals = [500, 200, 100, 50, 20, 10, 5, 2, 1];
let result = `${grivni}: `;
let mathCounting = 0;

for (let i = 0; i < nominals.length; i++){
    const nominal = nominals[i];


if(grivni === 0){
    break;
}

const count = Math.floor(grivni / nominal);

if(count === 0){
    continue;
}
if(mathCounting > 0){
    result += ', ';
}

result += `${nominal} x ${count}`;
mathCounting += count;
grivni = grivni % nominal;
}

console.log(result);


}
}

