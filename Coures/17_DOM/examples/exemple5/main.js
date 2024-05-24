//
let div = document.querySelector("div");

// style
div.style.color = "green";
div.style.border = "5px solid #eee";
div.style.borderRadius = "10px";
div.style.boxShadow = "0 0 10px rgba(0 , 0 , 0 , .3)";

// style avce cssText

// div.style.cssText = "color : red ; font-weight : bold";

// removeProprety , setProperty

div.style.removeProperty("font-weight");

div.style.setProperty("font-weight", "bold");

// styleSheets :
const regl1 = document.styleSheets[0].cssRules[1];

regl1.style.removeProperty("background-color");
regl1.style.setProperty("background-color", "#eee");
