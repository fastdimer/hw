const arrayReverse = (array) => {
    const arrayMiddleLength = Math.floor(array.length / 2)

    for (let i = 0; i < arrayMiddleLength; i++){
        const lastElement = array.length - 1 - i;

        const tempArray = array[i];
        array[i] = array[lastElement];
        array[lastElement] = tempArray;

    }
    return array;

}

const resultArray = [1,2,3,4,5,6];
console.log(resultArray);
console.log(arrayReverse(resultArray));