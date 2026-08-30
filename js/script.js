const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0;
let positiveElements = 0;
let minElement = array[0];
let minIndex = 0;
let maxElement = array[0];
let maxIndex = 0;
let negativeElements = 0;
let unpairedPositiveElements = 0;
let pairedPositiveElements = 0;
let sumPairedPositiveElements = 0;
let sumUnpairedPositiveElements = 0;
let additionOfPositiveElements = 1;
let mostOfElements = 0;

for(let i = 0; i < array.length; i++){
    const number = array[i];

    sum += number;

    if(number < minElement){
        minElement = number;
        minIndex = i;
    }

    if(number > maxElement){
        maxElement = number;
        maxIndex = i;
    }

    if(number > 0){
        positiveElements++;
        additionOfPositiveElements *= number;

        if(number % 2 === 0){
            pairedPositiveElements++;
            sumPairedPositiveElements += number;
        }
        else{
            unpairedPositiveElements++;
            sumUnpairedPositiveElements += number;
        }
        }
        else if(number < 0){
            negativeElements++;
    }
}

    for(let i = 0; i < array.length; i++){
         if(array[i] !== maxElement){
            array[i] = 0;
         }
    }


console.log(`1: ${sum}, ${positiveElements}`);
console.log(`2: ${minElement}, ${minIndex}`);
console.log(`3: ${maxElement}, ${maxIndex}`);
console.log(`4: ${negativeElements}`);
console.log(`5: ${unpairedPositiveElements}`);
console.log(`6: ${pairedPositiveElements}`);
console.log(`7: ${sumPairedPositiveElements}`);
console.log(`8: ${sumUnpairedPositiveElements}`);
console.log(`9: ${additionOfPositiveElements}`);
console.log(`10: ${array}`);