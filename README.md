Ceci est une correction du code du site web Mes Images et Moi de Pierre Maciejewski par Antoine Patron.

Cette correction a pour but de corriger les erreurs (? je n'en ai pas trouvé), et d'améliorer le code (en le rendant plus lisible, plus court, plus performant, moins redondant, etc.) sans changer le rendu visuel du site (ou le moins possible).
L'objectif est de te permettre de t'améliorer, si tu souhaites en faire ton métier.

/!\ Tous les commentaires d'origine ont été supprimés ou le seront pour ne laisser que ceux de la correction afin de ne pas nuire à la lisibilité du code /!\

/!\ Les commentaires de la correction sont en français, mais il est préférable de commenter son code en anglais /!\

/!\ Tout ce que je dis dans cette correction n'est que mon avis, et il est possible que je me trompe. Il est donc important de se faire sa propre opinion et de ne pas prendre tout ce que je dis pour aquis /!\

## 1. index.html
- Documentation des modifications non rédigée.

## 2. style.css
- Documentation des modifications non rédigée.

## 3. script.js
### 3.1. Remarques générales
- Toutes les fonction etaient correcte et bien rédigées, mais, comme tu l'a peut-être remarqué, les fonctions etait redondantes.
Je les ai donc regroupées en une seule fonction `changeImage()` qui prend plusieurs paramètres, et qui reprend le code de tes fonctions.
### 3.2. Fonction `changeImage()`
- La fonction `changeImage()` prend 2 paramètres : `id` et `path`.
- `id` est l'identifiant de l'élément HTML dans lequel on veut changer l'image.
- `path` est le chemin vers l'image que l'on veut afficher depuis le répertoire racine du site.
- Comme tes fonction précédentes, `changeImage()` commence par récupérer l'élément HTML dans lequel on veut changer l'image grâce à `document.getElementById()` et change l'attribut `src` de l'élément HTML récupéré.

## 4. 20th Century Fox
- Modification non apportée.

## 5. Autres pages
- Documentation des modifications non rédigée.

## 6. Autres
- Documentation des modifications non rédigée.