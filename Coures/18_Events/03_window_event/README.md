# cour 03 : **Les Événements de Fenêtre `window` en JavaScript:**

- **Description:**

  > Les événements de fenêtre en JavaScript permettent de réagir aux changements d'état de la fenêtre du navigateur, tels que le chargement de la page, le redimensionnement de la fenêtre, ou le défilement de la page.

  - L'événement `onload` est déclenché lorsque la page et tous ses éléments (comme les images, les scripts, etc.) sont complètement chargés.

  - L'événement `onscroll` est déclenché lorsque l'utilisateur fait défiler la page.

  - L'événement `onresize` est déclenché lorsque la taille de la fenêtre du navigateur change.

- **Syntaxe** :

  ```javascript
  window.nomDeEvent = function () {
    // Code à exécuter lors de l'événement
  };
  ```

  - `nomDeEvent` : `onload`, `onscroll`, `onresize`

- **Exemple** :

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Événements de Fenêtre</title>
      <script>
        // ============================= Window Events : ===================

        // onload :
        window.onload = function () {
          console.log("Page entièrement chargée !");
        };

        // onscroll :
        window.onscroll = function () {
          console.log(
            "Page défilée ! Hauteur défilée : " + window.scrollY + "px"
          );
        };

        // onresize :
        window.onresize = function () {
          console.log(
            "Fenêtre redimensionnée ! Nouvelle taille : " +
              window.innerWidth +
              "x" +
              window.innerHeight
          );
        };
      </script>
    </head>
    <body>
      <div style="height: 2000px;">
        Faites défiler cette page pour déclencher l'événement de défilement.
      </div>
    </body>
  </html>
  ```
