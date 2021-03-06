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


let carre1 = document.getElementById('carre1');
carre1.addEventListener('click', function () {
    if(carre1.style.top == 0 && carre1.style.left == 0){
        carre1.style.left = '100px';
    }else if(carre1.style.top == 0 && carre1.style.left == '100px'){
        carre1.style.top = '100px';
    }else if(carre1.style.top == '100px' && carre1.style.left == '100px'){
        carre1.style.left = 0;
    }else if(carre1.style.top == '100px' && carre1.style.left == '0px'){
        carre1.style.top = 0;
    }else if(carre1.style.top == '0px' && carre1.style.left == '0px'){
        carre1.style.top = 0;
        carre1.style.left = 0;
    }else{
        alert('une erreure c\'est produite');
    }
});

/* correction
// EXERCICE :
// Faire un nouveau div de même mise en forme
// Lors du premier click, le div doit partir de 100px vers la droite
// Click suivant le div pars de 100px vers le bas
// Click suivant on revient à gauche de 100px
// Click suivant on remonte pour revenir à la position initiale.
// Pas de changement de couleur, les if doivent être sur les positions.
let carre2 = document.querySelector('#carre2');
console.log(carre2);
console.log('Position left : ' + carre2.style.left);
console.log(typeof carre2);
console.log('Carré 2 : ' + carre2);

carre2.addEventListener('click', function() {

    let posLeft = carre2.style.left;
    let posTop = carre2.style.top;

    console.log('Position left : ' + posLeft);
    console.log('Position top : ' + posTop);

    if( (posLeft == false || posLeft == '0px') && (posTop == false || posTop == '0px') ) {
        carre2.style.left = '100px';
    } else if(posTop == false || posTop == '0px') {
        carre2.style.top = '100px';
    } else if(posLeft == '100px' && posTop == '100px') {
        carre2.style.left = 0;
    } else {
        carre2.style.top = 0;
    }
});
 */


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
/*
La fonction passée en premier argument peut aussi s'écrire en string avec les parenthèse :
setInterval('carousel()', 3000);
En revanche, ce n'est pas une bonne pratique, car la fonction va être évaluer avec eval() (eval() traite du texte comme du code et l'exécute). C'est une faille de sécurité si un utilisateur venait à écrire lui même son code
*/


document.getElementById('blockImage2').addEventListener('click', carousel);

//  ! TODO EXERCICE :
// syntaxes possibles pour une couleur :
// en toute lettre : red | brown | black | green ...
// hexadécimale (6 caractères : chiffres et lettres de a jusqu'à f) avec un # : #54ef42 ...
// rgb() : 3 valeurs numériques entre 0 et 255 : rgb(24, 142, 89) ...
// Faire en sorte que le body ai une couleur aléatoire en arrivant sur la page.
