# cour 15 : **`fonction d'ordre supérieur:`**

## 1. **Introduction**

Une fonction d'ordre supérieur (higher-order function en anglais) est une fonction qui prend une ou plusieurs fonctions comme arguments et/ou qui retourne une fonction en tant que résultat. En JavaScript, les fonctions sont des citoyens de première classe, ce qui signifie qu'elles peuvent être traitées de la même manière que n'importe quelle autre valeur, comme les nombres, les chaînes de caractères ou les objets. Cela permet à JavaScript de supporter les fonctions d'ordre supérieur.

Voici un exemple simple d'une fonction d'ordre supérieur en JavaScript :

```javascript
function operation(a, b, callback) {
  return callback(a, b);
}

function addition(a, b) {
  return a + b;
}

function multiplication(a, b) {
  return a * b;
}

console.log(operation(5, 3, addition)); // Affiche 8
console.log(operation(5, 3, multiplication)); // Affiche 15
```

Dans cet exemple, la fonction `operation` est une fonction d'ordre supérieur car elle prend une fonction (`callback`) en tant qu'argument. En fonction de la fonction `callback` fournie en argument, `operation` effectue une opération différente sur les deux nombres `a` et `b`. Ainsi, `addition` et `multiplication` sont des fonctions qui peuvent être passées à `operation` en tant que fonctions de rappel (callback functions).

Les fonctions d'ordre supérieur sont largement utilisées en programmation fonctionnelle et sont utiles pour abstraire des opérations répétitives, rendre le code plus lisible et favoriser la réutilisabilité. Elles permettent également de passer des comportements en tant que paramètres, ce qui facilite la composition de fonctions et la création de logiciels modulaires.
