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

carre.addEventListener('click', function() {
    //carre.title = 'hello'; // info bulle qui s'affiche qui au survol (en coup d'arret) sur le carre
    carre.style.backgroundColor = 'fuchsia';
});




