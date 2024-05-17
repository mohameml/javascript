"use strict";

// Code JavaScript en mode strict

// le mot clé this fait réfernace à l'objet lui méme

let btn = document.getElementById("btn");

btn.onclick = function () {
  console.log(this);
};

// utilisation this dans un objet

let user = {
  name: "Ahmed",
  prenom: "Prenom",
  free: true,
  getName: function () {
    return this.name;
  },
};

console.log(user.getName());

console.log(this);
