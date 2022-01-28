/*
    07 : Conditions & Opérateurs de comparaison
*/
let contenuChapitre7 = document.getElementById('contenuChapitre7');

// Une condition permet de prévoir plusieurs cas possible
// une condition ne peut recevoir qu'une réponse de type vrai ou faux (true ou false)

let a = 10,
    b = 5,
    c = 2;

// condition if
if( a > b ) {
    contenuChapitre7.innerHTML += 'La valeur de "a" est bien strictement supérieure à la valeur de "b" <br>';
} else {
    contenuChapitre7.innerHTML += 'La valeur de "a" n\'est pas strictement supérieure à la valeur de "b" <br>';
}
// jamais de parenthèse sur un else, le else représente toutes les autres possibilités si on ne rentre pas dans le if


// EXERCICE :
// créer 3 variables contenant chacune une de ces valeurs :
// - bleu
// - blanc
// - rouge
// Ensuite affichez le texte suivant en appelant les variables :
// bleu - blanc - rouge

let exoContenuChapitre7 = document.getElementById('exoContenuChapitre7');
let bleu = 'bleu';
let blanc = 'blanc';
let rouge = 'rouge';
exoContenuChapitre7.innerHTML += bleu + ' - ' + blanc +' - ' +  rouge;


/*
// CORRECTION EXERCICE :
// créer 3 variables contenant chacune une de ces valeurs :
// bleu
// blanc
// rouge

// Ensuite affichez le texte suivant en appelant les variables :
// bleu - blanc - rouge
let bleu = 'bleu',
    blanc = 'blanc',
    rouge = 'rouge',
    tiret = ' - ';

contenuChapitre7.innerHTML += '<hr>Exercice<hr>';

contenuChapitre7.innerHTML += bleu + ' - ' + blanc + ' - ' + rouge + '<hr>';
contenuChapitre7.innerHTML += bleu + tiret + blanc + tiret + rouge + '<hr>';
contenuChapitre7.innerHTML += `${bleu} - ${blanc} - ${rouge} <hr>`;
contenuChapitre7.innerHTML += `${bleu} ${tiret} ${blanc} ${tiret} ${rouge} <hr>`;

let autre = 'bleu';
autre += ' - ';
autre += 'blanc';
autre += ' - ';
autre += 'rouge';
contenuChapitre7.innerHTML += autre + '<hr>';
* -----------------------------------------------------------------------------------------------------------------*/

// Plusieurs conditions obligatoires dans un if : AND : &&
if(a > b && b > c) {
    contenuChapitre7.innerHTML += 'Ok pour les deux conditions obligatoires<br>';
} else {
    contenuChapitre7.innerHTML += 'l\'une ou l\'autre ou les deux conditions sont fausses<br>';
}

// L'une ou l'autre d'un ensemble de condition : OR : ||
if(a > b || b < c) {
    contenuChapitre7.innerHTML += 'Ok pour au moins une des conditions<br>';
} else {
    contenuChapitre7.innerHTML += 'Toutes les conditions sont fausses<br>';
}

// if / else if / else
// pour comparer des valeurs :
// == est égal à
// != est différent de

if(a != 10) {
    // premier cas proposé
    contenuChapitre7.innerHTML += 'Réponse 1<br>';
} else if(b > a) {
    // autre cas proposé
    contenuChapitre7.innerHTML += 'Réponse 2<br>';
} else if(b == 4) {
    // autre cas proposé
    contenuChapitre7.innerHTML += 'Réponse 3<br>';
} else {
    // cas par défaut
    contenuChapitre7.innerHTML += 'Réponse 4<br>'; // ok
}

let valeurImplicite = 'Hello';
if(valeurImplicite) {
    contenuChapitre7.innerHTML += 'Cette ligne sera exécutée si la valeur de la variable est interprétée comme true<hr>';
}
// pas de else si on ne veut pas le gérer

// Valeur implicite : un if ne pouvant recevoir qu'une réponse de type true ou false, si on donne une valeur, le langage va ré interprété cette valeur en true ou en false.
// Dans l'absolu, tout est égal à true sauf les cas suivants :
// 0, -0, 0.0, null, false, undefined, une chaine vide '' et NaN (Not a Number)

// comparaison stricte :
let varA = 1; // type number
let varB = '1'; // type string

// Comparaison des valeurs uniquement : ==
if(varA == varB) {
    contenuChapitre7.innerHTML += 'C\'est la même valeur<br>';
} else {
    contenuChapitre7.innerHTML += 'Ce n\'est la même valeur<br>';
}

// Comparaison des valeurs ET des types : === (comparison stricte)
if(varA === varB) {
    contenuChapitre7.innerHTML += 'C\'est strictement la même valeur et le même type<br>';
} else {
    contenuChapitre7.innerHTML += 'La valeur et/ou le type est différent<br>';
}

/*
Opérateurs de comparaison
--------------------------
=   affectation : ce n'est pas un opérateur de comparaison
==  est égal à (en terme de valeur uniquement)
!=  est différent de (en terme de valeur uniquement) il est possible de l'écrire de cette manière <>
=== est strictement égal à (en terme de valeur et de type)
!== est strictement différent de (en terme de valeur et/ou de type)
>   strictement supérieur à
>=  supérieur ou égal
<   strictement inférieur
<=  inférieur ou égal

*/

contenuChapitre7.innerHTML += '<hr><hr><hr>';

// Autre possibilité d'écriture :
// je peux ne pas mettre les accolades s'il n'y a qu'une instruction par cas
if(varA == varB)
    contenuChapitre7.innerHTML += 'C\'est la même valeur<br>';
else
    contenuChapitre7.innerHTML += 'Ce n\'est la même valeur<br>';

// Autre possibilité d'écriture :
// écriture ternaire
// action (condition) ? ...if... : ...else...;
contenuChapitre7.innerHTML += (varA == varB) ? 'C\'est la même valeur<br>' : 'Ce n\'est la même valeur<br>';


contenuChapitre7.innerHTML += '<hr><hr><hr>';
contenuChapitre7.innerHTML += (varA == varB) ? (varA === varB) ? 'valeur et type ok' : 'valeur et type nok'  : 'Ce n\'est la même valeur<br>';


// isNaN() outil pemettant de savoir si une information n'est pas numérique quelque soit son type
// isNaN() : is Not a Number
if( isNaN(varB) ) {
    contenuChapitre7.innerHTML += 'Ce n\'est pas numérique<br>';
} else {
    contenuChapitre7.innerHTML += 'C\'est numérique<br>';
}


let saisie = prompt('Veuillez saisir un chiffre');
// contenuChapitre7.innerHTML += typeof saisie;
if(isNaN(saisie)) {
    contenuChapitre7.innerHTML += 'Merci de saisir un chiffre !<hr>';
} else {
    contenuChapitre7.innerHTML += (saisie * 5) + '<hr>';
}

// Lorque l'on récupère une saisie utilisateur depuis un formulaire ou un prompt mais également si on récupère une info de l'url : on obtient toujours un type string même si l'information est numérique.

// Autre outil pour mettre en place une condition :
// condition switch()

let couleur = 'vert';

switch(couleur) {
    case 'bleu' :
        contenuChapitre7.innerHTML += 'Vous aimez le bleu<br>';
        break;
    case 'rouge' :
        contenuChapitre7.innerHTML += 'Vous aimez le rouge<br>';
        break;
    case 'vert' :
        contenuChapitre7.innerHTML += 'Vous aimez le vert<br>';
        break;
    default :
        contenuChapitre7.innerHTML += 'Vous n\'aimez ni le rouge ni le bleu ni le vert<br>';
        break;
}

// EXERCICE : refaire la même condition en utilisant if
if(couleur === 'bleu'){
    contenuChapitre7.innerHTML += 'Vous aimez le bleu<br>';
}else if(couleur === 'rouge' ){
    contenuChapitre7.innerHTML += 'Vous aimez le rouge<br>';
}else if(couleur === 'vert' ){
    contenuChapitre7.innerHTML += 'Vous aimez le vert<br>';
}else{
    contenuChapitre7.innerHTML += 'Vous n\'aimez ni le rouge ni le bleu ni le vert<br>';
}
