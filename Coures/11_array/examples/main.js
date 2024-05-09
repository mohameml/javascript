// Array :

let tab = ["sidi", "Ahmed"];

console.log(tab);

console.log(`len of tab is : ${tab.length}`);

// add :

tab.unshift(3, 2, 1);
console.log(tab);
console.log(`the new len of tab is : ${tab.length}`);

// push :

// sort

let b = [1, 1000, 20, 0];
console.log(b);
console.log(b.sort((a, b) => a - b));
console.log(b);

// concat :

let A1 = [1, 2, 3, 4];

let A2 = [5, 6];

let A3 = A1.concat(A2);

console.log(A3);

// join :

let tab2 = ["sidi", "Ahmed", "Ali"];
let chaine1 = tab2.join(); // par défaut , : sidi,Ahmed,Ali
let chaine2 = tab2.join(""); //sidiAhmedAli
let chaine3 = tab2.join("|"); // sidi|Ahmed|Ali

console.log(chaine1);
console.log(chaine2);
console.log(chaine3);
