# cour 21 :

### 1. `setTimeout()`

-   **Définition :**

    > `setTimeout()` exécute une fonction ou un bloc de code après un certain délai, spécifié en millisecondes.

-   **Syntaxe :**

    ```javascript
    var timeoutID = setTimeout(function, delay, [param1, param2, ...]);
    ```

    -   `function` : La fonction à exécuter après le délai.
    -   `delay` : Le délai en millisecondes avant l'exécution de la fonction.
    -   `[param1, param2, ...]` (optionnel) : Les paramètres à passer à la fonction.

-   **Exemple :**

    ```javascript
    function sayHello() {
        alert("Bonjour !");
    }

    var timeoutID = setTimeout(sayHello, 2000); // Affiche "Bonjour !" après 2 secondes
    ```

### 2. `clearTimeout()`

-   **Définition :**

    > `clearTimeout()` annule un délai précédemment établi avec `setTimeout()`. Si la fonction n'a pas encore été exécutée, elle ne le sera pas.

-   **Syntaxe :**

    ```javascript
    clearTimeout(timeoutID);
    ```

    -   `timeoutID` : L'ID du délai retourné par `setTimeout()`.

-   **Exemple :**

    ```javascript
    var timeoutID = setTimeout(function () {
        alert("Ce message n'apparaîtra pas.");
    }, 5000);

    clearTimeout(timeoutID); // Annule l'exécution de la fonction ci-dessus
    ```

    Dans cet exemple, le message "Ce message n'apparaîtra pas." n'apparaît pas car le délai est annulé par `clearTimeout()`.

### 3. `setInterval()`

-   **Définition :**

    > `setInterval()` exécute une fonction ou un bloc de code de manière répétée, à intervalles réguliers spécifiés en millisecondes.

-   **Syntaxe :**

    ```javascript
    var intervalID = setInterval(function, delay, [param1, param2, ...]);
    ```

    -   `function` : La fonction à exécuter à chaque intervalle.
    -   `delay` : L'intervalle de temps en millisecondes entre chaque exécution de la fonction.
    -   `[param1, param2, ...]` (optionnel) : Les paramètres à passer à la fonction.

-   **Exemple :**

    ```javascript
    function showTime() {
        console.log("Heure actuelle : " + new Date().toLocaleTimeString());
    }

    var intervalID = setInterval(showTime, 1000); // Affiche l'heure actuelle chaque seconde
    ```

### 4. `clearInterval()`

-   **Définition :**

    > `clearInterval()` annule un intervalle précédemment établi avec `setInterval()`. Si l'intervalle n'a pas encore expiré, il ne se répétera plus.

-   **Syntaxe :**

    ```javascript
    clearInterval(intervalID);
    ```

    -   `intervalID` : L'ID de l'intervalle retourné par `setInterval()`.

-   **Exemple :**

    ```javascript
    var intervalID = setInterval(function () {
        console.log("Ce message apparaîtra plusieurs fois.");
    }, 1000);

    setTimeout(function () {
        clearInterval(intervalID); // Arrête les messages après 5 secondes
    }, 5000);
    ```
