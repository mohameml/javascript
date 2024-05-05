/*

========= Exercice 02 ==================

*/

let a = "Elzero Web School";

// Zero : [slice , charAt]

console.log(`${a.charAt(2).toUpperCase()}${a.slice(3, 6)}`);

// HHHHHHHH (8)
console.log("H".repeat(8));

// Array : [Elzero]

console.log(a.split(" ", 1));

// Use only substring + template literals : Elzero School

console.log(`${a.substring(0, 6)} ${a.substring(a.length - 6)}`);

// SOlution Must be dynamic And String change : eLZERO WEB SCHOOl

console.log(
  a[0].toLowerCase() +
    a.toUpperCase().substring(1, a.length - 1) +
    a[a.length - 1].toLowerCase()
);
