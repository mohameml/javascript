# cour 06 : **String:**

## 1. **les caractères d'échappement:**

- **Description:**
  > En JavaScript, les caractères d'échappement sont utilisés pour inclure des caractères spéciaux dans une chaîne de caractères.
- **Voici quelques-uns des caractères d'échappement couramment utilisés :**

  1. **\n** : Nouvelle ligne
  2. **\t** : Tabulation
  3. **\r** : Retour chariot
  4. **\b** : Retour arrière
  5. **\'** : Apostrophe (utilisé à l'intérieur des chaînes délimitées par des guillemets simples)
  6. **\"** : Guillemets doubles (utilisé à l'intérieur des chaînes délimitées par des guillemets doubles)
  7. **\\** : Caractère d'échappement lui-même

- **Exemple:**

  ```javascript
  let texte = "Bonjour\n\tMonde!";
  console.log(texte);
  ```

  Cela affichera :

  ```
  Bonjour
      Monde!
  ```

## 2. **String formating:**

### 2.1 **Concaténation:**

- **Description:**

  > La concaténation en JavaScript avec l'opérateur `+` est une méthode courante pour joindre des chaînes de caractères ou pour ajouter des variables à des chaînes.

- **Syntaxe :**

  ```javascript
  let resultat = chaine1 + chaine2;
  ```

  Dans cette syntaxe, `chaine1` et `chaine2` sont des chaînes de caractères que vous souhaitez concaténer.

- **Exemple :**

  ```javascript
  let prenom = "John";
  let nom = "Doe";

  let nomComplet = prenom + " " + nom;

  console.log(nomComplet); // Affiche "John Doe"
  ```

### 2.2 **L'interpolation de chaînes avec les backticks:`template literals`**

- **Description:**

  > L'interpolation de chaînes avec les backticks (\`) est une fonctionnalité introduite dans ECMAScript 6 (ES6) qui permet d'insérer des variables ou des expressions dans une chaîne de caractères de manière plus lisible et concise. Cette méthode est également connue sous le nom de "template literals" en anglais.

- **Syntaxe :**

  La syntaxe de base pour l'interpolation de chaînes avec les backticks est la suivante :

  ```javascript
  let maChaine = `Texte ${variable} plus de texte`;
  ```

  Dans cette syntaxe, la partie entre `${}` est évaluée comme une expression JavaScript , en plus un retour à la ligne dans le `backticks` est considéré comme \n .

- **Exemple :**

  ```javascript
  let title = "Elzero";
  let par = "Web School";

  let card = `
      <div class ="card">
          <div class = "child">
              <h2>${title}</h2>
              <p>${par}</p>
          </div>
      </div>
  `;
  document.write(card);
  ```

  ![alt text](images/image.png)

### 3. **Casting:**

- **Description:**

  > En JavaScript, le terme `casting` fait référence à la conversion explicite d'une valeur d'un type de données à un autre. Cela peut être nécessaire lorsque vous souhaitez manipuler des données dans un format différent de celui dans lequel elles sont initialement stockées.

- **Casting numérique** : Convertir une valeur en nombre.

  - Vous pouvez utiliser l'opérateur `+` ou la fonction globale `Number()` pour effectuer un casting numérique.

  ```javascript
  let nombre = "123";
  let resultat = +nombre; // Utilisation de l'opérateur +
  let resultat2 = Number(nombre); // Utilisation de la fonction Number()
  ```

- **Casting en chaîne de caractères** : Convertir une valeur en chaîne de caractères.

  - Vous pouvez utiliser la méthode `toString()` ou la fonction globale `String()` pour effectuer un casting en chaîne de caractères.

  ```javascript
  let nombre = 123;
  let resultat = nombre.toString(); // Utilisation de la méthode toString()
  let resultat2 = String(nombre); // Utilisation de la fonction String()
  ```

- **Casting en booléen** : Convertir une valeur en booléen.

  - Certaines valeurs sont automatiquement évaluées à `true` ou `false`, mais vous pouvez utiliser des fonctions comme `Boolean()` pour effectuer un casting en booléen de manière explicite.

  ```javascript
  let valeur = "non vide";
  let resultat = Boolean(valeur); // Convertit en true car la chaîne n'est pas vide
  ```

- **Casting en nombre entier** : Convertir une valeur en un nombre entier.

  - Vous pouvez utiliser `parseInt()` ou `parseFloat()` pour convertir une chaîne en nombre entier ou flottant, respectivement.

  ```javascript
  let chaine = "123.45";
  let entier = parseInt(chaine); // Convertit en 123 (nombre entier)
  let flottant = parseFloat(chaine); // Convertit en 123.45 (nombre flottant)
  ```

### 4. **String Méthodes:**

### 4.1 **L'accès à une position dans une chaîne:**

#### a. **Accès avec l'index :**

- **Description :**

  > Pour accéder à un caractère spécifique dans une chaîne de caractères en utilisant l'index, vous pouvez utiliser la notation d'index de tableau en JavaScript.

- **Syntaxe :**

  ```javascript
  let char = string[index];
  ```

  - `string` : La chaîne de caractères dans laquelle vous souhaitez accéder au caractère.
  - `index` : L'index du caractère auquel vous souhaitez accéder.

  - **Valeur de retour :** Le caractère à la position spécifiée dans la chaîne de caractères.

- **Exemple :**

  ```javascript
  let str = "Hello";
  let charAtIndex = str[1];
  console.log(charAtIndex); // Affiche : "e"
  ```

#### b. **Accès avec la méthode `charAt()`:**

- **Description :**

  > La méthode `charAt()` de l'objet `String` renvoie le caractère situé à la position spécifiée dans une chaîne de caractères.

- **Syntaxe :**

  ```javascript
  let char = string.charAt(index);
  ```

  - `string` : La chaîne de caractères dans laquelle vous souhaitez accéder au caractère.
  - `index` : L'index du caractère auquel vous souhaitez accéder.

  - **Valeur de retour :** Le caractère à la position spécifiée dans la chaîne de caractères.

- **Exemple :**

  ```javascript
  let str = "Hello";
  let charAtMethod = str.charAt(1);
  console.log(charAtMethod); // Affiche : "e"
  ```

#### RQ : **`str.length`:**

- L'attribut `length` de l'objet String renvoie la longueur d'une chaîne de caractères, c'est-à-dire le nombre de caractères qu'elle contient

### 4.2 **la méthode `trim()`:**

- **Description :**

  > La méthode `trim()` supprime les espaces blancs au début et à la fin d'une chaîne de caractères.

- **Syntaxe :**

  ```javascript
  string.trim();
  ```

  - `string` : La chaîne de caractères à nettoyer.

  - **Valeur de retour :** Une nouvelle chaîne de caractères avec les espaces blancs supprimés au début et à la fin.

- **Exemple :**

  ```javascript
  let str = "   Hello, world!   ";
  let trimmedStr = str.trim();
  console.log(trimmedStr); // Affiche : "Hello, world!"
  ```

### 4.3 **Les méthodes `toUpperCase()` et `toLowerCase()`:**

- **Description :**

  > Ces méthodes sont utilisées pour modifier la casse des caractères dans une chaîne de caractères. `toUpperCase()` convertit tous les caractères d'une chaîne en majuscules, tandis que `toLowerCase()` convertit tous les caractères d'une chaîne en minuscules.

- **Syntaxe :**

  - Pour `toUpperCase()` :

    ```javascript
    string.toUpperCase();
    ```

  - Pour `toLowerCase()` :

    ```javascript
    string.toLowerCase();
    ```

  - **Valeur de retour :** Une nouvelle chaîne de caractères avec les caractères convertis en majuscules ou en minuscules, selon la méthode utilisée.

- **Exemple :**

  ```javascript
  let str = "Hello, World!";

  let upperCaseStr = str.toUpperCase();
  console.log(upperCaseStr); // Affiche : "HELLO, WORLD!"

  let lowerCaseStr = str.toLowerCase();
  console.log(lowerCaseStr); // Affiche : "hello, world!"
  ```

### 4.4 **Les méthodes `indexOf()` et `lastIndexOf()` :**

- **Description :**

  > Ces méthodes permettent de rechercher une sous-chaîne de caractères à l'intérieur d'une chaîne principale. `indexOf()` recherche de gauche à droite, renvoyant l'index de la première occurrence trouvée, tandis que `lastIndexOf()` recherche de droite à gauche, renvoyant l'index de la dernière occurrence trouvée.

- **Syntaxe :**

  ```javascript
  string.indexOf(substring, startIndex);
  string.lastIndexOf(substring, startIndex);
  ```

  - `substring` : La sous-chaîne de caractères à rechercher.

  - `startIndex` (optionnel) : L'index de départ de la recherche. Par défaut, la recherche commence à l'index 0 pour `indexOf()` et à la fin de la chaîne pour `lastIndexOf()`.

  - **Valeur de retour :** L'index de la première ( ou -1 si il n'existe pas ) ou de la dernière occurrence de la sous-chaîne de caractères, ou -1 si la sous-chaîne de caractères n'est pas trouvée.

- **Exemple :**

  ```javascript
  let str = "Hello, World! Hello";

  let index = str.indexOf("Hello");
  console.log(index); // Affiche : 0

  let lastIndex = str.lastIndexOf("Hello");
  console.log(lastIndex); // Affiche : 13
  ```

### 4.5 **les Sous chaines `Slicing` :**

#### a. **La méthode `slice()`:**

- **Description :**

  > La méthode `slice()` retourne une portion spécifique d'une chaîne de caractères, en copiant une partie de la chaîne d'origine, définie par l'index de début et l'index de fin.

- **Syntaxe :**

  ```javascript
  string.slice(startIndex, endIndex);
  ```

  - `startIndex` : L'index de début de la portion à extraire. Si cet argument est négatif, il compte à partir de la fin de la chaîne (-1 correspond au dernier caractère).

  - `endIndex` (optionnel) :

    > L'index de fin de la portion à extraire. La portion extraite inclut le caractère à l'index `startIndex`, mais exclut le caractère à l'index `endIndex`. Si cet argument est omis, la portion extraite va jusqu'à la fin de la chaîne.

  - **Valeur de retour :** Une nouvelle chaîne de caractères contenant la portion spécifiée de la chaîne d'origine.

- **Exemple :**

  ```javascript
  let str = "Hello, World!";

  let slicedStr1 = str.slice(7);
  console.log(slicedStr1); // Affiche : "World!"

  let slicedStr2 = str.slice(0, 5);
  console.log(slicedStr2); // Affiche : "Hello"

  let slicedStr3 = str.slice(-6);
  console.log(slicedStr3); // Affiche : "World!"
  ```

#### b. **La méthode `substring` :**

- **Description :**

  > La méthode `substring()` extrait une partie spécifique d'une chaîne de caractères et renvoie une nouvelle chaîne contenant les caractères compris entre les index de début et de fin spécifiés.

- **Syntaxe :**

  ```javascript
  string.substring(startIndex, endIndex);
  ```

  - `startIndex` : L'index de début de la portion à extraire. Si cet argument est égal à `endIndex`, la méthode renvoie une chaîne vide `""`.

  - `endIndex` (optionnel) : L'index de fin de la portion à extraire. La portion extraite inclut le caractère à l'index `startIndex`, mais exclut le caractère à l'index `endIndex`. Si cet argument est omis, la portion extraite va jusqu'à la fin de la chaîne.

  - **Valeur de retour :** Une nouvelle chaîne de caractères contenant la portion spécifiée de la chaîne d'origine.

- **Exemple :**

  ```javascript
  let str = "Hello, World!";

  let subStr1 = str.substring(7);
  console.log(subStr1); // Affiche : "World!"

  let subStr2 = str.substring(0, 5);
  console.log(subStr2); // Affiche : "Hello"

  let subStr3 = str.substring(7, 12);
  console.log(subStr3); // Affiche : "World"
  ```

#### c. **La méthode `substr` :**

- **Description :**

  > La méthode `substr()` extrait une partie spécifique d'une chaîne de caractères en fonction de l'index de début et de la longueur de la portion à extraire, puis renvoie une nouvelle chaîne contenant cette portion.

- **Syntaxe :**

  ```javascript
  string.substr(startIndex, length);
  ```

  - `startIndex` : L'index de début de la portion à extraire. Si cet argument est négatif, il est traité comme `string.length + startIndex`.

  - `length` (optionnel) : La longueur de la portion à extraire. Si cet argument est omis, la méthode extrait tous les caractères à partir de `startIndex` jusqu'à la fin de la chaîne.

  - **Valeur de retour :** Une nouvelle chaîne de caractères contenant la portion spécifiée de la chaîne d'origine.

- **Exemple :**

  ```javascript
  let str = "Hello, World!";

  let subStr1 = str.substr(7);
  console.log(subStr1); // Affiche : "World!"

  let subStr2 = str.substr(0, 5);
  console.log(subStr2); // Affiche : "Hello"

  let subStr3 = str.substr(7, 5);
  console.log(subStr3); // Affiche : "World"
  ```

### 4.6 **La méthode `split()` :**

- **Description :**

  > La méthode `split()` divise une chaîne de caractères en un tableau de sous-chaînes, en fonction d'un séparateur spécifié.

- **Syntaxe :**

  ```javascript
  string.split(separator, limit);
  ```

  - `separator` :

    > Le caractère ou la chaîne de caractères à utiliser comme séparateur pour diviser la chaîne. Si ce paramètre est omis, la méthode divise la chaîne en un tableau contenant un seul élément, la chaîne d'origine.

  - `limit` (optionnel) :

    > Un entier qui spécifie le nombre maximal d'éléments à inclure dans le tableau retourné. Les éléments supplémentaires sont ignorés. Si ce paramètre est omis ou égal à `undefined`, tous les éléments sont inclus.

    - **Valeur de retour :** Un tableau de sous-chaînes résultant de la division de la chaîne d'origine en fonction du séparateur spécifié.

- **Exemple :**

  ```javascript
  let str = "Hello, World! How are you?";

  let splitArray1 = str.split(" ");
  console.log(splitArray1); // Affiche : ["Hello,", "World!", "How", "are", "you?"]

  let splitArray2 = str.split(",");
  console.log(splitArray2); // Affiche : ["Hello", " World! How are you?"]

  let splitArray3 = str.split(" ", 3);
  console.log(splitArray3); // Affiche : ["Hello,", "World!", "How"]
  ```

#### RQ **`repeat()`:**

- La méthode `repeat()` de l'objet String est utilisée pour créer et renvoyer une nouvelle chaîne de caractères contenant la chaîne d'origine répétée un certain nombre de fois :

  ```javascript
  string.repeat(count);
  ```

### 4.7 **Recherche de Motifs:**

#### a. **La méthode `includes()` :**

- **Description :**

  > La méthode `includes()` détermine si une chaîne de caractères contient une autre chaîne de caractères spécifiée.

- **Syntaxe :**

  ```javascript
  string.includes(substring, startIndex);
  ```

  - `substring` : La sous-chaîne de caractères à rechercher dans la chaîne principale.
  - `startIndex` (optionnel) : L'index de départ de la recherche. Par défaut, la recherche commence à l'index 0.

  - **Valeur de retour :** Un booléen (`true` ou `false`) indiquant si la chaîne de caractères contient la sous-chaîne spécifiée.

- **Exemple :**

  ```javascript
  let str = "Hello, World!";

  let includes1 = str.includes("Hello");
  console.log(includes1); // Affiche : true

  let includes2 = str.includes("world");
  console.log(includes2); // Affiche : false (la casse est différente)

  let includes3 = str.includes("World", 7);
  console.log(includes3); // Affiche : false (la sous-chaîne n'est pas présente après l'index 7)
  ```

#### b. **La méthode `startsWith()` :**

- **Description :**

  > La méthode `startsWith()` détermine si une chaîne de caractères commence par une autre chaîne de caractères spécifiée.

- **Syntaxe :**

  ```javascript
  string.startsWith(substring, startIndex);
  ```

  - `substring` : La sous-chaîne de caractères à rechercher au début de la chaîne principale.

  - `startIndex` (optionnel) : L'index de départ de la recherche. Par défaut, la recherche commence à l'index 0.

  - **Valeur de retour :** Un booléen (`true` ou `false`) indiquant si la chaîne de caractères commence par la sous-chaîne spécifiée.

- **Exemple :**

  ```javascript
  let str = "Hello, World!";

  let startsWith1 = str.startsWith("Hello");
  console.log(startsWith1); // Affiche : true

  let startsWith2 = str.startsWith("world");
  console.log(startsWith2); // Affiche : false (la casse est différente)

  let startsWith3 = str.startsWith("World", 7);
  console.log(startsWith3); // Affiche : true (la sous-chaîne est présente après l'index 7)
  ```

#### c. **La méthode `endsWith()` :**

- **Description :**

  > La méthode `endsWith()` détermine si une chaîne de caractères se termine par une autre chaîne de caractères spécifiée.

- **Syntaxe :**

  ```javascript
  string.endsWith(substring, length);
  ```

  - `substring` : La sous-chaîne de caractères à rechercher à la fin de la chaîne principale.
  - `length` (optionnel) : La longueur de la portion de la chaîne à considérer pour la recherche. Par défaut, la recherche se fait sur toute la chaîne.

  - **Valeur de retour :** Un booléen (`true` ou `false`) indiquant si la chaîne de caractères se termine par la sous-chaîne spécifiée.

- **Exemple :**

  ```javascript
  let str = "Hello, World!";

  let endsWith1 = str.endsWith("World!");
  console.log(endsWith1); // Affiche : true

  let endsWith2 = str.endsWith("world!");
  console.log(endsWith2); // Affiche : false (la casse est différente)

  let endsWith3 = str.endsWith("Hello", 5);
  console.log(endsWith3); // Affiche : true (la sous-chaîne est présente dans les 5 derniers caractères)
  ```
