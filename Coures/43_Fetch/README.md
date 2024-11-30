# cour 43 : **Fetch**

## 1. **Introduction**

-   **Definition:**

    > **Fetch API** est une interface moderne introduite dans JavaScript pour effectuer des requêtes HTTP. Elle est utilisée pour récupérer des ressources (comme des fichiers, des API, etc.) de manière asynchrone.

    -   Contrairement à l'ancien `XMLHttpRequest` , `fetch ` est plus simple et utilise les Promises.

-   **Syntaxe de base**

    ```javascript
    fetch(resource, options);
    ```

    -   **`resource`** : L'URL de la ressource à récupérer.

    -   **`options`** (facultatif) : Un objet permettant de configurer la requête (méthode, headers, body, etc.) :

        -   **`method`** : Spécifie le type de requête HTTP. Par défaut, c'est `GET`.

        -   **`headers`** : Ajoute des en-têtes HTTP (comme le type de contenu ou l'authentification).

        -   **`body`** : Envoie les données avec les requêtes `POST`, `PUT`, ou `PATCH`. Peut être :
            -   **JSON** : Converti avec `JSON.stringify`.
            -   **FormData** : Pour les fichiers/formulaires.

    Le résultat de `fetch` est une **Promise** qui se résout avec un objet **`Response`**.

-   **Exemple simple**

    ```javascript
    fetch("https://api.github.com/users/octocat")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.json(); // Conversion de la réponse en JSON
        })
        .then((data) => {
            console.log("Données récupérées :", data); // Traitement des données
        })
        .catch((error) => {
            console.error("Erreur :", error); // Gestion des erreurs
        });
    ```

-   **Exemple avec options:**

    ```javascript
    fetch("https://example.com/api/resource", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer MY_TOKEN",
        },
        body: JSON.stringify({ title: "Learn Fetch", done: true }),
        mode: "cors",
        credentials: "include",
    });
    ```

-   **RQ:** **Points importants sur Fetch API:**

    -   **Pas de rejet automatique pour les erreurs HTTP :** Si le serveur retourne un statut 404 ou 500, Fetch ne rejette pas la Promise. Il faut vérifier `response.ok`.

    -   **Pas de prise en charge directe de la progression :** Contrairement à `XMLHttpRequest`, Fetch ne permet pas de suivre directement la progression d'une requête.

    -   **CORS (Cross-Origin Resource Sharing) :** Fetch respecte les règles CORS. Si le serveur cible ne configure pas les en-têtes CORS, les requêtes seront bloquées.

## 2. **Objet `Response`**

-   L'objet `Response` contient des informations sur la réponse HTTP :

    -   **`response.ok`** : Retourne `true` si le statut HTTP est entre 200 et 299.
    -   **`response.status`** : Le statut HTTP de la réponse (ex. : 200, 404, etc.).
    -   **`response.json()`** : Lit et convertit la réponse en JSON (Promise).
    -   **`response.text()`** : Lit et retourne la réponse en texte brut.
    -   **`response.blob()`** : Récupère la réponse sous forme de blob (fichiers binaires).
