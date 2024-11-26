# cour 12 : **Boucles**

## 1. **Boucle `for`:**

-   **Description :**

    > La boucle `for` en JavaScript est une structure de contrôle qui permet d'itérer sur une série d'instructions un nombre spécifié de fois.

    -   Elle se compose de trois parties principales :

        -   **Initialisation** : Une expression JavaScript exécutée avant le début de la boucle. Elle est généralement utilisée pour initialiser un compteur ou une variable de contrôle.
        -   **Condition** : Une expression booléenne évaluée avant chaque itération de la boucle. Si cette condition est vraie, la boucle continue. Sinon, elle s'arrête.
        -   **Incrémentation** : Une expression JavaScript exécutée à la fin de chaque itération de la boucle. Elle est généralement utilisée pour incrémenter le compteur ou mettre à jour la variable de contrôle.

-   **Syntaxe :**

    ```javascript
    for (initialisation; condition; incrémentation) {
        // Instructions à exécuter à chaque itération
    }
    ```

-   **Exemple :**

    ```javascript
    for (let i = 0; i < 5; i++) {
        console.log("La valeur de i est : " + i);
    }

    //
    let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let j = 0; j < tab.length; j++) {
        console.log(`The ${j} element of my tab is : ${tab[j]}`);
    }
    ```

## 2. **`break`, `continue` et `label`:**

-   **Description:**

    > En JavaScript, les mots-clés `break`, `continue` et les étiquettes (`label`) sont utilisés en conjonction avec les boucles (`for`, `while`, `do-while`) pour contrôler le flux d'exécution à l'intérieur de la boucle.

    -   **break** : Il est utilisé pour terminer prématurément une boucle. Lorsque `break` est rencontré à l'intérieur d'une boucle, l'exécution de la boucle est immédiatement arrêtée et le contrôle est transféré à l'instruction qui suit immédiatement la boucle.

    -   **continue** : Il est utilisé pour sauter l'itération courante d'une boucle et passer à l'itération suivante. Lorsque `continue` est rencontré à l'intérieur d'une boucle, le reste du code à l'intérieur de la boucle pour cette itération est ignoré et la boucle passe à l'itération suivante.

    -   **label** : Les étiquettes (`label`) sont des identifiants associés à des boucles. Ils permettent de référencer spécifiquement une boucle depuis une autre boucle ou depuis n'importe quelle instruction dans le code. Les étiquettes sont suivies par deux-points (`:`) et peuvent être placées devant une boucle.

-   **Syntaxe :**

    ```javascript
    // break
    for (initialisation; condition; incrémentation) {
        // Instructions
        if (conditionDeSortie) {
            break;
        }
    }

    // continue
    for (initialisation; condition; incrémentation) {
        // Instructions
        if (conditionDeSaut) {
            continue;
        }
        // Autres instructions
    }

    // label
    nomDeBoucle: for (initialisation; condition; incrémentation) {
        // Instructions
    }
    ```

-   **Exemple :**

    ```javascript
    // break
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {
            break;
        }
    }
    // Output: 0, 1, 2, 3

    // continue
    for (let i = 0; i < 5; i++) {
        if (i === 2 || i === 4) {
            continue;
        }
        console.log(i);
    }
    // Output: 0, 1, 3

    // label
    outerLoop: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i === 1 && j === 1) {
                break outerLoop;
            }
            console.log("i = " + i + ", j = " + j);
        }
    }
    // Output:
    // i = 0, j = 0
    // i = 0, j = 1
    // i = 0, j = 2
    ```

## 3. **Boucle `While`:**

-   **Description :**

    > La boucle `while` en JavaScript est une structure de contrôle qui répète un bloc d'instructions tant qu'une condition spécifiée reste vraie. Elle est utile lorsque vous ne connaissez pas à l'avance combien de fois la boucle doit s'exécuter, mais vous savez que vous voulez qu'elle continue à s'exécuter tant qu'une condition est vérifiée.

-   **Syntaxe :**

    La syntaxe de la boucle `while` en JavaScript est la suivante :

    ```javascript
    while (condition) {
        // Bloc d'instructions à exécuter
    }
    ```

    -   `condition` : C'est une expression évaluée avant chaque itération de la boucle. Si cette condition est vraie, le bloc d'instructions à l'intérieur de la boucle est exécuté. Si elle est fausse, la boucle s'arrête.
    -   Bloc d'instructions à exécuter : C'est le code à exécuter tant que la condition est vraie.

-   **Exemples :**

    ```javascript
    const nombreAleatoire = Math.floor(Math.random() * 100) + 1;
    let guess;
    let attempts = 0;

    while (guess !== nombreAleatoire) {
        guess = parseInt(prompt("Devinez un nombre entre 1 et 100 :"));
        attempts++;

        if (guess < nombreAleatoire) {
            alert("Trop petit ! Essayez encore.");
        } else if (guess > nombreAleatoire) {
            alert("Trop grand ! Essayez encore.");
        }
    }

    alert("Bravo ! Vous avez deviné le nombre en " + attempts + " tentatives.");
    ```

## 4. **Boucle `do while`:**

-   **Description :**

    > La boucle `do-while` en JavaScript est une structure de contrôle similaire à la boucle `while`, mais avec une différence cruciale : elle exécute le bloc d'instructions au moins une fois, puis vérifie la condition. Cela signifie que même si la condition est initialement fausse, le bloc d'instructions sera exécuté au moins une fois avant que la condition ne soit évaluée.

-   **Syntaxe :**

    La syntaxe de la boucle `do-while` en JavaScript est la suivante :

    ```javascript
    do {
        // Bloc d'instructions à exécuter
    } while (condition);
    ```

    -   Bloc d'instructions à exécuter : C'est le code qui sera exécuté au moins une fois, et ensuite à chaque itération tant que la condition reste vraie.
    -   `condition` : C'est une expression évaluée après chaque exécution du bloc d'instructions. Si la condition est vraie, la boucle continue à s'exécuter ; sinon, elle s'arrête.

-   **Exemple :**

    Calcul de la somme des nombres de 1 à 100 avec une boucle `do-while` :

    ```javascript
    let sum = 0;
    let num = 1;

    do {
        sum += num;
        num++;
    } while (num <= 100);

    console.log("La somme des nombres de 1 à 100 est : " + sum);
    ```

## 5. **Boucle `for...in`:**

-   La boucle `for...in` est utilisée pour itérer **sur les propriétés énumérables** d'un objet, y compris les propriétés héritées à travers la chaîne prototype.

-   **Syntaxe :**

    ```javascript
    for (let key in object) {
        // code à exécuter pour chaque clé (propriété) dans l'objet
    }
    ```

-   **Exemple :**

    ```javascript
    const person = {
        name: "Alice",
        age: 30,
        job: "Developer",
    };

    for (let key in person) {
        console.log(key, person[key]);
    }
    // Sortie :
    // name Alice
    // age 30
    // job Developer
    ```

## 6. **Boucle `for...of` :**

-   La boucle `for...of` est utilisée pour itérer **sur les valeurs des éléments** dans des objets itérables comme les tableaux, les chaînes de caractères, les `Set`, les `Map`, etc.

-   **Syntaxe :**

    ```javascript
    for (let element of iterable) {
        // code à exécuter pour chaque élément dans l'objet itérable
    }
    ```

-   **Exemple :**

    ```javascript
    const fruits = ["apple", "banana", "cherry"];

    for (let fruit of fruits) {
        console.log(fruit);
    }
    // Sortie :
    // apple
    // banana
    // cherry
    ```
