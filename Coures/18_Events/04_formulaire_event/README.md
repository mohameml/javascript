# cour 04 : **Les Événements de Formulaire en JavaScript:**

- **Description:**

  > Les événements de formulaire en JavaScript sont des interactions déclenchées par les actions de l'utilisateur sur des éléments de formulaire, comme les champs de saisie et les boutons de soumission.

  - L'événement `onfocus` est déclenché lorsqu'un élément de formulaire (comme un champ de texte) reçoit le focus.

  - L'événement `onblur` est déclenché lorsqu'un élément de formulaire perd le focus.

  - L'événement `onsubmit` est déclenché lorsqu'un formulaire est soumis.

- **Syntaxe** :

  ```javascript
  element.nomDeEvent = function () {
    // Code à exécuter lors de l'événement
  };
  ```

  - `nomDeEvent` : `onfocus`, `onblur`, `onsubmit`

- **Exemple** :

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Événements de Formulaire</title>
      <script>
        // ============================= Form Events : ===================

        // onfocus :
        document.getElementById("myInput").onfocus = function () {
          console.log("Champ de texte a reçu le focus !");
        };

        // onblur :
        document.getElementById("myInput").onblur = function () {
          console.log("Champ de texte a perdu le focus !");
        };

        // onsubmit :
        document.getElementById("myForm").onsubmit = function (event) {
          console.log("Formulaire soumis !");
        };
      </script>
    </head>
    <body>
      <form id="myForm">
        <input id="myInput" type="text" placeholder="Tapez quelque chose..." />
        <button type="submit">Soumettre</button>
      </form>
    </body>
  </html>
  ```
