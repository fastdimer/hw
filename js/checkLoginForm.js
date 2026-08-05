const email = "bebebe@gmail.com";
const password = "bububu123";
const isEmailVerified = true;

const canLogin = email !== '' && password !== '' && isEmailVerified;

if (canLogin === true) {
    console.log("Логін успішний");
} else {
    console.log("Перевірте дані");
}