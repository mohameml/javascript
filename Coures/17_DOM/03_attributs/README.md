# cour 03 : **`les attributs d'un élément DOM`:**

## 1 .**Definition:**

- **Description:**

  > En JavaScript, les attributs d'un élément DOM sont des propriétés qui fournissent des informations supplémentaires sur cet élément. Les attributs peuvent être des propriétés intégrées, comme `id`, `class`, `href`, etc., ou des attributs personnalisés définis par l'utilisateur.

- **Syntaxe:**

  ```js
  // des attributs HTML :
  let ele = document.getElementById("id1");
  ele.title = "Titre";
  ele.className = "nom-classe";

  // des  attribus particulier :
  ele.innerHTML;
  ```

- **Exemple:**

  ```js
  let myElement = document.querySelector(".js");

  console.log(myElement.className);
  console.log(myElement.innerHTML);
  console.log(myElement.textContent);
  ```

## 2. **`ìnnerHTML , textContent et innerText`:**

- **Description:**

  > `innerHTML`, `textContent`, et `innerText` sont trois propriétés couramment utilisées pour manipuler le contenu d'un élément DOM en JavaScript.

  - `innerHTML` permet de lire ou d'écrire du HTML ou du XML à l'intérieur d'un élément, ce qui inclut la possibilité d'ajouter des balises HTML.

  - `textContent` permet de lire ou d'écrire du texte brut à l'intérieur d'un élément, sans interpréter les balises HTML, ce qui est plus sécurisé et performant pour les manipulations de texte simple.

  - `innerText` est similaire à `textContent`, mais il respecte le style CSS appliqué, notamment pour les éléments masqués avec `display: none`.

- **Syntaxe:**

  - **innerHTML**
    ```javascript
    element.innerHTML;
    element.innerHTML = "nouveau contenu HTML";
    ```
  - **textContent**
    ```javascript
    element.textContent;
    element.textContent = "nouveau contenu texte";
    ```
  - **innerText**
    ```javascript
    element.innerText;
    element.innerText = "nouveau contenu texte";
    ```

- **Exemple:**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Exemple de innerHTML, textContent et innerText</title>
    </head>
    <body>
      <div id="conteneurHTML">Bonjour <strong>le monde</strong>!</div>
      <div id="conteneurText">Bonjour <strong>le monde</strong>!</div>
      <div id="conteneurInnerText">Bonjour <strong>le monde</strong>!</div>

      <script>
        const conteneurHTML = document.getElementById("conteneurHTML");
        const conteneurText = document.getElementById("conteneurText");
        const conteneurInnerText =
          document.getElementById("conteneurInnerText");

        // Utilisation de innerHTML
        console.log("innerHTML:", conteneurHTML.innerHTML); // Affiche: Bonjour <strong>le monde</strong>!
        conteneurHTML.innerHTML = "Salut <em>tout le monde</em>!";
        console.log("nouveau innerHTML:", conteneurHTML.innerHTML); // Affiche: Salut <em>tout le monde</em>!

        // Utilisation de textContent
        console.log("textContent:", conteneurText.textContent); // Affiche: Bonjour le monde!
        conteneurText.textContent = "Salut tout le monde!";
        console.log("nouveau textContent:", conteneurText.textContent); // Affiche: Salut tout le monde!

        // Utilisation de innerText
        console.log("innerText:", conteneurInnerText.innerText); // Affiche: Bonjour le monde!
        conteneurInnerText.innerText = "Salut tout le monde!";
        console.log("nouveau innerText:", conteneurInnerText.innerText); // Affiche: Salut tout le monde!
      </script>
    </body>
  </html>
  ```

## 3. **`methodes pour manipuler les attributs`:**

- **Description:**

  > Les méthodes `getAttribute`, `setAttribute`, `removeAttribute`, `hasAttribute` et `hasAttributes` sont utilisées pour manipuler les attributs des éléments DOM en JavaScript.

  - `getAttribute` récupère la valeur d'un attribut spécifié.

  - `setAttribute` définit ou modifie la valeur d'un attribut.

  - `removeAttribute` supprime un attribut d'un élément.

  - `hasAttribute` vérifie si un attribut existe sur un élément.

  - `hasAttributes` détermine si un élément possède au moins un attribut.

- **Syntaxe:**

  - **getAttribute(name)**
    ```javascript
    element.getAttribute(name);
    ```
  - **setAttribute(name, value)**
    ```javascript
    element.setAttribute(name, value);
    ```
  - **removeAttribute(name)**
    ```javascript
    element.removeAttribute(name);
    ```
  - **hasAttribute(name)**
    ```javascript
    element.hasAttribute(name);
    ```
  - **hasAttributes()**
    ```javascript
    element.hasAttributes();
    ```

- **Exemple**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Exemple d'attributs DOM</title>
    </head>
    <body>
      <div id="monElement" class="exemple" data-info="info"></div>

      <script>
        const element = document.getElementById("monElement");

        // Utilisation de getAttribute
        const classe = element.getAttribute("class");
        console.log("Classe:", classe); // Affiche: Classe: exemple

        // Utilisation de setAttribute
        element.setAttribute("data-info", "nouvelle info");
        console.log("Nouvelle data-info:", element.getAttribute("data-info")); // Affiche: Nouvelle data-info: nouvelle info

        // Utilisation de removeAttribute
        element.removeAttribute("class");
        console.log("Classe après suppression:", element.getAttribute("class")); // Affiche: Classe après suppression: null

        // Utilisation de hasAttribute
        const aDataInfo = element.hasAttribute("data-info");
        console.log("A data-info:", aDataInfo); // Affiche: A data-info: true

        // Utilisation de hasAttributes
        const aDesAttributs = element.hasAttributes();
        console.log("A des attributs:", aDesAttributs); // Affiche: A des attributs: true
      </script>
    </body>
  </html>
  ```
