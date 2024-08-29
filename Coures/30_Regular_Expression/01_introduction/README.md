# cour 01 : **Introduction**

## 1. **Définition:**

-   Les expressions régulières (ou regex) sont des séquences de caractères qui définissent un motif de recherche. Elles permettent de décrire des ensembles de chaînes de caractères possibles grâce à une syntaxe précise et compacte. Les expressions régulières sont couramment utilisées pour effectuer des recherches, des correspondances, des remplacements ou des validations dans des chaînes de texte.

## 2. **À quoi servent les expressions régulières ?:**

Les expressions régulières sont très utiles dans la manipulation de texte. Elles permettent, entre autres :

-   **Validation de données** : vérifier si une chaîne correspond à un format spécifique, comme une adresse email, un numéro de téléphone ou un code postal.
-   **Recherche** : trouver des occurrences d'un motif particulier dans une chaîne, par exemple, toutes les adresses email dans un texte.
-   **Extraction** : extraire des sous-chaînes d'une chaîne plus grande, comme toutes les mentions d'utilisateurs dans un tweet.
-   **Remplacement** : remplacer toutes les occurrences d'un motif par une autre chaîne, comme la correction automatique d'orthographe dans un texte.

## 3. **Quelques exemples en JavaScript:**

En JavaScript, les expressions régulières sont souvent utilisées avec les méthodes des chaînes de caractères telles que `match()`, `replace()`, `test()`, et `exec()`. Voici quelques exemples :

-   **Validation d'une adresse email** :

    ```javascript
    const email = "example@test.com";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(regex.test(email)); // true
    ```

-   **Recherche de tous les numéros dans une chaîne** :

    ```javascript
    const text = "J'ai 2 pommes et 3 oranges.";
    const regex = /\d+/g;
    const numbers = text.match(regex);
    console.log(numbers); // ["2", "3"]
    ```

-   **Remplacement de toutes les occurrences d'un mot** :
    ```javascript
    const text = "La voiture est rouge. Rouge est une belle couleur.";
    const regex = /rouge/gi;
    const newText = text.replace(regex, "bleu");
    console.log(newText); // "La voiture est bleu. Bleu est une belle couleur."
    ```

Ces exemples montrent comment les expressions régulières peuvent être utilisées pour valider, rechercher et manipuler du texte de manière puissante et efficace en JavaScript.
