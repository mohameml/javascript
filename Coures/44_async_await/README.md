# cour 44 : **Async/Await**

## 1. **Async:**

-   **Définition :**

    -   En JavaScript, le mot-clé **`async`** est utilisé pour déclarer une fonction asynchrone. Une fonction marquée comme asynchrone retourne toujours une **Promesse**, même si elle semble renvoyer directement une valeur.

    -   Une fonction **`async`** renvoie toujours une **Promesse** :
        -   Si une valeur est retournée, elle est automatiquement encapsulée dans une Promesse résolue.
        -   Si une erreur est levée, elle est encapsulée dans une Promesse rejetée.

-   **Syntaxe**

    ```javascript
    async function nomDeLaFonction() {
        // Code asynchrone ici
        if (something) {
            return value; // équivalent à return Promise.resolve(value)
        } else {
            throw new Error(messgae); // équivalent à return Promise.rejecte(value)
        }
    }
    ```

-   **Exemple simple : Fonction `async`**

    ```javascript
    async function getNumber() {
        return 42; // Ceci équivaut à : return Promise.resolve(42);
    }

    getNumber().then((result) => {
        console.log(result); // Affiche : 42
    });
    ```

-   **Exemple 2:**

    ```javascript
    // Méthode 1 :
    function getData() {
        return new Promise((res, rej) => {
            let users = ["Sidi"];
            // let users = [];

            if (users.length > 0) {
                res(users);
            } else {
                rej(new Error("No users found"));
            }
        });
    }

    getData()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });

    // Méthode 2 :

    function getData2() {
        let users = ["Sidi"];

        if (users.length > 0) {
            return Promise.resolve(users);
        } else {
            return Promise.reject(Error("No users found"));
        }
    }

    getData2()
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

    // Méthode 3 :

    async function getData3() {
        let users = ["Sidi"];
        if (users.length > 0) {
            return users;
        } else {
            throw new Error("No users found");
        }
    }

    getData3()
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    ```

## 2. **Await:**

-   **Définition :**

    -   En JavaScript, **`await`** est un mot-clé utilisé dans une fonction marquée **`async`** pour **attendre qu'une Promesse soit résolue ou rejetée** avant de continuer l'exécution du code.

    -   Il permet de **mettre en pause temporairement** l'exécution de la fonction `async` jusqu'à ce que la Promesse soit terminée (résolue ou rejetée).

-   **Caractéristiques principales**

    1. **Usage limité** :

        - `await` **ne peut être utilisé qu'à l'intérieur d'une fonction `async`**.
        - Si utilisé en dehors, cela entraînera une erreur.

    2. **Pause temporaire** :

        - Attend la résolution ou le rejet de la Promesse fournie.
        - Si la Promesse est **résolue**, `await` retourne la valeur résolue.
        - Si la Promesse est **rejetée**, une erreur est levée.

-   **Syntaxe**

    ```javascript
    let resultat = await promesse;
    ```

    -   **`promesse`** : Une expression retournant une Promesse ou une valeur non promise.
        -   Si c'est une Promesse, `await` retourne sa valeur lorsqu'elle est résolue.
        -   Si ce n'est pas une Promesse, `await` la traite comme une valeur résolue.

-   **Exemple 1 : Attendre une Promesse**

    ```javascript
    async function example() {
        const promesse = new Promise((resolve) => {
            setTimeout(() => resolve("Résultat après 2 secondes"), 2000);
        });

        console.log("Avant await");
        const resultat = await promesse; // Attente ici
        console.log("Après await");
        console.log(resultat); // "Résultat après 2 secondes"
    }

    example();
    ```

-   **Exemple 2 : Gestion des erreurs**

    Pour capturer les erreurs, utilisez `try...catch` avec `await` :

    ```javascript
    async function fetchWithErrorHandling() {
        try {
            const response = await fetch("https://invalid-url");
            const data = await response.json(); // Provoque une erreur si le fetch échoue
            console.log(data);
        } catch (error) {
            console.error("Une erreur est survenue :", error.message);
        }
    }

    fetchWithErrorHandling();
    ```
