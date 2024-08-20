// Destruction

let tab = ["A", "B", "Ecole", "D", ["C", "F", ["G", "H"]]];

let [a = "a", b, , d, [, , [, h]]] = tab;
// let [, , tab3] = tab2;
// let [, h] = tab3;
console.log(a, b, d);
console.log(h);
// swapping varibales :
a = "b";
b = "a";
[a, b] = [b, a];
console.log(a, b);

// destruction object :
/*

- destruction object :
    - synatxe : let {nameOfAttr1 , nameOfAttribu2} = objects
    - namming : let {nameofAttr : myName} = objects 
    - Add new prop : let {nameOfAtt , newAtt : MyName = "defaultValue"} = objetc

*/
let user = {
    name: "Ahmed",
    age: 20,
};

// let name = "S";
// let age = 12;
//({ name, age } = user);

let { name: nom, age } = user;

console.log(nom, age);

let [var1, var2, ...res] = [1, 2, 3, 4];
console.log(var1, res);
