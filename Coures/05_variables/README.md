# cour 05 : **Les Variables:**

## 1. **Definition:**

- **Description:**

    >En JavaScript, une variable est un conteneur pour stocker des valeurs de différents types de données. Les variables sont utilisées pour stocker et manipuler des données dans un programme JavaScript. 
    
- **Voici la syntaxe pour déclarer une variable :**

    ```javascript
    var nomDeVariable;
    ```

    Cela déclare une variable appelée `nomDeVariable`. Vous pouvez également initialiser la variable lors de sa déclaration :

    ```javascript
    var nomDeVariable = "valeur";
    ```


- **Exemple:**

    ```javascript
    var nom = "Alice";
    var age = 30;
    var pays = "France";

    console.log(nom); // Affiche "Alice"
    console.log(age); // Affiche 30
    console.log(pays); // Affiche "France"
    ```

    Dans cet exemple, `nom` est une variable déclarée avec `var`, `age` est une variable déclarée avec `let`, et `pays` est une variable déclarée avec `const`.


### RQ : **``ID` et variable:**

- Lorsque vous attribuez une ``ID`` à un élément HTML, cette ID devient accessible en tant que variable globale dans le contexte de l'objet `window` en JavaScript. Cela signifie que vous pouvez accéder à cet élément en utilisant son ID comme nom de variable.

- **exemple :**

    Supposons que vous ayez un élément `<div>` dans votre HTML avec l'ID "monDiv" :

    ```html
    <div id="monDiv">Contenu du div</div>
    ```

    En JavaScript, vous pouvez accéder à cet élément en utilisant son ID comme une variable :

    ```javascript
    // Accès à l'élément par son ID
    var monElement = document.getElementById("monDiv");

    // ou :juste la valeur dans l'id : le nom du vraible 
    consol.log(monDiv)

    // Modifier le texte à l'intérieur de l'élément
    monElement.textContent = "Nouveau contenu du div";
    ```


## 2. **nommer les variables:**

- **règles générales pour nommer les variables en JavaScript :**

    - **Les noms de variables doivent commencer par une lettre (a-z, A-Z) ou un caractère de soulignement (_) ou le symbole dollar ($)** : 
        Par exemple, `nom`, `_variable`, `$prix` sont tous des noms de variables valides.

    - **Les noms de variables peuvent contenir des lettres, des chiffres, des traits de soulignement (_) et des symboles dollar ($)** : 
        Par exemple, `nomVariable`, `age2`, `prix_total` sont tous des noms de variables valides.

    - **Les noms de variables sont sensibles à la casse** : `nom` et `Nom` sont considérés comme deux variables différentes.

    - **Évitez d'utiliser des mots réservés** : Vous ne pouvez pas utiliser des mots réservés du langage JavaScript comme des noms de variables. 
        Par exemple, `var`, `let`, `const`, `function`, `if`, `else`, etc.



- **conventions de nommage:**

    - **CamelCase** : 
        Utilisez CamelCase pour les noms de variables, de fonctions et d'objets. Commencez par une minuscule pour la première lettre du nom, puis utilisez des majuscules pour chaque mot subséquent. Par exemple : `nomDeVariable`, `maFonction`, `monObjet`.

    - **PascalCase** : 
        Utilisez PascalCase pour les noms de classes et de constructeurs. Commencez par une majuscule pour la première lettre du nom, puis utilisez des majuscules pour chaque mot subséquent. Par exemple : `MaClasse`, `MonConstructeur`.


    - **Préfixes** : 
        Certains préfixes peuvent être utilisés pour indiquer le type de variable. Par exemple, `is` pour les booléens (`isActif`), `arr` pour les tableaux (`arrNombres`), `str` pour les chaînes de caractères (`strNom`), etc.

    - **Noms explicites** : 
        Choisissez des noms de variables et de fonctions descriptifs qui indiquent clairement leur but et leur fonction. Cela rend votre code plus facile à comprendre pour vous-même et pour les autres développeurs.


## 3. **``var`` , ``let`` , ``const``:**

- redeclare 

- Acces befor declare 

- add to window => PB : varibale scopr drama 

>En JavaScript, `var`, `let`, et `const` sont tous utilisés pour déclarer des variables, mais ils ont des comportements  différents en termes de portée et de mutabilité. 


### 3.1  **``var``:**

- **Redéclaration autorisée** : Vous pouvez répéter la déclaration d'une variable avec `var` sans obtenir d'erreur.
    ```javascript
    var myName = "Ahmed"
    var myName = "Mohamed"
    ```

- **Hoisting** :  l' utilisation d' une variable avant de la déclarer explicitement ne génere pas une erreur 
    ```javascript
    consol.log(myName) // affiche : undefined
    var myName = "Ahmed"
    ```
- **Add to ``window`` objetc:**
    - Les variables déclarées avec `var` sont ajoutées à l'objet window, ce qui peut conduire à des problèmes de portée, comme le "scope drama" (drame de portée).

- **Portée de la fonction ou globale** : 
    Les variables déclarées avec `var` ont une portée de fonction ou globale. Cela signifie qu'elles sont accessibles dans la fonction où elles sont déclarées ou globalement si elles sont déclarées en dehors de toute fonction.



### 3.2  **``let``:**

- **Pas de redéclaration** : Vous ne pouvez pas répéter la déclaration d'une variable avec `let` dans le même contexte. Une tentative de répétition entraînera une erreur.
    ```javascript
    let myName = "Ahmed"
    let myName = "Mohamed" //erreur :
    ```

- **Pas de hoisting** : Vous devez déclarer la variable avant de l'utiliser.

    ```javascript
    consol.log(myName) // erreur 
    let myName = "Ahmed"
    ```
- **Portée de bloc** : 
    
    - Les variables déclarées avec `let` ont une portée de bloc. Elles ne sont accessibles que dans le bloc où elles sont déclarées, y compris les blocs if, les boucles for, les fonctions, etc.



### 3.3  **``const``:**

- **Pas de redéclaration** : Vous ne pouvez pas répéter la déclaration d'une variable avec `const` dans le même contexte. Une tentative de répétition entraînera une erreur.
    ```javascript
    const myName = "Ahmed"
    const myName = "Mohamed" //erreur :
    ```
- **Pas de hoisting** : Vous devez déclarer la variable avant de l'utiliser.

    ```javascript
    consol.log(myName) // erreur 
    const myName = "Ahmed"
    ```

- **Portée de bloc** : 
    Les variables déclarées avec `const` ont également une portée de bloc, tout comme `let`.

- **Assignation immuable** : 
    Une fois qu'une valeur est assignée à une variable avec `const`, cette valeur ne peut pas être réassignée. Cependant, cela ne signifie pas que la valeur est immuable (non modifiable). Vous pouvez toujours modifier les propriétés des objets ou les éléments des tableaux assignés à une variable `const`.

