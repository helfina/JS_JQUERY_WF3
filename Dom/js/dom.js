/*
DOM : Document Object Model
---------------------------
Le DOM rend disponible toutes les balises HTML du document (body, section, p, div ...), mais également tous les attributs html (id, class, href, src, title ...) mais aussi les évènements (click, dblclick, mouseenter, mouseout, load...)

D'abord il faut sélectionner l'élément ou les éléments html :
Selecteur :
-----------
document.getElementById('unId') : selectionne un élément selon son id, on récupère un élément unique
document.getElementsByClassName('maClasse') : selectionne un ou des éléments selon la classe, on récupère une collection (array)
document.getElementsByTagName('p') : selectionne un ou des éléments selon le nom de balise, on récupère une collection (array)

document.querySelector('div .truc p') : permet de selectionner le premier élément correspondant au selecteur (comme en css) fourni dans les parenthèses : unique

document.querySelectorAll() : permet de selectionner tous les éléments répondant au selecteur (comme en css) fourni dans les parenthèses : une collection

3 façons de mettre en place un évènement :
------------------------------------------
1. via un attribut html d'évènement (ce n'est pas une bonne pratique)
    <div onclick="// code js"></div>

2. ancienne écriture des évènement en js :
document.getElementById('unId').onclick = function() {
    // code js
}

3. nouvelle façon : la bonne pratique à privilégier : (permet notamment de mettre plusieurs évènement click sur une même élément)
document.getElementById('unId').addEventListener('click', function() {
    // code js
});

*/

let carre = document.getElementById('carre');
console.log(carre);
console.log(typeof carre);
console.log('Element : ' + carre);

carre.addEventListener('click', function () {
    //carre.title = 'hello'; // info bulle qui s'affiche qui au survol (en coup d'arret) sur le carre
    //carre.style.backgroundColor = 'fuchsia';

    // Exercice :
    // actuellement au click la couleur change en fuchsia
    // faire en sorte qu'au premier click on change en fuchsia, si on reclick, on change sur une autre couleur et un nouveau click fera revenir à la couleur originale.
    let couleur = carre.style.backgroundColor;
    if (couleur == 'darkslategray') {
        carre.style.backgroundColor = 'fuchsia';
        carre.style.left = '100px';
    } else if (couleur == 'fuchsia') {
        carre.style.backgroundColor = 'plum';
        carre.style.borderRadius = '50%';
    } else {
        carre.style.backgroundColor = 'darkslategray';
        carre.style.left = '0';
        carre.style.borderRadius = 0;
    }

});

// EXERCICE :
// Faire un nouveau div de même mise en forme
// Lors du premier click, le div doit partir de 100px vers la droite
// Click suivant le div pars de 100px vers le bas
// Click suivant on revient à gauche de 100px
// Click suivant on remonte pour revenir à la position initiale.


let imagesBlock1 = document.querySelectorAll('#blockImage1 img');
console.log(imagesBlock1);
console.log(typeof imagesBlock1);
console.log('Elements : ' + imagesBlock1);

document.getElementById('blockImage1').addEventListener('mouseenter', function () {
    imagesBlock1[0].style.top = '-400px';
    imagesBlock1[1].style.top = '-400px';
});

// Faire le mouvement inverse : evenement : mouseleave
document.getElementById('blockImage1').addEventListener('mouseleave', function () {
    imagesBlock1[0].style.top = '0';
    imagesBlock1[1].style.top = '0';
});


//
function carousel() {
    let imageCarousel = document.querySelectorAll('#blockImage2 img');
    console.log(imageCarousel);
    if(imageCarousel[0].style.opacity == 1) {
        imageCarousel[0].style.opacity = 0;
        imageCarousel[1].style.opacity = 1;
    } else if(imageCarousel[1].style.opacity == 1) {
        imageCarousel[1].style.opacity = 0;
        imageCarousel[2].style.opacity = 1;
    } else if(imageCarousel[2].style.opacity == 1) {
        imageCarousel[2].style.opacity = 0;
        imageCarousel[3].style.opacity = 1;
    } else {
        imageCarousel[3].style.opacity = 0;
        imageCarousel[0].style.opacity = 1;
    }
}

// setInterval() permet de répéter une fonctio,n selon un timer en milliseconde
setInterval(carousel, 3000);

document.getElementById('blockImage2').addEventListener('click', carousel);