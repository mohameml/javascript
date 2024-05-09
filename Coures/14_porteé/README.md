# cour 14 : **Porte d'une Variable**

## 1. **Portée Global:**

- **Description:**

  > La portée globale d'une variable en JavaScript se réfère à la visibilité de cette variable dans tout le script JavaScript. Une variable déclarée en dehors de toutes les fonctions ou blocs de code est considérée comme ayant une portée globale. Cela signifie qu'elle peut être accédée et modifiée à partir de n'importe où dans le script.

- **Syntaxe:**

  ```js
  const varGlobal = valeur;
  ```

  - `varGlobal` a une portée globale

- **Exemple:**

  ```javascript
  var globalVariable = "Je suis une variable globale";

  function testFunction() {
    console.log(globalVariable); // Accès à la variable globale à l'intérieur d'une fonction
  }

  testFunction(); // Affiche "Je suis une variable globale" dans la console
  ```

## 2. **Portée Locale:**

- **Description:**

  > La portée locale en JavaScript se réfère à la visibilité d'une variable à l'intérieur d'une fonction ou d'un bloc de code particulier. Une variable déclarée à l'intérieur d'une fonction ou d'un bloc de code est accessible uniquement à l'intérieur de cette fonction ou de ce bloc, et elle n'est pas accessible en dehors de celui-ci. Cela permet d'éviter les conflits de noms et de rendre le code plus modulaire et sécurisé.

- **Syntaxe:**

  ```javascript
  function myFunction() {
    var localVariable = "Je suis une variable locale";
    // La variable localVariable est accessible uniquement à l'intérieur de cette fonction
    console.log(localVariable);
  }

  myFunction(); // Affiche "Je suis une variable locale" dans la console
  // console.log(localVariable); // Cela provoquerait une erreur car localVariable n'est pas accessible en dehors de la fonction
  ```

- **Exemple:**

  ```javascript
  function myFunction() {
    let localVariable = "Je suis une variable locale avec let";
    // La variable localVariable est accessible uniquement à l'intérieur de cette fonction
    console.log(localVariable);
  }

  myFunction(); // Affiche "Je suis une variable locale avec let" dans la console
  // console.log(localVariable); // Cela provoquerait une erreur car localVariable n'est pas accessible en dehors de la fonction
  ```

## 3. **Portée Block:**

- **Description:**

  > La portée de bloc, également appelée portée locale de bloc, est une fonctionnalité introduite dans ECMAScript 6 (ES6) avec l'utilisation de `let` et `const` pour la déclaration des variables. Les variables déclarées avec `let` ou `const` ont une portée limitée au bloc dans lequel elles sont déclarées. Un bloc est défini par une paire d'accolades `{}`.

  - Il est important de noter que la portée de bloc ne s'applique qu'aux variables déclarées avec `let` ou `const`, et non à celles déclarées avec `var`, qui ont une portée de fonction ou de global.

- **Syntaxe:**

  ```JS
  if(condition) {
      let x = valeur ;
  }
  ```

  - `x` a une portée de block

- **Exemple :**

  Voici un exemple illustrant la portée de bloc en JavaScript :

  ```javascript
  function myFunction() {
    if (true) {
      let blockScopedVariable = "Je suis une variable de portée de bloc";
      console.log(blockScopedVariable); // Affiche "Je suis une variable de portée de bloc"
    }
    // console.log(blockScopedVariable); // Cela provoquerait une erreur car blockScopedVariable n'est pas accessible en dehors du bloc if
  }

  myFunction();
  ```

## 4. **Portée Lexicale:**

- **Description:**

  > La portée lexicale est un concept fondamental en programmation fonctionnelle et en JavaScript. La portée lexicale fait référence à la façon dont les variables sont recherchées dans la hiérarchie des fonctions imbriquées, en se basant sur leur position dans le code source plutôt que sur leur position lors de l'exécution.

  - Dans une portée lexicale, une fonction à l'intérieur d'une autre fonction a accès aux variables de la fonction externe dans laquelle elle est définie, même après que la fonction externe a été exécutée.

- **Syntaxe:**

  ```JS
  function f1() {

        function f2() {

            let x = valeur ;

        }
  }
  ```

  - `x` a une portée lexicale

- **Exemple:**

  ```javascript
  function externe() {
    var variableExterne = "Je suis une variable externe";

    function interne() {
      console.log(variableExterne); // Accès à la variable de la fonction externe
    }

    interne();
  }

  externe(); // Affiche "Je suis une variable externe" dans la console
  ```

### RQ :

- [Fermetures](https://developer.mozilla.org/fr/docs/Web/JavaScript/Closures)
