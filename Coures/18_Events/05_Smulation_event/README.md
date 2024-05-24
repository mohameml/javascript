# coour 05 : **les méthodes `click() , focus() et blur()`:**

- **Description:**

  > Les méthodes `click()`, `blur()`, et `focus()` en JavaScript sont couramment utilisées pour manipuler les éléments du DOM et gérer les interactions utilisateur.

  - **`click()`** : Cette méthode simule un clic sur un élément spécifié. Elle peut être utilisée pour déclencher un événement de clic de manière programmatique.

  - **`blur()`** : Cette méthode supprime le focus d'un élément. Elle est souvent utilisée pour valider les données ou masquer les éléments après qu'ils aient perdu le focus.

  - **`focus()`** : Cette méthode donne le focus à un élément, le rendant ainsi prêt à recevoir l'entrée utilisateur. Elle est couramment utilisée pour diriger l'attention de l'utilisateur vers un élément spécifique.

- **Syntaxe** :

  ```js
  element.click();
  element.blur();
  element.focus();
  ```

- **Exemple** :

  ```js
  /*
  events Simulation : 
      - click 
      - focus
      - blur
  */
  let one = document.querySelector(".one");
  let two = document.querySelector(".two");

  window.onload = function () {
    one.focus();
  };

  one.onfocus = function () {
    if (one.value.length === 1) {
      one.blur();
      two.focus();
    }
  };
  ```
