function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello("Ahmed");

function add(a, b) {
  return a + b;
}

let c = add(2, 1);
console.log(c);

// add with REST parametres :

function add(...parametres) {
  let res = 0;

  for (const e of parametres) {
    res += e;
  }

  console.log(`The sum of ${parametres} is ${res}`);
  return res;
}

add(1, 7, 8);

setTimeout(function () {
  console.log("Bonjour");
}, 2000);

// Nested function

function sayHello(firstName, lastName) {
  let message = "Hello";
  function Message() {
    return `${message}  ${firstName} ${lastName}`;
  }

  return Message();
}

console.log(sayHello("Ahmed", "Lemine"));

let f = (x) => x + 1;

console.log(f(1));
console.log(f(0));
