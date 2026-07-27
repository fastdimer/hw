№    Вираз              Моя гіпотеза        Реальний результат          Пояснення

1    typeof 42          виведе number       "number"                    вивело number тому що це число
2    typeof 42n         виведе bigInt       "bigint"                    вивело bigint тому що це занадто велике число
3    typeof 'hello'     виведе string       "string"                    вивело string тому що це речення
4    typeof true        виведе boolean      "boolean"                   вивело boolean тому що у нас true, а в boolean є тільки true або false
5    typeof undefined   виведе undefined    "undefined"                 вивело undefined тому що undefined є undefined
6    typeof null        виведе object       "object"                    вивело object, нам розповіли це на уроці, це просто прикол js
7    typeof NaN         виведе number       "number"                    NaN є числовою помилкою напевно, тому number
8    typeof Infinity    виведе number       "number"                    infinity також відноситься до чисел, тому number
9    typeof Symbol('id') виведе Symbol      "symbol"                    symbol є symbol
10   typeof {}          виведе object       "object"                    це по факту порожній об'єкт, тому object
11   typeof []          виведе object       "object"                    здалося що масив теж виведе об'єкт, тому поставив object
12   typeof [1, 2, 3]   виведе object       "object"                    теж саме що і масив, але з чимось в середині
13   typeof function() {} виведе function   "function"                  функція є функцією
14   typeof (() => {})  виведе function     "function"                  це стрілочна функція, але всеодно функція
15   typeof (2 + 2)     виведе number       "number"                    математичний вираз, тому number
16   typeof ('2' + 2)   виведе помилку      "string"                    не знав що відповісти, тому написав помилку, але вийшла стрігна, не знаю чому
17   typeof ('foo' - 'bar') виведе помилку   "number"                   теж самое що із 16-м номером
18   let x;
     typeof x           виведе undefined    "undefined"                 ми не призначили x нічого, тому за замовчуванням буде undefined
19   typeof nonExistentVariable виведе undefined    "undefined"         теж здалось що буде undefined, напевно тому що ми не призначили нічого змінній
20   typeof typeof 42   виведе помилку      "string"                    не знаю чому вийшла стрінга


ПІДОЗРІЛІ СПРАВИ

1) typeof null - Чому виглядає як баг: тому що не очікуєш побачити там object, можливо хоча number
    Як перевіряти правильно: через строге порівняння
2) typeof [] - Чому виглядає як баг: тому що здається що масив не є об'єктом
    Як перевіряти правильно: метод Array.isArray
3) typeof NaN - Чому виглядає як баг: тому що здається що nan це помилка
    Як перевіряти правильно: Number.isNaN
4) typeof nonExistentVariable - Чому виглядає як баг: тому що це буквально якась назва чогось, не зрозуміло
    Як перевіряти правильно: таким чином можна перевіряти чи не підключена якась бібліотека