# cour 11 : **Array**

## 1. **Introduction:**

- **Définition:**

  > En JavaScript, un tableau (`Array`) est un objet qui contient une collection d'éléments, qui peuvent être de différents types tels que des nombres, des chaînes de caractères, des objets, ou même d'autres tableaux. Les tableaux sont déclarés en utilisant la syntaxe `[...]`, avec des éléments séparés par des virgules.

  ```javascript
  let tableau = [1, 2, 3, 4, 5];
  ```

- **Création:**

  Il existe plusieurs façons de créer des tableaux en JavaScript :

  - **Déclaration explicite :** Comme illustré ci-dessus, en définissant explicitement les éléments à l'intérieur des crochets.
  - **Constructeur Array :** En utilisant le constructeur `Array()` avec ou sans arguments.

  ```javascript
  let tableauVide = []; // Création d'un tableau vide
  let tableau = new Array(3); // Création d'un tableau avec une taille spécifique
  ```

- **taille : `length`**

  > La propriété `length` d'un tableau en JavaScript renvoie le nombre d'éléments présents dans ce tableau. Elle permet de déterminer la taille ou la longueur du tableau.

  ```javascript
  let tableau = [10, 20, 30, 40, 50];
  console.log(tableau.length); // Affiche : 5
  ```

- **Accès aux éléments:**

  > Les éléments d'un tableau sont accessibles par leur index, qui commence à 0 pour le premier élément et augmente de 1 pour chaque élément suivant.

  ```javascript
  let tableau = [10, 20, 30, 40, 50];
  console.log(tableau[0]); // Affiche le premier élément : 10
  console.log(tableau[2]); // Affiche le troisième élément : 30
  ```

- **Modification d'éléments:**

  Les éléments d'un tableau peuvent être modifiés en utilisant leur index pour accéder à l'élément spécifique que vous souhaitez modifier.

  ```javascript
  let tableau = [10, 20, 30, 40, 50];
  tableau[2] = 35; // Modifier le troisième élément à 35
  console.log(tableau); // Affiche : [10, 20, 35, 40, 50]
  ```

- **Vérification du type de tableau:**

  > La méthode `Array.isArray()` est utilisée pour vérifier si une variable est un tableau.

  ```javascript
  let tableau = [1, 2, 3];
  console.log(Array.isArray(tableau)); // true

  let nonTableau = "Je ne suis pas un tableau";
  console.log(Array.isArray(nonTableau)); // false
  ```

## 2. **Ajouter et Supprimer:**

### 2.1 **les Méthodes `unshift()` et `push()`:**

- **Description:**

  > Les méthodes `push()` et `unshift()` sont utilisées pour ajouter des éléments à un tableau en JavaScript.

  - **`push()`** : Cette méthode ajoute un ou plusieurs éléments à la fin du tableau et renvoie la nouvelle longueur du tableau.

  - **`unshift()`** : Cette méthode ajoute un ou plusieurs éléments au début du tableau et renvoie la nouvelle longueur du tableau.

- **Syntaxe :**

  ```javascript
  // Pour push()
  array.push(element1, element2, ..., elementN);

  // Pour unshift()
  array.unshift(element1, element2, ..., elementN);
  ```

- **Exemple :**

  ```javascript
  let tableau = [1, 2, 3, 4];

  // Utilisation de push() pour ajouter un élément à la fin
  tableau.push(5);
  console.log(tableau); // Affiche: [1, 2, 3, 4, 5]

  // Utilisation de unshift() pour ajouter un élément au début
  tableau.unshift(0);
  console.log(tableau); // Affiche: [0, 1, 2, 3, 4, 5]
  ```

### 2.2 **Les méthodes `shift()` et `pop()`:**

- **Description:**

  > Les méthodes `shift()` et `pop()` sont utilisées pour retirer des éléments d'un tableau en JavaScript.

  - **`shift()`** : Cette méthode retire le premier élément d'un tableau et renvoie cet élément. Elle réduit également la longueur du tableau de 1.

  - **`pop()`** : Cette méthode retire le dernier élément d'un tableau et renvoie cet élément. Elle réduit également la longueur du tableau de 1.

- **Syntaxe :**

  ```javascript
  // Pour shift()
  array.shift();

  // Pour pop()
  array.pop();
  ```

- **Exemple :**

  ```javascript
  let tableau = [1, 2, 3, 4, 5];

  // Utilisation de shift() pour retirer le premier élément
  let premierElement = tableau.shift();
  console.log(premierElement); // Affiche: 1
  console.log(tableau); // Affiche: [2, 3, 4, 5]

  // Utilisation de pop() pour retirer le dernier élément
  let dernierElement = tableau.pop();
  console.log(dernierElement); // Affiche: 5
  console.log(tableau); // Affiche: [2, 3, 4]
  ```

## 3. **Recherche dans un `Array`:**

### 3.1 **Les méthodes `indexOf()` et `lastIndexOf()` :**

- **Description:**

  > Les méthodes `indexOf()` et `lastIndexOf()` sont utilisées pour rechercher la première et la dernière occurrence d'un élément dans un tableau en JavaScript, respectivement.

  - **`indexOf()`** : Cette méthode renvoie l'index de la première occurrence d'un élément dans un tableau. Si l'élément n'est pas trouvé, elle renvoie -1.

  - **`lastIndexOf()`** : Cette méthode renvoie l'index de la dernière occurrence d'un élément dans un tableau. Si l'élément n'est pas trouvé, elle renvoie -1.

- **Syntaxe :**

  ```javascript
  // Pour indexOf()
  array.indexOf(element, startIndex);

  // Pour lastIndexOf()
  array.lastIndexOf(element, startIndex);
  ```

  - `element` : L'élément que vous recherchez dans le tableau.
  - `startIndex` (optionnel) : L'index à partir duquel commencer la recherche. Par défaut, la recherche commence depuis le début du tableau pour `indexOf()` et depuis la fin du tableau pour `lastIndexOf()`.

- **Exemple :**

  ```javascript
  let tableau = [2, 5, 8, 5, 10, 5];

  // Utilisation de indexOf() pour trouver la première occurrence de 5
  console.log(tableau.indexOf(5)); // Affiche: 1

  // Utilisation de lastIndexOf() pour trouver la dernière occurrence de 5
  console.log(tableau.lastIndexOf(5)); // Affiche: 5
  ```

### 3.2 **La méthode `includes()`:**

- **Description:**

  > La méthode `includes()` est utilisée pour déterminer si un tableau contient un élément spécifique. Elle renvoie `true` si l'élément est trouvé dans le tableau, sinon elle renvoie `false`.

- **Syntaxe :**

  ```javascript
  array.includes(element, startIndex);
  ```

  - `element` : L'élément que vous recherchez dans le tableau.
  - `startIndex` (optionnel) : L'index à partir duquel commencer la recherche. Par défaut, la recherche commence depuis le début du tableau.

- **Exemple :**

  ```javascript
  let tableau = [1, 2, 3, 4, 5];

  console.log(tableau.includes(3)); // true
  console.log(tableau.includes(6)); // false
  ```

### 4. **Sorting Array:**

### 4.1 **La méthode `sort()`:**

- **Description:**

  > La méthode `sort()` est utilisée pour trier les éléments d'un tableau en place et renvoie le tableau trié. Par défaut, la méthode trie les éléments du tableau en utilisant l'ordre lexicographique (alphabétique) des chaînes de caractères ou en les convertissant en chaînes de caractères si nécessaire, puis en les triant en fonction des points de code Unicode des caractères.

- **Syntaxe :**

  ```javascript
  array.sort(comparatorFunction);
  ```

  - `comparatorFunction` (optionnel) : Une fonction de comparaison qui spécifie l'ordre de tri. Si cette fonction est omise, les éléments sont triés en tant que chaînes de caractères.

  - La fonction de comparaison `comparatorFunction` reçoit deux arguments (`a` et `b`) qui représentent deux éléments à comparer. Elle doit retourner :

    - Une valeur négative si le premier argument doit être placé avant le deuxième dans l'ordre de tri.
    - Zéro si les deux arguments sont considérés comme égaux dans l'ordre de tri.
    - Une valeur positive si le premier argument doit être placé après le deuxième dans l'ordre de tri.

- **Exemple :**

  ```javascript
  let nombres = [4, 2, 5, 1, 3];

  nombres.sort();
  console.log(nombres); // Affiche: [1, 2, 3, 4, 5]

  // Utilisation d'une fonction de comparaison pour trier par ordre décroissant
  nombres.sort((a, b) => b - a);
  console.log(nombres); // Affiche: [5, 4, 3, 2, 1]
  ```

### 4.2 **La méthode `reverse()` :**

- **Description:**

  > La méthode `reverse()` est utilisée pour inverser l'ordre des éléments d'un tableau en place, c'est-à-dire qu'elle modifie le tableau original en le retournant.

- **Syntaxe :**

  ```javascript
  array.reverse();
  ```

- **Exemple :**

  ```javascript
  let tableau = [1, 2, 3, 4, 5];

  tableau.reverse();
  console.log(tableau); // Affiche: [5, 4, 3, 2, 1]
  ```

## 5. **Slicing Array :**

### 5.1 **La méthode `slice()`:**

- **Description:**

  > La méthode `slice()` est utilisée pour extraire une portion d'un tableau et renvoie une nouvelle tableau contenant les éléments extraits. Cette méthode ne modifie pas le tableau d'origine.

- **Syntaxe :**

  ```javascript
  array.slice(start, end);
  ```

  - `start` (optionnel) : L'indice de début de l'extraction. Si omis, la copie commence à l'indice 0. Si négatif, il indique un décalage à partir de la fin du tableau.
  - `end` (optionnel) : L'indice de fin de l'extraction. La copie s'arrête avant cet indice. Si omis, la copie inclut tous les éléments jusqu'à la fin du tableau. Si négatif, il indique un décalage à partir de la fin du tableau.

- **Exemple :**

  ```javascript
  let tableau = [1, 2, 3, 4, 5];

  let extrait1 = tableau.slice(1, 4);
  console.log(extrait1); // Affiche: [2, 3, 4]

  let extrait2 = tableau.slice(2);
  console.log(extrait2); // Affiche: [3, 4, 5]

  let extrait3 = tableau.slice(-2);
  console.log(extrait3); // Affiche: [4, 5]
  ```

### 5.2 **La méthode `splice()`:**

- **Description:**

  > La méthode `splice()` est utilisée pour modifier le contenu d'un tableau en supprimant ou en remplaçant des éléments existants et/ou en ajoutant de nouveaux éléments à des positions spécifiques. Cette méthode modifie le tableau d'origine et renvoie un tableau contenant les éléments supprimés, le cas échéant.

- **Syntaxe :**

  ```javascript
  array.splice(start, deleteCount, item1, item2, ...);
  ```

  - `start` : L'indice à partir duquel commencer la modification du tableau.
  - `deleteCount` :

    - Le nombre d'éléments à supprimer à partir de l'indice `start`.

    - Si `deleteCount` est omis ou si sa valeur est plus grande que le nombre d'éléments restants à partir de `start`, tous les éléments à partir de `start` jusqu'à la fin du tableau seront supprimés.

  - `item1, item2, ...` (optionnel) : Les éléments à ajouter au tableau, à partir de l'indice `start`.

- **Exemple :**

  ```javascript
  let tableau = [1, 2, 3, 4, 5];

  // Supprime 2 éléments à partir de l'indice 2 et ajoute 6 et 7 à leur place
  let elementsSupprimes = tableau.splice(2, 2, 6, 7);
  console.log(tableau); // Affiche: [1, 2, 6, 7, 5]
  console.log(elementsSupprimes); // Affiche: [3, 4]

  // Supprime tous les éléments à partir de l'indice 2
  let elementsSupprimes2 = tableau.splice(2);
  console.log(tableau); // Affiche: [1, 2]
  console.log(elementsSupprimes2); // Affiche: [6, 7, 5]
  ```

## 6. **Joining Array:**

### 6.1 **la méthode `concat()`:**

- **Description :**

  > La méthode `concat()` en JavaScript est utilisée pour fusionner deux ou plusieurs tableaux, créant ainsi un nouveau tableau contenant les éléments des tableaux d'origine.

- **Syntaxe :**

  ```javascript
  let nouveauTableau = tableau1.concat(tableau2, tableau3, ..., tableauN);
  ```

  - `tableau1`: Le tableau d'origine auquel les autres tableaux seront concaténés.
  - `tableau2`, `tableau3`, ..., `tableauN`: Les tableaux à concaténer avec le tableau d'origine.

- **Exemple :**

  ```javascript
  let fruits1 = ["pomme", "banane"];
  let fruits2 = ["orange", "raisin"];

  let tousLesFruits = fruits1.concat(fruits2);

  console.log(tousLesFruits); // Output: ['pomme', 'banane', 'orange', 'raisin']
  ```

### 6.2 **la méthode `join()`:**

- **Description :**

  > La méthode `join()` en JavaScript est utilisée pour créer et renvoyer une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau. Les éléments sont séparés par un séparateur spécifié ou par une virgule par défaut.

- **Syntaxe :**

  ```javascript
  let nouvelleChaine = tableau.join(separateur);
  ```

  - `tableau` : Le tableau dont les éléments seront concaténés dans une chaîne de caractères.
  - `séparateur` (optionnel) : Le caractère à utiliser comme séparateur entre les éléments du tableau lors de la concaténation. Par défaut, c'est une virgule. Ce paramètre peut être une chaîne de caractères vide pour fusionner les éléments sans séparateur.

- **Exemple :**

  ```javascript
  let tab2 = ["sidi", "Ahmed", "Ali"];
  let chaine1 = tab2.join();
  let chaine2 = tab2.join("");
  let chaine3 = tab2.join("|");
  console.log(chaine1); // par défaut , : sidi,Ahmed,Ali
  console.log(chaine2); //sidiAhmedAli
  console.log(chaine3); // sidi|Ahmed|Ali
  ```
