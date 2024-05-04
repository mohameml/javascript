# cour 06 : **String:**

## 1. **les caractères d'échappement:**

- **Description:**
    
    >En JavaScript, les caractères d'échappement sont utilisés pour inclure des caractères spéciaux dans une chaîne de caractères. 
    
    
- **Voici quelques-uns des caractères d'échappement couramment utilisés :**

    1. **\n** : Nouvelle ligne
    2. **\t** : Tabulation
    3. **\r** : Retour chariot
    4. **\b** : Retour arrière
    5. **\'** : Apostrophe (utilisé à l'intérieur des chaînes délimitées par des guillemets simples)
    6. **\"** : Guillemets doubles (utilisé à l'intérieur des chaînes délimitées par des guillemets doubles)
    7. **\\** : Caractère d'échappement lui-même


- **Exemple:**

    ```javascript
    let texte = "Bonjour\n\tMonde!";
    console.log(texte);
    ```

    Cela affichera :

    ```
    Bonjour
        Monde!
    ```


## 2. **String formating:**

### 2.1 **Concaténation:**

- **Description:**

    >La concaténation en JavaScript avec l'opérateur `+` est une méthode courante pour joindre des chaînes de caractères ou pour ajouter des variables à des chaînes. 

- **Syntaxe :**

    ```javascript
    let resultat = chaine1 + chaine2;
    ```
    Dans cette syntaxe, `chaine1` et `chaine2` sont des chaînes de caractères que vous souhaitez concaténer.

- **Exemple :**
    ```javascript
    let prenom = "John";
    let nom = "Doe";

    let nomComplet = prenom + " " + nom;

    console.log(nomComplet); // Affiche "John Doe"
    ```



### 2.2 **L'interpolation de chaînes avec les backticks:``template literals``**


- **Description:**

    >L'interpolation de chaînes avec les backticks (\`) est une fonctionnalité introduite dans ECMAScript 6 (ES6) qui permet d'insérer des variables ou des expressions dans une chaîne de caractères de manière plus lisible et concise. Cette méthode est également connue sous le nom de "template literals" en anglais.


- **Syntaxe :**

    La syntaxe de base pour l'interpolation de chaînes avec les backticks est la suivante :
    ```javascript
    let maChaine = `Texte ${variable} plus de texte`;
    ```
    Dans cette syntaxe, la partie entre `${}` est évaluée comme une expression JavaScript , en plus un retour à la ligne dans le ``backticks`` est considéré comme \n  . 



- **Exemple :**

    ```javascript
    let title = "Elzero";
    let par = "Web School";

    let card = `
        <div class ="card">
            <div class = "child">
                <h2>${title}</h2>
                <p>${par}</p>
            </div>
        </div>
    `
    document.write(card)

    ```

    ![alt text](images/image.png)


### 3. **Casting:**


- **Description:**

    >En JavaScript, le terme ``casting`` fait référence à la conversion explicite d'une valeur d'un type de données à un autre. Cela peut être nécessaire lorsque vous souhaitez manipuler des données dans un format différent de celui dans lequel elles sont initialement stockées.


- **Casting numérique** : Convertir une valeur en nombre.

   - Vous pouvez utiliser l'opérateur `+` ou la fonction globale `Number()` pour effectuer un casting numérique.

   ```javascript
   let nombre = "123";
   let resultat = +nombre; // Utilisation de l'opérateur +
   let resultat2 = Number(nombre); // Utilisation de la fonction Number()
   ```

- **Casting en chaîne de caractères** : Convertir une valeur en chaîne de caractères.

   - Vous pouvez utiliser la méthode `toString()` ou la fonction globale `String()` pour effectuer un casting en chaîne de caractères.

   ```javascript
   let nombre = 123;
   let resultat = nombre.toString(); // Utilisation de la méthode toString()
   let resultat2 = String(nombre); // Utilisation de la fonction String()
   ```

- **Casting en booléen** : Convertir une valeur en booléen.

   - Certaines valeurs sont automatiquement évaluées à `true` ou `false`, mais vous pouvez utiliser des fonctions comme `Boolean()` pour effectuer un casting en booléen de manière explicite.

   ```javascript
   let valeur = "non vide";
   let resultat = Boolean(valeur); // Convertit en true car la chaîne n'est pas vide
   ```

- **Casting en nombre entier** : Convertir une valeur en un nombre entier.

   - Vous pouvez utiliser `parseInt()` ou `parseFloat()` pour convertir une chaîne en nombre entier ou flottant, respectivement.

   ```javascript
   let chaine = "123.45";
   let entier = parseInt(chaine); // Convertit en 123 (nombre entier)
   let flottant = parseFloat(chaine); // Convertit en 123.45 (nombre flottant)
   ```

