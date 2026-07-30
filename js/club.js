const member1 = {
    id: Symbol('member1'),
    name: 'Oleg',
    joinDate: '13.07.2026'
}

const member2 = {
    id: Symbol('member2'),
    name: 'Vanya',
    joinDate: '27.05.2026'
}

const member3 = {
    id: Symbol('member3'),
    name: 'Kolya',
    joinDate: '1.06.2026'
}

console.log(member1);
console.log(member2);
console.log(member3);

const twin1 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

const twin2 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

console.log(twin1 === twin2); //false, бо це різні об'єкти
console.log(twin1.id === twin2.id); //false, бо символ завжди генерує різні айдішніки
console.log(twin1.name === twin2.name); //true, бо ім'я однакове
console.log(twin1.id.description === twin2.id.description); //true, бо опис однаковий

//символ завжди генерує унікальні айдішніки

// const s1 = Symbol('secret');
// const s2 = Symbol(s1.description);
// console.log(s1 === s2);   // false

// const s1 = Symbol('id');
// const s2 = Symbol('id');
// console.log(s1 == s2);   // false

// const s = Symbol('id');
// // alert(s);         // що станеться? club.js:51 Uncaught TypeError: Failed to execute 'alert' on 'Window': Cannot convert a Symbol value to a string at club.js:51:1
// // alert(String(s)); // а так? вивело Symbol(id)
// // alert(s.toString()); // а так? вивело Symbol(id)
// alert(s.description); // а так? вивело просто id

const uniqueKey = Symbol('meta');
const data = {
  publicName: 'Alice',
  [uniqueKey]: 'секретна інформація'
};

console.log(data);
console.log(data[uniqueKey]);
console.log(data.uniqueKey);   // а так?
console.log(Object.keys(data)); // напевно це працює так спеціально для того щоб ховати якусь інфу

const club = [member1, member2, member3, twin1, twin2];

function findMember(memberSymbol){
    let foundMember = club.find(member => member.id === memberSymbol);
    return foundMember || 'not found';
}
console.log(findMember(member1.id));
console.log(findMember(Symbol('member')));


const a = Symbol('shared');
const b = Symbol('shared');
console.log(a === b);   // false

const c = Symbol.for('shared');
const d = Symbol.for('shared');
console.log(c === d);   // true

//який результат ви очікували для c === d? - очікував true
//чому JavaScript надає дві різні можливості: одну для унікальних, іншу для спільних символів? - думаю для різних цілей, один для захисту інформації, а другий для пошуку
//вигадайте один сценарій, коли Symbol.for буде кращий за Symbol: наприклад коли створюєш щось, що потрібно буде юзати декілька разів