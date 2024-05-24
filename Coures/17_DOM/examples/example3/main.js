// <!-- Commentaire  -->
//<ele attr1="value" attr2-costum>Text</ele> -> puis on l'ajout à body

let ele = document.createElement("div");
let myAttr = document.createAttribute("data-info");
let text = document.createTextNode("Prodcut One");
let myComment = document.createComment("This is Div");

ele.className = "prodcut";
ele.appendChild(myComment);
ele.setAttributeNode(myAttr);
ele.setAttribute("data-test", "Testing");
ele.appendChild(text);

document.body.appendChild(ele);

console.log(ele);
