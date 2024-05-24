//

let myBtn = document.getElementById("btn");

// ============================= Mouse Events : ===================
// onclick :
myBtn.onclick = function () {
  console.log("Clicked !!");
};
// oncontextmenu :
myBtn.oncontextmenu = function () {
  console.log("oncontextmenu !!");
};
// onmouseenter :
myBtn.onmouseenter = function () {
  console.log("onmouseenter");
};
// onmouseleave :
myBtn.onmouseleave = function () {
  console.log("onmouseleave ");
};
// onclick :
myBtn.onclick = function () {
  console.log("Clicked !!");
};

//====================== window Events     ============================
// onload :
window.onload = function () {
  console.log("==== Onlaod ====");
};
// onscroll :
window.onscroll = function () {
  console.log(window.scrollY);
  console.log("==== scroll ===");
};
// onresize :
window.onresize = function () {
  console.log("==== resize ====");
};

// ============================= Formulaire Events  =================
let input = document.getElementById("nom");
let form = document.forms[0];
let submit = document.getElementById("submit");
// onfocus :
input.onfocus = function () {
  console.log("focus");
  //document.appendChild("<h1>ecrivez votre nom<h1>");
};
// onblur :
input.onblur = function () {
  console.log("onblur");
};
// onsubmit :
form.onsubmit = function () {
  console.log("submit");
};

// submit.onclick = function () {
//   console.log("Click Submit ");
// };
