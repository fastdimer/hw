let result = '';

for (let i = 20; i <= 30; i = i + 0.5){
    result = result + i + ' ';
}

console.log(result);

const dollar = 27;

for (let i = 10; i <= 100; i = i + 10){
    let total = i * dollar;
    console.log(`${i} dollars is ${total}`);
}

const N = 13;
let result2 = '';

for (let i = 1; i <= 100; i++){
    if (i * i <= N) {
        result2 = result2 + i + ' ';
    }
    else{ 
        break;
    }
}
console.log(result2);

const simpleNumber = 13;
let isSimple = simpleNumber > 1;

for (let i = 2; i < simpleNumber; i++){
    if (simpleNumber % i === 0) {
        isSimple = false;
        break;
    }
}

const result3 = isSimple ? 'is simple' : 'is not simple';
console.log(`${simpleNumber} ${result3}`);

const number = 9;
let resultNumber = number;
let isDegreeOfThree = resultNumber === 1;

while (resultNumber % 3 === 0){
    resultNumber = resultNumber / 3;
}

const result4 = resultNumber === 1 ? 'is degree of three' : 'is not degree of three';
console.log(`${number} ${result4}`);
