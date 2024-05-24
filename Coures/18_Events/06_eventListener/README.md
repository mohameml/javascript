# cour 6 : **La méthode `addEventListener`**

- **Description:**

  > La méthode `addEventListener` est utilisée pour attacher un gestionnaire d'événements à un élément du DOM. Cette méthode permet de spécifier une fonction à exécuter lorsque l'événement spécifié se produit sur l'élément ciblé. Elle offre un moyen flexible de gérer les événements et permet d'ajouter plusieurs gestionnaires d'événements pour le même type d'événement sur un même élément.

- **Syntaxe:**

  ```javascript
  element.addEventListener(event, handler, [options]);
  ```

  - `element` : une référence à l'élément DOM auquel vous souhaitez attacher l'événement.
  - `event` : une chaîne représentant le type d'événement (par exemple, 'click', 'mouseover', 'keydown', etc.).
  - `handler` : la fonction qui sera appelée lorsque l'événement se produira.

- **Exemple 1:**

  ```html
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Exemple addEventListener en JavaScript</title>
    </head>
    <body>
      <button id="myButton">Cliquez-moi</button>
      <p id="message"></p>

      <script>
        // Récupération de l'élément bouton
        var button = document.getElementById("myButton");
        // Définition du gestionnaire d'événement
        function handleClick() {
          var message = document.getElementById("message");
          message.textContent = "Bouton cliqué !";
        }
        // Attachement du gestionnaire d'événement
        button.addEventListener("click", handleClick);
        button.addEventListener("click", function () {
          console.log("click");
        });
      </script>
    </body>
  </html>
  ```

- **Exemple 2:**

  ```JS
   document.addEventListener("click" , function (e) {
    if(e.target.className === "nom") {
        // faire une action
    }
   })

  ```
