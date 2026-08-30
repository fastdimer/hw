const arrayShift = (array) => {
    const firstElement = array[0];
    for (let i = 0; i < array.length - 1; i++){
    array[i] = array[i + 1];
    }

    array.length = array.length - 1;

    return firstElement;

}

const array = [1,2,3,4,5];

console.log(array);
console.log(arrayShift(array));