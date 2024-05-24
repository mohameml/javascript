// Div
let Div = document.createElement("div");
Div.className = "card";
// H2
let title = document.createElement("h2");
let textTitle = document.createTextNode("Card 01");
title.appendChild(textTitle);

// img
let image = document.createElement("img");
image.src = "images/image.png";
// P
let para = document.createElement("p");
para.textContent =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,alias?";

Div.appendChild(title);
Div.appendChild(image);
Div.appendChild(para);

// render Div :
document.body.appendChild(Div);
