Function.prototype.testBind = function(context, ...args) {
    const originalFunction = this;

    return function(...funcArgs) {
        const validContext = context !== null && context !== undefined ? Object(context) : globalThis;
        const key = Symbol('function');
        validContext[key] = originalFunction;
        const result = validContext[key](...args, ...funcArgs);
        delete validContext[key];
        return result;
    }
};

const user = {
    name: 'Dima'
};

function say(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const sayHello = say.testBind(user, 'Hello');
console.log(sayHello('!'));