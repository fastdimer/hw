let x;
let typeOf = [typeof 42, typeof 42n, typeof 'hello', typeof true, typeof undefined, typeof null, typeof NaN, typeof Infinity, typeof Symbol('id'), typeof {}, typeof [], typeof [1, 2, 3], typeof function() {}, typeof (() => {}), typeof (2 + 2), typeof ('2' + 2), typeof ('foo' - 'bar'), typeof x, typeof nonExistentVariable, typeof typeof 42];

console.log(typeOf);

function isReallyArray(value){
    return Array.isArray(value);
}

console.log(isReallyArray([1, 2, 3]));  
console.log(isReallyArray('hello'));        
console.log(isReallyArray({ length: 3 }));   
console.log(isReallyArray(null));           
console.log(isReallyArray('123'.split('')));  

function whatIsIt(value){
    if (value === null){
        return "null";
    }
    if (Array.isArray(value)){
        return "array"
    }
    if (Number.isNaN(value)){
        return "nan"
    }
    return typeof value;
}

console.log(whatIsIt(42));
console.log(whatIsIt('hi'));
console.log(whatIsIt(null));
console.log(whatIsIt([1, 2]));
console.log(whatIsIt({}));
console.log(whatIsIt(() => {}));
console.log(whatIsIt(undefined));
console.log(whatIsIt(NaN));