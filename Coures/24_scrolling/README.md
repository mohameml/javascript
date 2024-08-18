# cour 24 :

> Le `scrolling` fait référence au déplacement du contenu d'une page web verticalement ou horizontalement, souvent lorsque le contenu dépasse la taille de la fenêtre d'affichage. En JavaScript, plusieurs propriétés et événements permettent de gérer et de réagir au scrolling.

## 1. Propriété `onscroll`

-   **Description**

    > L'événement `onscroll` est déclenché chaque fois qu'un utilisateur fait défiler un élément avec une barre de défilement. Cet événement est généralement utilisé pour exécuter du code en réponse au défilement d'une page ou d'un élément, comme charger du contenu supplémentaire, afficher ou masquer des éléments, ou ajuster des styles CSS.

-   **Syntaxe**

    ```javascript
    window.onscroll = function () {
        // Code à exécuter lors du scrolling
        console.log("La page est en cours de défilement");
    };
    ```

-   **Exemple**

    ```javascript
    window.onscroll = function () {
        let scrollPosition = window.scrollY;
        console.log("Position verticale de défilement : " + scrollPosition);
    };
    ```

## 2. Propriété `scrollX`

-   **Description**

    > La propriété `scrollX` renvoie le nombre de pixels que le document a été défilé horizontalement à partir de la gauche. Elle est utilisée pour obtenir la position actuelle du défilement horizontal.

-   **Syntaxe**

    ```javascript
    let x = window.scrollX;
    ```

## 3. Propriété `scrollY`

-   **Description**

    > La propriété `scrollY` renvoie le nombre de pixels que le document a été défilé verticalement à partir du haut. Elle est utilisée pour obtenir la position actuelle du défilement vertical.

-   **Syntaxe**

    ```javascript
    let y = window.scrollY;
    ```

## 4. Méthode `scrollTo()`

-   **Description**

    > La méthode `scrollTo()` permet de faire défiler la fenêtre jusqu'à une position précise dans le document. Vous pouvez spécifier la position en utilisant les propriétés `top` et `left`. Cette méthode est souvent utilisée pour amener l'utilisateur à une section spécifique de la page.

-   **Syntaxe**

    ```javascript
    window.scrollTo({ top: valeur, left: valeur, behavior: "smooth" | "auto" });
    ```

### 5. Méthode `scrollBy()`

-   **Description**

    > La méthode `scrollBy()` fait défiler la fenêtre d'un certain nombre de pixels par rapport à la position actuelle. Contrairement à `scrollTo()`, cette méthode est relative, c'est-à-dire qu'elle déplace la fenêtre d'une certaine distance par rapport à sa position actuelle.

-   **Syntaxe**

    ```javascript
    window.scrollBy(x, y);
    ```

    ou

    ```javascript
    window.scrollBy({ top: valeur, left: valeur, behavior: "smooth" | "auto" });
    ```
