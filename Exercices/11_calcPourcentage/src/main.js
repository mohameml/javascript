//
let btn = document.getElementById("btn");

btn.onclick = function () {
  let values = document.querySelectorAll("input");
  let amount = values[0].value;
  let pourcentage = values[1].value;

  if (amount === "" || pourcentage === "") {
    alert("Vous devez rentrer un montant et une pourcentage  ");
  } else if (isNaN(parseInt(amount)) || isNaN(parseInt(pourcentage))) {
    alert("Vous devez rentrer un nombre ");
  }

  // calcul du pourcentage :

  let res = parseInt(amount) * parseFloat(pourcentage / 100);
  document.getElementById("res").textContent = `Totale : ${
    Math.floor(res) || "rien"
  }`;
};
