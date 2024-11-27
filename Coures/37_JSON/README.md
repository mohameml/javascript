# cour 37 : **JSON**

## 1. **Introduction:**

-   **Definition:**

    -   **JSON** (JavaScript Object Notation) est un format de données léger utilisé pour représenter des structures de données et des objets. Il est facile à lire et à écrire pour les humains, et facile à analyser et à générer pour les machines.

    -   **JSON** est dérivé de la syntaxe d'objet de JavaScript, mais il est indépendant du langage et est pris en charge par la plupart des langages de programmation modernes.

    -   **JSON** C'est un standard utilisé principalement pour échanger des données entre un client (par exemple, un navigateur) et un serveur.

-   **Caractéristiques principales**

    1. **Format textuel** : JSON est basé sur du texte et peut être facilement lu et édité dans n'importe quel éditeur de texte.
    2. **Structure hiérarchique** : Il permet de représenter des objets imbriqués, des tableaux, et d'autres structures de données complexes.
    3. **Compact et efficace** : JSON est conçu pour être léger, ce qui le rend rapide à transférer sur un réseau.
    4. **Facilement analysable** : La plupart des langages offrent des bibliothèques natives pour convertir JSON en structures de données internes.

-   **Syntaxe JSON:**

    ```json
    {
        "cle" : valeur // valeur in {obj , tableaux , string , number , bool , null}
    }
    ```

    -   **Objets** : Une collection de paires clé-valeur entourées d'accolades `{}`.
    -   **Tableaux** : Une liste ordonnée de valeurs entourée de crochets `[]`.
    -   **Valeurs primitives** :
        -   Chaînes (`string`)
        -   Nombres (`number`)
        -   Booléens (`true`/`false`)
        -   Valeur nulle (`null`)

-   **Exemple:**

    ```json
    {
        "name": "Alice",
        "age": 25,
        "isStudent": false,
        "courses": ["Math", "Physics"],
        "address": {
            "city": "Paris",
            "zipcode": "75001"
        }
    }
    ```

-   **Applications courantes:**

    1. **API RESTful** :

        - JSON est utilisé pour envoyer et recevoir des données entre un client et un serveur.
        - Exemple : une requête AJAX ou un appel d'API REST renvoie généralement du JSON.

    2. **Stockage de configuration** :

        - JSON est souvent utilisé pour stocker des fichiers de configuration dans des applications (comme `package.json` pour Node.js).

    3. **Base de données** :
        - Certaines bases de données NoSQL comme MongoDB utilisent JSON comme format natif pour stocker des données.

## 2. **parser** et **stringify** JSON:

### 2.1. **JSON.parse() :**

-   **Description:**

    > **`JSON.parse()`** permet de convertir une chaîne JSON valide en un objet JavaScript. Cette méthode analyse la chaîne JSON et renvoie un objet ou un tableau correspondant à sa structure.

-   **Syntaxe**

    ```javascript
    let object = JSON.parse(jsonString);
    ```

    -   **`jsonString`** : La chaîne JSON à analyser.
    -   **Retour** : Retourne l'objet JavaScript correspondant à la chaîne JSON.

-   **Exemple**

    ```javascript
    // Chaîne JSON
    let jsonString = '{"name": "Alice", "age": 25, "isStudent": false}';

    // Parsing de la chaîne JSON en un objet JavaScript
    let user = JSON.parse(jsonString);

    console.log(user); // { name: 'Alice', age: 25, isStudent: false }
    console.log(user.name); // Alice
    console.log(user.age); // 25
    ```

    Si la chaîne JSON est mal formée, `JSON.parse()` lance une erreur. Pour éviter cela, on peut utiliser un bloc `try...catch` :

    ```javascript
    let jsonString = '{"name": "Alice", "age": 25'; // JSON mal formé

    try {
        let user = JSON.parse(jsonString);
    } catch (e) {
        console.error("Erreur de parsing JSON:", e);
    }
    ```

### 2.2. **JSON.stringify() :**

-   **Description:**

    > **`JSON.stringify()`** est utilisé pour convertir un objet JavaScript en une chaîne JSON. Cela est souvent nécessaire pour envoyer des données à un serveur ou les stocker dans un fichier.

-   **Syntaxe**

    ```javascript
    let jsonString = JSON.stringify(value);
    ```

    -   **`value`** : L'objet ou le tableau JavaScript à convertir.
    -   **Retour** : Retourne la chaîne JSON représentant l'objet ou le tableau.

-   **Exemple**

    ```javascript
    let user = {
        name: "Alice",
        age: 25,
        isStudent: false,
    };

    // Conversion de l'objet en une chaîne JSON
    let jsonString = JSON.stringify(user);

    console.log(jsonString); // {"name":"Alice","age":25,"isStudent":false}
    ```

-   **Options supplémentaires pour `JSON.stringify()`:**

    1. **Filtrage des clés avec un tableau** : Vous pouvez spécifier un tableau de clés pour limiter les propriétés de l'objet qui seront incluses dans la chaîne JSON.

    ```javascript
    let user = {
        name: "Alice",
        age: 25,
        isStudent: false,
    };

    // Sélectionner seulement certaines propriétés
    let jsonString = JSON.stringify(user, ["name", "age"]);

    console.log(jsonString); // {"name":"Alice","age":25}
    ```

    2. **Fonction de remplacement** : Vous pouvez utiliser une fonction pour filtrer ou transformer les valeurs de l'objet avant de les convertir en chaîne JSON.

    ```javascript
    let user = {
        name: "Alice",
        age: 25,
        isStudent: false,
    };

    // Fonction de remplacement pour modifier la valeur avant la conversion
    let jsonString = JSON.stringify(user, (key, value) => {
        if (key === "age") {
            return value + 1; // Augmenter l'âge de 1 avant la conversion
        }
        return value;
    });

    console.log(jsonString); // {"name":"Alice","age":26,"isStudent":false}
    ```

    3. **Indentation de la sortie** : Le troisième argument de `JSON.stringify()` permet de formater la chaîne JSON avec des indentations (espaces ou tabulations) pour une meilleure lisibilité.

    ```javascript
    let user = {
        name: "Alice",
        age: 25,
        isStudent: false,
    };

    // Indentation de 2 espaces pour formater la sortie JSON
    let jsonString = JSON.stringify(user, null, 2);

    console.log(jsonString);
    /* Affiche :
    {
    "name": "Alice",
    "age": 25,
    "isStudent": false
    }
    */
    ```
