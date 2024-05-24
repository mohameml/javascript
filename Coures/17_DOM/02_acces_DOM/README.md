# cour 2 : **`accéder à un élément HTML`:**

1. **getElementById** :

   - **Description** : Cette méthode permet de récupérer un élément du DOM en fonction de son ID unique.
   - **Syntaxe** : `document.getElementById(id)`
   - **Type de retour** : Retourne l'élément correspondant ou `null` s'il n'est pas trouvé.
   - **Exemple** :
     ```javascript
     var element = document.getElementById("myElement");
     ```

2. **getElementsByTagName** :

   - **Description** : Cette méthode récupère une liste d'éléments du DOM en fonction de leur nom de balise.
   - **Syntaxe** : `document.getElementsByTagName(tagName)`
   - **Type de retour** : Retourne une liste d'éléments correspondants sous forme de NodeList.
   - **Exemple** :
     ```javascript
     var paragraphs = document.getElementsByTagName("p");
     ```

3. **getElementsByClassName** :

   - **Description** : Cette méthode récupère une liste d'éléments du DOM en fonction de leur classe.
   - **Syntaxe** : `document.getElementsByClassName(className)`
   - **Type de retour** : Retourne une liste d'éléments correspondants sous forme de NodeList.
   - **Exemple** :
     ```javascript
     var elements = document.getElementsByClassName("myClass");
     ```

4. **querySelector** :

   - **Description** : Cette méthode récupère le premier élément du DOM correspondant au sélecteur CSS spécifié.
   - **Syntaxe** : `document.querySelector(selectors)`
   - **Type de retour** : Retourne le premier élément correspondant ou `null` s'il n'est pas trouvé.
   - **Exemple** :
     ```javascript
     var element = document.querySelector(".myClass");
     ```

5. **querySelectorAll** :
   - **Description** : Cette méthode récupère tous les éléments du DOM correspondant au sélecteur CSS spécifié.
   - **Syntaxe** : `document.querySelectorAll(selectors)`
   - **Type de retour** : Retourne tous les éléments correspondants sous forme de NodeList.
   - **Exemple** :
     ```javascript
     var elements = document.querySelectorAll("p.myClass");
     ```
