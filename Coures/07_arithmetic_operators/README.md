# cour 7 : **Arithmetic Operators:**



## 1. **Les opérations Arthimétiques:**

- **Addition (+)** : Additionne deux valeurs.
   
   ```javascript
   let resultat = 5 + 3; // resultat vaut 8
   ```

- **Soustraction (-)** : Soustrait la deuxième valeur de la première.
   
   ```javascript
   let resultat = 5 - 3; // resultat vaut 2
   ```

- **Multiplication (*)** : Multiplie deux valeurs.
   
   ```javascript
   let resultat = 5 * 3; // resultat vaut 15
   ```

- **Division (/)** : Divise la première valeur par la deuxième.
   
   ```javascript
   let resultat = 6 / 3; // resultat vaut 2
   ```

- **Exponentiation (**)** : Élève la première valeur à la puissance de la deuxième.
   
   ```javascript
   let resultat = 2 ** 3; // resultat vaut 8 (2 à la puissance de 3)
   ```

- **Modulo (%)** : Renvoie le reste de la division entière de la première valeur par la deuxième.
   
   ```javascript
   let resultat = 7 % 3; // resultat vaut 1 (7 divisé par 3 donne un reste de 1)
   ```

- **Incrémentation (++)** : Incrémente la valeur d'une variable par 1.
   - **Post-incrémentation** : La valeur est d'abord utilisée, puis incrémentée.
   - **Pré-incrémentation** : La valeur est d'abord incrémentée, puis utilisée.
   
   ```javascript
   let x = 5;
   let postIncrement = x++; // postIncrement vaut 5, x vaut 6 après l'opération
   let preIncrement = ++x;  // preIncrement vaut 7, x vaut 7 après l'opération
   ```

- **Décrémentation (--)** : Décrémente la valeur d'une variable par 1.
   - **Post-décrémentation** : La valeur est d'abord utilisée, puis décrémentée.
   - **Pré-décrémentation** : La valeur est d'abord décrémentée, puis utilisée.
   
   ```javascript
   let y = 5;
   let postDecrement = y--; // postDecrement vaut 5, y vaut 4 après l'opération
   let preDecrement = --y;  // preDecrement vaut 3, y vaut 3 après l'opération
   ```


## 2. **Unreay Operation:**


- **Description :**

   >L'opérateur unaire `+` convertit une valeur en nombre. Si la valeur est déjà un nombre, elle reste inchangée. Si la valeur est une chaîne de caractères qui peut être convertie en nombre, elle est convertie en nombre. Si la valeur ne peut pas être convertie en nombre, elle devient NaN (Not a Number).

   - L'opérateur unaire `-` fonctionne de la même manière que l'opérateur `+`, mais il change également le signe du nombre résultant en négatif.


- **Syntaxe :**

   ```javascript
   +valeur
   ```
   ou
   ```javascript
   -valeur
   ```

- **Exemples :**

   ```javascript
   let num1 = +"100"; // Convertit la chaîne "100" en nombre 100
   let num2 = -"50";  // Convertit la chaîne "50" en nombre -50

   console.log(num1); // Affiche 100
   console.log(num2); // Affiche -50
   
   // de meme pour : true , flase ..etc 
   console.log(+true) // 1
   console.log(-true) // -1 
   console.log(+"") // 0 
   ```

