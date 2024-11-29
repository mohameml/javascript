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
