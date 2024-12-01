# cour 45 : **Try-Catch-Finally**

-   **Définition**

    -   Le bloc **`try...catch...finally`** en JavaScript est utilisé pour **gérer les erreurs** (ou exceptions) qui peuvent se produire dans votre code. Il permet d'encadrer le code potentiellement dangereux (qui pourrait générer une erreur) dans un bloc `try`, de capturer l'erreur dans un bloc `catch` si elle se produit, et d'exécuter un bloc `finally` que l'erreur se produise ou non.

-   **Structure de `try...catch...finally`**

    ```javascript
    try {
        // Code qui pourrait lever une exception
    } catch (error) {
        // Code exécuté si une erreur est capturée
    } finally {
        // Code exécuté qu'une erreur se produise ou non
    }
    ```

-   **Exemple 1 : Gestion d'une erreur réelle**

    ```javascript
    try {
        let user = JSON.parse('{"name": "Alice"'); // Syntaxe JSON incorrecte
    } catch (error) {
        console.error("Erreur de syntaxe JSON : ", error.message);
    } finally {
        console.log("Bloc finally exécuté");
    }
    ```

    Le bloc `catch` capte l'erreur générée par `JSON.parse`, et le bloc `finally` s'exécute ensuite.

-   **Exemple 2 : Libération de ressources avec `finally`**

    Le bloc `finally` est souvent utilisé pour effectuer des opérations de nettoyage ou de fermeture de ressources, comme fermer une connexion à une base de données ou un fichier.

    ```javascript
    function connectToDatabase() {
        try {
            console.log("Connexion à la base de données...");
            // Simule une erreur de connexion
            throw new Error("Échec de la connexion à la base de données");
        } catch (error) {
            console.error("Erreur :", error.message);
        } finally {
            console.log("Fermeture de la connexion à la base de données...");
        }
    }

    connectToDatabase();
    ```
