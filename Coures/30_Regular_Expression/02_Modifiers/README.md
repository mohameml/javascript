# cour 02 : **Modifiers**

## 1. **Définition de Pattern Regex:**

-   **Description:**

    > Un **pattern** (ou motif) en expression régulière (regex) est une séquence de caractères qui décrit un modèle de texte que vous souhaitez rechercher ou manipuler dans une chaîne de caractères. Le pattern peut inclure des caractères littéraux, des métacaractères (comme `.` ou `*`), des classes de caractères, des quantificateurs, et d'autres éléments qui permettent de définir des critères de recherche très spécifiques.

-   **Syntaxe :**

    En JavaScript, la syntaxe générale pour une expression régulière est :

    ```javascript
    let regex = /pattern/modifiers;
    // ou
    regex = new ExpReg(pattern , modifiers)
    ```

    -   **pattern** : Le motif (pattern) que vous souhaitez rechercher. Il peut inclure des caractères normaux et des métacaractères.
    -   **modifiers** : Des modificateurs (ou flags) qui modifient la manière dont la recherche est effectuée. Les plus courants sont :
        -   `g` : Recherche globale, c'est-à-dire qu'il cherche toutes les occurrences dans la chaîne, pas seulement la première.
        -   `i` : Ignore la casse, c'est-à-dire que la recherche ne distingue pas entre majuscules et minuscules.
        -   `m` : Recherche multilignes, qui permet de traiter les chaînes avec des sauts de ligne.

-   **Exemple:**

    Supposons que vous souhaitiez rechercher toutes les occurrences du mot "chat" (qu'il soit en majuscule ou minuscule) dans une chaîne de texte. Vous pouvez utiliser le pattern suivant :

    ```javascript
    const text = "Le Chat est sur le toit. chat!";
    const regex = /chat/gi;
    const result = text.match(regex);
    console.log(result); // ["Chat", "chat"]
    ```

## 2. **La fonction `match()` de la classe `String` en JavaScript:**

-   **Description:**

    > La méthode `match()` est utilisée pour rechercher des correspondances dans une chaîne de caractères en fonction d'une expression régulière (regex). Elle renvoie un tableau contenant toutes les correspondances trouvées ou `null` s'il n'y a pas de correspondance.

    -   Si l'expression régulière contient le modificateur `g` (global), toutes les correspondances sont renvoyées ; sinon, seule la première correspondance est renvoyée.

-   **Syntaxe:**

    ```javascript
    string.match(regexp);
    ```

    -   **string** : La chaîne de caractères sur laquelle la recherche est effectuée.
    -   **regexp** : L'expression régulière qui définit le motif à rechercher. Elle peut être une expression régulière ou un simple motif de chaîne.

-   **Exemple 1 : Rechercher toutes les occurrences d'un mot**

    ```javascript
    const text =
        "Les chats sont des animaux adorables. Les chats aiment dormir.";
    const regex = /chats/g;
    const result = text.match(regex);
    console.log(result); // ["chats", "chats"]
    ```

    -   **Explication** : Ici, `match()` renvoie un tableau contenant toutes les occurrences du mot "chats" dans la chaîne.

-   **Exemple 2 : Rechercher la première occurrence d'un mot (sans le modificateur `g`)**

    ```javascript
    const text =
        "Les chats sont des animaux adorables. Les chats aiment dormir.";
    const regex = /chats/;
    const result = text.match(regex);
    console.log(result); // ["chats", index: 4, input: "Les chats sont des animaux adorables. Les chats aiment dormir.", groups: undefined]
    ```

    -   **Explication** : Sans le modificateur `g`, `match()` renvoie un tableau avec la première occurrence trouvée ainsi que des informations supplémentaires telles que l'index de la correspondance.
