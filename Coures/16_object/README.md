# cour 16 : **Objetc:**

## 1. **Introduction:**

- **Definition:**

  > Les objets sont des éléments fondamentaux de JavaScript, permettant de regrouper des données et des fonctionnalités dans une seule entité que l'on appelle objet .

- **Propriétés et méthodes :**

  - Les propriétés d'un objet sont des paires clé-valeur, où la clé est une chaîne (ou un symbole) et la valeur peut être de n'importe quel type de données JavaScript.
  - Les méthodes d'un objet sont des fonctions qui peuvent être appelées et exécutées sur cet objet.

- **Syntaxe :**

  ```javascript
  // Déclaration d'un objet
  let nomObjet = {
    prop1: "val1",
    prop2: val2,
    methode1: function () {
      // .... code
    },
  };
  // avce le constructeur Objetc :
  let nameObject = new Object(); // vide
  let nameObject = new Object({
    prop1: "val1",
    prop2: val2,
  });
  ```

- **Accès aux propriétés :**

  - Les propriétés d'un objet peuvent être accédées à l'aide de la notation par point (`objet.nomDePropriete`) ou de la notation entre crochets (`objet["nomDePropriete"]`).
  - La notation par point est plus courante et plus concise, mais la notation entre crochets est utile lorsque le nom de la propriété est une variable ou contient des caractères spéciaux.

    ```js
    monObjet.prop1;
    monObjet.methode1();
    // ou
    monObjet["prop1"];
    // ou
    let nomVar = "prop1";
    monObjet[nomVar];
    ```

- **Exemple :**

  ```javascript
  let voiture = {
    marque: "Toyota",
    modèle: "Corolla",
    année: 2022,
    démarrer: function () {
      console.log("La voiture démarre.");
    },
  };

  console.log(voiture.marque); // Affiche "Toyota"
  voiture.démarrer(); // Affiche "La voiture démarre."
  ```

## 2. **`modifier` une valeur, `ajouter` une propriété ou une méthode :**

- **Description:**

  > Pour modifier une valeur, ajouter une propriété ou une méthode à un objet en JavaScript, vous pouvez utiliser la notation par point ou la notation entre crochets pour accéder à la propriété que vous souhaitez modifier ou ajouter. Ensuite, vous pouvez simplement affecter une nouvelle valeur à cette propriété pour la modifier, ou assigner une nouvelle propriété ou méthode à l'objet.

- **Syntaxe :**

  ```javascript
  objet.nomDePropriete = nouvelleValeur;
  ```

  ```javascript
  objet.nouvellePropriete = valeur;
  ```

  ```javascript
  objet.nomDeMethode = function () {
    // Corps de la méthode
  };
  ```

- **Exemple :**

  ```javascript
  let personne = {
    nom: "Alice",
    age: 30,
  };

  personne.age = 31;
  console.log(personne.age); // Affiche 31
  ```

  ```javascript
  let personne = {
    nom: "Bob",
    age: 25,
  };

  personne.profession = "Développeur";
  console.log(personne.profession); // Affiche "Développeur"
  ```

  ```javascript
  let voiture = {
    marque: "Toyota",
    démarrer: function () {
      console.log("La voiture démarre.");
    },
  };

  voiture.éteindre = function () {
    console.log("La voiture s'éteint.");
  };

  voiture.éteindre(); // Affiche "La voiture s'éteint."
  ```

## 3. **`this`:**

- **Description** :

  > Le mot clé `this` en JavaScript fait référence à l'objet courant dans lequel le code est exécuté. Son comportement dépend du contexte dans lequel il est utilisé, mais généralement, il se réfère à l'objet sur lequel une méthode est appelée.

- **Syntaxe** :

  ```javascript
  this;
  ```

- **Exemple** :

  ```javascript
  let personne = {
    nom: "Alice",
    age: 30,
    afficherInfo: function () {
      console.log("Nom: " + this.nom + ", Age: " + this.age);
    },
  };

  personne.afficherInfo(); // Affiche "Nom: Alice, Age: 30"
  ```

  ```JS
  let btn = document.getElementById("btn");
  // this : fait réferance à btn
  btn.onclick = function () {
    console.log(this);
  };

  ```

## 4. **`prototype`:**

- **Définition:**

  > En JavaScript, le prototype est un mécanisme clé qui permet l'héritage et la réutilisation de propriétés et de méthodes entre les objets. Chaque objet en JavaScript a un prototype qui est une référence vers un autre objet. Lorsqu'une propriété ou une méthode est accédée sur un objet et que cette propriété ou méthode n'existe pas sur cet objet lui-même, JavaScript recherche cette propriété ou méthode dans son prototype.

- **Propriétes:**

  - **Relation de prototype** : Chaque objet en JavaScript a un prototype, qui peut être un autre objet ou `null`. Les objets qui ont un prototype sont appelés des objets héritants.

  - **Chaîne de prototypes** : Lorsqu'un objet recherche une propriété ou une méthode, JavaScript suit la chaîne de prototypes jusqu'à ce qu'il trouve la propriété ou qu'il atteigne la fin de la chaîne (c'est-à-dire un objet dont le prototype est `null`).

  - **Propriétés et méthodes héritées** : Les propriétés et les méthodes définies sur le prototype d'un objet sont partagées entre tous les objets héritant de ce prototype. Cela permet de réutiliser du code et de créer une structure d'héritage.

  4. **Modification dynamique du prototype** : Vous pouvez modifier le prototype d'un objet à tout moment, même après la création de cet objet. Tous les objets héritant du prototype modifié refléteront ces changements.

  5. **Utilisation de `__proto__` et `Object.getPrototypeOf()`** : Avant ECMAScript 6, la propriété `__proto__` était utilisée pour accéder au prototype d'un objet. Depuis ECMAScript 6, la méthode `Object.getPrototypeOf()` est recommandée pour accéder au prototype d'un objet.

- **Exemple:**

  ```javascript
  // Définition d'un objet prototype
  let animal = {
    manger: function () {
      console.log("L'animal mange.");
    },
  };

  // Création d'un nouvel objet héritant du prototype 'animal'
  let chat = Object.create(animal);

  // Ajout d'une nouvelle méthode spécifique au chat
  chat.miauler = function () {
    console.log("Le chat miaule.");
  };

  // Utilisation des méthodes héritées et spécifiques
  chat.manger(); // Affiche "L'animal mange."
  chat.miauler(); // Affiche "Le chat miaule."

  // Accès au prototype de l'objet chat
  console.log(Object.getPrototypeOf(chat) === animal); // Affiche true
  ```

## 5. **`Object.create()`:**

- **Description** :

  > La fonction `Object.create()` en JavaScript est une méthode utilisée pour créer un nouvel objet avec un prototype spécifié. Elle permet de créer un objet en spécifiant explicitement son prototype plutôt qu'en utilisant une syntaxe de constructeur classique comme avec `new`.

  - `Object.create()` est une méthode qui crée un nouvel objet avec le prototype spécifié. Le prototype peut être un objet ou `null`.
  - Cette méthode est utile lorsque vous souhaitez créer un nouvel objet avec un prototype spécifique sans avoir besoin d'un constructeur.
  - Elle offre un moyen de créer des objets avec une chaîne de prototype personnalisée, permettant une meilleure gestion des héritages dans JavaScript.

- **Syntaxe** :

  ```javascript
  Object.create(prototype);
  ```

  - `prototype` : L'objet qui deviendra le prototype du nouvel objet créé.

- **Exemple** :

  ```javascript
  // Définir un objet prototype
  let animal = {
    faireDuBruit: function () {
      console.log(this.son);
    },
  };

  // Créer un nouvel objet avec animal comme prototype
  let chien = Object.create(animal);

  // Définir des propriétés spécifiques au chien
  chien.son = "Woof!";
  chien.couleur = "marron";

  // Utiliser la méthode héritée
  chien.faireDuBruit(); // Affiche "Woof!"

  // Vérifier l'héritage du prototype
  console.log(chien instanceof animal); // Affiche true
  ```

## 6. **La méthode `Object.assign()`:**

- **Description** :

  > La méthode `Object.assign()` en JavaScript est une fonction utilitaire qui est utilisée pour copier les valeurs de toutes les propriétés énumérables propres d'un ou plusieurs objets source vers un objet cible. Elle retourne l'objet cible après avoir copié les propriétés.

  - `Object.assign()` est utilisé pour fusionner les propriétés de plusieurs objets source dans un objet cible.

- **Syntaxe** :

  ```javascript
  Object.assign(cible, ...sources);
  ```

  - `cible` : L'objet cible où les propriétés seront copiées. Cet objet sera modifié et renvoyé par la méthode.
  - `sources` : Un ou plusieurs objets source dont les propriétés seront copiées vers l'objet cible.

- **Exemple** :

  ```javascript
  // Définition des objets sources
  let objet1 = { a: 1, b: 2 };
  let objet2 = { b: 3, c: 4 };
  let objet3 = { d: 5 };

  // Fusionner les propriétés des objets sources dans un objet cible
  let objetCible = {};

  Object.assign(objetCible, objet1, objet2, objet3);

  console.log(objetCible); // Affiche { a: 1, b: 3, c: 4, d: 5 }
  ```
