# cour 27 : déstructuration en JavaScript

## 1. Introduction à la déstructuration en JavaScript

> La **déstructuration** est une méthode pratique pour extraire des valeurs d'un tableau ou d'un objet et les assigner à des variables distinctes. Cela simplifie le code en permettant de décompacter des tableaux ou des objets en plusieurs variables de manière plus lisible et maintenable.

## 2. **Déstructuration de tableau:**

-   **Description :**

    > La déstructuration de tableau permet de décompacter des valeurs d'un tableau et de les assigner à des variables en une seule ligne de code. Cette fonctionnalité est particulièrement utile lorsque vous devez accéder à plusieurs éléments d'un tableau.

-   **Syntaxe :**

    ```javascript
    let [variable1, variable2, ...reste] = tableau;
    ```

    -   `variable1`, `variable2` : Ce sont les variables qui contiendront les valeurs des éléments correspondants du tableau.
    -   `reste` : (Optionnel) Un élément "reste" pour capturer les éléments restants du tableau.

-   **Exemple :**

    ```javascript
    // Déstructuration basique de tableau
    const fruits = ["Pomme", "Banane", "Orange"];
    const [premier, deuxième] = fruits;

    console.log(premier); // Affiche : 'Pomme'
    console.log(deuxième); // Affiche : 'Banane'

    // Avec valeurs par défaut
    const nombres = [10];
    const [a, b = 20] = nombres;

    console.log(a); // Affiche : 10
    console.log(b); // Affiche : 20

    // Utilisation de la syntaxe de reste
    const couleurs = ["Rouge", "Vert", "Bleu", "Jaune"];
    const [primaire1, primaire2, ...secondaires] = couleurs;

    console.log(primaire1); // Affiche : 'Rouge'
    console.log(primaire2); // Affiche : 'Vert'
    console.log(secondaires); // Affiche : ['Bleu', 'Jaune']
    ```

## 3. **Déstructuration d'objet**

-   **Description :**

    > La déstructuration d'objet est similaire à la déstructuration de tableau, mais elle est utilisée pour décompacter des valeurs d'objets. Vous pouvez extraire des propriétés d'un objet et les assigner à des variables portant le même nom ou à des variables avec des noms différents.

-   **Syntaxe :**

    -   **Syntaxe de base:**

        ```javascript
        let { clé1, clé2, ...reste } = objet;
        ```

        -   `clé1`, `clé2` : Ce sont les noms des propriétés de l'objet que vous souhaitez décompacter.
        -   `reste` : (Optionnel) Un élément "reste" pour capturer les autres propriétés de l'objet.

    -   **Avec renommage :**

        ```javascript
        let { clé1: nouveauNom1, clé2: nouveauNom2 } = objet;
        ```

        -   `clé1: nouveauNom1` : Cela renomme la propriété `clé1` en `nouveauNom1`.

    -   **Avec valeurs par défaut :**

        ```javascript
        let { clé1 = valeurParDéfaut1, clé2 = valeurParDéfaut2 } = objet;
        ```

        -   `clé1 = valeurParDéfaut1` : Assigne une valeur par défaut si `clé1` est `undefined` dans l'objet.

-   **Exemple :**

    ```javascript
    // Déstructuration basique d'objet
    const personne = { nom: "Jean", âge: 30 };
    const { nom, âge } = personne;

    console.log(nom); // Affiche : 'Jean'
    console.log(âge); // Affiche : 30

    // Déstructuration avec renommage
    const utilisateur = { id: 1, pseudo: "jeandupont" };
    const { id: identifiant, pseudo: nomUtilisateur } = utilisateur;

    console.log(identifiant); // Affiche : 1
    console.log(nomUtilisateur); // Affiche : 'jeandupont'

    // Déstructuration avec valeurs par défaut
    const paramètres = { thème: "sombre" };
    const { thème, taillePolice = 14 } = paramètres;

    console.log(thème); // Affiche : 'sombre'
    console.log(taillePolice); // Affiche : 14

    // Utilisation de la syntaxe de reste
    const voiture = { marque: "Toyota", modèle: "Corolla", année: 2020 };
    const { marque, ...specs } = voiture;

    console.log(marque); // Affiche : 'Toyota'
    console.log(specs); // Affiche : { modèle: 'Corolla', année: 2020 }
    ```
