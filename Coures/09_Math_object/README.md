# cour 09 : **Math Object**

## 1. **Introduction:**

- **Definition:**

  > L'objet `Math` en JavaScript est un objet intégré qui fournit des fonctions et des constantes pour effectuer des opérations mathématiques avancées. Cet objet ne peut pas être instancié car toutes ses propriétés et méthodes sont statiques. Il offre un ensemble de fonctionnalités utiles pour effectuer divers calculs mathématiques en JavaScript, sans avoir besoin d'écrire votre propre logique mathématique.

- **l'objet `Math` en JavaScript :**

  - **Fonctions mathématiques :**

    > L'objet `Math` comprend un grand nombre de fonctions mathématiques standard telles que `Math.abs()` pour la valeur absolue, `Math.sin()` pour le sinus, `Math.cos()` pour le cosinus, `Math.sqrt()` pour la racine carrée, etc.

  - **Constantes mathématiques :**

    > Il fournit également plusieurs constantes mathématiques utiles telles que `Math.PI` pour π (pi), `Math.E` pour la base du logarithme naturel (e), `Math.LN2` pour le logarithme naturel de 2, `Math.LN10` pour le logarithme naturel de 10, etc.

  - **Arrondis et troncatures :**

    > L'objet `Math` propose des méthodes pour arrondir les nombres, les tronquer et obtenir les parties entières ou fractionnaires d'un nombre, telles que `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.trunc()`, etc.

  - **Opérations exponentielles et logarithmiques :**

    > Il offre des fonctions pour calculer les puissances, les logarithmes et les exponentielles, comme `Math.pow()`, `Math.log()`, `Math.exp()`, etc.

  - **Opérations trigonométriques :**

    > L'objet `Math` prend en charge les fonctions trigonométriques standard telles que le sinus, le cosinus, la tangente et leurs inverses.

- **docs:**

  - [lien_docs_Math](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math)

## 2. **Arrondis et troncatures :**

- **Description :**

  - La méthode `round()` arrondit un nombre à l'entier le plus proche.
  - La méthode `ceil()` arrondit un nombre vers le haut au nombre entier le plus proche, c'est-à-dire le plus grand entier supérieur ou égal au nombre donné.
  - La méthode `floor()` arrondit un nombre vers le bas au nombre entier le plus proche, c'est-à-dire le plus petit entier inférieur ou égal au nombre donné.
  - La méthode `trunc()` retourne la partie entière d'un nombre en supprimant la partie décimale, sans arrondir.

- **Syntaxe :**

  ```javascript
  Math.round(x);
  Math.ceil(x);
  Math.floor(x);
  Math.trunc(x);
  ```

- **Paramètres :**

  - `x` : Le nombre à arrondir ou à tronquer.

- **Valeur de retour :**

  - `round()` : L'entier le plus proche du nombre donné.
  - `ceil()` : Le plus petit entier supérieur ou égal au nombre donné.
  - `floor()` : Le plus grand entier inférieur ou égal au nombre donné.
  - `trunc()` : La partie entière du nombre donné, sans arrondir.

- **Exemple :**

  ```javascript
  let num = 3.7;

  console.log(Math.round(num)); // Affiche : 4 (arrondi)
  console.log(Math.ceil(num)); // Affiche : 4 (vers le haut)
  console.log(Math.floor(num)); // Affiche : 3 (vers le bas)
  console.log(Math.trunc(num)); // Affiche : 3 (troncature)

  let num2 = -4.3;

  console.log(Math.round(num2)); // Affiche : -4 (arrondi)
  console.log(Math.ceil(num2)); // Affiche : -4 (vers le haut)
  console.log(Math.floor(num2)); // Affiche : -5 (vers le bas)
  console.log(Math.trunc(num2)); // Affiche : -4 (troncature)
  ```

## 3. **La méthode `random()`:**

- **Description :**

  > La méthode `random()` de l'objet `Math` génère un nombre flottant pseudo-aléatoire compris entre 0 (inclus) et 1 (exclus).

- **Syntaxe :**

  ```javascript
  Math.random();
  ```

  - **Paramètres :** Aucun.

  - **Valeur de retour :** Un nombre flottant pseudo-aléatoire compris entre 0 (inclus) et 1 (exclus).

- **Exemple :**

  ```javascript
  let randomNum = Math.random();
  console.log(randomNum); // Affiche un nombre flottant aléatoire compris entre 0 et 1 (exclus)

  // Pour générer un nombre aléatoire dans une plage spécifique, vous pouvez utiliser des opérations mathématiques
  let min = 10;
  let max = 20;
  let randomNumberInRange = min + (max - min) * Math.random();
  console.log(randomNumberInRange); // Affiche un nombre aléatoire entre 10 (inclus) et 20 (exclus)
  ```
