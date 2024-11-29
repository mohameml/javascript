# cour 41 : **Request && Response:**

## 1. **HTTP Request (Demande)**

-   **Définition** :

    > Une requête envoyée par un client (navigateur, application) à un serveur web pour obtenir des informations ou effectuer une action.

-   **Structure principale** :

    -   **Méthode** : Type de requête (GET, POST, PUT, DELETE, etc.).
    -   **URL** : L’adresse de la ressource demandée.
    -   **En-têtes** : Métadonnées supplémentaires sur la requête (exemple : type de contenu, authentification).
    -   **Corps (Body)** : Contenu envoyé avec la requête, souvent pour POST ou PUT.

-   **Exemple de requête HTTP (POST)** :

    ```
    POST /api/users HTTP/1.1
    Host: example.com
    Content-Type: application/json

    {
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
    ```

## 2. **HTTP Response (Réponse)**

-   **Définition** :

    > La réponse d’un serveur web suite à une requête HTTP. Elle contient les informations demandées ou un statut expliquant le résultat.

-   **Structure principale** :

    -   **Code de statut** : Indique le succès ou l’échec de la requête.
    -   **En-têtes** : Métadonnées sur la réponse (type de contenu, longueur, etc.).
    -   **Corps (Body)** : Les données renvoyées (HTML, JSON, etc.).

-   **Exemple de réponse HTTP (200 OK)** :

    ```
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
      "id": 123,
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
    ```

## 3. **HTTP Status Codes (Codes de statut HTTP)**

> Les codes de statut sont divisés en 5 catégories principales :

-   **1xx : Informations**

    -   **100 Continue** : Le serveur a reçu les en-têtes et attend le corps de la requête.

-   **2xx : Succès**

    -   **200 OK** : La requête a réussi.
        -   Exemple : Récupération réussie d’un utilisateur.
    -   **201 Created** : Une nouvelle ressource a été créée.
        -   Exemple : Création d’un utilisateur via POST.
    -   **204 No Content** : Requête réussie, mais aucune donnée à renvoyer.
        -   Exemple : Suppression d’une ressource.

-   **3xx : Redirection**

    -   **301 Moved Permanently** : L’URL a été déplacée définitivement.
        -   Exemple : Redirection vers une nouvelle URL.
    -   **302 Found** : La ressource a été temporairement déplacée.
        -   Exemple : Une page est en maintenance.

-   **4xx : Erreurs client**

    -   **400 Bad Request** : La requête est mal formée.
        -   Exemple : Envoi d’un JSON invalide.
    -   **401 Unauthorized** : Authentification requise.
        -   Exemple : Token d’accès manquant.
    -   **403 Forbidden** : Accès refusé malgré une authentification valide.
        -   Exemple : Tentative d’accès à une ressource protégée.
    -   **404 Not Found** : La ressource demandée est introuvable.
        -   Exemple : URL inexistante.
    -   **429 Too Many Requests** : Trop de requêtes envoyées en peu de temps.

-   **5xx : Erreurs serveur**

    -   **500 Internal Server Error** : Erreur générique du serveur.
        -   Exemple : Problème dans le code du serveur.
    -   **502 Bad Gateway** : Le serveur proxy a reçu une réponse invalide.
        -   Exemple : Problème avec un serveur tiers.
    -   **503 Service Unavailable** : Le serveur est temporairement indisponible.
        -   Exemple : Maintenance en cours.
    -   **504 Gateway Timeout** : Délai d’attente dépassé entre deux serveurs.

## 4. **RedyState:**

-   **Définition:**

    > La propriété **`readyState`** est utilisée pour vérifier l’état d’un objet ou d’une opération en cours, en particulier dans le contexte d’une requête HTTP avec **`XMLHttpRequest`** .

-   **`readyState` pour `XMLHttpRequest`**

    Dans le cas de **requêtes AJAX** avec `XMLHttpRequest`, la propriété `readyState` prend des valeurs de 0 à 4 pour indiquer l’état de la requête.

    | Valeur | État                 | Description                                                                               |
    | ------ | -------------------- | ----------------------------------------------------------------------------------------- |
    | `0`    | **UNSENT**           | L’objet a été créé, mais la méthode `open()` n’a pas encore été appelée.                  |
    | `1`    | **OPENED**           | La méthode `open()` a été appelée, mais la requête n’a pas encore été envoyée (`send()`). |
    | `2`    | **HEADERS_RECEIVED** | La requête a été envoyée et le serveur a commencé à renvoyer les en-têtes de la réponse.  |
    | `3`    | **LOADING**          | Le corps de la réponse est en cours de réception.                                         |
    | `4`    | **DONE**             | La requête est terminée, et la réponse est disponible.                                    |

-   **Exemple d’utilisation avec `XMLHttpRequest`**

    ```javascript
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

    xhr.onreadystatechange = function () {
        console.log(`readyState: ${xhr.readyState}`); // Affiche les étapes de la requête

        if (xhr.readyState === 4 && xhr.status === 200) {
            // Vérifie si la requête est terminée et réussie
            console.log("Réponse reçue :", JSON.parse(xhr.responseText));
        }
    };

    xhr.send();
    ```
