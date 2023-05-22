// Il est preferable de creer une seule fonction avec des parametres, plutot que de creer plusieurs fonctions avec le meme code.
// On peut creer une fonction qui prend en parametre l'id de l'image et le chemin de l'image.
function changeImage(id, path) {document.getElementById(id).src = path;}