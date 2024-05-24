/*
events Simulation : 
    - click 
    - focus
    - blur
*/
let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  one.focus();
};

one.onfocus = function () {
  if (one.value.length === 1) {
    one.blur();
    two.focus();
  }
};
