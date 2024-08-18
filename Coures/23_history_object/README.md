# cour 23 :

## 1. Introduction à l'objet `history`

> L'objet `history` fait partie de l'API Web et est associé à la gestion de l'historique de navigation d'un utilisateur dans le navigateur. Il permet de manipuler l'historique des pages visitées dans la session de navigation actuelle. Grâce à cet objet, les développeurs peuvent faire avancer ou reculer le navigateur dans l'historique, ou encore accéder à des informations sur l'historique.

## 2. Attribut de l'objet `history` :`length`

-   **Description** : L'attribut `length` de l'objet `history` renvoie le nombre d'entrées dans l'historique de la session actuelle. Cela inclut toutes les pages visitées dans cet onglet ou cette fenêtre, y compris la page actuelle.

-   **Syntaxe** :
    ```javascript
    let historyLength = window.history.length;
    ```
    Exemple :
    ```javascript
    console.log(`Nombre de pages dans l'historique: ${historyLength}`);
    ```

## 3. Méthodes de l'objet `history`

L'objet `history` dispose de plusieurs méthodes permettant de naviguer dans l'historique du navigateur.

### a. `back()`

-   **Description** : La méthode `back()` charge la page précédente dans l'historique de navigation, équivalente à cliquer sur le bouton "Retour" du navigateur.

-   **Syntaxe** :
    ```javascript
    window.history.back();
    ```
    Exemple :
    ```javascript
    // Retourne à la page précédente dans l'historique
    window.history.back();
    ```

#### b. `forward()`

-   **Description** : La méthode `forward()` charge la page suivante dans l'historique de navigation, équivalente à cliquer sur le bouton "Avancer" du navigateur.

-   **Syntaxe** :
    ```javascript
    window.history.forward();
    ```
    Exemple :
    ```javascript
    // Avance à la page suivante dans l'historique
    window.history.forward();
    ```

#### c. `go()`

-   **Description** : La méthode `go()` permet de naviguer à une position spécifique dans l'historique de navigation en fournissant un entier comme argument. Un nombre positif avance de plusieurs étapes, tandis qu'un nombre négatif recule de plusieurs étapes.

-   **Syntaxe** :

    ```javascript
    window.history.go(steps);
    ```

    Exemple :

    ```javascript
    // Reculer de deux pages dans l'historique
    window.history.go(-2);

    // Avancer d'une page dans l'historique
    window.history.go(1);

    // Recharger la page actuelle
    window.history.go(0);
    ```
