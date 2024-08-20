# cour 04 : **WeakMap**

## 1. Introduction

> Un `WeakMap` est une collection de paires clé-valeur, où les clés sont obligatoirement des objets, et les valeurs peuvent être de n'importe quel type. Comme les `Map`, les `WeakMap` permettent de stocker des données associées à des objets. Cependant, une différence clé réside dans la gestion de la mémoire : les `WeakMap` permettent au ramasse-miettes (garbage collector) de libérer la mémoire occupée par un objet si cet objet n'est plus référencé ailleurs dans le programme. Cela rend les `WeakMap` particulièrement utiles pour éviter les fuites de mémoire dans les applications JavaScript.

## 2. **Création et Propriétés:**

-   **Création :**

    Une `WeakMap` peut être créée en utilisant le constructeur `WeakMap()` et en passant éventuellement un tableau de paires clé-valeur.

    ```javascript
    const maWeakMap = new WeakMap();

    // Avec des paires clé-valeur initiales
    const obj1 = {};
    const obj2 = {};

    const maWeakMap = new WeakMap([
        [obj1, "Valeur associée à obj1"],
        [obj2, "Valeur associée à obj2"],
    ]);
    ```

-   **Propriétés :**

    Contrairement aux `Map`, les `WeakMap` n'ont pas de propriétés comme `size` et ne supportent pas d'itérations directes (pas de méthodes `keys()`, `values()`, ou `entries()`). Cela est dû à leur conception qui permet au ramasse-miettes de supprimer des entrées sans qu'il soit possible de les lister ou de les inspecter directement.

## 3. **Méthodes:**

1. **set(clé, valeur)** :

    Ajoute ou met à jour une paire clé-valeur dans la `WeakMap`. La clé doit être un objet.

    ```javascript
    const obj = {};
    maWeakMap.set(obj, "Quelque chose");

    console.log(maWeakMap.get(obj)); // Affiche : 'Quelque chose'
    ```

2. **get(clé)** :

    Récupère la valeur associée à une clé spécifique. Si la clé n'existe pas, retourne `undefined`.

    ```javascript
    console.log(maWeakMap.get(obj)); // Affiche : 'Quelque chose'
    console.log(maWeakMap.get({})); // Affiche : undefined (car la clé {} est un nouvel objet)
    ```

3. **has(clé)** :

    Vérifie si une clé spécifique existe dans la `WeakMap`. Renvoie `true` si la clé est présente, sinon `false`.

    ```javascript
    console.log(maWeakMap.has(obj)); // Affiche : true
    console.log(maWeakMap.has({})); // Affiche : false
    ```

4. **delete(clé)** :

    Supprime une paire clé-valeur de la `WeakMap` en utilisant la clé. Renvoie `true` si la suppression a réussi, sinon `false`.

    ```javascript
    maWeakMap.delete(obj);
    console.log(maWeakMap.has(obj)); // Affiche : false
    ```

## 4. **Cas d'Utilisation:**

1. **Gestion de données privées** :

    Les `WeakMap` sont souvent utilisées pour stocker des données privées associées à des objets, en particulier dans des implémentations de classes ou de modules, sans exposer ces données à l'extérieur.

    ```javascript
    const donnéesPrivées = new WeakMap();

    class Personne {
        constructor(nom) {
            donnéesPrivées.set(this, { nom });
        }

        getNom() {
            return donnéesPrivées.get(this).nom;
        }
    }

    const jean = new Personne("Jean");
    console.log(jean.getNom()); // Affiche : 'Jean'
    ```

2. **Suivi d'objets temporaires** :

    Vous pouvez utiliser une `WeakMap` pour suivre des objets temporaires ou des métadonnées associées à des objets DOM, par exemple, sans avoir à vous soucier de libérer manuellement la mémoire.

    ```javascript
    const suivi = new WeakMap();

    function utiliserObjet(obj) {
        if (!suivi.has(obj)) {
            suivi.set(obj, Date.now());
        }
        // Utilisation de l'objet...
    }

    const objetTemporaire = {};
    utiliserObjet(objetTemporaire);
    // Plus tard, objetTemporaire est supprimé ou n'est plus utilisé,
    // il sera libéré par le garbage collector automatiquement.
    ```
