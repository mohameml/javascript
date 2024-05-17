// example of object :
let userInfo = {
  name: "Ahmed",
  prenom: "Mohamed",
  age: 25,
};

console.log(userInfo);
// si on veut créer une copy rapide du userInfo on peut utiliser
// la fonction create du Class Object

let userCopy = Object.create(userInfo);
console.log(userCopy);
console.log("The prototype of userCopy is : ");
console.log(Object.getPrototypeOf(userCopy));

let userCopy2 = new Object(userInfo);

console.log(userCopy2);
