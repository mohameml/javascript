# cour 9 : **DOM Traversing:**

## 1. **Les attributs `nextSibling` et `previousSibling`:**

- **Description:**

  > Les attributs `nextSibling` et `previousSibling` sont utilisés pour accéder aux noeuds adjacents dans l'arborescence DOM. Ces attributs permettent de naviguer entre les frères d'un nœud, c'est-à-dire les noeuds qui partagent le même parent.

- **Syntaxe:**

  - **`nextSibling`:**

    ```javascript
    var nextSiblingNode = element.nextSibling;
    ```

    - `element` : une référence à l'élément DOM dont vous souhaitez obtenir le nœud suivant.
    - `nextSiblingNode` : le nœud suivant par rapport à `element`, ou `null` si `element` est le dernier nœud.

    - **`previousSibling`:**

      ```javascript
      var previousSiblingNode = element.previousSibling;
      ```

      - `element` : une référence à l'élément DOM dont vous souhaitez obtenir le nœud précédent.
      - `previousSiblingNode` : le nœud précédent par rapport à `element`, ou `null` si `element` est le premier nœud.

- **Exemple:**

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemple nextSibling et previousSibling en JavaScript</title>
  </head>
  <body>
    <div id="parent">
      <p id="first">Premier paragraphe</p>
      <!-- commentaire -->
      <p id="second">Deuxième paragraphe</p>
      <p id="third">Troisième paragraphe</p>
    </div>
    <script>
      let p = document.getElementById("first");
      p..nextSibling() ; # <!-- commentaire -->
    </script>
  </body>
</html>
```

## 2. **Les attributs `nextElementSibling` et `previousElementSibling`:**

- **Description:**

  > Les attributs `nextElementSibling` et `previousElementSibling` sont utilisés pour accéder directement aux noeuds élément suivants et précédents d'un noeud dans l'arborescence DOM. Contrairement aux attributs `nextSibling` et `previousSibling`, ces attributs ignorent les noeuds de type texte et commentaires, se concentrant uniquement sur les éléments.

- **Syntaxe:**

  - **`nextElementSibling`:**

    ```javascript
    var nextElement = element.nextElementSibling;
    ```

    - `element` : une référence à l'élément DOM dont vous souhaitez obtenir l'élément suivant.
    - `nextElement` : l'élément suivant par rapport à `element`, ou `null` si `element` est le dernier élément enfant de son parent.

    - **`previousElementSibling`:**

      ```javascript
      var previousElement = element.previousElementSibling;
      ```

      - `element` : une référence à l'élément DOM dont vous souhaitez obtenir l'élément précédent.
      - `previousElement` : l'élément précédent par rapport à `element`, ou `null` si `element` est le premier élément enfant de son parent.

## 3. **L'attribut `parentElement`:**

- **Description:**

  > L'attribut `parentElement` est utilisé pour accéder à l'élément parent direct d'un nœud dans l'arborescence DOM.

- **Syntaxe:**

  ```javascript
  var parent = element.parentElement;
  ```

  - `element` : une référence à l'élément DOM dont vous souhaitez obtenir l'élément parent.
  - `parent` : l'élément parent de `element`, ou `null` si `element` n'a pas de parent élément.

- **Exemple:**

  ```html
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Exemple parentElement en JavaScript</title>
    </head>
    <body>
      <div id="parent">
        <p id="child">Ceci est un paragraphe.</p>
      </div>
      <button onclick="highlightParent()">Mettre en évidence le parent</button>

      <script>
        function highlightParent() {
          var child = document.getElementById("child");
          var parent = child.parentElement;
          if (parent) {
            parent.style.backgroundColor = "yellow";
          }
        }
      </script>
    </body>
  </html>
  ```
