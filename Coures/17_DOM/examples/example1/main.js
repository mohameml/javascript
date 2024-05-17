console.log("OK");

// Accées avce id :
let ele = document.getElementById("my-id");
console.log(ele);

// Accées avce id Tage name
let eleByTageName = document.getElementsByTagName("p");
console.log(eleByTageName);
eleByTageName[1].innerHTML = "Test";

// Accées avce ClassName
let eleByClasseName = document.getElementsByClassName("my-span");
console.log(eleByClasseName);

// Accées avce selecteur CSS :

let eleQuery = document.querySelector(".my-span");
let elesQuery = document.querySelectorAll(".my-span");
console.log(eleQuery);
console.log(elesQuery);

// l'objet document :

console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
console.log(document.links[1].href);
