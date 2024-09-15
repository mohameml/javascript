# cour 32 :

## 1. **Introduction:**

En JavaScript, un prototype est un mécanisme puissant qui permet de créer des objets et d'hériter des propriétés et méthodes d'autres objets. Voici une introduction et une définition de ce concept :

### Introduction

En JavaScript, chaque objet a une propriété interne appelée `prototype`. Le prototype est lui-même un objet, et il peut avoir ses propres propriétés et méthodes. Lorsqu'on accède à une propriété ou à une méthode d'un objet, JavaScript recherche d'abord dans cet objet, puis dans son prototype, et ainsi de suite, jusqu'à ce qu'il atteigne le prototype de base (`Object.prototype`). Si la propriété ou la méthode n'est pas trouvée, JavaScript renvoie `undefined`.

### Définition

1. **Prototype d'un Objet** :

    - Chaque objet en JavaScript a un prototype, accessible via la propriété `__proto__` (non recommandée pour une utilisation directe, car c'est une propriété héritée du passé et non standard).
    - On peut aussi accéder au prototype d'un objet en utilisant `Object.getPrototypeOf(obj)`.

2. **Modification du Prototype** :

    - Vous pouvez ajouter des propriétés ou des méthodes au prototype d'un constructeur. Cela signifie que toutes les instances créées avec ce constructeur auront accès à ces propriétés et méthodes via leur prototype.

3. **Exemple** :

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

    Dans cet exemple, la méthode `sayHello` est ajoutée au prototype de `Person`. Ainsi, toutes les instances de `Person`, comme `alice`, peuvent utiliser cette méthode.

4. **Chaîne de Prototypes** :

    - La chaîne de prototypes est la chaîne de prototypes qui est utilisée pour rechercher des propriétés et des méthodes. Elle commence par l'objet lui-même et remonte jusqu'à `Object.prototype`.

5. **Héritage Prototypal** :
    - JavaScript utilise l'héritage prototypal, ce qui signifie que les objets peuvent hériter directement d'autres objets. Cela contraste avec l'héritage basé sur les classes que l'on trouve dans d'autres langages orientés objet.

Le système de prototypes permet une grande flexibilité dans la manière dont les objets partagent des comportements et des données en JavaScript. C'est une partie essentielle du langage qui sous-tend la plupart des mécanismes de création d'objets et d'héritage.
