const hero = {
  name: "Basim",
  class: "assassin",
  level: 1,
  isAlive: true,
}

console.log(hero);
console.log(hero.name);
console.log(hero.class);
console.log(hero.level);
console.log(hero.isAlive);

hero.stats = {
  hp: 100,
  mana: 6,
  strength: 10,
  agility: 3,
  intelligence: 7
};

console.log(hero.stats);
console.log(hero.stats.strength);
console.log(hero.stats.intelligence * 2);

hero.inventory = ["sword", "potion", "shield", "bow"];

console.log(hero.inventory);
console.log(hero.inventory[0]);
console.log(hero.inventory[hero.inventory.length - 1]);
console.log(hero.inventory.length);

const enemy = {
    name: "king",
    'critical hit chance': 0.15,
    'attack-speed': 2.5,
    ['damage-' + hero.class]: 50,
};

// console.log(enemy.critical hit chance); // Uncaught SyntaxError: missing ) after argument list (at character.js:40:19)
// console.log(enemy.attack-speed); // character.js:41 Uncaught ReferenceError: speed is not defined at character.js:41:26
//console.log(enemy.'damage-' + hero.class); //Uncaught SyntaxError: Unexpected token '[' (at character.js:42:19) або Uncaught SyntaxError: Unexpected string (at character.js:42:19) якщо без []

//вивело помилки, або через синтаксис, або через пробіли

console.log(enemy['critical hit chance']);
console.log(enemy['attack-speed']);
console.log(enemy['damage-' + hero.class]);

hero.abilities = {
  attack: function() { return `${hero.name} атакує!`; },
  heal: () => { return `${hero.name} хіляється`},
  levelUp: () => { return `${hero.name} підвищив левел`}
}

console.log(hero.abilities.attack());
console.log(hero.abilities.heal());
console.log(hero.abilities.levelUp());

hero.location = {
    region: 'Крайнє Північ',
    city: 'Whitewind',
    coordinates: {
        x: 132,
        y: 321,
        z: 123,
    }
}

console.log(hero.location.region);
console.log(hero.location.coordinates.z);

const villian = {
  name: "Misab",
  class: "mage",
  level: 1,
  isAlive: true,
}

villian.stats = {
  hp: 70,
  mana: 10,
  strength: 6,
  agility: 5,
  intelligence: 1
};

villian.inventory = ["spell", "potion", "shield", "magic"];

console.log(hero.name,villian.name);

if (hero.stats.hp > villian.stats.hp) {
    console.log(`${hero.name} має більше хп`);
}
else if (hero.stats.hp < villian.stats.hp) {
        console.log(`${villian.name} має більше хп`);
    }
else{
    console.log("однаково хп");
}

console.log(`Учасники дуелі: ${hero.name} (${hero.inventory.join(', ')}) vs ${villian.name} (${villian.inventory.join(', ')})`);
