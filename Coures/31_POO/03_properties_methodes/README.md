# cour 03 :

> En JavaScript, les **propriétés** et les **méthodes** sont les éléments fondamentaux d'une classe qui définissent les données et les comportements des objets. Dans une classe, les **propriétés** sont des variables qui stockent des valeurs, tandis que les **méthodes** sont des fonctions qui décrivent les actions ou les comportements associés à ces données.

## 1. **Propriétés**

-   **Def:**

    > Les propriétés sont des variables définies dans le contexte d'une classe pour chaque objet créé à partir de cette classe. Elles représentent les **données** ou les **attributs** d'une instance de classe.

-   **Syntaxe:**

    Dans une classe, les propriétés sont généralement définies dans le **constructeur** avec le mot-clé `this` pour les attacher à l'instance courante de la classe.

    ```javascript
    class Person {
        constructor(name, age) {
            // Propriétés
            this.name = name;
            this.age = age;
        }
    }
    ```

-   **Exemple:**

    ```javascript
    class Person {
        constructor(name, age) {
            // Propriétés
            this.name = name;
            this.age = age;
        }
    }
    const person1 = new Person("Alice", 30);
    console.log(person1.name); // 'Alice'
    console.log(person1.age); // 30
    ```

### 2. **Méthodes**

-   **Def:**

    > Les méthodes sont des fonctions définies à l'intérieur d'une classe. Elles permettent de définir des **comportements** pour les objets créés à partir de la classe. Une méthode peut accéder et modifier les propriétés de l'objet à travers `this`.

-   **Syntaxe:**

    Les méthodes sont définies directement dans le corps de la classe, sans le mot-clé `function`.

    ```javascript
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        // Méthode
        greet() {
            console.log(
                `Hello, my name is ${this.name} and I'm ${this.age} years old.`
            );
        }
    }
    ```

## 3. **Propriétés et méthodes statiques**

-   **Def:**

    > Les propriétés et méthodes **statiques** appartiennent à la classe elle-même, plutôt qu'aux instances de la classe. Elles sont définies avec le mot-clé `static` et sont accessibles directement via la classe sans avoir besoin de créer une instance.

-   **Syntaxe:**

    ```javascript
    class Person {
        static species = "Homo sapiens"; // Propriété statique

        static describeSpecies() {
            // Méthode statique
            console.log(`We are ${this.species}.`);
        }
    }
    ```

-   **Exemple:**

    ```javascript
    console.log(Person.species); // 'Homo sapiens'
    Person.describeSpecies(); // 'We are Homo sapiens.'
    ```
