# cour 32 :

## 1. **Introduction:**

-   **Definition:**

    > En JavaScript, chaque objet a une propriété interne appelée `prototype`. Le prototype est lui-même un objet, et il peut avoir ses propres propriétés et méthodes. Lorsqu'on accède à une propriété ou à une méthode d'un objet, JavaScript recherche d'abord dans cet objet, puis dans son prototype, et ainsi de suite, jusqu'à ce qu'il atteigne le prototype de base (`Object.prototype`). Si la propriété ou la méthode n'est pas trouvée, JavaScript renvoie `undefined`.

    -   On peut aussi accéder au prototype d'un objet en utilisant `Object.getPrototypeOf(obj)`.

    -   Vous pouvez ajouter des propriétés ou des méthodes au prototype d'un constructeur. Cela signifie que toutes les instances créées avec ce constructeur auront accès à ces propriétés et méthodes via leur prototype.

-   **Exemple** :

    ```javascript
    function Person(name) {
        this.name = name;
    }

    // Ajout d'une méthode au prototype de Person
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is " + this.name);
    };

    const alice = new Person("Alice");
    alice.sayHello(); // Affiche : Hello, my name is Alice
    ```

## 2. **prototype chain :**

-   **Description :**

    > Le prototype d’un objet est un autre objet à partir duquel il hérite des propriétés et méthodes. Ajouter une méthode ou une propriété au prototype signifie étendre les fonctionnalités de toutes les instances d’un type spécifique.

-   **Syntaxe**

    ```javascript
    Constructor.prototype.newMethodOrProperty = function () {
        // définition de la méthode
    };
    ```

    -   `Constructor :` peut être une fonction constructeur définissant le type d’objet.

-   **Exemple : Ajouter une méthode au prototype**

    ```javascript
    function Person(name) {
        this.name = name;
    }

    // Ajouter une méthode "sayHello" au prototype de Person
    Person.prototype.sayHello = function () {
        console.log(`Hello, my name is ${this.name}!`);
    };

    // Exemple d'utilisation
    const alice = new Person("Alice");
    alice.sayHello(); // Affiche : "Hello, my name is Alice!"

    const bob = new Person("Bob");
    bob.sayHello(); // Affiche : "Hello, my name is Bob!"
    ```
