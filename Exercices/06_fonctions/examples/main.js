/**
 *
 *
 */

let names = function (...params) {
  return `String [${params.join("],[")}] => Done !`;
};

console.log(names("sidi", "Ahmed", "Khaled"));

// Output : String [sidi] , [Ahmed] , [Ibrahim] => Done !

// Arrow function :

let namesArrow = (...params) => `String [${params.join("],[")}] => Done!`;

console.log(namesArrow("sidi", "Ahmed", "Khaled"));
