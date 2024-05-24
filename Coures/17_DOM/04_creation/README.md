# cour 04 : **Création des élements:**

## 1. **Création des élements:**

- **Description:**

  > En JavaScript, pour créer et ajouter dynamiquement des éléments au DOM, vous pouvez utiliser les méthodes suivantes : `createElement`, `createAttribute`, `createTextNode`, `createComment`, et `appendChild`.

  - `createElement` crée un nouvel élément HTML.

  - `createAttribute` crée un nouvel attribut.

  - `createTextNode` crée un nouveau noeud de texte.

  - `createComment` crée un noeud de commentaire.

  - `setAttributeNode` est utilisée pour ajouter un noeud d'attribut existant à un élément DOM.

  - `appendChild` ajoute un noeud enfant à un élément parent spécifié.

- **Syntaxe:**

  - **createElement(tagName)**
    ```javascript
    document.createElement(tagName);
    ```
  - **createAttribute(name)**
    ```javascript
    document.createAttribute(name);
    ```
  - **createTextNode(data)**
    ```javascript
    document.createTextNode(data);
    ```
  - **createComment(data)**

    ```javascript
    document.createComment(data);
    ```

  - **appendChild(node)**
    ```javascript
    parentNode.appendChild(node);
    ```

- **Exemple:**

  ```js
  // <!-- Commentaire  -->
  //<ele attr1="value" attr2-costum>Text</ele> -> puis on l'ajout à body

  let ele = document.createElement("div");
  let myAttr = document.createAttribute("data-info");
  let text = document.createTextNode("Prodcut One");
  let myComment = document.createComment("This is Div");

  ele.className = "prodcut";
  ele.appendChild(myComment);
  ele.setAttributeNode(myAttr);
  ele.setAttribute("data-test", "Testing");
  ele.appendChild(text);

  document.body.appendChild(ele);

  console.log(ele);
  ```

## 2. **DOM Cloning: La méthode `cloneNode`**

- **Description:**

  > La méthode `cloneNode` est utilisée pour créer une copie d'un noeud dans l'arborescence DOM, ainsi que de tous ses enfants, le cas échéant. Cette méthode vous permet de cloner un noeud existant avec ses attributs, ses propriétés et son contenu.

- **Syntaxe:**

  ```javascript
  var clonedNode = node.cloneNode(deep);
  ```

  - `node` : le noeud DOM que vous souhaitez cloner.
  - `clonedNode` : la copie du nœud `node` avec ses attributs, ses propriétés et son contenu.
  - `deep` (optionnel) : un booléen indiquant si la copie doit inclure également les descendants (`true`) ou non (`false`). Par défaut, `deep` est `false`.

- **Exemple:**

  ```html
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Exemple cloneNode en JavaScript</title>
    </head>
    <body>
      <div id="original">
        <p>Ceci est un paragraphe.</p>
      </div>
      <button onclick="cloneElement()">Cloner l'élément</button>

      <script>
        function cloneElement() {
          var originalNode = document.getElementById("original");
          var clonedNode = originalNode.cloneNode(true);
          clonedNode.id = "cloned";
          originalNode.parentNode.appendChild(clonedNode);
        }
      </script>
    </body>
  </html>
  ```
