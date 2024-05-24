# cour 05 : **childrens DOM:**

- **Description:**

  > En JavaScript, les propriétés `children`, `childNodes`, `firstChild`, `lastChild`, `firstElementChild`, et `lastElementChild` sont utilisées pour naviguer et manipuler les enfants d'un élément DOM.

  - `children` renvoie une collection HTML des enfants éléments uniquement.

  - `childNodes` renvoie une collection de tous les noeuds enfants, y compris les éléments, les noeuds de texte et les commentaires.

  - `firstChild` et `lastChild` renvoient respectivement le premier et le dernier noeud enfant, qu'il s'agisse d'un élément, d'un noeud de texte ou d'un commentaire.

  - `firstElementChild` et `lastElementChild` renvoient respectivement le premier et le dernier enfant élément uniquement.

- **Syntaxe**

  - **children**
    ```javascript
    element.children;
    ```
  - **childNodes**
    ```javascript
    element.childNodes;
    ```
  - **firstChild**
    ```javascript
    element.firstChild;
    ```
  - **lastChild**
    ```javascript
    element.lastChild;
    ```
  - **firstElementChild**
    ```javascript
    element.firstElementChild;
    ```
  - **lastElementChild**
    ```javascript
    element.lastElementChild;
    ```

- **Exemple:**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Manipulation des enfants DOM</title>
    </head>
    <body>
      <div id="parent">
        <p>Premier paragraphe</p>
        <p>Deuxième paragraphe</p>
        <!-- Un commentaire -->
        <span>Un span</span>
      </div>

      <script src="script.js"></script>
    </body>
  </html>
  ```

  ```javascript
  const parentElement = document.getElementById("parent");

  // children
  const children = parentElement.children;
  console.log("Children:", children); // Affiche une HTMLCollection des éléments enfants (les deux <p> et <span>)

  // childNodes
  const childNodes = parentElement.childNodes;
  console.log("Child Nodes:", childNodes); // Affiche une NodeList de tous les nœuds enfants (incluant les nœuds de texte et les commentaires)

  // firstChild
  const firstChild = parentElement.firstChild;
  console.log("First Child:", firstChild); // Affiche le premier nœud enfant (souvent un nœud de texte s'il y a des espaces)

  // lastChild
  const lastChild = parentElement.lastChild;
  console.log("Last Child:", lastChild); // Affiche le dernier nœud enfant (souvent un nœud de texte s'il y a des espaces)

  // firstElementChild
  const firstElementChild = parentElement.firstElementChild;
  console.log("First Element Child:", firstElementChild); // Affiche le premier élément enfant (le premier <p>)

  // lastElementChild
  const lastElementChild = parentElement.lastElementChild;
  console.log("Last Element Child:", lastElementChild); // Affiche le dernier élément enfant (<span>)
  ```
