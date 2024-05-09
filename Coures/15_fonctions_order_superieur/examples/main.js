// la fonction map

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
