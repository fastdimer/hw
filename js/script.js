const user = {
    name: "Dima",
    age: 19,
    email: "bebebe@gmail.com",
    isSubscribed: true,
    balance: "150.25",
    verified: "1",
}

const numberBalance = Number(user.balance);
const verifiedBoolean = user.verified === "1" || false;

const hasUserAccess = user.age >= 18 && verifiedBoolean && (user.isSubscribed || numberBalance > 0);

const stringAge = String(user.age);
const strictComparison = user.age === stringAge;
const looseComparison = user.age == stringAge;

console.log(hasUserAccess);
console.log(strictComparison);
console.log(looseComparison);

let lowAge = "";
if (user.age < 18) {
    lowAge = "Access restricted due to age";
}
console.log(lowAge);

const order =  {
    total: "950",
    currency: "UAH",
    isPaid: true,
    delivery: "yes",
    priority: "1",
}

const numberTotal = Number(order.total);
const booleanDelivery = order.delivery === "yes" || false;
const booleanPriority = order.priority === "1" || false;

const isOrderLarge = numberTotal >= 1000;

let textDescription = "";
if (order.isPaid === false) {
    textDescription = "Order is not paid";
}
else if (order.isPaid === true && booleanDelivery === true) {
    textDescription = "Paid order with delivery";
}
else if (isOrderLarge === true && order.isPaid === true) {
    textDescription = "High-value paid order";
}
else if (order.isPaid === true && booleanDelivery === false) {
    textDescription = "Paid order without delivery";
}
if (booleanPriority === true) {
    textDescription = textDescription + " [PRIORITY]";
}

const looseTotalComparison = order.total == numberTotal;
const strictTotalComparison = order.total === numberTotal;

console.log(textDescription);
console.log(looseTotalComparison);
console.log(strictTotalComparison);

systemSettings = {
    darkMode: true,
    fontSize: "18",
    language: "en",
    betaAccess: "true",
}

const numberFontSize = Number(systemSettings.fontSize);
const booleanBetaAccess = systemSettings.betaAccess === "true" || false;
const isLargeFont = numberFontSize >= 18;

let textSettings = "";
if (systemSettings.darkMode === true && isLargeFont === true) {
    textSettings = "Dark mode + large font";
}
else if (systemSettings.darkMode === true) {
    textSettings = "Dark mode";
}
else if (isLargeFont === true) {
    textSettings = "Large font";
}
else {
    textSettings = "Default settings";
}
if (booleanBetaAccess === true) {
    textSettings = textSettings + " (Beta tester)";
}

//console.log(textSettings);

const isFullAccessUser = hasUserAccess;
const isPaidOrder = order.isPaid === true || numberBlance >= numberTotal;
const isSystemSettingsValid = numberFontSize >= 12 && (systemSettings.language === "en" || systemSettings.language === "uk");

const finalAccess = isFullAccessUser && isPaidOrder && isSystemSettingsValid;

if (finalAccess === true) {
    console.log("Full access granted");
}
    else {
    console.log("Access denied");
}

if (isFullAccessUser === false) {
    console.log("isFullAccessUser blocked the system");
}
if (isPaidOrder === false) {
    console.log("isPaidOrder blocked the system");
}   
if (isSystemSettingsValid === false) {
    console.log("isSystemSettingsValid blocked the system");
}