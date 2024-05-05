# cour 10 : **Les Conditions:**

## 1. **Les opérations de comparasion:**

1. **Égalité (`==`) :**

   - **Description :** L'opérateur d'égalité (`==`) compare deux valeurs et renvoie `true` si elles sont égales après conversion de type, et `false` sinon.
   - **Exemple :**
     ```javascript
     let x = 5;
     let y = "5";
     console.log(x == y); // Affiche: true
     ```

2. **Égalité stricte (`===`) :**

   - **Description :** L'opérateur d'égalité stricte (`===`) compare deux valeurs et renvoie `true` si elles sont égales en valeur et en type de données, et `false` sinon.
   - **Exemple :**
     ```javascript
     let x = 5;
     let y = "5";
     console.log(x === y); // Affiche: false
     ```

3. **Différence (`!=`) :**

   - **Description :** L'opérateur de différence (`!=`) compare deux valeurs et renvoie `true` si elles sont différentes après conversion de type, et `false` si elles sont égales.
   - **Exemple :**
     ```javascript
     let x = 5;
     let y = "5";
     console.log(x != y); // Affiche: false
     ```

4. **Différence stricte (`!==`) :**

   - **Description :** L'opérateur de différence stricte (`!==`) compare deux valeurs et renvoie `true` si elles sont différentes en valeur ou en type de données, et `false` sinon.
   - **Exemple :**
     ```javascript
     let x = 5;
     let y = "5";
     console.log(x !== y); // Affiche: true
     ```

5. **Supérieur (`>`) :**

   - **Description :** L'opérateur supérieur (`>`) compare deux valeurs et renvoie `true` si la première valeur est strictement supérieure à la deuxième valeur.
   - **Exemple :**
     ```javascript
     let x = 10;
     let y = 5;
     console.log(x > y); // Affiche: true
     ```

6. **Inférieur (`<`) :**

   - **Description :** L'opérateur inférieur (`<`) compare deux valeurs et renvoie `true` si la première valeur est strictement inférieure à la deuxième valeur.
   - **Exemple :**
     ```javascript
     let x = 5;
     let y = 10;
     console.log(x < y); // Affiche: true
     ```

7. **Supérieur ou égal (`>=`) :**

   - **Description :** L'opérateur supérieur ou égal (`>=`) compare deux valeurs et renvoie `true` si la première valeur est supérieure ou égale à la deuxième valeur.
   - **Exemple :**
     ```javascript
     let x = 10;
     let y = 10;
     console.log(x >= y); // Affiche: true
     ```

8. **Inférieur ou égal (`<=`) :**
   - **Description :** L'opérateur inférieur ou égal (`<=`) compare deux valeurs et renvoie `true` si la première valeur est inférieure ou égale à la deuxième valeur.
   - **Exemple :**
     ```javascript
     let x = 5;
     let y = 10;
     console.log(x <= y); // Affiche: true
     ```

## 2. **Les opérations logiques:**

1. **Opérateur ET (`&&`) :**

   - **Description :** L'opérateur ET (`&&`) renvoie `true` si les deux expressions qu'il connecte sont toutes deux évaluées à `true`, sinon il renvoie `false`.
   - **Exemple :**
     ```javascript
     let x = 5;
     let y = 10;
     console.log(x > 0 && y > 0); // Affiche: true
     ```

2. **Opérateur OU (`||`) :**

   - **Description :** L'opérateur OU (`||`) renvoie `true` si au moins l'une des expressions qu'il connecte est évaluée à `true`, sinon il renvoie `false`.
   - **Exemple :**
     ```javascript
     let x = 5;
     let y = 10;
     console.log(x > 0 || y < 0); // Affiche: true
     ```

3. **Opérateur NON (`!`) :**
   - **Description :** L'opérateur NON (`!`) inverse le résultat d'une expression logique. S'il est placé devant une expression qui est évaluée à `true`, il renvoie `false`, et vice versa.
   - **Exemple :**
     ```javascript
     let x = 5;
     console.log(!(x > 0)); // Affiche: false
     ```

## 3. **Controle Flow : `if` , `else if` et `else`:**

- **Description:**

  > En JavaScript, l'instruction `if` est utilisée pour exécuter un bloc de code si une condition spécifiée est évaluée à `true`.

  - L'instruction `if` peut également être suivie d'une instruction `else` pour exécuter un bloc de code alternatif si la condition spécifiée est évaluée à `false` .

  - L'instruction `if` peut également être chaînée avec plusieurs instructions `else if` pour tester plusieurs conditions :

- **Voici la syntaxe de base de l'instruction `if` :**

  ```javascript
  // If :
  if (condition) {
    // Bloc de code à exécuter si la condition est vraie
  }
  // Else
  if (condition) {
    // Bloc de code à exécuter si la condition est vraie
  } else {
  }

  if (condition) {
    // Bloc de code à exécuter si la condition est vraie
  } else if (condition2) {
    // Bloc pour le cas ou la condition2 est vrai .
  } else {
  }
  ```

- **exemple :**

  ```javascript
  let x = 3;

  if (x > 5) {
    console.log("La variable x est supérieure à 5");
  } else if (x === 5) {
    console.log("La variable x est égale à 5");
  } else {
    console.log("La variable x est inférieure à 5");
  }
  ```

## 4. **L'opération ternaire:**

- **Description:**

  > L'opération ternaire, également connue sous le nom d'opérateur conditionnel, est une forme concise d'une instruction `if...else` en JavaScript. Elle permet d'écrire des expressions conditionnelles de manière plus compacte.

- **La syntaxe de l'opérateur ternaire est la suivante :**

  ```javascript
  condition ? expressionSiVraie : expressionSiFausse;
  ```

  Voici comment cela fonctionne :

  - La condition est évaluée en premier.
  - Si la condition est vraie, l'expression située avant le `:` est renvoyée.
  - Si la condition est fausse, l'expression située après le `:` est renvoyée.

- **Voici un exemple simple :**

  ```javascript
  let x = 10;
  let message = x > 5 ? "x est supérieur à 5" : "x n'est pas supérieur à 5";
  console.log(message); // Affiche: "x est supérieur à 5"
  ```

## 5. **`Nullish Coalescing`:**

- **Description:**

  > Le Nullish Coalescing Operator (`??`) est un opérateur introduit dans ECMAScript 2020 (ES11). Cet opérateur est utilisé pour fournir une valeur par défaut pour les cas où une valeur est `null` ou `undefined`. Il est souvent utilisé lorsque vous souhaitez affecter une valeur par défaut à une variable si la valeur actuelle est nulle ou non définie.

- **Synatxe:**

  ```javascript
  let result = x ?? y;
  ```

  - Si l'opérande de gauche `x` est `null` ou `undefined`, l'opérateur renvoie l'opérande de droite.
  - Sinon, l'opérateur renvoie l'opérande de gauche.

- **exemple :**

  ```javascript
  let x = null;
  let y = 5;

  let result = x ?? y;
  console.log(result); // Affiche: 5
  ```

### RQ 1: **falsy Value:**

- En JavaScript, une valeur `falsy` est une valeur qui est évaluée comme `false` lorsqu'elle est utilisée dans un contexte booléen.

- les valeurs "falsy" en JavaScript :

  - **`false`** : La valeur booléenne `false` elle-même est falsy.
  - **`0`** : Le nombre entier zéro (`0`) est falsy.
  - **`''`** : La chaîne de caractères vide (`''`) est falsy.
  - **`null`** : La valeur `null` est falsy.
  - **`undefined`** : La valeur `undefined` est falsy.
  - **`NaN`** : La valeur `NaN` (Not a Number) est falsy.

    Toutes les autres valeurs en JavaScript sont évaluées comme `true` dans un contexte booléen et sont considérées comme `truthy`.

### RQ 2 : **utilisation du ||:**

- L'opérateur `||` est utile aussi lorsque vous souhaitez éviter d'utiliser des valeurs par défaut pour des valeurs falsy Par exemple :

  ```javascript
  let x = null;
  let y = 200;

  let price = x || y; // si x est flasy value price prend la valeur de y
  console.log(`the price is ${price}`); // Affiche: 0
  ```

## 6. **Switch :**

- **Description :**

  > L'opération `switch` est utilisée pour effectuer une série de comparaisons en fonction de la valeur d'une expression. Chaque cas spécifié dans le `switch` est comparé à l'expression (avce ==== ), et si une correspondance est trouvée, les instructions associées à ce cas sont exécutées. Si aucun cas ne correspond à l'expression, des instructions par défaut peuvent être exécutées.

- **Syntaxe :**

  ```javascript
  switch (expression) {
    case valeur1:
      // Instructions à exécuter si expression === valeur1
      break;
    case valeur2:
      // Instructions à exécuter si expression === valeur2
      break;
    case val3:
    case val4:
      // instructions pour les cas 3 et 4
      break;
    // Autres cas possibles..
    default:
    // Instructions à exécuter si aucun des cas précédents n'est rencontré
  }
  ```

- **Exemple :**

  ```javascript
  let jour = "lundi";

  switch (jour) {
    case "lundi":
      console.log("C'est le premier jour de la semaine.");
      break;
    case "mardi":
      console.log("C'est le deuxième jour de la semaine.");
      break;
    case "mercredi":
      console.log("C'est le troisième jour de la semaine.");
      break;
    case "jeudi":
      console.log("C'est le quatrième jour de la semaine.");
      break;
    case "vendredi":
      console.log("C'est le cinquième jour de la semaine.");
      break;
    case "samedi":
    case "dimanche":
      console.log("C'est le week-end !");
      break;
    default:
      console.log("Ce n'est pas un jour valide.");
  }
  ```
