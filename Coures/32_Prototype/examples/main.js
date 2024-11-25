function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
};

p = new Person("sidi");
p.sayHello();

console.log(Object.getPrototypeOf(p));

function add(a, b) {
    return a + b;
}

console.log(Object.getPrototypeOf(add));

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}

user = new User(1, "sidi");
console.log(user.getId());

console.log(User.prototype);
