# cour 03 : **``console``**


## 1. **L'Objet ``console``:**

- **Description:**

    >L'objet `console` en JavaScript est un objet intégré qui fournit des méthodes pour envoyer des messages à la console du navigateur. Ces messages sont utiles pour le débogage, la gestion des erreurs et la collecte d'informations sur le comportement du programme. 
    


## 2. **Voici quelques-unes des méthodes les plus couramment utilisées de l'objet `console` :**

1. **`console.log()` :** Affiche un message ordinaire dans la console.

    ```javascript
    console.log("Ceci est un message de console.");
    ```

2. **`console.error()` :** Affiche un message d'erreur dans la console.

    ```javascript
    console.error("Ceci est un message d'erreur !");
    ```

3. **`console.warn()` :** Affiche un avertissement dans la console.

    ```javascript
    console.warn("Ceci est un avertissement !");
    ```

4. **`console.info()` :** Affiche une information dans la console.

    ```javascript
    console.info("Ceci est une information.");
    ```

5. **`console.clear()` :** Efface la console.

    ```javascript
    console.clear();
    ```

6. **`console.time()` et `console.timeEnd()` :** Mesure le temps d'exécution d'un bloc de code.

    ```javascript
    console.time("MaOpération");
    // Code à mesurer
    console.timeEnd("MaOpération");
    ```

7. **`console.table()`:**

    >La fonction `console.table()` en JavaScript est utilisée pour afficher des données sous forme de tableau dans la console du navigateur. Elle prend en paramètre un objet ou un tableau de données et les affiche de manière organisée et lisible. Cette fonction est utile pour le débogage et la visualisation des données structurées lors du développement d'applications JavaScript.

    ```javascript
    console.table(["sidi" ,"Ahmed" , "khaled"])

    ```

## 3. **directive ``%c`` avce ``console.log()``:**

- **Description:**

    >La directive `%c` avec `console.log()` est une fonctionnalité de la console JavaScript qui vous permet d'appliquer des styles CSS à une partie spécifique du texte que vous affichez dans la console.

- **Voici comment l'utiliser :**

    ```javascript
    console.log('%cHello, world!', 'color: blue; font-size: 18px;');
    ```

    Dans cet exemple, `%c` est une directive indiquant à `console.log()` d'appliquer un style CSS au texte suivant. Le deuxième argument est une chaîne de caractères qui spécifie les styles CSS à appliquer. Dans cet exemple, le texte "Hello, world!" sera affiché en bleu avec une taille de police de 18 pixels.

    Cela peut être utile pour mettre en évidence certaines informations dans la console, rendre le débogage plus visuel ou même ajouter un peu de personnalité à vos messages de console.