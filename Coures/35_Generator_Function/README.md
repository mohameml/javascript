# cour 35 : **Generator Function Introduction**

-   **Definition:**

    > Une **fonction génératrice** en JavaScript est une fonction spéciale qui permet de créer des itérateurs personnalisés. Contrairement aux fonctions classiques, une fonction génératrice peut être **interrompue** et **repris** plus tard, ce qui permet de produire des valeurs à la demande, une par une, et de gérer des flux de données paresseux (lazy evaluation).

-   **Caractéristiques des fonctions génératrices :**

    -   Elles sont définies avec le mot-clé `function*`.
    -   Elles utilisent l'instruction `yield` pour produire des valeurs au fur et à mesure.
    -   Elles retournent un objet **itérateur** qui implémente la méthode `next()`. Chaque appel de `next()` renvoie une valeur `{ value, done }`.
        -   **`value`** : la valeur produite par `yield`.
        -   **`done`** : un booléen indiquant si le générateur a terminé.

-   **Syntaxe :**

    ```javascript
    function* generatorFunction() {
        // code à l'intérieur du générateur
        yield valeur1;
        yield valeur2;
        return valeurFinale; // optionnel
    }
    ```

-   **Exemple de fonction génératrice simple :**

    ```javascript
    function* countUpTo(max) {
        let count = 1;
        while (count <= max) {
            yield count; // Produire la valeur de `count`
            count++; // Incrémenter `count`
        }
    }

    const counter = countUpTo(3);

    console.log(counter.next()); // { value: 1, done: false }
    console.log(counter.next()); // { value: 2, done: false }
    console.log(counter.next()); // { value: 3, done: false }
    console.log(counter.next()); // { value: undefined, done: true }

    const counter_2 = countUpTo(3);

    for (let value of counter_2) {
        console.log(value);
    }
    ```
