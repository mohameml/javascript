# cour 02 : **``Output``:**

## 1. **`window.alert()`**

- **Description:L'objet `window`**

    >L'objet `window` est un objet global dans l'environnement JavaScript d'un navigateur web. Il représente la fenêtre du navigateur et fournit un accès à de nombreuses fonctionnalités et propriétés. Certaines de ces propriétés et méthodes incluent la gestion des dimensions de la fenêtre, la manipulation de l'URL, le stockage local et de session, et bien d'autres.

- **Description:`window.alert()`**

    >La fonction `window.alert()` est une méthode de l'objet global `window` en JavaScript, spécifiquement utilisée dans l'environnement des navigateurs web. Elle permet d'afficher une boîte de dialogue modale avec un message et un bouton "OK". Cette boîte de dialogue est souvent utilisée pour informer l'utilisateur d'une situation ou pour obtenir une confirmation.

- **Syntaxe de `window.alert()` :**

    ```javascript
    window.alert(message);
    ```

    - `message` : C'est la chaîne de caractères que vous souhaitez afficher dans la boîte de dialogue.


- **Exemple d'utilisation :**

    ```javascript
    window.alert("Ceci est un message d'alerte !");
    ```

    Lorsque cette ligne de code est exécutée, une boîte de dialogue modale apparaît dans le navigateur avec le message "Ceci est un message d'alerte !" et un bouton "OK". L'utilisateur doit cliquer sur le bouton "OK" pour fermer la boîte de dialogue.

#### RQ : 
- Bien que `window.alert()` puisse être utile pour des cas simples, il est souvent préférable d'utiliser des méthodes plus sophistiquées pour l'interaction avec l'utilisateur, comme la création de boîtes de dialogue personnalisées . L'utilisation excessive d'alertes peut être perturbante pour l'expérience utilisateur, car elle interrompt le flux normal de l'application.



## 2. **`document.write()`:**

- **Description:L'objet `document`**

    >L'objet `document` est un objet du modèle d'objet de document (DOM) en JavaScript, spécifiquement utilisé dans les environnements de navigateur web. Il représente la structure de la page HTML chargée dans le navigateur et fournit des méthodes et des propriétés permettant de manipuler le contenu de la page.


- **Description:`document.write()`**

    >La fonction `document.write()` est une méthode de l'objet `document` en JavaScript, principalement utilisée pour écrire du contenu directement dans le document HTML pendant le chargement initial de la page. 
    
    

- **Syntaxe de `document.write()` :**

    ```javascript
    document.write(expression);
    ```

    - `expression` : C'est la chaîne de caractères ou l'expression que vous souhaitez écrire dans le document.

- **Exemple d'utilisation :**

    ```javascript
    document.write("<h1>Ceci est un titre</h1>");
    ```

    Lorsque cette ligne de code est exécutée, le texte "Ceci est un titre" sera ajouté à l'endroit où se trouve l'appel à `document.write()` dans le document HTML.



#### RQ :

- L'utilisation du `document.write()` est désormais moins recommandée dans le développement web moderne, en particulier après le chargement initial de la page, car elle peut entraîner des problèmes de performances et de sécurité.
 


## 3. **La fonction `console.log()`:**  

- **Description:**

    >La fonction `console.log()` est une méthode de l'objet `console` en JavaScript. Elle est principalement utilisée pour afficher des messages de débogage dans la console du navigateur pendant le développement web. C'est un moyen pratique de vérifier et de comprendre le comportement du code à différentes étapes de son exécution.


- **Syntaxe de `console.log()` :**

    ```javascript
    console.log(valeur1, valeur2, ..., valeurN);
    ```

    - `valeur1, valeur2, ..., valeurN` : Ce sont les valeurs ou expressions que vous souhaitez afficher dans la console. Vous pouvez spécifier plusieurs valeurs séparées par des virgules.


- **Exemple d'utilisation :**

    ```javascript
    let x = 10;
    let y = "Hello, World!";
    console.log("La valeur de x est :", x, "et la valeur de y est :", y);
    ```

    Lorsque ce code est exécuté, il affichera le message suivant dans la console du navigateur :

    ```
    La valeur de x est : 10 et la valeur de y est : Hello, World!
    ```

