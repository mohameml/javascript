# cour 36 : **Modules**

> Les **modules** en JavaScript permettent de mieux organiser le code en le divisant en fichiers séparés, ce qui facilite la réutilisation, la maintenance et le partage de code. Les modules utilisent les mots-clés **`import`** et **`export`** pour permettre l'importation et l'exportation de fonctionnalités entre différents fichiers.

## 1. **export:**

-   **Definition:**

    -   En JavaScript, il existe deux façons d'exporter des éléments d'un module : **l'exportation nommée** et **l'exportation par défaut**.

    -   **Named Exports:** Vous pouvez exporter plusieurs éléments à la fois avec des **noms** spécifiques. Cela permet d'exporter des fonctions, des objets, ou des variables sous un nom particulier.

    -   Une **exportation par défaut** permet d'exporter un seul élément à la fois. Cela peut être une fonction, un objet ou une classe, et elle peut être importée sous n'importe quel nom dans le fichier d'importation.

-   **Syntaxe :**

    ```javascript
    // Exportation d'une fonction
    export function myFunction() {
        console.log("Hello World");
    }

    // Exportation d'une variable
    export const myVariable = 42;

    // Exportation d'un objet
    export const myObject = {
        name: "Alice",
        age: 30,
    };

    // Exportation par défaut d'une fonction
    export default function () {
        console.log("Fonction par défaut");
    }

    // ou
    export { myFunction, myObject };
    ```

## 2. **import:**

-   **Definition:**

    -   Une fois que vous avez exporté des éléments depuis un module, vous pouvez les **importer** dans d'autres modules.

    -   **Named Import:** Lorsque vous utilisez une exportation nommée, vous devez spécifier exactement ce que vous voulez importer en utilisant le même nom que l'élément exporté.

    -   **Default Import:** Si un module a une exportation par défaut, vous pouvez l'importer sans avoir à spécifier de nom (vous pouvez utiliser n'importe quel nom pour l'élément importé).

    -   **Import All:** Si vous voulez importer tous les éléments exportés d'un module sous un seul objet, vous pouvez utiliser `* as`.

-   **Syntaxe :**

    ```javascript
    // Importation d'éléments spécifiques depuis un module
    import { myFunction , myVariable } from './file1.js';

    // Vous pouvez aussi renommer les éléments importés si nécessaire
    import { myFunction as fn, myVariable as var } from './file1.js';

    // Import Default
    import nImporteQuelleNom from "./file1.js"

    // Importer tous les éléments d'un module sous un objet
    import * as myModule from "./file1.js";
    ```

### RQ : **Utilisation dans les navigateurs**

-   Pour que cela fonctionne dans le navigateur, vous devez spécifier le type de script comme étant un module en utilisant l'attribut `type="module"` dans votre balise `<script>`.
