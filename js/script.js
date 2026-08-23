// const removeElement = (array, item) => {
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === item){
//             for(let a = i; a < array.length - 1; a++){
//                 array[a] = array[a + 1];
//             }
//             array.length = array.length - 1;
//             break;
//         }
//     }
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// removeElement(array, 3);
// console.log(array);

const removeElement = (array, item) => {
    const index = array.indexOf(item);
    if(index !== 1){
        array.splice(index, 1);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
removeElement(array, 4);
console.log(array);