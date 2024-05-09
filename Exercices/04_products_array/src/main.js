/*
    Products Practice 
*/

let Products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let color = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1> ${showCount} Products`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3> [${i + 1}] ${Products[i]} </h3>`);
  for (let j = 0; j < color.length; j++) {
    document.write(`<p>${color[j]}</p>`);
  }
  document.write(`</div>`);
}
