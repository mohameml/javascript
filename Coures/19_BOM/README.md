# cour 19 : **BOM**

## 1. **Definition:**

> Le **`BOM`** (Browser Object Model) en JavaScript est un ensemble d'objets fournis par le navigateur qui permettent d'interagir avec l'environnement du navigateur. Contrairement au DOM (Document Object Model), qui concerne la structure du contenu HTML et XML, le BOM s'occupe de tout ce qui est lié à l'environnement du navigateur lui-même.

-   **Voici quelques-uns des principaux objets du BOM :**

    1. **`window`** : L'objet global représentant la fenêtre du navigateur. Tous les autres objets du BOM sont des propriétés de l'objet `window`.
    2. **`document`** : L'objet représentant le document chargé dans la fenêtre, souvent considéré comme faisant partie à la fois du DOM et du BOM.
    3. **`navigator`** : L'objet fournissant des informations sur le navigateur, comme son nom, sa version et ses capacités.
    4. **`screen`** : L'objet fournissant des informations sur l'écran de l'utilisateur, comme la résolution de l'écran.
    5. **`location`** : L'objet représentant l'URL actuelle de la fenêtre et permettant de la manipuler.
    6. **`history`** : L'objet permettant de manipuler l'historique de navigation de la fenêtre.

## 2. **l'objet `window`:**

### 2.1 **Définition de l'objet `window`:**

> L'objet `window` en JavaScript est l'objet global qui représente la fenêtre du navigateur. Il est automatiquement créé et géré par le navigateur et contient toutes les autres propriétés et objets nécessaires pour travailler avec l'environnement du navigateur.

### 2.2 **Méthodes de l'objet `window`:**

1. **`window.open()`**

    - **Description** : Ouvre une nouvelle fenêtre ou un nouvel onglet de navigateur.
    - **Syntaxe** : `window.open(URL, nom, spécifications)`
    - **Exemple** :
        ```javascript
        window.open(
            "https://www.example.com",
            "_blank",
            "width=600,height=400"
        );
        ```

2. **`window.close()`**

    - **Description** : Ferme la fenêtre courante.
    - **Syntaxe** : `window.close()`
    - **Exemple** :
        ```javascript
        window.close();
        ```

3. **`window.resizeTo()`**

    - **Description** : Redimensionne la fenêtre à la largeur et hauteur spécifiées.
    - **Syntaxe** : `window.resizeTo(largeur, hauteur)`
    - **Exemple** :
        ```javascript
        window.resizeTo(800, 600);
        ```

4. **`window.print()`**
    - **Description** : Ouvre la boîte de dialogue d'impression pour imprimer le document actuel.
    - **Syntaxe** : `window.print()`
    - **Exemple** :
        ```javascript
        window.print();
        ```
5. **`stop()`**

    - **Description:** La méthode `stop()` de l'objet `window` permet d'arrêter le chargement de la page actuelle.

    - **Syntaxe:**
        ```javascript
        window.stop();
        ```

6. **`focus():`**

    - **Description:** La méthode `focus()` de l'objet `window` donne le focus à la fenêtre ou à l'onglet spécifié, ce qui le rend actif dans l'interface utilisateur.

    - **Syntaxe**

        ```javascript
        window.focus();
        ```
