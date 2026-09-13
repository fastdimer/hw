Function.prototype.testCall = function(context, ...args) {
    context = context !== null && context !== undefined ? Object(context) : globalThis;

    const key = Symbol('function');
    context[key] = this;

    const result = context[key](...args);
    delete context[key];

    return result;
};

// const user = {
//     name: 'Dima'
// };

// function say(greeting, punctuation) {
//     return `${greeting}, ${this.name}${punctuation}`;
// }

// console.log(say.testCall(user, 'Hello', '!'));