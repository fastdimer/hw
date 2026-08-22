let guessedCorrectly = false;
const randomNumber = Math.floor(Math.random() * 10) + 1;
let countOfTries = 5;

do {
    const userGuess = prompt("Вгадай число від 1 до 10:");
    if (userGuess === null) {
        alert("Гру завершено");
        break;
    }
    else if(userGuess.trim() === ''){
        alert("Ви нічого не ввели");
        continue;
    }
    else if(Number.isNaN(Number(userGuess))) {
        alert("Це не число");
        continue;
    }
    else if(!Number.isInteger(Number(userGuess))) {
        alert("Введіть ціле число");
        continue;
    }
    else if(Number(userGuess) < 1 || Number(userGuess) > 10) {
        alert("Число має бути від 1 до 10");
        countOfTries--;
        continue;
    }

const number = Number(userGuess);

if (number === randomNumber){
    const howManyTries = 5 - countOfTries;
    alert(`Вітаю! Ви вгадали число за ${howManyTries} спроб`);
    break;
}

countOfTries--;

if(countOfTries > 0){
    if(number < randomNumber){
    alert(`Замало. Залишилось спроб: ${countOfTries}`);
}
else{
    alert(`Забагато. Залишилось спроб: ${countOfTries}`);
}
}
else{
    alert(`Спроби закінчилися. На жаль це було число ${randomNumber}`)
    break;
}

} while (!guessedCorrectly);