# cour 07 : **Style**

## 1. **L'attribut `style` d'un objet DOM en JavaScript:**

- **Description:**

  > L'attribut `style` d'un objet DOM en JavaScript permet d'accéder et de manipuler directement les styles CSS d'un élément HTML. Cet attribut est un objet de type `CSSStyleDeclaration` qui contient les propriétés CSS en camelCase.

- **Syntaxe:**

  Pour accéder ou modifier les styles CSS d'un élément via l'attribut `style`, vous utilisez la syntaxe suivante :

  ```javascript
  element.style.propertyName = value;
  ```

  - `element` : une référence à l'élément DOM dont vous souhaitez modifier les styles.
  - `propertyName` : le nom de la propriété CSS en camelCase (par exemple, `backgroundColor` au lieu de `background-color`).
  - `value` : la valeur que vous souhaitez attribuer à la propriété CSS (par exemple, `"red"`, `"20px"`, etc.).

- **Exemple:**

  ```JS
  let div = document.querySelector("div");

  // style
  div.style.color = "green";
  div.style.border = "5px solid #eee";
  div.style.borderRadius = "10px";
  div.style.boxShadow = "0 0 10px rgba(0 , 0 , 0 , .3)";

  ```

## 2. **L'attribut `cssText` de `style` dans le DOM en JavaScript:**

- **Description:**

  > L'attribut `cssText` permet de définir ou de récupérer l'ensemble des styles d'un élément en utilisant une chaîne de caractères unique. Cela peut être utile pour appliquer plusieurs styles en une seule opération, au lieu de définir chaque propriété de style individuellement.

- **Syntaxe:**

  ```javascript
  element.style.cssText = "css-properties";
  ```

  - `element` : une référence à l'élément DOM dont vous souhaitez modifier les styles.
  - `"css-properties"` : une chaîne de caractères contenant les propriétés CSS et leurs valeurs.

- **Exemple:**

  ```JS
  let div = document.querySelector("div");
  // style avce cssText
  div.style.cssText = "color : red ; font-weight : bold";
  ```

## 3. **Les méthodes `removeProperty` et `setProperty`**

- **Description:**

  > Les méthodes `removeProperty` et `setProperty` de l'objet `style` permettent une manipulation fine et précise des propriétés CSS d'un élément DOM.

  - **`setProperty`** : Cette méthode permet de définir ou de modifier une propriété CSS avec une valeur spécifique.
  - **`removeProperty`** : Cette méthode permet de supprimer une propriété CSS d'un élément.

- **Syntaxe:**

  - **`setProperty`:**

    ```javascript
    element.style.setProperty(propertyName, value, priority);
    ```

    - `propertyName` : le nom de la propriété CSS à définir (en notation kebab-case, par exemple, `"background-color"`).
    - `value` : la valeur de la propriété CSS (par exemple, `"red"`).
    - `priority` (optionnel) : la priorité de la propriété CSS, typiquement `"important"` si vous souhaitez utiliser `!important`.

  - **`removeProperty`:**

    ```javascript
    element.style.removeProperty(propertyName);
    ```

    - `propertyName` : le nom de la propriété CSS à supprimer (en notation kebab-case, par exemple, `"background-color"`).

- **Exemple:**

  ```JS
  let div = document.querySelector("div");

  div.style.removeProperty("font-weight");
  div.style.setProperty("font-weight", "bold");
  ```

## 4. **L'attribut `styleSheets` du DOM avec `cssRules`**

- **Description:**

  > L'attribut `styleSheets` de l'objet `document` donne accès à une liste de tous les objets `StyleSheet` qui représentent les feuilles de style (internes et externes) attachées au document. Chaque objet `StyleSheet` contient une liste de règles CSS (`cssRules`).

- **Syntaxe:**

  - **Accéder aux feuilles de style:**

    ```javascript
    var styleSheets = document.styleSheets;
    ```

  - **Accéder aux règles CSS d'une feuille de style:**

    ```javascript
    var rules = document.styleSheets[index].cssRules;
    ```

    - `index` : l'indice de la feuille de style dans la collection `styleSheets`.

  - **Ajouter une règle CSS:**

    ```javascript
    document.styleSheets[index].insertRule("selector { style }", position);
    ```

    - `selector` : le sélecteur CSS (par exemple, `"body"`).
    - `style` : les déclarations de style CSS (par exemple, `"background-color: blue;"`).
    - `position` (optionnel) : l'indice où la règle doit être insérée.

  - **Supprimer une règle CSS:**

    ```javascript
    document.styleSheets[index].deleteRule(position);
    ```

    - `position` : l'indice de la règle à supprimer dans la liste `cssRules`.

- **Exemple:**

  ```html
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Exemple styleSheets et cssRules en JavaScript</title>
      <style>
        .example {
          color: red;
        }
      </style>
    </head>
    <body>
      <div class="example">Hello, world!</div>
      <button onclick="addRule()">Ajouter Règle</button>
      <button onclick="removeRule()">Supprimer Règle</button>

      <script>
        function addRule() {
          var sheet = document.styleSheets[0];
          var rule = ".example { color: blue; }";
          sheet.insertRule(rule, sheet.cssRules.length);
        }

        function removeRule() {
          var sheet = document.styleSheets[0];
          for (var i = 0; i < sheet.cssRules.length; i++) {
            if (sheet.cssRules[i].selectorText === ".example") {
              sheet.deleteRule(i);
              break;
            }
          }
        }
      </script>
    </body>
  </html>
  ```
