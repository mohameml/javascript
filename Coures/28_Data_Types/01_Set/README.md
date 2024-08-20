# cour 01 : **Set**

## 1. **Description:**

> En JavaScript, un `Set` est une structure de données qui permet de stocker des valeurs uniques, ce qui signifie qu'une valeur ne peut apparaître qu'une seule fois dans un `Set`. Contrairement aux tableaux, les éléments dans un `Set` ne sont pas indexés, ce qui signifie qu'ils ne peuvent pas être accédés par des positions spécifiques. Les `Set` sont particulièrement utiles lorsque vous avez besoin de gérer des collections de données sans doublons.

### 2. Création et Propriétés

-   **Création :**

    > Un `Set` peut être créé en utilisant le constructeur `Set()`. Vous pouvez initialiser un `Set` vide ou passer un tableau (ou tout autre objet itérable) pour le remplir dès sa création.

    ```javascript
    // Créer un Set vide
    const monSet = new Set();

    // Créer un Set avec des valeurs initiales
    const nombres = new Set([1, 2, 3, 4, 5]);

    // Créer un Set avec des valeurs non uniques (les doublons seront ignorés)
    const fruits = new Set(["pomme", "banane", "orange", "pomme"]);
    ```

-   **Propriétés :**

    -   **size** : Retourne le nombre d'éléments dans le `Set`.
        ```javascript
        console.log(fruits.size); // Affiche : 3
        ```
    -   **has(value)** : Vérifie si une valeur spécifique est présente dans le `Set`.
        ```javascript
        console.log(fruits.has("banane")); // Affiche : true
        console.log(fruits.has("cerise")); // Affiche : false
        ```

## 3. **Méthodes:**

1. **add(value)** :

    Ajoute une nouvelle valeur au `Set`. Si la valeur existe déjà, elle ne sera pas ajoutée.

    ```javascript
    const lettres = new Set();
    lettres.add("a");
    lettres.add("b");
    lettres.add("a"); // Ne sera pas ajouté, car 'a' existe déjà

    console.log(lettres); // Affiche : Set { 'a', 'b' }
    ```

2. **delete(value)** :

    Supprime une valeur spécifique du `Set`.

    ```javascript
    lettres.delete("b");

    console.log(lettres); // Affiche : Set { 'a' }
    ```

3. **clear()** :

    Supprime tous les éléments du `Set`.

    ```javascript
    lettres.clear();

    console.log(lettres); // Affiche : Set {}
    ```

4. **forEach(callback)** :

    Itère sur chaque élément du `Set` et exécute une fonction de rappel (`callback`) pour chaque élément.

    ```javascript
    const nombres = new Set([1, 2, 3]);

    nombres.forEach((valeur) => {
        console.log(valeur);
    });
    // Affiche :
    // 1
    // 2
    // 3
    ```

5. **values()** ou **keys()** :

    Renvoie un itérateur pour les valeurs du `Set` (les méthodes `values()` et `keys()` sont identiques dans le contexte des `Set`).

    ```javascript
    const itérateur = nombres.values();

    for (const valeur of itérateur) {
        console.log(valeur);
    }
    // Affiche :
    // 1
    // 2
    // 3
    ```
