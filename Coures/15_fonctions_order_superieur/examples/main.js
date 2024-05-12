// programmation fonctionelle :

let nb = [1, 2, 3, 4, 5];

let newNb = nb.map((a) => a * a);
console.log(newNb);

// prog fonc

function myMap(callback, arrayTab) {
  let newArr = [];

  for (let i = 0; i < arrayTab.length; i++) {
    newArr.push(callback(arrayTab[i]));
  }

  return newArr;
}

console.log(myMap((a) => a * a, nb));

// la fonction map :

let addSelf = nb.map(function (elme, index, array) {
  console.log(`index of ${index} is ${elme} in my array ${array}`);
});

function addition(elme) {
  return elme + elme;
}

let myNums = nb.map(addition);

console.log(myNums);

// Practice map :

let swappingCaes = "eLZERo";

let sw = swappingCaes
  .split("")
  .map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");

console.log(sw);

// EX02 :

let invertdNumbers = [1, -10, -20, 15, 100, -30];

let inv = invertdNumbers.map(function (ele) {
  return -ele;
});

console.log(inv);

// EX03 :

let ignoreNumbers = "Elz123er40";

let ig = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ig);

// la fonction filter

let friends = ["Ahmed", "Ossama", "Khaled", "Amar"];

let Myfriends = friends.filter((e) => e.startsWith("K"));

console.log(Myfriends);

console.log(nb.filter((e) => e % 2 === 0)); // filtration des nombres paires du Array nb
