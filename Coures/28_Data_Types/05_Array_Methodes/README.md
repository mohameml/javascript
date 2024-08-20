# cour 05 : **Array Methodes:**

## 1. **`Array.from:`**

-   **Description:**

    > La fonction `Array.from` est une méthode statique de l'objet `Array` en JavaScript qui crée une nouvelle instance de tableau à partir d'un objet semblable à un tableau ou d'un objet itérable. Cela signifie que vous pouvez convertir des structures de données comme des nœuds DOM, des chaînes de caractères, des ensembles (`Set`), des maps (`Map`), ou même des arguments d'une fonction en un tableau.

-   Syntaxe

    ```javascript
    Array.from(arrayLike, mapFunction, thisArg);
    ```

    -   **`arrayLike`** : Requis. L'objet à convertir en tableau. Il peut s'agir d'un objet semblable à un tableau (comme un objet avec une propriété `length` et des éléments indexés) ou d'un objet itérable (comme un `Set` ou une `Map`).

    -   **`mapFunction`** _(optionnel)_ : Une fonction de transformation qui est appliquée à chaque élément du nouvel array. C'est similaire à la méthode `map()` des tableaux.

    -   **`thisArg`** _(optionnel)_ : Une valeur à utiliser comme `this` lors de l'exécution de la fonction de transformation (`mapFunction`).

-   **Exemple 1:**

    ```javascript
    const chaine = "Bonjour";
    const tableau = Array.from(chaine);

    console.log(tableau);
    // Affiche : ['B', 'o', 'n', 'j', 'o', 'u', 'r']
    ```

    ```javascript
    const nombres = [1, 2, 3, 4];
    const double = Array.from(nombres, (x) => x * 2);

    console.log(double);
    // Affiche : [2, 4, 6, 8]
    ```

-   **Exemple 2 : Conversion d'un objet `arguments` en tableau**

    Dans les fonctions, `arguments` est un objet semblable à un tableau représentant les arguments passés à la fonction. Vous pouvez le convertir en véritable tableau avec `Array.from`.

    ```javascript
    function somme() {
        const args = Array.from(arguments);
        return args.reduce((acc, val) => acc + val, 0);
    }

    console.log(somme(1, 2, 3, 4));
    // Affiche : 10
    ```

### RQ : **Génération d'un tableau avec `Array.from`**

`Array.from` peut être utilisé pour générer un tableau de taille spécifiée, rempli de valeurs calculées à partir de l'index.

```javascript
const tableau = Array.from({ length: 5 }, (v, i) => i * 2);

console.log(tableau);
// Affiche : [0, 2, 4, 6, 8]
```

## 2. **`Array.copyWithin()`:**

-   **Description:**

    > La méthode `Array.copyWithin()` en JavaScript permet de copier une portion d'un tableau à l'intérieur de ce même tableau, sans en modifier la longueur. Elle fonctionne en écrasant les éléments existants par les éléments copiés.

-   **Syntaxe:**

    ```javascript
    arr.copyWithin(target, start, end);
    ```

    -   **target** : Indice à partir duquel commencer à remplacer les éléments. Si `target` est négatif, il sera compté à partir de la fin du tableau.
    -   **start** _(optionnel)_ : Indice de départ de la portion à copier. Si `start` est négatif, il sera compté à partir de la fin du tableau. Par défaut, il est égal à `0`.
    -   **end** _(optionnel)_ : Indice de fin (non inclus) de la portion à copier. Si `end` est négatif, il sera compté à partir de la fin du tableau. Par défaut, il est égal à la longueur du tableau.

-   **Exemples:**

    ```javascript
    let arr = [1, 2, 3, 4, 5];
    arr.copyWithin(0, 3);
    console.log(arr); // [4, 5, 3, 4, 5]
    ```

    Dans cet exemple, les éléments commençant à l'indice `3` (c'est-à-dire `[4, 5]`) sont copiés au début du tableau.

### Remarques :

-   La méthode modifie directement le tableau d'origine.
-   Elle retourne le tableau modifié.

Cette méthode est particulièrement utile lorsqu'il est nécessaire de réorganiser un tableau de manière in-place sans avoir besoin de créer de nouveaux tableaux.

## 3. **La méthode `Array.some()`:**

-   **Description:**

    > La méthode `Array.some()` en JavaScript est utilisée pour tester si au moins un élément d'un tableau satisfait une condition fournie par une fonction de test. Elle retourne un booléen : `true` si au moins un élément passe le test, sinon `false`.

-   **Syntaxe:**

    ```javascript
    arr.some(callback(element[, index[, array]])[, thisArg])
    ```

    -   **callback** : Fonction de test exécutée sur chaque élément du tableau. Elle prend généralement les arguments suivants :
        -   `element` : L'élément courant du tableau.
        -   `index` _(optionnel)_ : L'indice de l'élément courant.
        -   `array` _(optionnel)_ : Le tableau sur lequel `some` a été appelée.
    -   **thisArg** _(optionnel)_ : Valeur à utiliser comme `this` lors de l'exécution du `callback`.

-   **Exemple:**

    ```javascript
    let arr = [1, 2, 3, 4, 5];

    // Vérifie si au moins un élément est supérieur à 3
    let result = arr.some((x) => x > 3);
    console.log(result); // true
    ```

    Ici, la méthode `some` retourne `true` parce qu'il existe des éléments (comme `4` et `5`) qui sont supérieurs à `3`.

### Remarques :

-   La méthode `some` arrête l'exécution dès qu'elle trouve un élément qui satisfait la condition, ce qui peut rendre son utilisation plus efficace pour certains cas par rapport à un parcours complet du tableau.
-   Si le tableau est vide, `some` retourne toujours `false`, peu importe le test.
-   `some` ne modifie pas le tableau d'origine.

## 4. **La méthode `Array.every()`:**

-   **Description:**

    > La méthode `Array.every()` en JavaScript est utilisée pour tester si **tous** les éléments d'un tableau satisfont une condition fournie par une fonction de test. Elle retourne un booléen : `true` si tous les éléments passent le test, sinon `false`.

-   **Syntaxe:**

    ```javascript
    arr.every(callback(element[, index[, array]])[, thisArg])
    ```

    -   **callback** : Fonction de test exécutée sur chaque élément du tableau. Elle prend généralement les arguments suivants :
        -   `element` : L'élément courant du tableau.
        -   `index` _(optionnel)_ : L'indice de l'élément courant.
        -   `array` _(optionnel)_ : Le tableau sur lequel `every` a été appelée.
    -   **thisArg** _(optionnel)_ : Valeur à utiliser comme `this` lors de l'exécution du `callback`.

-   **Exemple:**

    ```javascript
    let users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
    ];

    // Vérifie si tous les utilisateurs ont plus de 20 ans
    let allAdults = users.every((user) => user.age > 20);
    console.log(allAdults); // true
    ```

    Dans cet exemple, `every` retourne `true` parce que tous les utilisateurs ont plus de 20 ans.

### Remarques :

-   La méthode `every` arrête l'exécution dès qu'elle trouve un élément qui ne satisfait pas la condition. Si un seul élément échoue au test, `every` retourne `false` immédiatement.
-   Si le tableau est vide, `every` retourne toujours `true`, car il n'y a aucun élément qui pourrait échouer au test.
-   `every` ne modifie pas le tableau d'origine.
