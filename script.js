// Il est preferable de creer une seule fonction avec des parametres, plutot que de creer plusieurs fonctions avec le meme code.
// On peut creer une fonction qui prend en parametre l'id de l'image et le chemin de l'image.
function changeImage(id, path) {document.getElementById(id).src = path;}

let elements_20th = [["path", "title", "alt", "class", 0, 0], // first element is format of the array, don't use it
                    ["Avatar/Contenu/Affiche cinéma.jpg", "Affiche officielle Avatar, la voix de l eau", "Affiche officielle Avatar, la voix de l eau", "center", 850],
                    ["Avatar/Contenu/Vidéo/Avatar  La voie de l’eau - Bande-annonce officielle (VF)  20th Century Studios.mp4", "Bande d annonce du film Avatar", "", "center", 1200],
                    ["Avatar/Contenu/Illustration/FkXC-8cVsAAgyxN.jpg", "Illustration Avatar, la voix de l eau", "Illustration Avatar comportant des Na vi avec leurs Tsuraks", "center", 800],
                    ["Avatar/Contenu/Vidéo/TUJxn9C0VqoNV-mZ.mp4", "Vidéo Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Tonowari et Ronal et Jake Sully.jpg", "Image du film Avatar, la voie de l eau", "En premier plan Jake Sully et Tonowari en train de se serrer les mains, en fond Ronal.", "center", 500],
                    ["Avatar/Contenu/Vidéo/P_dpKUbE8COOgu91.mp4", "Vidéo Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Vidéo/tkLjp4C3lgoyr_q5.mp4", "Vidéo Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Illustration/Flqv4KoaMAA1kqI.jpg", "Illustration Avatar, la voix de l eau", " Illustration Avatar, la voix de l eau. On l on voit le lieu des esprits avec l arbre du clan", "center", 600],
                    ["Avatar/Contenu/Vidéo/6MW8_xAK19_RUYrn.mp4", "Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Vidéo/Water, sea, Avatar on VOD.mp4", "Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Illustration/FlGY9CCXkAAMCq6.jpg", "Illustration Avatar, la voix de l eau.", "Illustration Avatar, la voix de l eau. On aperçoit Kiri nageant avec un ilu et en voyant aussi la surface", "center", 600],
                    ["Avatar/Contenu/Vidéo/NQw7eanRecpNxj1x.mp4", "Vidéo Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/affiche.jpg", "Affiche Avatar, la voix de l eau", "Affiche Avatar, la voix de l eau. On voit le visage de Kiri face sous l eau", "center", 600],
                    ["Avatar/Contenu/Vidéo/Discovery Pandora.mp4", "Vidéo Découverte de Pandora", "", "center", 950],
                    ["Avatar/Contenu/Vidéo/6MW8_xAK19_RUYrn.mp4", "Vidéo, Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Vidéo/Avatar-The-Way-of-Water-This-Friday.mp4", "Vidéo Avatar, la voix de l eau", "", "center", 800],
                    ["Avatar/Contenu/Vidéo/p7AaKsKW5R4zUkRu.mp4", "Vidéo, Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Vidéo/pUF0nCptZ-mAgRvb.mp4", "Vidéo, Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Vidéo/W1V_QaOLgSjXieFC.mp4", "Vidéo, Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/FjXz4KYXwAA4ztT.jpg", "Image d Avatar, la voix de l eau", "On visualise Jake Sully sur Tsurak et derrière Neytiri sur un ikran", "center", 500],
                    ["Avatar/Contenu/Jake Sully et Neytiri face à face.jpg", "Image d Avatar, la voix de l eau", "Jake Sully et Neytiri face à face", "center", 500],
                    ["Avatar/Contenu/Vidéo/5 day Avatar.mp4", "Vidéo, Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Illustration/FkiqWoUVUAA43eT.jpg", "Illustration Avatar, la voix de l eau", "Illustration Avatar, la voix de l eau. Tonowari sur le dos d un Tsurak avec deux autres Na vi", "center", 600],
                    ["Avatar/Contenu/Vidéo/Best Film.mp4", "Vidéo, Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Illustration/FkhyTxGVQAEcLWf.jpg", "Illustration Avatar, la voix de l eau", "Illustration Avatar, la voix de l eau. On voit Jake Sully et Neytiri sur un ikran", "center", 600],
                    ["Avatar/Contenu/Vidéo/O0YF4gwdhljWNc2E.mp4", "Vidéo, Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Vidéo/ijF_M5bCHDRGEjx_.mp4", "Vidéo, Avatar, la voix de l eau", "", "center", 500],
                    ["Avatar/Contenu/Vidéo/xwe09SsOCvltV-By.mp4", "Vidéo, Avatar, la voix de l eau", "", "center", 500],
                ];

function init_20thCenturyFox()
{
    for (var i = 1; i < elements_20th.length; i++)
    {
        if (elements_20th[i][0].includes(".mp4")) {addVideo(elements_20th[i], "Avatar");}
        else {addImage(elements_20th[i], "Avatar");}
    }
}

function addImage(element, id) {document.getElementById(id).innerHTML += "<div><img src='" + element[0] + "' title='" + element[1] + "' alt='" + element[2] + "' class='" + element[3] + "' height='" + element[4] + "'></div>";}

function addVideo(element, id) {document.getElementById(id).innerHTML += "<div><video controls width='" + element[4] + "' class='" + element[3] + "' title='" + element[1] + "'><source src='" + element[0] + "' type='video/mp4'></video></div>";}

if (document.title === "20th Century Fox | Mes images et moi") {document.addEventListener("DOMContentLoaded", async function(){init_20thCenturyFox();});}