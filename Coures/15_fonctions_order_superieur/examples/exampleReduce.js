// example sur la fonction reduce :

let nb = [1, 2, 3, 4, 5];

let somme = nb.reduce((cum, cur) => cum + cur);

console.log(somme);

let produit = nb.reduce((cum, cur) => cum * cur);

console.log(produit);

// Application :

let tab = [
  "sidiii",
  "mmmmmmmmm",
  "kkkkkkkkkll",
  "llllllll10",
  "jjjlkjhhhhhhhhhh",
  "looooolll",
];

let theBigChar = tab.reduce(function (acc, cur) {
  if (cur.length > acc.length) return cur;

  return acc;
});

// version Arrow function :

let theBigCharArrow = tab.reduce((acc, curr) =>
  curr.length > acc.length ? curr : acc
);

console.log(theBigChar);
console.log(theBigCharArrow);

// App 2 :

let mot = ["A", "@", "@", "h", "@", "m", "e", "@", "d"];

let motCorr = mot
  .filter((curr) => curr != "@")
  .reduce((acc, curr) => acc + curr);

console.log(motCorr);
