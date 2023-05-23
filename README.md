Ceci est une correction du code du site web Mes Images et Moi de Pierre Maciejewski par Antoine Patron.

Cette correction a pour but de corriger les erreurs (? je n'en ai pas trouvé), et d'améliorer le code (en le rendant plus lisible, plus court, plus performant, moins redondant, etc.) sans changer le rendu visuel du site (ou le moins possible).
L'objectif est de te permettre de t'améliorer, si tu souhaites en faire ton métier.

/!\ Tous les commentaires d'origine ont été supprimés ou le seront pour ne laisser que ceux de la correction afin de ne pas nuire à la lisibilité du code /!\

/!\ Les commentaires de la correction sont en français, mais il est préférable de commenter son code en anglais /!\

/!\ Tout ce que je dis dans cette correction n'est que mon avis, et il est possible que je me trompe. Il est donc important de se faire sa propre opinion et de ne pas prendre tout ce que je dis pour aquis /!\

## 1. index.html
### 1.1. Remarques générales
- Le code HTML était correct, mis a part quelques avertissements et attributs css.
- Le plus gros point positif est que le site est globalement responsive. En effet, j'utilise un écran 21:9, et le site s'adapte parfaitement au format de mon écran, ce qui n'est pas monnaie courante.
Il est cependant possible d'améliorer la responsivité du site, notamment en utilisant les media queries et des unités relatives (%, vw, vh, etc.). Je pense que sur des très petits écrans, le site risque de ne pas être très lisible (il faudrait que je teste ça pour en être sûr).
### 1.2. Balise `<head>`
- Rien à redire, si ce n'est qu'il est préférable de remplacer le titre par `<title>Mes Images et Moi - Accueil</title>` pour que l'utilisateur sache sur quelle page il se trouve.
- J'ai egalemment ajouté dans cette section le lien vers le script javascript, même si il est préférable de le mettre à la fin du `<body>` pour que le site se charge plus rapidement, mais c'est plus propre de le mettre dans le `<head>`.
### 1.3. Balise `<body>`
#### 1.3.1. Section `<nav>`
- Le menu de navigation très propre
- Il est cepandant préférable de rajouter un lien vers la page d'accueil, même si on est déjà dessus, pour la cohérence du site.
#### 1.3.2. Section `bandeau`
- Rien à redire.
#### 1.3.3. Section `logo`
- J'ai supprimé les différentes balises `script` car elles n'étaient plus utiles (voir section 1.2. Balise `<head>`).
- J'ai également modifié les appels aux fonctions `changeImage()` pour qu'elles correspondent à la nouvelle fonction (voir section 3.2. Fonction `changeImage()`).
- Enfin, j'ai supprimé les attributs css pour les remplacer par des classes css (referances a faire dans la section 2. style.css).
#### 1.3.4. Autres sections
- Modification en cours, documentation en cours de rédaction.

## 2. style.css
- Modification en cours, documentation non rédigée.

## 3. script.js
### 3.1. Remarques générales
- Toutes les fonction etaient correcte et bien rédigées, mais, comme tu l'a peut-être remarqué, les fonctions etait redondantes.
Je les ai donc regroupées en une seule fonction `changeImage()` qui prend plusieurs paramètres, et qui reprend le code de tes fonctions.
### 3.2. Fonction `changeImage()`
- La fonction `changeImage()` prend 2 paramètres : `id` et `path`.
- `id` est l'identifiant de l'élément HTML dans lequel on veut changer l'image.
- `path` est le chemin vers l'image que l'on veut afficher depuis le répertoire racine du site.
- Comme tes fonction précédentes, `changeImage()` commence par récupérer l'élément HTML dans lequel on veut changer l'image grâce à `document.getElementById()` et change l'attribut `src` de l'élément HTML récupéré.
### 3.3. Utilité de la fonction `changeImage()`
- Bien que le javascript soit une solution plutôt elegante pour changer l'image, il existe une solution bien plus simple : le HTML.
Il est possible de changer l'image au survol de la souris en utilisant les attributs `onmouseover` et `onmouseout` de la balise `<img>`, et en modifiant la valeur de l'attribut `src` de l'image.
Cela permet de se passer de javascript, et donc de rendre le site plus léger et plus rapide.
C'est d'ailleurs la solution que j'ai utilisée pour le logo Netflix dans la mosaique de `index.html`.

## 4. 20th Century Fox
- Modification non apportée.

## 5. Autres pages
- Documentation des modifications non rédigée.

## 6. Autres
- Documentation des modifications non rédigée.