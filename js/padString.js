const padString = (string, length, symbol, rightSide = true) => {
    if (typeof string !== 'string'){
        return 'Помилка. Перший аргумент не стрінга';
    }
    if(typeof length !== 'number' || Number.isNaN(length)){
        return 'Помилка. Другий аргумент має бути числом';
    }
    if(length <= string.length){
    return string.substring(0, length);
    }
    if(typeof symbol !== 'string' || symbol.length !== 1){
        return 'Помилка. Третій аргумент має бути не довше 1 символа';
    }
    if(typeof rightSide !== 'boolean'){
        return 'Помилка. Четвертий аргумент має бути true або false';
    }

    while (string.length < length){
        if(rightSide){
            string += symbol;
        }
        else{
            string = symbol + string;
        }
    }
    return string;
}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));