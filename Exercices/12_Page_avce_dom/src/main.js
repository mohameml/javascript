//
let section = document.querySelector(".scetion");
let card = document.querySelector(".card");

for (let i = 2; i <= 15; i++) {
  let copyCard = card.cloneNode(true);
  copyCard.firstElementChild.textContent = `${i}`;
  section.appendChild(copyCard);
}
