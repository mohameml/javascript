# cour : **quantificateurs:**

## 1. **Introduction:**

-   **Description:**

    > Les **quantificateurs** en regex sont des éléments qui spécifient combien de fois un certain motif doit apparaître pour qu'une correspondance soit trouvée. Ils permettent de préciser la quantité d'occurrences d'un caractère ou d'un groupe de caractères.

-   **Les principaux quantificateurs :**

    1. **`+` (Un ou plusieurs)**

        - **Description :** Ce quantificateur correspond à **une ou plusieurs** occurrences de l'élément qui le précède.
        - **Exemple :**
            - **Regex :** `/a+/`
            - **Correspond à :** "a", "aa", "aaa", etc., mais ne correspond pas à une absence de "a".
            - **Chaîne :** `"caaaat"` correspond à "aaaa".

    2. **`*` (Zéro ou plusieurs)**

        - **Description :** Ce quantificateur correspond à **zéro ou plusieurs** occurrences de l'élément qui le précède.
        - **Exemple :**
            - **Regex :** `/a*/`
            - **Correspond à :** "", "a", "aa", "aaa", etc. Il correspond même si l'élément n'est pas présent.
            - **Chaîne :** `"bcaaa"` correspond à "", "a", "aa", "aaa".

    3. **`?` (Zéro ou un)**
        - **Description :** Ce quantificateur correspond à **zéro ou une** occurrence de l'élément qui le précède.
        - **Exemple :**
            - **Regex :** `/a?/`
            - **Correspond à :** "", "a". Il est utile pour rendre un caractère ou un groupe optionnel.
            - **Chaîne :** `"abc"` correspond à "", "a".

### RQ :

-   Les quantificateurs sont **gourmands** par défaut, ce qui signifie qu'ils essaient de capturer le plus grand nombre de caractères possible tout en permettant à l'ensemble de la regex de correspondre. Vous pouvez les rendre **non-gourmands** en ajoutant un `?` après le quantificateur, comme dans `+?`, `*?`, ou `??`, ce qui les fera capturer le minimum nécessaire pour que la regex fonctionne.

## 2. **Le quantificateur `{}`:**

-   **Description:**

    > Le quantificateur `{}` en regex en JavaScript permet de spécifier combien de fois un motif doit apparaître. Il se décline sous plusieurs formes pour indiquer un nombre précis ou une plage de répétitions .

-   **`{x}` : Exactement `x` répétitions**

    > Ce quantificateur spécifie que l'expression régulière précédente doit apparaître exactement `x` fois.

    -   **Exemple** : `/a{3}/` correspond exactement à trois lettres `a` consécutives, c'est-à-dire la chaîne `"aaa"`.

    ```javascript
    const regex = /a{3}/;
    console.log(regex.test("aaa")); // true
    console.log(regex.test("aa")); // false
    ```

-   **`{x,y}` : Entre `x` et `y` répétitions (inclus)**

    > Ce quantificateur indique que l'élément précédent doit apparaître au moins `x` fois, mais pas plus de `y` fois.

    -   **Exemple** : `/a{2,4}/` correspond à entre deux et quatre lettres `a` consécutives, c'est-à-dire `"aa"`, `"aaa"`, ou `"aaaa"`.

    ```javascript
    const regex = /a{2,4}/;
    console.log(regex.test("aa")); // true
    console.log(regex.test("aaa")); // true
    console.log(regex.test("aaaaa")); // false
    ```

-   **`{x,}` : Au moins `x` répétitions**

    > Ce quantificateur signifie que l'élément précédent doit apparaître au moins `x` fois, sans limite supérieure.

    -   **Exemple** : `/a{2,}/` correspond à deux lettres `a` ou plus.

    ```javascript
    const regex = /a{2,}/;
    console.log(regex.test("aa")); // true
    console.log(regex.test("aaaa")); // true
    console.log(regex.test("a")); // false
    ```

## 3. **les quantificateurs: `^`, `$`, `?=` et `?!`**

-   **`^` : Début de ligne**

    > Le symbole `^` est un ancrage qui correspond au **début d'une ligne** ou d'une chaîne. Il n'est pas un quantificateur mais plutôt un indicateur de position.

    -   **Exemple** : `/^abc/` correspond à une chaîne qui commence par `"abc"`.

    ```javascript
    const regex = /^abc/;
    console.log(regex.test("abcde")); // true
    console.log(regex.test("zabcde")); // false
    ```

-   **`$` : Fin de ligne**

    > Le symbole `$` est un ancrage qui correspond à la **fin d'une ligne** ou d'une chaîne.

    -   **Exemple** : `/xyz$/` correspond à une chaîne qui se termine par `"xyz"`.

    ```javascript
    const regex = /xyz$/;
    console.log(regex.test("abcxyz")); // true
    console.log(regex.test("xyzabc")); // false
    ```

-   **`?=` : Lookahead positif (assertion d'avance positive):**

    > Le lookahead positif `(?=...)` vérifie que ce qui suit le motif correspond à une expression sans la consommer (sans l'inclure dans la correspondance). Cela signifie que l'expression doit être vraie pour que la correspondance ait lieu, mais elle n'est pas capturée.

    -   **Exemple** : `/abc(?=def)/` correspond à `"abc"` uniquement si c'est suivi de `"def"`, mais ne capture que `"abc"`.

    ```javascript
    const regex = /abc(?=def)/;
    console.log(regex.test("abcdef")); // true
    console.log(regex.test("abcxyz")); // false
    ```

-   **`?!` : Lookahead négatif (assertion d'avance négative)**

    > Le lookahead négatif `(?!...)` vérifie que ce qui suit le motif **ne** correspond **pas** à l'expression fournie. Cela permet de valider un motif seulement s'il **n'est pas suivi** de l'expression donnée.

    -   **Exemple** : `/abc(?!def)/` correspond à `"abc"` uniquement si ce n'est **pas suivi** de `"def"`.

    ```javascript
    const regex = /abc(?!def)/;
    console.log(regex.test("abcxyz")); // true
    console.log(regex.test("abcdef")); // false
    ```
