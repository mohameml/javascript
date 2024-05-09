const nombreAleatoire = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (guess !== nombreAleatoire) {
  guess = parseInt(prompt("Devinez un nombre entre 1 et 100 :"));
  attempts++;

  if (guess < nombreAleatoire) {
    alert("Trop petit ! Essayez encore.");
  } else if (guess > nombreAleatoire) {
    alert("Trop grand ! Essayez encore.");
  }
}

alert("Bravo ! Vous avez deviné le nombre en " + attempts + " tentatives.");
