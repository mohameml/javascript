let myElement = document.querySelector(".js");

console.log(myElement.attributes);
// les attributs innerHTML et textContent :

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.textContent = "Bonjour";

myElement.innerHTML = "bonjour <span>Trés bien </span>";
myElement.textContent = "bonjour <span>Trés bien </span>";

// mise à jour d'un attribuit :

document.images[0].alt = "image";
document.images[0].title = "Title ";

// les méthodes getAttribut , setAttribut

// la différance entre innerText et textContent

console.log(document.querySelector(".textConent").textContent);
console.log(document.querySelector(".innerText").innerText);
