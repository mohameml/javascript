# cour 04 :

> En JavaScript, les **constructeurs intégrés (built-in constructors)** sont des fonctions prédéfinies utilisées pour créer des objets natifs ou primitifs du langage. Ils sont disponibles par défaut dans l'environnement JavaScript et permettent de manipuler divers types de données, tels que les chaînes de caractères, les nombres, les tableaux, et plus encore.

Ces constructeurs permettent de créer des instances de types d'objets natifs en utilisant le mot-clé `new` ou, dans certains cas, sans `new`.

## 1. **Principaux constructeurs intégrés en JavaScript**

Voici une liste des principaux constructeurs intégrés :

#### a. **Object**

Le constructeur `Object` permet de créer un objet générique. Tous les objets en JavaScript dérivent de `Object`.

```javascript
const obj = new Object(); // Crée un objet vide
const obj2 = { name: "Alice" }; // Autre façon de créer un objet
```

#### b. **Array**

Le constructeur `Array` crée un tableau, qui est une collection d'éléments indexés.

```javascript
const arr = new Array(1, 2, 3); // Crée un tableau [1, 2, 3]
const arr2 = [1, 2, 3]; // Syntaxe plus courante
```

#### c. **String**

Le constructeur `String` crée un objet chaîne de caractères (un objet de type `String`), bien que les chaînes de caractères littérales soient couramment utilisées.

```javascript
const str = new String("Hello"); // Crée un objet chaîne
const str2 = "Hello"; // Chaîne littérale (plus fréquente)
```

Note : les chaînes de caractères primitives (`'Hello'`) sont préférables dans la plupart des cas par rapport à l'objet `String`.

#### d. **Number**

Le constructeur `Number` crée un objet nombre. Cependant, les littéraux de nombres (comme `42`) sont plus couramment utilisés.

```javascript
const num = new Number(42); // Crée un objet `Number`
const num2 = 42; // Nombre littéral (plus fréquent)
```

#### e. **Boolean**

Le constructeur `Boolean` crée un objet booléen (`true` ou `false`).

```javascript
const bool = new Boolean(true); // Crée un objet `Boolean`
const bool2 = true; // Booléen littéral (plus fréquent)
```

#### f. **Function**

Le constructeur `Function` crée un nouvel objet fonction. En général, les fonctions sont définies directement avec des expressions ou des déclarations de fonction.

```javascript
const func = new Function("a", "b", "return a + b");
console.log(func(2, 3)); // 5
```

#### g. **Date**

Le constructeur `Date` crée un objet représentant une date et une heure.

```javascript
const date = new Date(); // Crée un objet `Date` avec la date actuelle
console.log(date); // Affiche la date et l'heure actuelles
```

#### h. **RegExp**

Le constructeur `RegExp` permet de créer un objet représentant une expression régulière, utile pour le traitement de chaînes de caractères.

```javascript
const regex = new RegExp("abc", "i"); // Crée une expression régulière insensible à la casse
const regex2 = /abc/i; // Syntaxe plus courante
```

#### i. **Error**

Le constructeur `Error` crée un objet représentant une erreur. Il existe plusieurs types d'erreurs dérivées : `TypeError`, `SyntaxError`, `ReferenceError`, etc.

```javascript
const error = new Error("Something went wrong");
throw error; // Lève une erreur
```

## 2. **Précautions à prendre avec les objets primitifs**

Bien que les constructeurs comme `String`, `Number` ou `Boolean` puissent être utilisés pour créer des objets correspondant aux types primitifs, il est recommandé d'utiliser les littéraux plutôt que les objets pour éviter des comportements inattendus :

```javascript
const strObj = new String("Hello");
const strPrimitive = "Hello";

console.log(typeof strObj); // "object"
console.log(typeof strPrimitive); // "string"

console.log(strObj === strPrimitive); // false (car l'un est un objet, l'autre est une chaîne primitive)
```
