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

    // À partir d'une chaîne de caractères  :
    /*
        - dateString = "2024-10-25T06:10:00"
        - with time zone : dateString = "2024-10-25T06:10:00Z"
    */
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

## 2 . **Get Date And Time:**

| Méthode         | Utilité                                                                            | Syntaxe              |
| --------------- | ---------------------------------------------------------------------------------- | -------------------- |
| `getTime()`     | Retourne le nombre de millisecondes écoulées depuis le 1er janvier 1970 (l'epoch). | `date.getTime()`     |
| `getDate()`     | Retourne le jour du mois pour la date spécifiée (1 à 31).                          | `date.getDate()`     |
| `getFullYear()` | Retourne l'année complète (par ex., 2024) de la date spécifiée.                    | `date.getFullYear()` |
| `getMonth()`    | Retourne le mois de la date (0 pour janvier, 11 pour décembre).                    | `date.getMonth()`    |
| `getDay()`      | Retourne le jour de la semaine (0 pour dimanche, 6 pour samedi).                   | `date.getDay()`      |
| `getHours()`    | Retourne l'heure (0 à 23) de la date spécifiée.                                    | `date.getHours()`    |
| `getMinutes()`  | Retourne les minutes (0 à 59) de la date spécifiée.                                | `date.getMinutes()`  |
| `getSeconds()`  | Retourne les secondes (0 à 59) de la date spécifiée.                               | `date.getSeconds()`  |

## 3. **Set Date And Time:**

| Méthode         | Utilité                                                                      | Syntaxe                      |
| --------------- | ---------------------------------------------------------------------------- | ---------------------------- |
| `setTime()`     | Définit la date/heure en millisecondes depuis le 1er janvier 1970 (l'epoch). | `date.setTime(milliseconds)` |
| `setDate()`     | Définit le jour du mois pour la date spécifiée (1 à 31).                     | `date.setDate(day)`          |
| `setFullYear()` | Définit l'année complète pour la date spécifiée (par ex., 2024).             | `date.setFullYear(year)`     |
| `setMonth()`    | Définit le mois pour la date spécifiée (0 pour janvier, 11 pour décembre).   | `date.setMonth(month)`       |
| `setHours()`    | Définit l'heure (0 à 23) pour la date spécifiée.                             | `date.setHours(hours)`       |
| `setMinutes()`  | Définit les minutes (0 à 59) pour la date spécifiée.                         | `date.setMinutes(minutes)`   |
| `setSeconds()`  | Définit les secondes (0 à 59) pour la date spécifiée.                        | `date.setSeconds(seconds)`   |

-   **RQ :** Lorsque vous utilisez des méthodes comme `setMonth()`, `setDate()`, `setHours()`, etc., et que les valeurs dépassent les limites valides pour ces paramètres, JavaScript ajuste automatiquement la date en fonction de ces dépassements. Cela peut parfois donner des résultats inattendus, mais il est important de comprendre le mécanisme de "normalisation" que JavaScript applique.

-   **Comportement de normalisation avec `setMonth(x)`:**

    -   Si `x` est supérieur à 11 (par exemple, `setMonth(15)`), JavaScript ajoute des années supplémentaires pour "compenser" cette valeur trop élevée.
    -   Si `x` est inférieur à 0 (par exemple, `setMonth(-3)`), JavaScript diminue les années pour "compenser" cette valeur trop faible.

## 4. **Opérations :**

-   **Différence en millisecondes :**

    -   Cette opération soustrait simplement les valeurs en millisecondes des deux dates. Cela peut être utile pour obtenir la durée exacte entre deux événements en termes de millisecondes.
    -   **Exemple :**
        ```javascript
        const diff = new Date(2024, 11, 1) - new Date(2024, 0, 1);
        console.log(diff); // Affiche la différence en millisecondes.
        ```

-   **Différence en jours :**

    -   Pour obtenir la différence en jours entre deux dates, vous soustrayez les dates, puis divisez par le nombre de millisecondes dans une journée (`1000 * 60 * 60 * 24`).
    -   **Exemple :**
        ```javascript
        const diffDays =
            (new Date(2024, 11, 1) - new Date(2024, 0, 1)) /
            (1000 * 60 * 60 * 24);
        console.log(diffDays); // Affiche le nombre de jours entre les deux dates.
        ```

-   **Comparer deux dates :**

    -   Pour vérifier si deux dates sont égales ou si l'une est avant ou après l'autre, vous pouvez utiliser `getTime()` pour obtenir la valeur en millisecondes, ou comparer directement les objets `Date`.
    -   **Exemple :**
        ```javascript
        const date1 = new Date(2024, 0, 1);
        const date2 = new Date(2024, 0, 1);
        console.log(date1.getTime() === date2.getTime()); // Vérifie si les dates sont égales.
        ```

-   **Vérifier si une date est avant/après :**

    -   Vous pouvez utiliser les opérateurs `<`, `>`, ou `<=`, `>=` pour comparer les dates directement, ce qui peut être utile pour déterminer l'ordre chronologique.
    -   **Exemple :**
        ```javascript
        const date1 = new Date(2024, 0, 1);
        const date2 = new Date(2025, 0, 1);
        console.log(date1 < date2); // Vérifie si `date1` est avant `date2`.
        ```
