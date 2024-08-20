# cour 03 :**Map**

## 1. **Introduction à Map en JavaScript:**

> En JavaScript, une `Map` est une structure de données qui permet de stocker des paires clé-valeur, où n'importe quel type de données peut être utilisé comme clé, que ce soit un objet, une fonction, un nombre, ou même une chaîne de caractères. Contrairement aux objets standards, les `Map` sont particulièrement utiles lorsqu'il est nécessaire de conserver l'ordre d'insertion des clés, d'avoir des clés non limitées aux chaînes de caractères ou symboles, et de gérer facilement des collections de données clé-valeur.

## 2. **Création et Propriétés de Map:**

-   **Création :**

    Une `Map` peut être créée de plusieurs manières :

    1. **Création d'une Map vide** :

        ```javascript
        const maMap = new Map();
        ```

    2. **Création d'une Map avec des paires clé-valeur initiales** :

        Vous pouvez initialiser une `Map` avec un tableau de paires clé-valeur.

        ```javascript
        const maMap = new Map([
            ["clé1", "valeur1"],
            ["clé2", "valeur2"],
        ]);
        ```

-   **Propriétés :**

    1.  **size** :
        La propriété `size` renvoie le nombre de paires clé-valeur présentes dans la `Map`.

        ```javascript
        const maMap = new Map([
            ["a", 1],
            ["b", 2],
            ["c", 3],
        ]);

        console.log(maMap.size); // Affiche : 3
        ```

## 3. **Méthodes de Map:**

1. **set(clé, valeur)** :

    Ajoute ou met à jour une paire clé-valeur dans la `Map`. Si la clé existe déjà, sa valeur est mise à jour ; sinon, une nouvelle paire est ajoutée.

    ```javascript
    const maMap = new Map();
    maMap.set("a", 1);
    maMap.set("b", 2);
    maMap.set("a", 3); // Met à jour la valeur de 'a'

    console.log(maMap.get("a")); // Affiche : 3
    ```

2. **get(clé)** :

    Récupère la valeur associée à une clé spécifique. Si la clé n'existe pas, retourne `undefined`.

    ```javascript
    console.log(maMap.get("b")); // Affiche : 2
    console.log(maMap.get("c")); // Affiche : undefined
    ```

3. **has(clé)** :

    Vérifie si une clé spécifique existe dans la `Map`. Renvoie `true` si la clé est présente, sinon `false`.

    ```javascript
    console.log(maMap.has("a")); // Affiche : true
    console.log(maMap.has("z")); // Affiche : false
    ```

4. **delete(clé)** :

    Supprime une paire clé-valeur de la `Map` en utilisant la clé. Renvoie `true` si la suppression a réussi, sinon `false`.

    ```javascript
    maMap.delete("b");
    console.log(maMap.has("b")); // Affiche : false
    ```

5. **clear()** :

    Supprime toutes les paires clé-valeur de la `Map`, la réinitialisant ainsi.

    ```javascript
    maMap.clear();
    console.log(maMap.size); // Affiche : 0
    ```

6. **forEach(callback)** :

    Itère sur chaque paire clé-valeur dans la `Map` et exécute une fonction de rappel pour chaque paire.

    ```javascript
    maMap.set("a", 1);
    maMap.set("b", 2);

    maMap.forEach((valeur, clé) => {
        console.log(clé + " : " + valeur);
    });
    // Affiche :
    // a : 1
    // b : 2
    ```

7. **keys()** :

    Renvoie un itérateur pour les clés dans la `Map`.

    ```javascript
    for (let clé of maMap.keys()) {
        console.log(clé);
    }
    // Affiche : a, b
    ```

8. **values()** :

    Renvoie un itérateur pour les valeurs dans la `Map`.

    ```javascript
    for (let valeur of maMap.values()) {
        console.log(valeur);
    }
    // Affiche : 1, 2
    ```

9. **entries()** :

    Renvoie un itérateur pour les paires clé-valeur dans la `Map`, sous forme de tableaux `[clé, valeur]`.

    ```javascript
    for (let [clé, valeur] of maMap.entries()) {
        console.log(clé, valeur);
    }
    // Affiche :
    // a 1
    // b 2
    ```
