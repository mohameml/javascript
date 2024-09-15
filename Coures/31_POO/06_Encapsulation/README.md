# cour 06 :

## 1. **Introduction:**

> **L'encapsulation** est un concept fondamental en **programmation orientée objet (POO)** qui consiste à regrouper les données (propriétés) et les méthodes (fonctions) qui agissent sur ces données au sein d'une même entité, souvent appelée **classe**. Elle vise à **protéger** l'état interne d'un objet en limitant l'accès direct à certaines de ses propriétés ou méthodes, en rendant certaines privées et accessibles uniquement via des méthodes publiques (getters et setters, par exemple).

-   En JavaScript, l'encapsulation peut être implémentée de plusieurs manières, surtout depuis l'introduction des **membres privés** avec les symboles `#` dans la syntaxe des classes en ES6. Cependant, avant ES6, des méthodes indirectes comme les **closures** étaient utilisées pour simuler des propriétés privées.

## 2. **Encapsulation avec des classes en ES6**

-   Depuis ES6, l'encapsulation est plus facilement réalisable grâce aux **classes** et à la nouvelle syntaxe pour les **propriétés privées** avec `#`.

-   **Propriétés privées avec `#` :** Les propriétés et méthodes préfixées par `#` sont considérées comme privées et ne sont pas accessibles directement à l'extérieur de la classe.

-   **Exemple d'encapsulation :**

    ```javascript
    class Person {
        // Propriété privée
        #age;

        constructor(name, age) {
            this.name = name;
            this.#age = age;
        }

        // Getter pour accéder à la propriété privée
        getAge() {
            return this.#age;
        }

        // Setter pour modifier la propriété privée
        setAge(newAge) {
            if (newAge > 0) {
                this.#age = newAge;
            } else {
                console.log("Invalid age");
            }
        }
    }

    const person1 = new Person("Alice", 30);

    console.log(person1.name); // "Alice"
    console.log(person1.getAge()); // 30
    person1.setAge(35); // Met à jour l'âge
    console.log(person1.getAge()); // 35

    // Accès direct à la propriété privée n'est pas possible
    console.log(person1.#age); // SyntaxError : Cannot access private field
    ```

## 3. **Encapsulation avec des closures (avant ES6)**

-   Avant l'introduction des propriétés privées avec `#`, les développeurs utilisaient des **closures** pour implémenter l'encapsulation. Les closures permettent de garder des variables privées, car les fonctions internes peuvent capturer les variables définies dans leur portée.

-   **Exemple d'encapsulation avec closures :**

    ```javascript
    function Person(name, age) {
        let _age = age; // Variable privée

        this.name = name;

        // Méthode pour accéder à l'âge
        this.getAge = function () {
            return _age;
        };

        // Méthode pour modifier l'âge
        this.setAge = function (newAge) {
            if (newAge > 0) {
                _age = newAge;
            } else {
                console.log("Invalid age");
            }
        };
    }

    const person1 = new Person("Bob", 40);

    console.log(person1.name); // "Bob"
    console.log(person1.getAge()); // 40
    person1.setAge(45); // Met à jour l'âge
    console.log(person1.getAge()); // 45

    // Impossible d'accéder directement à _age
    console.log(person1._age); // undefined
    ```

    -   **`_age`** : C'est une variable privée, car elle est encapsulée dans la portée de la fonction constructeur `Person`. Elle n'est pas accessible directement en dehors de l'objet.
    -   **Méthodes `getAge()` et `setAge()`** : Ces méthodes permettent d'accéder et de modifier la variable privée `_age` en contrôlant l'accès.

### 4. **Getters et Setters**

-   Une autre façon d'implémenter l'encapsulation en JavaScript consiste à utiliser les **getters** et **setters**. Ce sont des méthodes spéciales qui permettent d'accéder ou de modifier des propriétés tout en appliquant des contrôles.

-   **Exemple avec getters et setters :**

    ```javascript
    class Person {
        constructor(name, age) {
            this.name = name;
            this._age = age; // Convention: le "_" indique une propriété privée
        }

        // Getter
        get age() {
            return this._age;
        }

        // Setter
        set age(newAge) {
            if (newAge > 0) {
                this._age = newAge;
            } else {
                console.log("Invalid age");
            }
        }
    }

    const person1 = new Person("Charlie", 50);

    console.log(person1.age); // 50 (utilise le getter)
    person1.age = 55; // Met à jour l'âge via le setter
    console.log(person1.age); // 55
    person1.age = -5; // "Invalid age" (contrôle dans le setter)
    ```
