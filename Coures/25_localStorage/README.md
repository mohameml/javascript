# cour 25 :

> Le **Local Storage** est une fonctionnalité du Web Storage en JavaScript qui permet de stocker des données localement sur le navigateur de l'utilisateur sous forme de paires clé-valeur. Contrairement aux cookies, les données stockées dans le Local Storage ne sont pas envoyées au serveur avec chaque requête HTTP, et elles persistent même après la fermeture du navigateur. Les données sont stockées de manière persistante jusqu'à ce que l'utilisateur les supprime ou que le site les efface explicitement.

## 1. Méthode `setItem()`

-   **Description**

    > La méthode `setItem()` permet de stocker une donnée dans le Local Storage en associant une valeur à une clé spécifique. Si une clé existante est utilisée, la valeur associée sera remplacée.

-   **Syntaxe**

    ```javascript
    localStorage.setItem("clé", "valeur");
    ```

-   **Exemple**

    ```javascript
    // Stocker une donnée dans le Local Storage
    localStorage.setItem("nomUtilisateur", "JohnDoe");
    ```

## 2. Méthode `getItem()`

-   **Description**

    > La méthode `getItem()` permet de récupérer la valeur associée à une clé spécifique dans le Local Storage. Si la clé n'existe pas, cette méthode renvoie `null`.

-   **Syntaxe**

    ```javascript
    let valeur = localStorage.getItem("clé");
    ```

-   **Exemple**

    ```javascript
    // Récupérer la valeur associée à la clé 'nomUtilisateur'
    let nom = localStorage.getItem("nomUtilisateur");
    console.log(nom); // Affiche "JohnDoe"
    ```

## 3. Méthode `removeItem()`

-   **Description**

    > La méthode `removeItem()` permet de supprimer une donnée spécifique du Local Storage en utilisant la clé associée.

-   **Syntaxe**

    ```javascript
    localStorage.removeItem("clé");
    ```

-   **Exemple**

    ```javascript
    // Supprimer la donnée associée à la clé 'nomUtilisateur'
    localStorage.removeItem("nomUtilisateur");
    ```

## 4. Méthode `key()`

-   **Description**

    > La méthode `key()` permet de récupérer le nom de la clé à un index spécifique dans le Local Storage. Elle est utile pour parcourir toutes les clés stockées.

-   **Syntaxe**

    ```javascript
    let clé = localStorage.key(index);
    ```

-   **Exemple**

    ```javascript
    // Obtenir le nom de la première clé stockée
    let premièreClé = localStorage.key(0);
    console.log(premièreClé);
    ```

## 5. Méthode `clear()`

-   **Description**

    > La méthode `clear()` permet de supprimer toutes les paires clé-valeur stockées dans le Local Storage. Après l'appel de cette méthode, le Local Storage sera vide.

-   **Syntaxe**

    ```javascript
    localStorage.clear();
    ```
