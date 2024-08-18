# cour 20 :

### 1. `alert()`

-   **Définition :**

    > La fonction `alert()` affiche une boîte de dialogue avec un message et un seul bouton "OK". Elle est utilisée pour afficher des informations à l'utilisateur.

-   **Syntaxe :**

    ```javascript
    alert(message);
    ```

    -   `message` : Le texte ou la chaîne de caractères à afficher.

-   **Exemple :**

    ```javascript
    alert("Bienvenue sur notre site !");
    ```

### 2. `confirm()`

-   **Définition :**

    > La fonction `confirm()` affiche une boîte de dialogue avec un message, ainsi que deux boutons : "OK" et "Annuler". Elle est utilisée pour obtenir une confirmation de l'utilisateur (par exemple, "Voulez-vous vraiment supprimer cet élément ?").

-   **Syntaxe :**

    ```javascript
    var resultat = confirm(message);
    ```

    -   `message` : Le texte ou la chaîne de caractères à afficher.
    -   `resultat` : La fonction retourne un booléen :
        -   `true` si l'utilisateur clique sur "OK"
        -   `false` s'il clique sur "Annuler"

-   **Exemple :**

    ```javascript
    var userConfirmed = confirm("Êtes-vous sûr de vouloir continuer ?");
    if (userConfirmed) {
        alert("Vous avez confirmé !");
    } else {
        alert("Vous avez annulé !");
    }
    ```

### 3. `prompt()`

-   **Définition :**

    > La fonction `prompt()` affiche une boîte de dialogue avec un message, une zone de texte pour que l'utilisateur puisse entrer une valeur, et deux boutons : "OK" et "Annuler". Elle est utilisée pour obtenir une entrée de l'utilisateur.

-   **Syntaxe :**

    ```javascript
    var reponse = prompt(message, valeur_par_defaut);
    ```

    -   `message` : Le texte ou la chaîne de caractères à afficher.
    -   `valeur_par_defaut` (optionnel) : La valeur par défaut affichée dans la zone de texte.
    -   `reponse` : La fonction retourne la chaîne de caractères entrée par l'utilisateur. Si l'utilisateur clique sur "Annuler", elle retourne `null`.

-   **Exemple :**

    ```javascript
    var userName = prompt("Quel est votre nom ?", "Anonyme");
    if (userName !== null) {
        alert("Bonjour, " + userName + " !");
    } else {
        alert("Vous avez annulé la saisie.");
    }
    ```
