# cour 05 :

> En JavaScript, **l'héritage** est un concept clé de la **programmation orientée objet** (POO) qui permet à une classe (ou fonction constructeur) de **hériter des propriétés et méthodes** d'une autre classe. Cela favorise la réutilisation du code et permet de créer des relations entre différentes classes, où les classes "enfant" (ou "dérivées") peuvent étendre ou remplacer les fonctionnalités de leurs classes "parent" (ou "de base").

### 1. **Héritage avec `class` en JavaScript**

-   **Def:**

    Depuis l'introduction d'ES6, JavaScript permet de définir des classes de manière plus formelle grâce à la syntaxe `class`. Pour mettre en place l'héritage, le mot-clé `extends` est utilisé, et pour appeler le constructeur parent, on utilise `super()`.

-   **Exemple d'héritage:**

    ```javascript
    class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(`${this.name} makes a noise.`);
        }
    }

    class Dog extends Animal {
        constructor(name, breed) {
            super(name); // Appelle le constructeur de la classe parent
            this.breed = breed;
        }

        speak() {
            console.log(`${this.name}, the ${this.breed}, barks.`);
        }
    }

    const dog1 = new Dog("Max", "Labrador");
    dog1.speak(); // "Max, the Labrador, barks."
    ```

### RQ : **Utilisation de `super()`**

-   Le mot-clé `super()` permet d'appeler le constructeur de la classe parent dans le constructeur de la classe enfant. Il doit être appelé avant d'accéder à `this` dans le constructeur enfant.

## 2. **Héritage de méthodes**

-   En plus d'hériter des propriétés, une classe enfant hérite également des méthodes de la classe parent, sauf si elles sont redéfinies (surcharge). On peut également appeler la méthode du parent depuis la classe enfant avec `super.methodName()`.

-   **Exemple:**

    ```javascript
    class Bird extends Animal {
        constructor(name) {
            super(name);
        }

        speak() {
            super.speak(); // Appelle la méthode `speak()` de la classe parent
            console.log(`${this.name} chirps.`);
        }
    }

    const bird1 = new Bird("Tweety");
    bird1.speak();
    // "Tweety makes a noise."
    // "Tweety chirps."
    ```

    Ici, la méthode `speak()` de la classe `Bird` appelle d'abord `super.speak()`, ce qui exécute la méthode de la classe parent `Animal`, puis ajoute son propre comportement spécifique.
