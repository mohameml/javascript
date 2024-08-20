/* 
- from 
- copyWithin
- some 
- every 
*/

// from :
let arr = [1, 2, 3, 4, 1, 5, 6, 7];

let tab = Array.from([1, 2, 3, 4], (e) => e * 2);

const tableau = Array.from({ length: 10 }, (v, i) => i);

console.log(tab);
console.log(tableau);

// copyWithin(target , start , end)
let t = [1, 2, 3, "A", "B"];

t.copyWithin(0, -2, -1);

console.log(t);

// some :

let t2 = [1, 1, 2, 3, 4, 5, 6, 7];

let bool = t2.some((e) => e > 5);

console.log(bool);
