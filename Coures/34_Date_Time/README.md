# cour 34 : **Date & Time:**

## 1. **Introduction:**

-   **Description :**

    -   L'objet `Date` contient un **timestamp** interne exprimé en millisecondes écoulées depuis le **1er janvier 1970 à 00:00:00 UTC** (aussi appelé "Époque Unix").
    -   Il est capable de gérer des dates et des heures à la fois locales et en UTC (temps universel coordonné).
    -   Vous pouvez créer une instance de `Date` avec ou sans arguments pour représenter des moments spécifiques.

-   **Syntaxe**

    ```javascript
    // Créer un objet Date
    let date = new Date(); // Date actuelle

    // Créer une date spécifique
    let date = new Date(
        year,
        monthIndex,
        day,
        hours,
        minutes,
        seconds,
        milliseconds
    );

    // À partir d'une chaîne de caractères
    let date = new Date(dateString);

    // À partir d'un timestamp (millisecondes depuis 1970)
    let date = new Date(milliseconds);
    ```

    -   Le paramètre `monthIndex` commence à **0** pour janvier et finit à **11** pour décembre.

-   **Exemple 1 : Créer une date**

    ```javascript
    // Date actuelle
    let now = new Date();
    console.log(now); // Exemple : 2024-11-25T10:30:00.000Z

    // Date spécifique
    let specificDate = new Date(2024, 10, 25); // 25 novembre 2024 (mois = 10 pour novembre)
    console.log(specificDate); // 2024-11-25T00:00:00.000Z

    // À partir d'une chaîne de caractères
    let parsedDate = new Date("2024-11-25T12:00:00");
    console.log(parsedDate); // 2024-11-25T12:00:00.000Z

    // À partir d'un timestamp
    let timestampDate = new Date(1700908800000); // 1700908800000 ms après 1970
    console.log(timestampDate); // 2024-11-25T00:00:00.000Z
    ```
