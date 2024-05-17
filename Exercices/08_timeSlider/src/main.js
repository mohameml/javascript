// data
const data = [
  {
    name: "Cherise G",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "Rosetta Q",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Constantine V",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

let counter = 0;

function setInfo() {
  console.log("=== Début ===");
  // Accéder aux données dans le tableau en utilisant le modulo pour gérer les débordements
  let infoUser = data[counter % data.length];

  // Récupérer les éléments HTML
  let image = document.getElementById("image");
  let text = document.getElementById("text");
  let name = document.getElementById("name");

  // Mise à jour des éléments HTML avec les données de l'utilisateur
  image.src = infoUser.photoUrl;
  text.innerHTML = infoUser.text;
  name.innerHTML = infoUser.name;

  // Incrémenter le compteur
  counter++;
  console.log("=== Fin ===");
  setTimeout(() => {
    setInfo();
  }, 10000);
}

setInfo();
