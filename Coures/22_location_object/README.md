# cour 22 :

## 1. Introduction à l'objet `location`

> L'objet `location` est une interface de l'API Web qui fait partie de l'objet global `window`. Cet objet représente l'URL actuelle du document chargé dans la fenêtre du navigateur. En d'autres termes, `location` permet d'accéder à l'URL de la page actuelle et de la manipuler. Il est utilisé pour obtenir des informations sur l'URL actuelle, modifier l'URL ou rediriger l'utilisateur vers une autre page.

## 2. Les attributs de l'objet `location`

### a. `href`

-   **Description** : L'attribut `href` contient l'intégralité de l'URL actuelle sous forme de chaîne de caractères. Cet attribut peut être utilisé pour lire l'URL actuelle ou pour la modifier afin de rediriger l'utilisateur vers une nouvelle page.
-   **Syntaxe** :
    ```javascript
    let currentURL = window.location.href; // Obtient l'URL complète
    window.location.href = "https://example.com"; // Redirige vers une nouvelle URL
    ```

### b. `host`

-   **Description** : L'attribut `host` renvoie le nom d'hôte (domain) et le numéro de port (si spécifié) de l'URL actuelle. Il combine les attributs `hostname` et `port`.
-   **Syntaxe** :
    ```javascript
    let hostNameAndPort = window.location.host;
    ```

### c. `hostname`

-   **Description** : L'attribut `hostname` renvoie uniquement le nom d'hôte (domain) de l'URL, sans le numéro de port.
-   **Syntaxe** :
    ```javascript
    let domainName = window.location.hostname;
    ```

### d. `protocol`

-   **Description** : L'attribut `protocol` renvoie le protocole de l'URL, tel que `http:` ou `https:`.
-   **Syntaxe** :
    ```javascript
    let urlProtocol = window.location.protocol;
    ```

### e. `hash`

-   **Description** : L'attribut `hash` renvoie la partie de l'URL qui suit le symbole `#` (appelé aussi fragment d'URL). Il est souvent utilisé pour accéder à une ancre spécifique dans la page.
-   **Syntaxe** :
    ```javascript
    let urlHash = window.location.hash;
    ```

### 3. Les méthodes de l'objet `location`

L'objet `location` offre plusieurs méthodes permettant de manipuler l'URL. Voici les principales méthodes :

### a. `replace()`

-   **Description** : La méthode `replace()` remplace l'URL actuelle par une nouvelle URL sans garder l'entrée précédente dans l'historique du navigateur. Ainsi, l'utilisateur ne peut pas revenir à l'URL précédente en utilisant le bouton "Retour".
-   **Syntaxe** :
    ```javascript
    window.location.replace("https://example.com/new-page");
    ```

### b. `assign()`

-   **Description** : La méthode `assign()` charge une nouvelle URL et enregistre cette action dans l'historique du navigateur. L'utilisateur peut revenir à l'URL précédente en utilisant le bouton "Retour".
-   **Syntaxe** :
    ```javascript
    window.location.assign("https://example.com/new-page");
    ```

#### c. `reload()`

-   **Description** : La méthode `reload()` recharge la page actuelle. Si vous passez `true` en argument, elle forcera le rechargement depuis le serveur plutôt que de charger une version en cache.
-   **Syntaxe** :
    ```javascript
    window.location.reload(); // Recharge la page depuis le cache
    window.location.reload(true); // Recharge la page depuis le serveur
    ```
