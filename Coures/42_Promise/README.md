# cour 42 : **Promise**

## 1. **Introduction:`Callback Hell:`**

-   **Définition:**

    > Le **Callback Hell** en JavaScript désigne une situation où plusieurs fonctions asynchrones utilisant des **callbacks** sont imbriquées les unes dans les autres, créant un code difficile à lire, à comprendre et à maintenir. Cela se produit souvent lorsqu'on enchaîne plusieurs opérations asynchrones dépendantes les unes des autres.

-   Voici un exemple classique de **Callback Hell** :

    ```javascript
    getUserData(userId, (user) => {
        getOrders(user, (orders) => {
            processOrders(orders, (processedOrders) => {
                saveProcessedOrders(processedOrders, (response) => {
                    console.log("Success:", response);
                });
            });
        });
    });
    // ou :
    setTimeout(() => {
        console.log("Récuperation de l'image à partir de serveur");
        setTimeout(() => {
            console.log("resizer la photo ");
            setTimeout(() => {
                console.log("Ajouter un logo");
                setTimeout(() => {
                    console.log("Afficher l'image");
                }, 1000);
            }, 1000);
        }, 2000);
    }, 1000);
    ```

    Dans cet exemple, chaque fonction dépend de la précédente, ce qui entraîne un code fortement imbriqué, aussi appelé **"Pyramid of Doom"**.

-   **Solutions pour éviter le Callback Hell:**

    1.  **Utiliser des Promises :**
        Les **Promises** permettent de chaîner les opérations de manière plus linéaire :

        ```javascript
        getUserData(userId)
            .then((user) => getOrders(user))
            .then((orders) => processOrders(orders))
            .then((processedOrders) => saveProcessedOrders(processedOrders))
            .then((response) => console.log("Success:", response))
            .catch((error) => console.error("Error:", error));
        ```

    2.  **Utiliser `async/await` :**
        Avec `async/await`, le code devient encore plus lisible et ressemble à un code synchrone :

        ```javascript
        async function processUserOrders(userId) {
            try {
                const user = await getUserData(userId);
                const orders = await getOrders(user);
                const processedOrders = await processOrders(orders);
                const response = await saveProcessedOrders(processedOrders);
                console.log("Success:", response);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        processUserOrders(userId);
        ```

## 2. **Promise:**

### 2.1 **Introduction:**

-   **Definition:**

    > Une **Promise** en JavaScript est un objet qui représente la **valeur éventuelle** d'une opération asynchrone, qui peut être disponible maintenant, dans le futur, ou jamais. Elle fournit un moyen plus clair de gérer les opérations asynchrones, comme des requêtes réseau, des timers ou des lectures de fichiers.

    -   Une Promise a trois états possibles :

        1. **Pending (en attente)** : L'opération est en cours.
        2. **Fulfilled (résolue)** : L'opération s'est terminée avec succès, et une valeur est disponible.
        3. **Rejected (rejetée)** : L'opération a échoué, et une raison (erreur) est disponible.

    -   Une Promise garantit qu'elle passe **une seule fois** de l'état **Pending** à **Fulfilled** ou **Rejected**.

-   **Comment fonctionne une Promise ?**

    1. Une fonction asynchrone est encapsulée dans un objet `Promise`.

    2. Cette fonction prend deux callbacks en paramètres :
        - `resolve` : à appeler lorsque l'opération réussit.
        - `reject` : à appeler lorsque l'opération échoue.
    3. La Promise renvoie ensuite un objet qui expose des méthodes pour gérer les résultats, comme `.then()` et `.catch()`.

-   **Syntaxe d'une Promise**

    ```javascript
    const myPromise = new Promise((resolve, reject) => {
        // Opération asynchrone
        let success = true; // Simule un résultat
        if (success) {
            resolve("Opération réussie !");
        } else {
            reject("Une erreur est survenue.");
        }
    });

    // Consommation de la Promise
    myPromise
        .then((result) => {
            console.log(result); // S'exécute si "resolve" est appelé
        })
        .catch((error) => {
            console.error(error); // S'exécute si "reject" est appelé
        });
    ```

-   **Exemple : Utilisation d'une API asynchrone**

    Imaginons une fonction qui récupère des données utilisateur depuis une API :

    ```javascript
    function fetchUserData(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId) {
                    resolve({ id: userId, name: "Alice" });
                } else {
                    reject("L'ID utilisateur est manquant.");
                }
            }, 2000);
        });
    }

    // Consommation de la Promise
    fetchUserData(1)
        .then((user) => {
            console.log("Données utilisateur récupérées :", user);
        })
        .catch((error) => {
            console.error("Erreur :", error);
        })
        .finally(() => {
            console.log("Opération terminée.");
        });
    ```

### 2.2 **Méthodes clés des Promises**

-   **`.then(onFulfilled, onRejected)`**

    -   Utilisé pour traiter la valeur d'une Promise **résolue**.
    -   Optionnellement, peut gérer les erreurs si un callback `onRejected` est fourni.

-   **`.catch(onRejected)`**

    -   Utilisé pour traiter les erreurs d'une Promise **rejetée**.

-   **`.finally(onFinally)`**

    -   Exécuté une fois que la Promise est soit **résolue**, soit **rejetée**. Ne reçoit pas de valeur ni d'erreur.

### 2.3. **Fonctionnement:**

-   Les fonctions **`resolve`** et **`reject`** ne sont pas des fonctions que vous devez coder vous-même. Elles sont **fournies automatiquement** par l'objet `Promise` lorsque vous en créez une instance. Vous les recevez en tant que paramètres du callback que vous passez au constructeur de la `Promise`.

-   **Origine de `resolve` et `reject`**

    Lorsque vous faites ceci :

    ```javascript
    const myPromise = new Promise((resolve, reject) => {
        // Votre logique ici
    });
    ```

    -   Le constructeur de la `Promise` appelle votre fonction de callback en lui passant deux fonctions :
        -   **`resolve`** : Une fonction fournie par l'implémentation de la `Promise`. Elle est utilisée pour indiquer que l'opération est terminée avec succès.
        -   **`reject`** : Une autre fonction fournie par la `Promise`. Elle est utilisée pour signaler une erreur ou un échec.

    Ces fonctions sont gérées **en interne** par la `Promise`. Vous n'avez pas besoin de les écrire, mais simplement de les appeler au bon moment.

-   **Que fait `resolve` ?**

    -   Lorsque vous appelez **`resolve(value)`**, la `Promise` passe à l'état **fulfilled** (résolue) avec la valeur `value` comme résultat.
    -   Cette valeur sera transmise à la méthode `.then()` de la Promise.

-   **Que fait `reject` ?**

    -   Lorsque vous appelez **`reject(error)`**, la `Promise` passe à l'état **rejected** (rejetée) avec `error` comme raison.
    -   Cette raison sera transmise à la méthode `.catch()` de la Promise.

## 3. **Promise.all**

-   **Définition**

    -   `Promise.all` est une méthode statique de l'objet `Promise` qui permet d'exécuter plusieurs Promesses en parallèle et d'attendre que **toutes** soient résolues ou qu'une seule échoue.

    -   **Résolu** : Si toutes les Promesses sont résolues, `Promise.all` retourne un tableau contenant les résultats de chaque Promesse.
    -   **Rejeté** : Si une seule Promesse échoue (rejetée), `Promise.all` échoue immédiatement avec l'erreur de cette Promesse.

-   **Syntaxe**

    ```javascript
    Promise.all(iterable);
    ```

    -   **`iterable`** : Un tableau (ou un objet itérable) de Promesses.

    -   **Retour** : Une Promesse :
        -   **Résolue** avec un tableau contenant les valeurs des Promesses résolues.
        -   **Rejetée** avec l'erreur de la première Promesse rejetée.

-   **Exemples :**

    ```javascript
    const p1 = Promise.resolve(10);
    const p2 = Promise.resolve(20);
    const p3 = Promise.resolve(30);

    Promise.all([p1, p2, p3])
        .then((results) => {
            console.log(results); // [10, 20, 30]
        })
        .catch((error) => {
            console.error(error);
        });
    ```

    ```javascript
    const p1 = Promise.resolve("Succès 1");
    const p2 = Promise.reject("Erreur dans p2");
    const p3 = Promise.resolve("Succès 3");

    Promise.all([p1, p2, p3])
        .then((results) => {
            console.log(results); // Jamais appelé
        })
        .catch((error) => {
            console.error(error); // Affiche : "Erreur dans p2"
        });
    ```

-   **Exemple 2 : Combinaison avec `fetch`**

    Supposons que vous fassiez plusieurs requêtes HTTP avec `fetch` :

    ```javascript
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://jsonplaceholder.typicode.com/posts/3",
    ];

    const fetchPromises = urls.map((url) =>
        fetch(url).then((res) => res.json())
    );

    Promise.all(fetchPromises)
        .then((data) => {
            console.log(data); // Tableau avec les résultats des requêtes
        })
        .catch((error) => {
            console.error("Une erreur est survenue :", error);
        });
    ```

    Ici :

    -   **Résolu** : Si toutes les requêtes réussissent, vous obtenez un tableau d'objets JSON.
    -   **Rejeté** : Si une seule requête échoue, l'erreur est capturée dans le `catch`.

## 4. **Promise.allSettled :**

-   **Définition :**

    -   `Promise.allSettled` est une méthode statique de l'objet `Promise` qui permet de gérer plusieurs Promesses en parallèle, mais contrairement à `Promise.all`, elle attend que **toutes les Promesses soient terminées** (résolues ou rejetées) et retourne leur état final.

    -   **Résolu** : La Promesse retournée par `Promise.allSettled` est toujours résolue.

    -   Chaque résultat contient un objet avec :

        -   **`status`** : `fulfilled` (résolue) ou `rejected` (échouée).
        -   **`value`** : La valeur si la Promesse est résolue.
        -   **`reason`** : La raison si la Promesse est rejetée.

-   **Syntaxe**

    ```javascript
    Promise.allSettled(iterable);
    ```

    -   **`iterable`** : Un tableau (ou un objet itérable) de Promesses.

    -   **Retour** : Une Promesse :
        -   Résolue avec un tableau contenant les résultats de chaque Promesse (`status`, `value` ou `reason`).

-   **Exemple 1 :**

    ```javascript
    const p1 = Promise.resolve("Succès 1");
    const p2 = Promise.reject("Erreur dans p2");
    const p3 = Promise.resolve("Succès 3");

    Promise.allSettled([p1, p2, p3]).then((results) => {
        console.log(results);
        // [
        //   { status: 'fulfilled', value: 'Succès 1' },
        //   { status: 'rejected', reason: 'Erreur dans p2' },
        //   { status: 'fulfilled', value: 'Succès 3' }
        // ]
    });
    ```

-   **Exemple 2 : Combinaison avec `fetch`**

    Supposons que vous fassiez plusieurs requêtes HTTP avec `fetch` :

    ```javascript
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/invalid", // Mauvaise URL
        "https://jsonplaceholder.typicode.com/posts/3",
    ];

    const fetchPromises = urls.map((url) =>
        fetch(url).then((res) => {
            if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);
            return res.json();
        })
    );

    Promise.allSettled(fetchPromises).then((results) => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Requête ${index + 1} réussie :`, result.value);
            } else {
                console.error(`Requête ${index + 1} échouée :`, result.reason);
            }
        });
    });
    ```

## 5. **Promise.race**

-   **Définition :**

    -   `Promise.race` est une méthode statique de l'objet `Promise` qui renvoie une Promesse qui est **résolue ou rejetée dès que la première Promesse de l'itérable est terminée** (résolue ou rejetée).

    -   **Résolue** : Si la première Promesse terminée est résolue.

    -   **Rejetée** : Si la première Promesse terminée est rejetée.

-   **Syntaxe**

    ```javascript
    Promise.race(iterable);
    ```

    -   **`iterable`** : Un tableau (ou un objet itérable) de Promesses.

    -   **Retour** : Une Promesse : Résolue ou rejetée dès que la première Promesse de l'itérable est terminée.

-   **Exemple 1 :**

    ```javascript
    const p1 = new Promise((resolve) =>
        setTimeout(() => resolve("Promesse 1 résolue"), 1000)
    );
    const p2 = new Promise((resolve) =>
        setTimeout(() => resolve("Promesse 2 résolue"), 2000)
    );

    Promise.race([p1, p2])
        .then((result) => {
            console.log(result); // "Promesse 1 résolue" (car elle est terminée en premier)
        })
        .catch((error) => {
            console.error(error);
        });
    ```

-   **Exemple 2 : Avec des requêtes `fetch`**

    On peut utiliser `Promise.race` pour définir un **timeout** sur une requête HTTP :

    ```javascript
    const fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts/1");

    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Requête expirée")), 3000)
    );

    Promise.race([fetchPromise, timeoutPromise])
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Erreur HTTP");
        })
        .then((data) => {
            console.log("Données reçues :", data);
        })
        .catch((error) => {
            console.error(error); // "Requête expirée" si le fetch prend trop de temps
        });
    ```
