# cour 01 : **Introduction:**

## 1. **Definition:**

> Les événements en JavaScript sont des actions ou des occurrences qui se produisent dans le navigateur et qui peuvent être détectées et traitées par votre code. Ces événements peuvent être déclenchés par les utilisateurs (comme des clics de souris, des frappes de clavier, ou des mouvements de souris) ou par le système (comme le chargement d'une page ou la fin d'une animation).

## 2. **Types d'Événements:**

Il existe de nombreux types d'événements en JavaScript. Voici quelques-uns des plus courants :

1. **Événements de souris** :

   - `click` : Déclenché lorsqu'un élément est cliqué.
   - `dblclick` : Déclenché lorsqu'un élément est double-cliqué.
   - `mouseover` : Déclenché lorsque la souris passe au-dessus d'un élément.
   - `mouseout` : Déclenché lorsque la souris quitte un élément.

2. **Événements de clavier** :

   - `keydown` : Déclenché lorsqu'une touche est enfoncée.
   - `keyup` : Déclenché lorsqu'une touche est relâchée.
   - `keypress` : Déclenché lorsqu'une touche est enfoncée et relâchée.

3. **Événements de formulaire** :

   - `submit` : Déclenché lorsqu'un formulaire est soumis.
   - `change` : Déclenché lorsqu'une valeur d'un élément de formulaire change.
   - `focus` : Déclenché lorsqu'un élément de formulaire reçoit le focus.

4. **Événements de fenêtre** :

   - `load` : Déclenché lorsque la page et tous ses éléments sont complètement chargés.
   - `resize` : Déclenché lorsque la taille de la fenêtre du navigateur change.
   - `scroll` : Déclenché lorsqu'il y a un défilement dans la fenêtre du navigateur.

## 3. **Gestion des Événements:**

Pour gérer les événements en JavaScript, vous devez ajouter des écouteurs d'événements aux éléments HTML. Vous pouvez le faire de plusieurs manières :

1. **Utilisation des attributs HTML** :
   Vous pouvez directement ajouter des gestionnaires d'événements dans les balises HTML en utilisant des attributs comme `onclick`, `onmouseover`, etc.

   ```html
   <button onclick="alert('Bouton cliqué!')">Cliquez-moi</button>
   ```

2. **Utilisation de la méthode `addEventListener`** :
   C'est la méthode recommandée car elle sépare le JavaScript du HTML et permet d'ajouter plusieurs gestionnaires pour le même événement.

   ```javascript
   document.getElementById("myButton").addEventListener("click", function () {
     alert("Bouton cliqué!");
   });
   ```

3. **Utilisation de propriétés d'événements** :
   Vous pouvez assigner des fonctions aux propriétés d'événements des éléments.

   ```javascript
   var myButton = document.getElementById("myButton");
   myButton.onclick = function () {
     alert("Bouton cliqué!");
   };
   ```

## 4. **Exemple Complet:**

Voici un exemple complet qui montre comment ajouter des écouteurs d'événements pour un bouton et un champ de texte :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gestion des Événements</title>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        var button = document.getElementById("myButton");
        var input = document.getElementById("myInput");

        button.addEventListener("click", function () {
          alert("Bouton cliqué!");
        });

        input.addEventListener("keyup", function (event) {
          console.log("Touche pressée : " + event.key);
        });
      });
    </script>
  </head>
  <body>
    <button id="myButton">Cliquez-moi</button>
    <input id="myInput" type="text" placeholder="Tapez quelque chose..." />
  </body>
</html>
```
