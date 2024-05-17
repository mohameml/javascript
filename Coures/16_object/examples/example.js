// example sur les objets

let user = {
  // propriétes
  name: "Ahmed",
  age: 20,

  // méthodes :
  sayHello: function () {
    console.log("Hello");
  },
};

console.log(user);
console.log(user.name);
user.sayHello();

// objetc

let userInfo = {
  name: "Ahmed",
  prenom: "Mohamed",
  age: 25,
  skills: ["HTML", "CSS", "JS"],
  available: true,
  adress: {
    rue: "Rue Sidi",
    codePostale: 1200,
  },

  chackAv: function () {
    if (this.available === true) {
      return `Free for Work`;
    }
    return `Not free`;
  },
};
console.log("======= Info of : =======");
console.log(userInfo.name);
console.log(userInfo.prenom);
console.log(userInfo.skills.join(" | "));
console.log(userInfo.adress);
console.log(userInfo.chackAv());

// parcourir un objet

for (let cle in userInfo) {
  console.log(`${cle} : ${userInfo[cle]}`);
}

// modification

userInfo.name = "sidi";

console.log(userInfo.name);

// supprimer cle

delete userInfo.name;

console.log(userInfo.name);

// Ajouter une nouvelle propriéte :

userInfo.name = "Ahmed";

console.log(userInfo.name);

// créer un objet avce Object()

let myObject = new Object({
  age: 12,
});

// this :
console.log("============ this ==========");
console.log(this);
