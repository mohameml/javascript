# cour : **Ranges**

## 1. **Introduction:**

-   **Description:**

    > Les **ranges** en expressions régulières (regex) permettent de spécifier un ensemble de caractères ou une plage de caractères que l'on souhaite correspondre. Ils sont définis entre des crochets `[ ]`. Les ranges sont particulièrement utiles pour rechercher des caractères qui appartiennent à un certain ensemble, comme des chiffres, des lettres minuscules ou majuscules, etc.

-   **Syntaxe:**

    ```js
    let regex = /[set_of_characters]/;
    ```

    -   **set_of_characters** : Un ensemble de caractères ou de plages de caractères. Par exemple, `[0-9]` correspond à n'importe quel chiffre entre 0 et 9.

-   **Exemples:**

    ```javascript
    const regex1 = /[0-9]/g;
    const regex2 = /[2-8]/g;
    const regex3 = /[1456]/g; // set = {1,4,5,6}

    const regexStr1 = /[A-Z]/g;
    const regexStr2 = /[a-z]/g;
    const regexStr3 = /[abec]/g; // set = {a,b,e,c}
    ```

## 2. **Ranges Partucileres:**

1. **Plage de chiffres : `[0-9]`**

    - **Description** : Cette expression régulière correspond à n'importe quel chiffre de 0 à 9.
    - **Exemple** :
        ```javascript
        const text = "Mon code postal est 12345.";
        const regex = /[0-9]/g;
        const result = text.match(regex);
        console.log(result); // ["1", "2", "3", "4", "5"]
        ```

2. **Plage de lettres minuscules : `[a-z]`**

    - **Description** : Cette expression régulière correspond à n'importe quelle lettre minuscule de l'alphabet.
    - **Exemple** :
        ```javascript
        const text = "Hello World!";
        const regex = /[a-z]/g;
        const result = text.match(regex);
        console.log(result); // ["e", "l", "l", "o", "o", "r", "l", "d"]
        ```

3. **Plage de lettres majuscules : `[A-Z]`**

    - **Description** : Cette expression régulière correspond à n'importe quelle lettre majuscule de l'alphabet.
    - **Exemple** :
        ```javascript
        const text = "Hello World!";
        const regex = /[A-Z]/g;
        const result = text.match(regex);
        console.log(result); // ["H", "W"]
        ```

## 3. **Opérations : `| , ^ `**

1. **Expression Or avec `|` : `(Exp1|Exp2)`**

    - **Description** : Cette expression correspond soit à `Exp1`, soit à `Exp2`.
    - **Exemple** :
        ```javascript
        const text = "chat ou chien";
        const regex = /(chat|chien)/g;
        const result = text.match(regex);
        console.log(result); // ["chat", "chien"]
        ```

2. **Négation avec `[^Exp]`**

    - **Description** : Cette expression correspond à tout caractère qui n'est **pas** dans l'ensemble défini par `Exp`.
    - **Exemple** :
        ```javascript
        const text = "Hello, World!";
        const regex = /[^a-zA-Z]/g;
        const result = text.match(regex);
        console.log(result); // [",", " ", "!"]
        ```
    - **Explication** : `[^a-zA-Z]` capture tout caractère qui n'est pas une lettre (ni minuscule ni majuscule).

3. **Combinaison de caractères `[Exp1Exp2]`**
    - **Description** : Cette expression correspond à n'importe quel caractère qui est soit `Exp1`, soit `Exp2`, etc.
    - **Exemple** :
        ```javascript
        const text = "2023-08-29";
        const regex = /[0-9-]/g;
        const result = text.match(regex);
        console.log(result); // ["2", "0", "2", "3", "-", "0", "8", "-", "2", "9"]
        ```
    - **Explication** : `[0-9-]` capture soit un chiffre, soit un tiret.
