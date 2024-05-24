// la fonction preventDefaukt() :
document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};
let userInput = document.querySelector("[name='username']");
let userAge = document.querySelector("[name='age']");

// les formulaires :
let form = document.forms[0];
console.log();

form.onsubmit = function (e) {
  let userValide = false;
  let ageValide = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    console.log(`${userInput.value} est valide`);
    userValide = true;
  } else {
    console.log(`${userInput.value} n' est pas valide`);
  }

  if (userAge.value !== "" && !isNaN(+userAge.value)) {
    console.log(`${userAge.value} est valide`);
    userAge = true;
  } else {
    console.log(`${userAge.value} n'est pas valide`);
  }

  if (userValide === false || ageValide === false) {
    e.preventDefault();
  }
};
