// génere un nb aléatooire entre [min , max] :

function random(a, b) {
  // donne un nb aléatoire entre [a ,b]
  let i_random = Math.random();

  let x = a + (b - a) * i_random;

  return x;
}

let min = 10;

let max = 20;

console.log(Math.trunc(random(10, 20)));
