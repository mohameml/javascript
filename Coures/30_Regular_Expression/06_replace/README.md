# cour : **replace**

## 1. **`replace()`:**

-   **Description:**

    > La méthode `replace()` remplace la première occurrence d'un motif (chaîne de caractères ou regex) par une chaîne de remplacement. Si le motif est une chaîne de caractères simple, seule la première occurrence est remplacée. Avec une expression régulière, il est possible d'appliquer des correspondances plus complexes.

-   **Syntaxe** :

    ```javascript
    string.replace(searchValue, newValue);
    ```

-   **Exemple avec regex** : Remplacer la première occurrence de tous les chiffres (`\d`).

    ```javascript
    const str = "abc123xyz456";
    const result = str.replace(/\d/, "#"); // Remplace seulement le premier chiffre
    console.log(result); // "abc#23xyz456"
    ```

    Ici, seule la première occurrence de `\d` (qui représente les chiffres) est remplacée par `#`.

-   **Note** : Si l'on souhaite remplacer plusieurs occurrences avec `replace()`, il faut utiliser l'expression régulière avec le flag global `g`.

    ```javascript
    const str = "abc123xyz456";
    const result = str.replace(/\d/g, "#"); // Remplace tous les chiffres
    console.log(result); // "abc###xyz###"
    ```

## 2. **`replaceAll()`:**

-   **Description:**

    > La méthode `replaceAll()` remplace **toutes** les occurrences du motif dans une chaîne, qu'il s'agisse d'une chaîne de caractères ou d'une expression régulière avec ou sans le flag global `g`. C'est une méthode introduite dans ES2021.

-   **Syntaxe** :

    ```javascript
    string.replaceAll(searchValue, newValue);
    ```

-   **Exemple avec regex** : Remplacer toutes les occurrences de chiffres par `#`.

    ```javascript
    const str = "abc123xyz456";
    const result = str.replaceAll(/\d/g, "#"); // Remplace tous les chiffres
    console.log(result); // "abc###xyz###"
    ```

-   **Note** : Contrairement à `replace()`, il n'est pas nécessaire d'ajouter explicitement le flag global `g` avec `replaceAll()` car il remplace toutes les occurrences par défaut. Cependant, si vous utilisez une regex sans `g`, une erreur sera générée. Le flag global est donc obligatoire dans ce cas.
