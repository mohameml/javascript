# cour 02 :

## 1. **Définition et syntaxe des constructeurs en JavaScript**

> Un **constructeur** en JavaScript est une fonction ou une méthode spéciale utilisée pour créer et initialiser des objets. Il définit les propriétés initiales de l'objet et, parfois, des méthodes. Il peut être utilisé à la fois avec la syntaxe des **fonctions** et des **classes**.

### a. Syntaxe avec **function**

Avant l'introduction des classes en ES6, les constructeurs étaient créés en utilisant des fonctions.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(
        `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
};
```

Dans cet exemple, `Person` est une fonction constructeur. Le mot-clé `this` est utilisé pour attacher des propriétés (`name`, `age`) à l'instance qui sera créée.

### b. Syntaxe avec **class**

Avec ES6, la création de classes a été introduite, simplifiant la syntaxe de la POO en JavaScript.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(
            `Hello, my name is ${this.name} and I'm ${this.age} years old.`
        );
    }
}
```

Dans cet exemple, la méthode spéciale `constructor()` est utilisée pour initialiser les propriétés `name` et `age` lors de la création d'une nouvelle instance de `Person`.

## 2. **Instantiation d'un objet**

L'instanciation est le processus de création d'un objet à partir d'une classe ou d'une fonction constructeur. Cela se fait avec le mot-clé `new`.

### a. Avec **function**

```javascript
const person1 = new Person("Alice", 30);
person1.greet(); // "Hello, my name is Alice and I'm 30 years old."
```

Ici, `new Person('Alice', 30)` crée une nouvelle instance de l'objet `Person` avec les propriétés `name` et `age`.

### b. Avec **class**

```javascript
const person2 = new Person("Bob", 25);
person2.greet(); // "Hello, my name is Bob and I'm 25 years old."
```

C'est exactement le même principe que pour les fonctions, mais avec la syntaxe `class`.

### 3. **`instanceof`**

L'opérateur `instanceof` permet de vérifier si un objet est une instance d'une classe ou d'une fonction constructeur. Il retourne `true` si l'objet est une instance, sinon `false`.

-   **Exemple avec **function** :**

```javascript
const person1 = new Person("Alice", 30);
console.log(person1 instanceof Person); // true
console.log(person1 instanceof Object); // true
```

`person1` est bien une instance de `Person`, et aussi une instance de `Object`, car tout objet en JavaScript dérive d'`Object`.

-   **Exemple avec class :**

```javascript
const person2 = new Person("Bob", 25);
console.log(person2 instanceof Person); // true
console.log(person2 instanceof Object); // true
```

De même, `person2` est une instance de `Person` et de `Object`.

L'opérateur `instanceof` est très utile pour vérifier le type d'objet, notamment dans des scénarios où plusieurs types d'objets peuvent coexister.
