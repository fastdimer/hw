№       Сцена                                                   Що вивелося             Хто винен       Як уникнути

1       let name;                                               undefined               js              треба присвоїти значення
        console.log(name);

2       let name = null;
        console.log(name);                                      null                    разраб          це рішення розробника

3       function greet(user) {
          console.log('Hello,', user);
        }
        greet();                                                Hello, undefined        js              треба викликати функцію

4       function calculate(a, b) {
          return a + b;
          // забули повернути результат окремої змінної
        }
        console.log(calculate(2, 3));                           5                       разраб          з кодом все гуд, але якщо треба то повернуть окремо

5       function calculate(a, b) {
          let result = a + b;
          // не написали return
        }
        console.log(calculate(2, 3));                           undefined               разраб          написати return

6       function calculate(a, b) {
          return;
        }
        console.log(calculate(2, 3));                           undefined               js              вказати зміну після return

7       const user = {
          firstName: 'John',
          lastName: 'Doe'
        };
        console.log(user.age);                                  undefined               js             додати змінну age 

8       const user = {
          firstName: 'John',
          middleName: null,
          lastName: 'Doe'
        };
        console.log(user.middleName);                           null                    разраб          свідоме рішення

9       const arr = [10, 20, 30];
        console.log(arr[10]);                                   undefined               js              звернутися до першого масиву якщо треба саме 10 (0 індекс)

10      const user = {
          name: 'Anna',
          address: {
            city: 'Kyiv'
          }
        };
        console.log(user.address.street);                       undefined               js              додати змінну street до address