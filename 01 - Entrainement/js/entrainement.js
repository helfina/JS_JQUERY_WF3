// Commentaire sur une seule ligne

/*
    Commentaire
    sur plusieurs
    lignes
*/

/******************************************
 INTRO
 ********************************************/

// ECMASCRIPT est un ensemble de normes concernant notamment le javascript
// Javascript est exécuté par le navigateur via une interface interne

// Nous avons un ensemble d'outils prévus par le langage

// window représente une fenêtre (onglet) du navigateur
// document représente la page web chargée dans le navigateur

// Chaque instruction doit se terminer par un point virgule ;

// Les erreurs JS sont visibles dans la console navigateur (F12) dans l'onglet "console"

// Le document nous permet d'aller chercher un élément html afin de la manipuler
// document.getElementById('un_id'); // nous permet de récupérer une élément du code ayant l'id : un_id
// document.getElementById('un_id').textContent = 'autre texte'; // textContent : nous permet de changer le contenu texte de l'élément
// document.getElementById('un_id').innerHTML = 'Hello<br>world !'; // innerHTML : nous permet de changer le contenu texte ET html de l'élément

// Pour les outils supplémentaires de sélection : 3eme jour de cours (DOM : Document Object Model)

/*
    01 - Affichage
*/

// Boites de dialogue

// alert('Bonjour à tous'); // permet de passer un message utilisateur, l'utilisateur doit cliquer sur "ok" pour voir la page.

// confirm('Etes-vous sûr ?'); // permet d'obtenir une confirmation : ok | annuler

// prompt('Quel est votre prénom ?'); // permet de récupérer une saisie utilisateur

// Console
console.log('Texte affiché dans la console navigateur');
console.info('Texte affiché dans la console navigateur');

// Affichage dans la page web
// il faut commencer par sélectionner l'élément concerné pour ensuite l'impacter.
console.log( document.getElementById('contenuChapitre1') );
// Pour impacter son contenu texte uniquement :
document.getElementById('contenuChapitre1').textContent = 'Bonjour à tous, aujourd\'hui nous sommes mardi';
// Pour rajouter sans écraser l'existant +=
// Pour impacter son contenu avec du texte et de l'html :
document.getElementById('contenuChapitre1').innerHTML += '<br>Nous sommes en janvier, <b>il fait froid</b>';


/*
    02 : Variables - Déclaration, affectation
*/
// Une variable est un espace nommé permettant de conserver une valeur.
// une valeur possède un type, on parle de pseudo type ou type primitif

// Caractères autorisés :
// toutes les lettre majuscules et minuscules, les chiffres l'underscore (tiret du bas) et le $
// Javascript est sensible à la casse (majuscule différent d'une minuscule)
// une variable, ne peut pas commencer par un chiffre

// Trois mots clé pour déclarer une variable :

// Déclaration avec var
var maVariable; // déclaration d'une variable nommée maVariable

// Affectation d'une valeur
maVariable = 10; // Affectation de la valeur numérique 10

// Déclaration d'une variable permettant de récupérer un élément html que l'on veut impacter
var contenuChapitre2 = document.getElementById('contenuChapitre2');
console.log( contenuChapitre2 );

contenuChapitre2.innerHTML += 'Chapitre sur les variables <br>';

// Déclaration avec let
let autreVariable = 'hello';

// Différences entre let et var
// La bonne pratique du JS aujourd'hui est d'utiliser let plutôt que var
// 01 : une variable déclarée avec let n'existe que dans les accolades {} où elle a été crée
{
    let test; // déclaration
    test = 'bonjour<br>'; // affectation
    contenuChapitre2.innerHTML += test; // ok
}
// contenuChapitre2.innerHTML += test; // not ok // Uncaught ReferenceError: test is not defined

// 02 : il n'est pas possible de redéclarer une variable du même nom avec let
// let autreVariable = 'truc'; // Uncaught SyntaxError: Identifier 'autreVariable' has already been declared

// Déclaration avec const :
const uneConstante = 'Valeur que nous ne pouvons plus changer<br>';
// Même comportement que let mais en plus la valeur restera constante.
// Une constante nous permet d'isoler une information que l'on pourra changer sur la ligne de déclaration/affectation mais on ne peut plus la changer dans la suite du code.
// En revanche, nous sommes obligé d'affecter la constante en même temps que sa déclaration
contenuChapitre2.innerHTML += uneConstante;
/*
const chiffre = 20;
contenuChapitre2.innerHTML += chiffre + 10;
*/

/*
    03 : Type de donnée (pseudo type / type primitif)
*/
let contenuChapitre3 = document.getElementById('contenuChapitre3');

let variable1 = 10;
contenuChapitre3.innerHTML += 'Valeur contenue dans la variable variable1 : ';
contenuChapitre3.innerHTML += variable1;
// afin de connaitre le pseudo type d'une variable : typeof
contenuChapitre3.innerHTML += '<br>Type de cette valeur : ';
contenuChapitre3.innerHTML += typeof variable1; // type number : numérique

variable1 = 1.5; // changement de la valeur contenue
contenuChapitre3.innerHTML += '<hr>Valeur contenue dans la variable variable1 : ';
contenuChapitre3.innerHTML += variable1;
// afin de connaitre le pseudo type d'une variable : typeof
contenuChapitre3.innerHTML += '<br>Type de cette valeur : ';
contenuChapitre3.innerHTML += typeof variable1; // type number : numérique

variable1 = 'du texte'; // ou "du texte" // changement de la valeur contenue
contenuChapitre3.innerHTML += '<hr>Valeur contenue dans la variable variable1 : ';
contenuChapitre3.innerHTML += variable1;
contenuChapitre3.innerHTML += '<br>Type de cette valeur : ';
contenuChapitre3.innerHTML += typeof variable1; // type string : une chaine de caractère

variable1 = '123'; // ou "123" // changement de la valeur contenue
contenuChapitre3.innerHTML += '<hr>Valeur contenue dans la variable variable1 : ';
contenuChapitre3.innerHTML += variable1;
contenuChapitre3.innerHTML += '<br>Type de cette valeur : ';
contenuChapitre3.innerHTML += typeof variable1; // type string : une chaine de caractère

variable1 = true; // ou false // changement de la valeur contenue
contenuChapitre3.innerHTML += '<hr>Valeur contenue dans la variable variable1 : ';
contenuChapitre3.innerHTML += variable1;
contenuChapitre3.innerHTML += '<br>Type de cette valeur : ';
contenuChapitre3.innerHTML += typeof variable1; // type boolean : vrai | faux

// console.log( confirm('ok ?') ); // si on clic sur ok on obtient true sinon on obtient false (ouvrir la console pour voir le résultat)

// Une variable qui n'existe pas :
contenuChapitre3.innerHTML += '<hr>Type d\'une variable qui n\'existe pas : ';
contenuChapitre3.innerHTML += typeof existePas; // undefined : non définie

/*
    04 : Quotes
*/
let contenuChapitre4 = document.getElementById('contenuChapitre4');

// simple quote (apostrophe)
contenuChapitre4.innerHTML = 'Bonjour à tous'; // pas de différences entre les ' ou les ", juste un choix développeur

// double quote (guillemets) :
contenuChapitre4.innerHTML += '<br>Hello world'; // pas de différences entre les ' ou les ", juste un choix développeur

// Quote inversée (accent grave PC : altGR et la touche 7)
// il est possible d'interprété une variable dans du texte dans les quotes inversées en utilisant le gabarit ${}
let prenom = 'Mathieu';
contenuChapitre4.innerHTML += `<br>Bonjour ${prenom}, bienvenue sur notre site<br>`;
// dans des ' ou " ce sera juste du texte
contenuChapitre4.innerHTML += '<br>Bonjour ${prenom}, bienvenue sur notre site<br>';

/*
    05 : Concatenation
*/
let contenuChapitre5 = document.getElementById('contenuChapitre5');
// la concaténation permet d'assembler du texte que ce soit du texte pur ou du texte contenu dans une variable ou en résultat d'une fonction
// la caractère permettant la concaténation est le signe + que l'on peut toujours traduire par "suivi de"

let var1 = 'bonjour';
let var2 = 'à tous';

// Affichage sans concaténation :
contenuChapitre5.innerHTML = var1;
contenuChapitre5.innerHTML += ' ';
contenuChapitre5.innerHTML += var2;
contenuChapitre5.innerHTML += ', bienvenue sur notre site<br>';

// Avec la concaténation :
contenuChapitre5.innerHTML += var1 + ' ' + var2 + ', bienvenue sur notre site<br>';

let pseudo = 'Mathieu ';
pseudo = 'Admin'; // on écrase la valeur précédente

contenuChapitre5.innerHTML += pseudo + '<br>';

// concaténation lors de l'affectation :
let pseudo2 = 'Mathieu ';
pseudo2 += 'Admin'; // équivaut à écrire : pseudo2 = pseudo2 + 'Admin';
contenuChapitre5.innerHTML += pseudo2 + '<br>';

/*
    06 : Opérateurs arythmétique
*/
let contenuChapitre6 = document.getElementById('contenuChapitre6');

let resultat = 10 + 5; // addition : +
contenuChapitre6.innerHTML += resultat + '<br>'; // affiche 15

resultat = 10 - 5; // soustraction : -
contenuChapitre6.innerHTML += resultat + '<br>'; // affiche 5

resultat = 10 / 5; // division : /
contenuChapitre6.innerHTML += resultat + '<br>'; // affiche 2

resultat = 10 * 5; // multiplication : *
contenuChapitre6.innerHTML += resultat + '<br>'; // affiche 50

resultat = 10 ** 5; // puissance : **
contenuChapitre6.innerHTML += resultat + '<br>'; // affiche 100000

resultat = 10 % 3; // modulo : % (le restant de la division en terme d'entier)
contenuChapitre6.innerHTML += resultat + '<br>'; // affiche 1

// Raccourci d'écriture
// opération/affectation
let chiffre1 = 10,
    chiffre2 = 5;

chiffre1 += chiffre2; // équivaut à écrire chiffre1 = chiffre1 + chiffre2;
// chiffre1 -= chiffre2; // équivaut à écrire chiffre1 = chiffre1 - chiffre2;
// chiffre1 /= chiffre2; // équivaut à écrire chiffre1 = chiffre1 / chiffre2;
// chiffre1 *= chiffre2; // équivaut à écrire chiffre1 = chiffre1 * chiffre2;
// chiffre1 **= chiffre2; // équivaut à écrire chiffre1 = chiffre1 ** chiffre2;
// chiffre1 %= chiffre2; // équivaut à écrire chiffre1 = chiffre1 % chiffre2;
contenuChapitre6.innerHTML += chiffre1 + '<br>'; // affiche 15

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

/*------------------------------------------------------------------------------------------------------------------------*/
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

/*
    08 : Structure itérative : Boucles
*/
let contenuChapitre8 = document.getElementById('contenuChapitre8');

// Une boucle permet de répéter un ensemble d'instruction autant de fois que nécessaire
// Pour mettre en place une boucle, nous avons besoin de 3 informations :
// 1 : une valeur de départ (compteur)
// 2 : une condition d'entrée
// 3 : une incrémentation ou décrémentation (le fait de changer la valeur du compteur)

// boucle while() {}

var i = 0; // valeur de départ
while(i < 10) { // condition d'entrée
    contenuChapitre8.innerHTML += i + ' ';
    i++; // incrémentation // équivaut à écrire : i = i + 1;
}

contenuChapitre8.innerHTML += '<hr>';

// boucle for() {}
// for(valeur_de_depart; condition; incrementation) {}
for(var i = 0; i < 10; i++) {
    contenuChapitre8.innerHTML += i + ' ';
}

contenuChapitre8.innerHTML += '<hr>';

let select = '<select>';

for(var i = 1930; i <= 2022; i++) {
    // contenuChapitre8.innerHTML += i + ' ';
    select += '<option>' + i + '</option>';
    // console.log(select);
}

select += '</select>';

contenuChapitre8.innerHTML += select;

contenuChapitre8.innerHTML += '<hr>';

// Récupérez 5 images sur le web et les nommer de cette manière : image1.jpg, image2.jpg, image3.jpg, image4.jpg et image5.jpg
// 01 - Affichez une des 5 images dans la page web via javascript
// 02 - Affichez 5 fois la même image avec un seul img src dans le code (indice : une boucle)
// 03 - Affichez les 5 différentes images toujours avec un seul img src dans le code

// 01
contenuChapitre8.innerHTML += '<p>exo 1 : </p><img src="images/image1.png" width="210">';
contenuChapitre8.innerHTML += '<hr>';

// 02

for (i= 0; i < 5 ; i++){

    contenuChapitre8.innerHTML += '<hr>' + '<p>exo 2 : <br> <img src="images/image4.png" width="210"></p>';
}

// 03
let imageArray = ['image1.png', 'image2.png','image3.png','image4.png','image5.png', ];
let img = 0;
while( img < 5){
    contenuChapitre8.innerHTML += '<hr><p>exo 3 : </p>' + '<img src="images/'+ imageArray[img] + '" width="210">';
    img++;
}
contenuChapitre8.innerHTML += '<hr>';

/*corriger*/
// 01
contenuChapitre8.innerHTML += '<img src="image1.jpg" width="210">';
contenuChapitre8.innerHTML += '<hr>';

// 02
for(var i = 0; i < 5; i++) {
    contenuChapitre8.innerHTML += '<img src="image1.jpg" width="210"> ';
}
contenuChapitre8.innerHTML += '<hr>';

var i = 0;
while(i < 5) {
    contenuChapitre8.innerHTML += '<img src="image2.jpg" width="210"> ';
    i++;
}

contenuChapitre8.innerHTML += '<hr>';

// 03
for(var i = 1; i <= 5; i++) {
    contenuChapitre8.innerHTML += '<img src="image' + i + '.jpg" width="210"> ';
}
contenuChapitre8.innerHTML += '<hr>';

var i = 1;
while(i < 6) {
    contenuChapitre8.innerHTML += '<img src="image' + i + '.jpg" width="210"> ';
    i++;
}
contenuChapitre8.innerHTML += '<hr>';

//==============================================================================================================================
/*
    09 : Fonctions prédéfinies (fonctions globales)
*/
let contenuChapitre9 = document.getElementById('contenuChapitre9');

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects

// isNaN() permet de savoir si une valeur est bien numérique quelque soit son type
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN

// parseInt() permet de transformer une valeur numérique de type string en type number (uniquement valeur entière, ça enlevera les décimales s'il y en a)

// parseFloat() permet de transformer une valeur numérique de type string en type number (avec les décimales)