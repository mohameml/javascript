# cour 40: **AJAX**

## 1. **Introduction:**

### 1.1 **Définition:**

-   **AJAX** (Asynchronous JavaScript and XML) est une technique utilisée en développement web pour créer des applications interactives. Elle permet de charger des données en arrière-plan sans avoir à recharger toute la page. En utilisant AJAX, une page web peut récupérer des informations depuis un serveur ou envoyer des informations sans perturber l'expérience de l'utilisateur, ce qui permet des mises à jour de contenu plus rapides et plus fluides.

-   **les principaux composants d'AJAX :**

    1. **JavaScript** : Le langage utilisé pour exécuter des requêtes asynchrones et manipuler la page web sans la recharger.
    2. **XMLHttpRequest (XHR)** : Un objet JavaScript permettant de faire des requêtes HTTP vers un serveur.
    3. **JSON (ou XML)** : Format souvent utilisé pour échanger des données entre le client et le serveur. De nos jours, JSON est plus couramment utilisé que XML.
    4. **DOM (Document Object Model)** : Utilisé pour mettre à jour dynamiquement le contenu de la page web en fonction des données reçues du serveur.

-   L'objectif d'AJAX est de rendre les applications web plus réactives, en permettant de charger ou d'envoyer des données sans interrompre l'expérience utilisateur. Cela peut se traduire par des actions comme l'auto-complétion de formulaires, la mise à jour de contenu en temps réel, ou la navigation dans une application web sans rechargements complets de la page.

### 1.2 .**Exemple:Une simple requête AJAX avec JavaScript**

> Imaginons que vous avez un serveur qui retourne un message ou des données au format JSON. Voici un exemple où on récupère un message du serveur et on l'affiche dans une `<div>` sans recharger la page.

-   **HTML :**

    ```html
    <!DOCTYPE html>
    <html lang="fr">
        <head>
            <meta charset="UTF-8" />
            <title>Exemple AJAX</title>
        </head>
        <body>
            <h1>Exemple de requête AJAX</h1>
            <button id="loadMessage">Charger le message</button>
            <div id="message"></div>

            <script src="script.js"></script>
        </body>
    </html>
    ```

-   **JavaScript (script.js) :**

    ```javascript
    document
        .getElementById("loadMessage")
        .addEventListener("click", function () {
            // Crée un objet XMLHttpRequest
            var xhr = new XMLHttpRequest();

            // Ouvre une requête GET vers le serveur (ici on suppose que le serveur répond à cette URL)
            xhr.open("GET", "https://example.com/message", true);

            // Définir ce qu'il faut faire lorsque la réponse arrive
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // Lorsque la réponse est reçue et est OK, on met à jour la page
                    document.getElementById("message").innerText =
                        xhr.responseText;
                } else {
                    // Si la réponse n'est pas OK (exemple : erreur 404)
                    document.getElementById("message").innerText =
                        "Erreur de chargement du message.";
                }
            };

            // Envoie la requête au serveur
            xhr.send();
        });
    ```

## 2. **XMLHttpRequest (XHR):**

-   **Description**

    > , La classe **`XMLHttpRequest`** est une API JavaScript permettant d’interagir avec des serveurs web via HTTP. Elle est utilisée pour envoyer des requêtes et recevoir des réponses de manière asynchrone (AJAX) ou synchrone. Bien que modernisée par **`fetch`**, elle reste largement utilisée.

-   **Méthodes:**

| **Méthode**                 | **Description**                                                     | **Syntaxe**                           |
| --------------------------- | ------------------------------------------------------------------- | ------------------------------------- |
| **`open`**                  | Initialise une requête HTTP (type, URL, mode asynchrone/synchrone). | `xhr.open(method, url, async)`        |
| **`send`**                  | Envoie la requête au serveur, avec un éventuel corps.               | `xhr.send(body)`                      |
| **`setRequestHeader`**      | Définit des en-têtes HTTP personnalisés.                            | `xhr.setRequestHeader(header, value)` |
| **`abort`**                 | Annule la requête en cours.                                         | `xhr.abort()`                         |
| **`getResponseHeader`**     | Récupère la valeur d’un en-tête HTTP spécifique.                    | `xhr.getResponseHeader(header)`       |
| **`getAllResponseHeaders`** | Récupère tous les en-têtes HTTP sous forme de chaîne.               | `xhr.getAllResponseHeaders()`         |

-   **Propriétés :`**

| **Propriété**            | **Description**                                                                 |
| ------------------------ | ------------------------------------------------------------------------------- |
| **`readyState`**         | Indique l’état actuel de la requête HTTP (`0` à `4`).                           |
| **`response`**           | La réponse brute (peut être JSON, texte, etc.).                                 |
| **`responseText`**       | La réponse sous forme de texte (disponible uniquement pour des réponses texte). |
| **`responseXML`**        | La réponse sous forme de document XML (si le serveur renvoie du XML).           |
| **`status`**             | Le code de statut HTTP renvoyé par le serveur (ex. : `200` pour OK).            |
| **`statusText`**         | Le texte associé au code de statut (ex. : `OK` pour `200`).                     |
| **`onreadystatechange`** | Un gestionnaire d’événement appelé à chaque changement de `readyState`.         |

-   **Exemple : Requête GET**

    Voici un exemple complet qui envoie une requête HTTP GET à un serveur et affiche la réponse dans la console :

    ```javascript
    // Crée une nouvelle instance de XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configure la requête HTTP
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true); // Méthode, URL, et asynchrone=true
    // Envoie la requête
    xhr.send();

    // Gestionnaire d'événement pour suivre les changements d'état
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            // Vérifie si la requête est terminée
            if (xhr.status === 200) {
                // Vérifie si la requête a réussi
                console.log("Réponse reçue :", xhr.responseText);
            } else {
                console.error(`Erreur ${xhr.status}: ${xhr.statusText}`);
            }
        }
    };
    ```
