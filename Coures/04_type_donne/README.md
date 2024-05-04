# cour 4 : **Types de données**


## 1. **String:**

>Une chaîne de caractères est une séquence de caractères encadrée par des guillemets simples (' ') ou doubles (" "). Les chaînes de caractères sont utilisées pour représenter du texte.

- **Exemple :**

    ```javascript
    let nom = "Alice";
    ```

## 2. **Number:**

>Le type de données Number représente les valeurs numériques, qu'elles soient entières ou décimales.

- **Exemple :**

    ```javascript
    let age = 30;
    ```

## 3. **Array**

>Un tableau est une collection ordonnée d'éléments, pouvant être de différents types de données, et accessibles par leur indice.

- **Exemple :**

    ```javascript
    let nombres = [1, 2, 3, 4, 5];
    ```

## 4. **Object**

>Un objet est une collection de propriétés, où chaque propriété est une paire clé-valeur. Les valeurs peuvent être de n'importe quel type de données, y compris d'autres objets.

- **Exemple :**

    ```javascript
    let personne = { nom: "Bob", age: 25 };
    ```

## 5. **Boolean:**

>Le type de données Boolean ne peut avoir que deux valeurs : `true` (vrai) ou `false` (faux). Il est couramment utilisé pour représenter des conditions logiques.

- **Exemple :**

    ```javascript
    let estActif = true;
    ```

## 6. **Undefined:**

>Undefined est une valeur qui est automatiquement assignée à une variable lorsqu'aucune valeur n'a été attribuée.

- **Exemple :**

    ```javascript
    let variableNonDéfinie;
    console.log(variableNonDéfinie); // Affiche "undefined"
    ```

## 7. **Null:**

>Null est utilisé pour représenter l'absence intentionnelle de valeur.

- **Exemple :**

    ```javascript
    let personne = null; // Personne n'est définie
    ```


## 8. **La fonction `typeof`:**

- **Description:**

    >La fonction `typeof` en JavaScript est utilisée pour déterminer le type de données d'une variable ou d'une expression. Elle retourne une chaîne de caractères représentant le type de données de la valeur passée en argument.

- **Syntaxe:**

    ```javascript
    typeof(variable)

    // ou 
    typeof variable 
    
    ```

- **Exemple:**

    ```javascript
    console.log(typeof "Hello"); // Affiche "string"
    console.log(typeof 42); // Affiche "number"
    console.log(typeof true); // Affiche "boolean"
    console.log(typeof undefined); // Affiche "undefined"
    console.log(typeof null); // Affiche "object" (notez que c'est une anomalie dans JavaScript)
    console.log(typeof {}); // Affiche "object"
    console.log(typeof []); // Affiche "object" (les tableaux sont des objets en JavaScript)
    console.log(typeof function() {}); // Affiche "function"
    ```

