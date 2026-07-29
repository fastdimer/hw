let name1;
console.log(name1);


let name2 = null;
console.log(name2);

function greet(user13) {
  console.log('Hello,', user13);
}
greet();

function calculate1(a, b) {
  return a + b;
  // забули повернути результат окремої змінної
}
console.log(calculate1(2, 3));

function calculate2(a, b) {
  let result = a + b;
  // не написали return
}
console.log(calculate2(2, 3));

function calculate3(a, b) {
  return;
}
console.log(calculate3(2, 3));

const user1 = {
  firstName: 'John',
  lastName: 'Doe'
};
console.log(user1.age);

const user2 = {
  firstName: 'John',
  middleName: null,   // розробник свідомо сказав, що середнього імені немає
  lastName: 'Doe'
};
console.log(user2.middleName);

const arr = [10, 20, 30];
console.log(arr[10]);

const user3 = {
  name: 'Anna',
  address: {
    city: 'Kyiv'
  }
};
console.log(user3.address.street);

function describeEmpty(value){
    if(value === undefined){
        return 'Це undefined — JavaScript сам поставив або значення не задано';
    }

    if(value === null){
        return 'Це null — розробник свідомо сказав, що тут порожньо';
    }

    return `Це не є порожнім значенням: <${typeof value}, ${value}>`;
}

console.log(describeEmpty(undefined));
console.log(describeEmpty(null));
console.log(describeEmpty(0));
console.log(describeEmpty(''));
console.log(describeEmpty([]));
console.log(describeEmpty(false));

let userName = 'Anna';; //одразу дав змінній значення
let userAge = 123;

console.log('name:', userName);

function getGreeting(name) {
  return `Hello, ${name}`; //замість консоль лога написав return
}

const message = getGreeting('World');
console.log('message:', message); //нічого не міняв




const user123 = {
  name: 'Anna',
  contact: { email: 'anna@example.com' }
};

const user213 = {
  name: 'Bob'
};

console.log(user123.contact?.email);
console.log(user213.contact?.email);
