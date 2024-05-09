let myAdmins = ["Ahmed", "Ossamma", "Sayed", "Stop", "Samera"];

let myEmployes = [
  "Amgada",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Ammmmmm",
];

// on doit récuperer les admins tout d'abord :

let Admins = myAdmins.slice(0, myAdmins.indexOf("Stop"));

document.write(`<div>We have ${Admins.length} Admins</div>`);

let counter = 1;

for (const admin of Admins) {
  let strdiv = `<div> <h2>The Admin of Team ${counter} Is ${admin}<h2>`;
  strdiv += `<h2> Team Membres<h2>`;

  let j = 0;
  for (const employ of myEmployes) {
    if (employ[0] == admin[0]) {
      strdiv += `<p> - ${j + 1} ${employ} </p>`;
      j++;
    }
  }
  counter++;
  strdiv += `</div> <hr />`;
  document.write(strdiv);
}
