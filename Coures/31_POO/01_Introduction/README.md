# cour 01 :

## 1. **Définition:**

> La **programmation orientée objet (POO)** en JavaScript est un paradigme de programmation qui permet de structurer le code en utilisant des objets. Un objet est une collection de propriétés et de méthodes qui représentent des caractéristiques et des comportements d'entités du monde réel ou abstraites. En POO, l'accent est mis sur la création de ces objets pour modéliser les composants d'une application.

## 2. **Concepts clés :**

En JavaScript, la POO repose sur quatre concepts clés :

1. **Encapsulation** : regrouper les données (propriétés) et les comportements (méthodes) d'un objet en un seul module. Cela permet de restreindre l'accès direct aux données de l'objet, en ne rendant accessibles que certaines parties via des méthodes publiques.

2. **Héritage** : un objet ou une classe peut hériter des propriétés et des méthodes d'un autre objet ou classe. Cela favorise la réutilisation du code, car on peut créer de nouvelles entités basées sur des entités existantes.

3. **Polymorphisme** : la capacité d'un objet à adopter différentes formes. Il permet aux méthodes de réagir différemment selon le contexte ou les objets qui les invoquent.

4. **Abstraction** : ne montrer que les détails essentiels d'un objet tout en cachant les détails d'implémentation. Cela simplifie l'utilisation des objets complexes.

## 3. **À quoi sert la POO en JavaScript ?**

-   **Modularité** : la POO permet de structurer le code en modules, rendant l'application plus facile à maintenir et à développer, surtout pour les grandes applications.

-   **Réutilisation du code** : grâce à l'héritage et au polymorphisme, il est plus facile de réutiliser des composants déjà créés, ce qui réduit les redondances et améliore l'efficacité.

-   **Lisibilité et maintenabilité** : la POO permet d'organiser le code de manière plus claire et intuitive, facilitant ainsi la compréhension pour les développeurs qui travaillent en équipe ou sur des projets à long terme.

-   **Gestion de la complexité** : avec l'encapsulation et l'abstraction, les détails complexes sont cachés derrière des interfaces simples, ce qui réduit la complexité apparente du code.

## 4. **Exemples en JavaScript:**

Depuis ES6, JavaScript permet de définir des classes, ce qui simplifie l'approche orientée objet :

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

const person1 = new Person("Alice", 30);
person1.greet(); // "Hello, my name is Alice and I'm 30 years old."
```

Dans cet exemple, la classe `Person` encapsule les propriétés `name` et `age` ainsi qu'une méthode `greet()`, démontrant les principes de la POO.
