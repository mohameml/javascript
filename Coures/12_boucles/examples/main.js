// boucle for :

for (let i = 0; i < 10; i++) {
  console.log(`Hello ${i}`);
}

let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let j = 0; j < tab.length; j++) {
  console.log(`The ${j} element of my tab is : ${tab[j]}`);
}

let k = 0;

for (;;) {
  console.log(`k égale à ${k}`);
  k++;
  if (k === 10) break;
}
