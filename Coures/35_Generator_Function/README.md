# cour 35 : **Generator Function Introduction**

## 1. **Introduction:**

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

## 2. **Delegate Generator Function:**

-   **Description :**

    > En JavaScript, une **fonction génératrice déléguée** utilise l'opérateur `yield*` pour déléguer une partie de son itération à une autre itérable (par exemple, un tableau, une chaîne, un autre générateur, etc.). Cela permet de simplifier la composition de générateurs en déléguant des tâches à d'autres itérables.

-   **Syntaxe**

    ```javascript
    function* generator() {
        yield* iterable;
    }
    ```

    -   **`iterable`** : peut être un tableau, une chaîne, un autre générateur ou tout objet conforme à l'interface d'itération.

-   **Exemple :**

    ```javascript
    function* innerGenerator() {
        yield "a";
        yield "b";
    }

    function* delegatingGenerator() {
        yield* [1, 2, 3];
        yield* innerGenerator(); // Délégation au générateur `innerGenerator`
    }

    const gen = delegatingGenerator();

    console.log(gen.next()); // { value: 1, done: false }
    console.log(gen.next()); // { value: 2, done: false }
    console.log(gen.next()); // { value: 3, done: false }
    console.log(gen.next()); // { value: undefined, done: true }
    ```

### RQ : **la méthode `return`**

-   En JavaScript, la méthode **`return()`** appliquée à un générateur est utilisée pour **terminer le générateur prématurément**. Elle force le générateur à renvoyer un objet `{ value: ..., done: true }` et met fin à son exécution, quel que soit l'endroit où il se trouvait.
