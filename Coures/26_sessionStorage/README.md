# cour 26 :

> Le **Session Storage** est une fonctionnalité du Web Storage en JavaScript qui permet de stocker des données localement sur le navigateur de l'utilisateur sous forme de paires clé-valeur, mais avec une portée plus limitée que le Local Storage. Contrairement au Local Storage, les données stockées dans le Session Storage ne persistent que pour la durée de la session de navigation. Elles sont supprimées lorsque la page ou l'onglet du navigateur est fermé.

## 1. Méthode `setItem()`

-   **Description**

    > La méthode `setItem()` permet de stocker une donnée dans le Session Storage en associant une valeur à une clé spécifique. Si une clé existante est utilisée, la valeur associée sera remplacée.

-   **Syntaxe**

    ```javascript
    sessionStorage.setItem("clé", "valeur");
    ```

-   **Exemple**

    ```javascript
    // Stocker une donnée dans le Session Storage
    sessionStorage.setItem("nomUtilisateur", "JohnDoe");
    ```

## 2. Méthode `getItem()`

-   **Description**

    > La méthode `getItem()` permet de récupérer la valeur associée à une clé spécifique dans le Session Storage. Si la clé n'existe pas, cette méthode renvoie `null`.

-   **Syntaxe**

    ```javascript
    let valeur = sessionStorage.getItem("clé");
    ```

-   **Exemple**

    ```javascript
    // Récupérer la valeur associée à la clé 'nomUtilisateur'
    let nom = sessionStorage.getItem("nomUtilisateur");
    console.log(nom); // Affiche "JohnDoe"
    ```

## 3. Méthode `removeItem()`

-   **Description**

    > La méthode `removeItem()` permet de supprimer une donnée spécifique du Session Storage en utilisant la clé associée.

-   **Syntaxe**

    ```javascript
    sessionStorage.removeItem("clé");
    ```

-   **Exemple**

    ```javascript
    // Supprimer la donnée associée à la clé 'nomUtilisateur'
    sessionStorage.removeItem("nomUtilisateur");
    ```

## 4. Méthode `key()`

-   **Description**

    > La méthode `key()` permet de récupérer le nom de la clé à un index spécifique dans le Session Storage. Elle est utile pour parcourir toutes les clés stockées.

-   **Syntaxe**

    ```javascript
    let clé = sessionStorage.key(index);
    ```

-   **Exemple**

    ```javascript
    // Obtenir le nom de la première clé stockée
    let premièreClé = sessionStorage.key(0);
    console.log(premièreClé);
    ```

## 5. Méthode `clear()`

-   **Description**

    > La méthode `clear()` permet de supprimer toutes les paires clé-valeur stockées dans le Session Storage. Après l'appel de cette méthode, le Session Storage sera vide.

-   **Syntaxe**

    ```javascript
    sessionStorage.clear();
    ```

-   **Exemple**

    ```javascript
    // Supprimer toutes les données du Session Storage
    sessionStorage.clear();
    ```
