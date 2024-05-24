# cour 8 : **Ajouter des Éléments au DOM**

## 1. **Les méthodes `before` et `after`:**

- **Description:**

  > Les méthodes `before` et `after` sont utilisées pour insérer des éléments ou du contenu juste avant ou juste après un élément spécifié dans le DOM.

- **Syntaxe:**

  - **`before`:**

    ```javascript
    element.before(newNode);
    element.before(newNode1, newNode2, ...);
    ```

    - `element` : une référence à l'élément DOM avant lequel vous souhaitez insérer le nouveau contenu.
    - `newNode` : le contenu à insérer, qui peut être un nœud (élément, texte, etc.) ou une chaîne de caractères (qui sera interprétée comme du texte).

  - **`after`:**

    ```javascript
    element.after(newNode);
    element.after(newNode1, newNode2, ...);
    ```

    - `element` : une référence à l'élément DOM après lequel vous souhaitez insérer le nouveau contenu.
    - `newNode` : le contenu à insérer, qui peut être un nœud ou une chaîne de caractères.

- **Exemple:**

  ```html
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Exemple before et after en JavaScript</title>
    </head>
    <body>
      <div id="monElement">Hello, world!</div>
      <button onclick="addBefore()">Ajouter avant</button>
      <button onclick="addAfter()">Ajouter après</button>

      <script>
        function addBefore() {
          var element = document.getElementById("monElement");
          var newElement = document.createElement("div");
          newElement.textContent = "Avant Hello, world!";
          element.before(newElement);
        }

        function addAfter() {
          var element = document.getElementById("monElement");
          var newElement = document.createElement("div");
          newElement.textContent = "Après Hello, world!";
          element.after(newElement);
        }
      </script>
    </body>
  </html>
  ```

## 2. **Les méthodes `append` et `prepend`:**

- **Description:**

  > Les méthodes `append` et `prepend` sont utilisées pour insérer des nœuds ou des chaînes de caractères à la fin ou au début d'un élément spécifié, respectivement.

- **Syntaxe:**

  - **`append`:**

    ```javascript
    element.append(newNode);
    element.append(newNode1, newNode2, ...);
    ```

    - `element` : une référence à l'élément DOM dans lequel vous souhaitez insérer le nouveau contenu.
    - `newNode` : le contenu à insérer, qui peut être un nœud (élément, texte, etc.) ou une chaîne de caractères (qui sera interprétée comme du texte).

  - **`prepend`:**

    ```javascript
    element.prepend(newNode);
    element.prepend(newNode1, newNode2, ...);
    ```

    - `element` : une référence à l'élément DOM dans lequel vous souhaitez insérer le nouveau contenu.
    - `newNode` : le contenu à insérer, qui peut être un nœud ou une chaîne de caractères.

- **Exemple:**

  ```html
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Exemple append et prepend en JavaScript</title>
    </head>
    <body>
      <div id="monElement">Hello, world!</div>
      <button onclick="appendElement()">Ajouter à la fin</button>
      <button onclick="prependElement()">Ajouter au début</button>

      <script>
        function appendElement() {
          var element = document.getElementById("monElement");
          var newElement = document.createElement("div");
          newElement.textContent = "Ajouté à la fin!";
          element.append(newElement);
        }

        function prependElement() {
          var element = document.getElementById("monElement");
          var newElement = document.createElement("div");
          newElement.textContent = "Ajouté au début!";
          element.prepend(newElement);
        }
      </script>
    </body>
  </html>
  ```

## 3. **La méthode `remove`:**

- **Description:**

  > La méthode `remove` est utilisée pour supprimer un élément du DOM. Cette méthode permet de retirer un élément et tous ses descendants de la structure du document.

- **Syntaxe:**

  ```javascript
  element.remove();
  ```

  - `element` : une référence à l'élément DOM que vous souhaitez supprimer.

- **Exemple:**

  ```html
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Exemple de méthode remove en JavaScript</title>
    </head>
    <body>
      <div id="monElement">Hello, world!</div>
      <button onclick="removeElement()">Supprimer l'élément</button>

      <script>
        function removeElement() {
          var element = document.getElementById("monElement");
          element.remove();
        }
      </script>
    </body>
  </html>
  ```
