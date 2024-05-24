# cour 02 : **Les Événements de la Souris en JavaScript:**

- **Description:**

  > Les événements de la souris sont des interactions déclenchées par les actions de l'utilisateur avec la souris.

  - L'événement `onclick` est déclenché lorsqu'un élément est cliqué avec le bouton gauche de la souris.

  - L'événement `oncontextmenu` est déclenché lorsqu'un utilisateur clique avec le bouton droit de la souris, ouvrant le menu contextuel.

  - L'événement `onmouseenter` est déclenché lorsque le pointeur de la souris entre dans la zone d'un élément. Contrairement à `onmouseover`, il ne se déclenche pas lorsqu'on passe sur un élément enfant.

  - L'événement `onmouseleave` est déclenché lorsque le pointeur de la souris quitte la zone d'un élément. Contrairement à `onmouseout`, il ne se déclenche pas lorsqu'on quitte un élément enfant.

- **Syntaxe** :

  ```javascript
  element.nomDeEvent = function () {
    // Code à exécuter lors du clic
  };
  ```

  - `nomDeEcent` : `onclick` , `oncontextmenu` , `onmouseenter` et `onmouseleave`

- **Exemple** :

  ```JS
    let myBtn = document.getElementById("btn");

    // ============================= Mouse Events : ===================
    // onclick :
    myBtn.onclick = function () {
    console.log("Clicked !!");
    };
    // oncontextmenu :
    myBtn.oncontextmenu = function () {
    console.log("oncontextmenu !!");
    };
    // onmouseenter :
    myBtn.onmouseenter = function () {
    console.log("onmouseenter");
    };
    // onmouseleave :
    myBtn.onmouseleave = function () {
    console.log("onmouseleave ");
    };
  ```
