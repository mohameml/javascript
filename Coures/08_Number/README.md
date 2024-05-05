# cour 8 : **Number:**

## 1. **Definition:**

- **classe `Number`:**

  > La classe `Number` en JavaScript est une classe intégrée qui permet de représenter et de manipuler des valeurs numériques. Elle englobe toutes les valeurs numériques, y compris les nombres entiers et décimaux. La classe `Number` fournit également un ensemble de méthodes et de propriétés utiles pour effectuer des opérations mathématiques et des conversions de données.

- **Exemple:**

  ```javascript
  // sugar synatxe of number in JS :
  console.log(1_000_000);
  // syntaxe  e :
  console.log(1e6); // 10^6
  // constructeur number :
  console.log("1000"); // 1000 number
  ```

## 2. **Constructeur `Number`:**

- **Description:**

  > En JavaScript, le constructeur `Number` est utilisé pour créer des objets de type nombre. Il peut être utilisé pour instancier de nouvelles instances de nombres, qu'elles soient entières ou décimales.

- **Exemple:**

  ```javascript
  // Création d'une instance de nombre entier
  let entier = new Number(10);

  // Création d'une instance de nombre décimal
  let decimal = new Number(3.14);

  // Vous pouvez également utiliser le constructeur sans le mot-clé "new"
  let autreEntier = Number(5);

  // Ou pour créer un nombre à partir d'une chaîne
  let depuisChaine = Number("42");

  console.log(entier); // Affiche : [Number: 10]
  console.log(decimal); // Affiche : [Number: 3.14]
  console.log(autreEntier); // Affiche : 5
  console.log(depuisChaine); // Affiche : 42
  ```

### RQ : `docs`

- [lien_docs_Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## 3. **Méthodes:**

### 3.1 **La méthode `toString()`:**

- **Description :**

  > La méthode `toString()` convertit un nombre en une chaîne de caractères représentant sa valeur. Elle prend une base optionnelle en paramètre qui spécifie le système de numération à utiliser pour la conversion. Par défaut, la méthode utilise la base 10.

- **Syntaxe :**

  ```javascript
  number.toString([base]);
  ```

  - `base` (optionnel) : La base à utiliser pour la conversion en une chaîne de caractères. La base doit être comprise entre 2 et 36 inclus. Par défaut, la base est 10.

  - **Valeur de retour :** Une chaîne de caractères représentant la valeur du nombre.

- **Exemple :**

  ```javascript
  let number = 42;

  // Convertit le nombre en une chaîne de caractères en utilisant la base 10 par défaut
  let str = number.toString();
  console.log(str); // Affiche : "42"

  // Convertit le nombre en une chaîne de caractères en utilisant la base 2 (binaire)
  let binaryStr = number.toString(2);
  console.log(binaryStr); // Affiche : "101010"

  // Convertit le nombre en une chaîne de caractères en utilisant la base 16 (hexadécimal)
  let hexStr = number.toString(16);
  console.log(hexStr); // Affiche : "2a"
  ```

### 3.2 **La méthode `toFixed()`:**

- **Description :**

  > La méthode `toFixed()` formate un nombre en une chaîne de caractères, en arrondissant la valeur à un nombre spécifié de chiffres après la virgule .

- **Syntaxe :**

  ```javascript
  number.toFixed([digits]);
  ```

  - `digits` (optionnel) : Le nombre de chiffres après la virgule à afficher dans la chaîne de caractères résultante. Il doit être compris entre 0 et 20, inclus. Si ce paramètre est omis ou n'est pas un nombre, la méthode retourne une chaîne de caractères représentant le nombre sans arrondir.

  - **Valeur de retour :** Une chaîne de caractères représentant la valeur du nombre avec le nombre spécifié de chiffres après la virgule.

- **Exemple :**

  ```javascript
  let number = 3.14159;

  // Formate le nombre avec 2 chiffres après la virgule
  let formatted = number.toFixed(2);
  console.log(formatted); // Affiche : "3.14"

  // Formate le nombre avec 4 chiffres après la virgule
  formatted = number.toFixed(4);
  console.log(formatted); // Affiche : "3.1416"

  // Formate le nombre sans spécifier le nombre de chiffres après la virgule
  formatted = number.toFixed();
  console.log(formatted); // Affiche : "3"
  ```

### 3.3 **La méthode `parseInt()`:**

- **Description :**

  > La méthode `parseInt()` analyse une chaîne de caractères et renvoie un entier basé sur son contenu. Elle parcourt la chaîne jusqu'à ce qu'elle rencontre un caractère qui n'est pas un chiffre, puis arrête l'analyse et renvoie l'entier trouvé jusqu'à ce point.

- **Syntaxe :**

  ```javascript
  parseInt(string, radix);
  ```

  - `string` : La chaîne de caractères à analyser et à convertir en entier.
  - `radix` (optionnel) : La base à utiliser lors de l'analyse de la chaîne. Cette valeur doit être comprise entre 2 et 36 inclus. Si ce paramètre est omis ou non spécifié, JavaScript suppose que la base est 10.

  - **Valeur de retour :** Un entier qui représente la valeur de la chaîne analysée. Si la première caractère de la chaîne n'est pas un chiffre, ou si la chaîne est vide, la méthode renvoie NaN.

- **Exemple :**

  ```javascript
  let str = "123";

  // Convertit la chaîne "123" en un nombre entier
  let intValue = parseInt(str);
  console.log(intValue); // Affiche : 123

  // Convertit la chaîne "1010" en un nombre binaire (base 2)
  let binaryValue = parseInt("1010", 2);
  console.log(binaryValue); // Affiche : 10

  // Convertit la chaîne "A5" en un nombre hexadécimal (base 16)
  let hexValue = parseInt("A5", 16);
  console.log(hexValue); // Affiche : 165

  // Si la chaîne ne commence pas par un chiffre, parseInt() renvoie NaN
  let nanValue = parseInt("hello");
  console.log(nanValue); // Affiche : NaN
  ```

### 3.4 **La méthode `parseFloat()`:**

- **Description :**

  > La méthode `parseFloat()` analyse une chaîne de caractères et renvoie un nombre flottant basé sur son contenu. Elle parcourt la chaîne jusqu'à ce qu'elle rencontre un caractère qui n'est pas un chiffre, un point décimal, ou un signe de plus ou de moins, puis arrête l'analyse et renvoie le nombre flottant trouvé jusqu'à ce point.

- **Syntaxe :**

  ```javascript
  parseFloat(string);
  ```

  - `string` : La chaîne de caractères à analyser et à convertir en nombre flottant.

  - **Valeur de retour :** Un nombre flottant (à virgule flottante) qui représente la valeur de la chaîne analysée. Si la première caractère de la chaîne n'est pas un chiffre, ou si la chaîne est vide, la méthode renvoie NaN.

- **Exemple :**

  ```javascript
  let str = "3.14";

  // Convertit la chaîne "3.14" en un nombre flottant
  let floatValue = parseFloat(str);
  console.log(floatValue); // Affiche : 3.14

  // Convertit la chaîne "10.5" en un nombre flottant
  let floatValue2 = parseFloat("10.5");
  console.log(floatValue2); // Affiche : 10.5

  // Si la chaîne ne commence pas par un chiffre ou un point décimal, parseFloat() renvoie NaN
  let nanValue = parseFloat("hello");
  console.log(nanValue); // Affiche : NaN
  ```

### 3.5 **La méthode `isInteger()` :**

- **Description :**

  > La méthode statique `Number.isInteger()` permet de vérifier si une valeur est un nombre entier.

- **Syntaxe :**

  ```javascript
  Number.isInteger(value);
  ```

  - `value` : La valeur à vérifier.

  - **Valeur de retour :** Un booléen indiquant si la valeur passée est un entier.

- **Exemple :**

  ```javascript
  console.log(Number.isInteger(5)); // true
  console.log(Number.isInteger(5.5)); // false
  console.log(Number.isInteger("5")); // false
  console.log(Number.isInteger(true)); // false
  console.log(Number.isInteger(null)); // false
  console.log(Number.isInteger(undefined)); // false
  ```

### 3.6 **La méthode `isNaN()` :**

- **Description :**

  > La méthode `isNaN()` vérifie si une valeur est NaN (Not-a-Number).

- **Syntaxe :**

  ```javascript
  isNaN(value);
  ```

  - `value` : La valeur à vérifier.

  - **Valeur de retour :** Un booléen indiquant si la valeur passée est NaN.

- **Exemple :**

  ```javascript
  console.log(isNaN(NaN)); // true
  console.log(isNaN(123)); // false
  console.log(isNaN("hello")); // false
  console.log(isNaN(undefined)); // false
  console.log(isNaN(null)); // false
  console.log(isNaN(true)); // false
  ```
