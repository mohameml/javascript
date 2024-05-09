# cour 13 : **fonctions:**

## 1. **Les fonctions :Introduction**

- **Description :**

  > Les fonctions en JavaScript sont des blocs de code réutilisables qui effectuent une tâche spécifique. Elles sont utiles pour encapsuler des morceaux de code et les exécuter lorsque nécessaire.

- **Syntaxe :**

  La syntaxe de base d'une fonction en JavaScript est la suivante :

  ```javascript
  function nomDeLaFonction(paramètre1, paramètre2, ...) {
  // Instructions à exécuter

    // optionelle
    return value ;
  }
  ```

  - `nomDeLaFonction` : C'est le nom de la fonction, qui doit être unique dans le contexte où elle est déclarée.
  - `paramètre1`, `paramètre2`, ... (facultatif) : Ce sont les paramètres que la fonction peut accepter. Les paramètres sont des valeurs que vous passez à la fonction lors de son appel.
  - `Instructions à exécuter` : C'est le bloc de code qui sera exécuté lorsque la fonction est appelée.

- **Exemples :**

  ```javascript
  function additionner(a, b) {
    return a + b;
  }

  // Appel de la fonction et affichage du résultat
  console.log(additionner(3, 5)); // Affiche 8
  ```

## 2. **Default Parameters:**

- **Description :**

  > En JavaScript, vous pouvez définir des valeurs par défaut pour les paramètres de fonction. Cela signifie que si la fonction est appelée sans fournir une valeur pour un paramètre donné, ce paramètre sera automatiquement initialisé à la valeur par défaut que vous avez spécifiée. C'est utile lorsque vous souhaitez avoir des valeurs par défaut pour certains paramètres, mais vous permettez également à l'utilisateur de les remplacer si nécessaire.

- **Syntaxe :**

  La syntaxe pour spécifier une valeur par défaut pour un paramètre de fonction est la suivante :

  ```javascript
  function nomDeLaFonction(paramètre1 = valeurParDéfaut1, paramètre2 = valeurParDéfaut2, ...) {
  // Instructions à exécuter
  }
  ```

  - `paramètre1`, `paramètre2`, ... : Ce sont les paramètres de la fonction.

- `valeurParDéfaut1`, `valeurParDéfaut2`, ... : Ce sont les valeurs par défaut assignées aux paramètres correspondants.

- **Exemple :**

  Voici un exemple illustrant l'utilisation de valeurs par défaut pour les paramètres de fonction :

  ```javascript
  function afficherMessage(message = "Bonjour") {
    console.log(message);
  }

  // Appels de la fonction avec et sans argument
  afficherMessage(); // Affiche "Bonjour"
  afficherMessage("Salut"); // Affiche "Salut"
  afficherMessage("Hello"); // Affiche "Hello"
  ```

## 3. **Rest Parameters:**

- **Description :**

  Les Rest Parameters en JavaScript sont utilisés pour récupérer un nombre indéfini d'arguments passés à une fonction sous forme de tableau. Cela permet de capturer un nombre variable d'arguments lors de l'appel de la fonction, ce qui est particulièrement utile lorsque vous ne connaissez pas à l'avance combien d'arguments seront passés.

- **Syntaxe :**

  La syntaxe pour utiliser les Rest Parameters est la suivante :

  ```javascript
  function nomDeLaFonction(...restParams) {
    // Instructions à exécuter
  }
  ```

  - `...restParams` :
    C'est la syntaxe des Rest Parameters. `Ils doivent toujours être placés en dernier` dans la liste des paramètres de la fonction. Les points de suspension (`...`) suivis du nom de la variable (`restParams` dans cet exemple) indiquent que tous les arguments supplémentaires passés à la fonction seront regroupés dans un tableau nommé `restParams`.

- **Exemples :**

  Une fonction qui calcule la somme de tous les nombres passés en argument :

  ```javascript
  function somme(...nombres) {
    let total = 0;
    for (let nombre of nombres) {
      total += nombre;
    }
    return total;
  }

  console.log(somme(1, 2, 3, 4, 5)); // Affiche 15
  console.log(somme(10, 20, 30)); // Affiche 60
  ```

## 4. **les fonctions anonymes:**

- **Description:**

  > En JavaScript, les fonctions anonymes sont des fonctions qui ne possèdent pas de nom et qui peuvent être déclarées sans être associées à une variable ou à une propriété. Elles sont souvent utilisées comme arguments de fonctions ou pour créer des expressions de fonction. Les fonctions anonymes sont utiles lorsque vous avez besoin d'une fonction temporaire ou lorsque vous ne prévoyez pas de les réutiliser ailleurs dans votre code.

- **Syntaxe :**

  ```javascript
  let maFonction = function (param1 , param2 , ...) {
    // Instructions à exécuter
  };
  ```

- **Exemples :**

  ```javascript
  let multiplier = function (x, y) {
    return x * y;
  };

  console.log(multiplier(5, 3)); // Affiche 15
  ```

  ```javascript
  setTimeout(function () {
    console.log("Bonjour");
  }, 2000);
  ```

## 5. **Nested Function:**

- **Description :**

  > En JavaScript, les fonctions imbriquées font référence à des fonctions définies à l'intérieur d'autres fonctions. Ces fonctions imbriquées sont également appelées fonctions internes ou fermetures. Elles ont accès aux variables et aux paramètres de la fonction externe.

- **Syntaxe :**

  ```javascript
  function fonctionExterne() {
    // Portée de la fonction externe

    function fonctionInterne() {
      // Portée de la fonction interne
    }

    // Appel de la fonction interne
    fonctionInterne();
  }

  // Appel de la fonction externe
  fonctionExterne();
  ```

- **Exemple :**

  ```javascript
  function fonctionExterne() {
    let variableExterne = "Je viens de la fonction externe";

    function fonctionInterne() {
      let variableInterne = "Je viens de la fonction interne";
      console.log(variableExterne); // Accès à la variable externe
      console.log(variableInterne); // Accès à la variable interne
    }

    fonctionInterne(); // Appel de la fonction interne
  }

  fonctionExterne(); // Appel de la fonction externe
  ```

## 6. **`Arrow` fonction:**

- **Description :**

  > Les fonctions fléchées, ou `arrow functions` en anglais, sont une syntaxe plus concise pour définir des fonctions en JavaScript. Elles offrent une manière plus compacte et souvent plus lisible de définir des fonctions, en particulier pour les fonctions anonymes ou les fonctions courtes. Voici une description, la syntaxe et un exemple :

- **Syntaxe :**

  ```javascript
  // Syntaxe de base
  const nomFonction = (param1, param2, ...) => {
      // Corps de la fonction
  };

  // Si la fonction n'a qu'un seul paramètre, les parenthèses peuvent être omises
  const nomFonction = param => {
      // Corps de la fonction
  };

  // Si la fonction n'a qu'une seule instruction dans son corps, les accolades peuvent être omises
  const nomFonction = param => instruction;

  // si il n'a y pas des paramètres
  const f = _ => instruction ;
  ```

- **Exemple :**

  ```javascript
  // Fonction fléchée sans paramètre
  const direBonjour = () => {
    console.log("Bonjour !");
  };

  direBonjour(); // Affiche "Bonjour !"

  // Fonction fléchée avec un paramètre
  const doubler = (x) => {
    return x * 2;
  };

  console.log(doubler(5)); // Affiche 10

  // Fonction fléchée avec une seule instruction dans le corps
  const cube = (x) => x ** 3;

  console.log(cube(3)); // Affiche 27
  ```
