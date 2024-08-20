# cour 02 : **WeakSet en JavaScript**

## 1. **Introduction:**

> Un `WeakSet` est une collection d'objets uniques, similaire à un `Set`, mais avec des différences importantes liées à la gestion de la mémoire.

-   Les éléments d'un `WeakSet` doivent être des objets, et non des valeurs primitives comme les nombres ou les chaînes de caractères.

-   La principale caractéristique d'un `WeakSet` est qu'il permet au ramasse-miettes (garbage collector) de libérer la mémoire occupée par un objet si celui-ci n'est plus référencé ailleurs dans le programme, ce qui rend cette structure particulièrement utile pour gérer des références faibles (weak references) à des objets.

## 2. **Méthodes:**

1. **add(value)** :

    Ajoute un objet au `WeakSet`.

    ```javascript
    let objet1 = { nom: "Objet 1" };
    let objet2 = { nom: "Objet 2" };

    const monWeakSet = new WeakSet();
    monWeakSet.add(objet1);
    monWeakSet.add(objet2);

    console.log(monWeakSet.has(objet1)); // Affiche : true
    ```

2. **delete(value)** :

    Supprime un objet du `WeakSet` s'il est présent.

    ```javascript
    monWeakSet.delete(objet1);

    console.log(monWeakSet.has(objet1)); // Affiche : false
    ```

3. **has(value)** :

    Vérifie si un objet spécifique est présent dans le `WeakSet`.

    ```javascript
    console.log(monWeakSet.has(objet2)); // Affiche : true
    ```

## 3. **Cas d'utilisation:**

Les `WeakSet` sont particulièrement utiles dans les cas où vous souhaitez stocker des références à des objets sans empêcher ces objets d'être libérés par le ramasse-miettes lorsqu'ils ne sont plus utilisés ailleurs dans l'application.

1. **Gestion de cache ou de mémoire** :

    Supposons que vous ayez un cache d'objets dont vous souhaitez qu'ils soient automatiquement supprimés lorsque les objets ne sont plus utilisés. Un `WeakSet` peut être utilisé pour stocker ces objets sans empêcher leur suppression par le ramasse-miettes.

    ```javascript
    const cache = new WeakSet();

    function accéderAuxDonnées(objet) {
        if (cache.has(objet)) {
            console.log("Données en cache");
        } else {
            console.log("Données non en cache, ajout à WeakSet");
            cache.add(objet);
        }
    }

    let data = { contenu: "Information importante" };
    accéderAuxDonnées(data); // "Données non en cache, ajout à WeakSet"
    accéderAuxDonnées(data); // "Données en cache"

    data = null; // L'objet est éligible au ramassage par le GC
    ```

2. **Suivi des objets d'une application** :

    Dans une interface utilisateur complexe, un `WeakSet` peut être utilisé pour suivre quels objets DOM ou autres objets spécifiques sont actuellement actifs sans maintenir des références fortes qui empêcheraient la mémoire de se libérer correctement.

3. **Sécurité des données sensibles** :

    Lorsqu'il s'agit de gérer des objets contenant des informations sensibles, un `WeakSet` peut être utilisé pour s'assurer que ces objets ne sont conservés que tant qu'ils sont nécessaires. Une fois que les objets ne sont plus référencés ailleurs, ils peuvent être automatiquement supprimés.
