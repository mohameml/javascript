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

let ignoreNumbers = "Elz123er40o";

let ig = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ig);

// EX04 : filter words more then 4 char

let setance = "I love Foood Code Too Playing Much";

let setanceFour = setance
  .split(" ")
  .filter((e) => e.length <= 4)
  .join(" ");

console.log(setanceFour);

// EX05 :

let mult = "AB123Y4";
let p = 1;

let res = mult
  .split("")
  .filter((e) => !isNaN(e))
  .map((e) => parseInt(e))
  .map(function (e) {
    p *= e;
    return p;
  });

console.log(res[res.length - 1]);

// EX06 : you cant use Number , Letters in your code

let mystring = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,s,c,h,o,o,l,2,0,Z";

let words = mystring
  .split("")
  .filter(function (ele) {
    if ((ele === ",") | (ele === "_") | !isNaN(parseInt(ele))) return false;

    return true;
  })
  .map(function (ele) {})
  .reduce(function (cum, curr) {
    return cum + curr;
  });

console.log(words);

// output : Elzero Web School
