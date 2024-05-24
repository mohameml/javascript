# cour 06 : **`classList`:**

- **Description:**

  > La propriété `classList` en JavaScript permet de manipuler les classes CSS d'un élément de manière pratique et efficace, offrant plusieurs méthodes utiles .

  - `contains` vérifie si une classe existe dans la liste de classes.

  - `item` renvoie la classe à une position spécifique dans la liste.

  - `add` ajoute une ou plusieurs classes.

  - `remove` supprime une ou plusieurs classes.

  - `toggle` ajoute une classe si elle n'existe pas et la supprime si elle existe.

  - `length` renvoie le nombre de classes dans la liste.

- **Syntaxe** :

  ```js
  element.classList;
  element.classList.length;
  element.classList.contains("class");
  element.classList.item(index);
  element.classList.add("class1", "class2");
  element.classList.remove("class1", "class2");
  element.classList.toggle("class");
  ```

- **Exemple** :

  ```javascript
  //
  let div = document.getElementById("my-div");
  console.log(div);
  console.log(div.className);
  console.log(div.classList);
  console.log(div.classList.length);
  console.log(div.classList.contains("one"));
  console.log(div.classList.item(1));
  console.log(div.classList.add("four", "five"));
  ```
