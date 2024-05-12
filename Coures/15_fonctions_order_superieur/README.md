# cour 15 : **`fonction d'ordre supérieur:`**

## 1. **Introduction**

- **Definition:**

  > Une fonction d'ordre supérieur (higher-order function ) est une fonction qui prend une ou plusieurs fonctions comme arguments et/ou qui retourne une fonction en tant que résultat.

  - En JavaScript, les fonctions sont des citoyens de première classe (PF), ce qui signifie qu'elles peuvent être traitées de la même manière que n'importe quelle autre valeur, comme les nombres, les chaînes de caractères ou les objets. Cela permet à JavaScript de supporter les fonctions d'ordre supérieur.

- **Exemple:**

  ```javascript
  function operation(a, b, callback) {
    return callback(a, b);
  }

  function addition(a, b) {
    return a + b;
  }

  function multiplication(a, b) {
    return a * b;
  }

  console.log(operation(5, 3, addition)); // Affiche 8
  console.log(operation(5, 3, multiplication)); // Affiche 15
  ```

## 2. **`map()`:**

- **Description**:

  > La fonction `map()` en JavaScript est utilisée pour transformer les éléments d'un tableau en appliquant une fonction à chacun des éléments et en créant un nouveau tableau contenant les valeurs renvoyées par cette fonction.

- **Syntaxe**:

  ```javascript
  let nouveauTableau = tableauOriginal.map(function (element, index, array) {
    // logique de transformation
    return /* nouvelle valeur */;
  });
  ```

  - la fonction passée en map prend en général trois arguments : l'élément actuel , l'indice de l'élément, et le tableau sur lequel la méthode `map()` a été appelée.

- **Exemple**:

  ```javascript
  // Création d'un tableau initial
  let nombres = [1, 2, 3, 4, 5];

  // Utilisation de map() pour doubler chaque nombre
  let nombresDoubles = nombres.map(function (nombre) {
    return nombre * 2;
  });

  console.log(nombresDoubles); // Affiche: [2, 4, 6, 8, 10]
  ```

## 3. **`filter():`**

- **Description**:

  > La fonction `filter()` en JavaScript est utilisée pour filtrer les éléments d'un tableau en fonction d'un critère spécifié par une fonction de rappel et renvoyer un nouveau tableau contenant uniquement les éléments qui satisfont ce critère.

- **Syntaxe**:

  ```javascript
  let nouveauTableau = tableauOriginal.filter(function (element, index, array) {
    // logique de filtrage
    return /* condition */;
  });
  ```

  - La méthode `filter()` parcourt chaque élément d'un tableau et appelle une fonction de rappel sur chaque élément.
  - Cette fonction de rappel prend en général trois arguments : l'élément actuel, l'indice de l'élément, et le tableau sur lequel la méthode `filter()` a été appelée.
  - Si la fonction de rappel renvoie `true` pour un élément donné, cet élément est inclus dans le nouveau tableau retourné par `filter()`.
  - Si la fonction de rappel renvoie `false` pour un élément donné, cet élément est exclu du nouveau tableau retourné par `filter()`.

- **Exemple**:

  ```javascript
  // Création d'un tableau initial
  let nombres = [1, 2, 3, 4, 5];

  // Utilisation de filter() pour ne garder que les nombres pairs
  let nombresPairs = nombres.filter(function (nombre) {
    return nombre % 2 === 0;
  });

  console.log(nombresPairs); // Affiche: [2, 4]
  ```

## 4. **`reduce():`**

- **Description:**

  > La fonction `reduce()` en JavaScript est utilisée pour appliquer une fonction de rappel (callback) sur chaque élément d'un tableau, pour finalement réduire le tableau à une seule valeur.

  - C'est souvent utilisé pour calculer une valeur unique à partir de tous les éléments d'un tableau, comme la somme de tous les éléments, la concaténation de tous les éléments en une chaîne, etc.

- **Syntaxe:**

  ```javascript
  array.reduce(callback[, initialValue])
  ```

  - `array` : Le tableau sur lequel vous souhaitez appliquer la réduction.
  - `callback` : La fonction de rappel à exécuter sur chaque élément du tableau. Cette fonction prend généralement quatre arguments :
    - `accumulateur` : La valeur accumulée résultant des précédentes exécutions de la fonction de rappel.
    - `élémentCourant` : L'élément actuellement traité dans le tableau.
    - `index` (optionnel) : L'index de l'élément actuel dans le tableau.
    - `array` (optionnel) : Le tableau sur lequel `reduce()` a été appelé.
  - `initialValue` (optionnel) : La valeur initiale à utiliser comme premier argument de la première exécution de la fonction de rappel. Si cette valeur est fournie, elle sera utilisée comme accumulateur pour la première valeur, sinon, la première valeur du tableau sera utilisée comme accumulateur et le callback sera appelé pour le deuxième élément du tableau.

- **Exemple:**

  ```javascript
  const array = [1, 2, 3, 4, 5];

  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log(sum); // Output: 15
  ```

## 5. **`forEach`:**

- **Description:**

  > La fonction `forEach()` en JavaScript est utilisée pour exécuter une fonction de rappel (callback) sur chaque élément d'un tableau, dans l'ordre où ils apparaissent. Cette fonction est souvent utilisée lorsque vous souhaitez effectuer une action sur chaque élément d'un tableau sans modifier le tableau lui-même. Elle est similaire à une boucle `for` mais avec une syntaxe plus concise et fonctionnelle.

- **Syntaxe:**

  ```javascript
  array.forEach(callback(currentValue, index, arra), thisArg);
  ```

  - `array` : Le tableau sur lequel vous souhaitez appliquer la fonction `forEach()`.
  - `callback` : La fonction de rappel à exécuter pour chaque élément du tableau. Cette fonction prend trois arguments :
    - `currentValue` : L'élément actuellement traité dans le tableau.
    - `index` (optionnel) : L'index de l'élément actuel dans le tableau.
    - `array` (optionnel) : Le tableau sur lequel `forEach()` a été appelé.
  - `thisArg` (optionnel) : Un objet à utiliser comme `this` lors de l'exécution de la fonction de rappel.

- **Exemple:**

  ```javascript
  const array = [1, 2, 3, 4, 5];

  array.forEach((element) => {
    console.log(element);
  });
  ```
