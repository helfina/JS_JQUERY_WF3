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
console.log(document.getElementById('contenuChapitre1'));
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
console.log(contenuChapitre2);

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
contenuChapitre4.innerHTML += "<br>Hello world"; // pas de différences entre les ' ou les ", juste un choix développeur

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
if (a > b) {
    contenuChapitre7.innerHTML += 'La valeur de "a" est bien strictement supérieure à la valeur de "b" <br>';
} else {
    contenuChapitre7.innerHTML += 'La valeur de "a" n\'est pas strictement supérieure à la valeur de "b" <br>';
}
// jamais de parenthèse sur un else, le else représente toutes les autres possibilités si on ne rentre pas dans le if

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
// EXERCICE :
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
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

// Plusieurs conditions obligatoires dans un if : AND : &&
if (a > b && b > c) {
    contenuChapitre7.innerHTML += 'Ok pour les deux conditions obligatoires<br>';
} else {
    contenuChapitre7.innerHTML += 'l\'une ou l\'autre ou les deux conditions sont fausses<br>';
}

// L'une ou l'autre d'un ensemble de condition : OR : ||
if (a > b || b < c) {
    contenuChapitre7.innerHTML += 'Ok pour au moins une des conditions<br>';
} else {
    contenuChapitre7.innerHTML += 'Toutes les conditions sont fausses<br>';
}

// if / else if / else
// pour comparer des valeurs :
// == est égal à
// != est différent de

if (a != 10) {
    // premier cas proposé
    contenuChapitre7.innerHTML += 'Réponse 1<br>';
} else if (b > a) {
    // autre cas proposé
    contenuChapitre7.innerHTML += 'Réponse 2<br>';
} else if (b == 4) {
    // autre cas proposé
    contenuChapitre7.innerHTML += 'Réponse 3<br>';
} else {
    // cas par défaut
    contenuChapitre7.innerHTML += 'Réponse 4<br>'; // ok
}

let valeurImplicite = 'Hello';

if (valeurImplicite) {
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
if (varA == varB) {
    contenuChapitre7.innerHTML += 'C\'est la même valeur<br>';
} else {
    contenuChapitre7.innerHTML += 'Ce n\'est la même valeur<br>';
}

// Comparaison des valeurs ET des types : === (comparison stricte)
if (varA === varB) {
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
if (varA == varB)
    contenuChapitre7.innerHTML += 'C\'est la même valeur<br>';
else
    contenuChapitre7.innerHTML += 'Ce n\'est la même valeur<br>';

// Autre possibilité d'écriture :
// écriture ternaire
// action (condition) ? ...if... : ...else... ;
contenuChapitre7.innerHTML += (varA == varB) ? 'C\'est la même valeur<br>' : 'Ce n\'est la même valeur<br>';

// isNaN() outil pemettant de savoir si une information n'est pas numérique quelque soit son type
// isNaN() : is Not a Number
if (isNaN(varB)) {
    contenuChapitre7.innerHTML += 'Ce n\'est pas numérique<br>';
} else {
    contenuChapitre7.innerHTML += 'C\'est numérique<br>';
}

/*
let saisie = prompt('Veuillez saisir un chiffre');
// contenuChapitre7.innerHTML += typeof saisie;
if(isNaN(saisie)) {
    contenuChapitre7.innerHTML += 'Merci de saisir un chiffre !<hr>';
} else {
    contenuChapitre7.innerHTML += (saisie * 5) + '<hr>';
}
*/
// Lorque l'on récupère une saisie utilisateur depuis un formulaire ou un prompt mais également si on récupère une info de l'url : on obtient toujours un type string même si l'information est numérique.

// Autre outil pour mettre en place une condition : 
// condition switch()

let couleur = 'jaune';

switch (couleur) {
    case 'bleu':
        contenuChapitre7.innerHTML += 'Vous aimez le bleu<br>';
        break;
    case 'rouge':
        contenuChapitre7.innerHTML += 'Vous aimez le rouge<br>';
        break;
    case 'vert':
        contenuChapitre7.innerHTML += 'Vous aimez le vert<br>';
        break;
    default:
        contenuChapitre7.innerHTML += 'Vous n\'aimez ni le rouge ni le bleu ni le vert<br>';
        break;
}
// EXERCICE : refaire la même condition en utilisant if
if (couleur == 'bleu') {
    contenuChapitre7.innerHTML += 'Vous aimez le bleu<br>';
} else if (couleur == 'rouge') {
    contenuChapitre7.innerHTML += 'Vous aimez le rouge<br>';
} else if (couleur == 'vert') {
    contenuChapitre7.innerHTML += 'Vous aimez le vert<br>';
} else {
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
while (i < 10) { // condition d'entrée
    contenuChapitre8.innerHTML += i + ' ';
    i++; // incrémentation // équivaut à écrire : i = i + 1;
}

contenuChapitre8.innerHTML += '<hr>';

// boucle for() {}
// for(valeur_de_depart; condition; incrementation) {}
for (var i = 0; i < 10; i++) {
    contenuChapitre8.innerHTML += i + ' ';
}

contenuChapitre8.innerHTML += '<hr>';

let select = '<select>';

for (var i = 1930; i <= 2022; i++) {
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
contenuChapitre8.innerHTML += '<img src="image1.jpg" width="210">';
contenuChapitre8.innerHTML += '<hr>';

//---------
let aleatoire = Math.floor(Math.random() * 5) + 1;
contenuChapitre8.innerHTML += '<img src="image' + aleatoire + '.jpg" width="210">';
contenuChapitre8.innerHTML += '<hr>';

//---------
let tabImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

let aleatoire2 = Math.floor(Math.random() * tabImages.length);
let imageAleatoire = tabImages[aleatoire2];
contenuChapitre8.innerHTML += '<img src="' + imageAleatoire + '" width="210">';
contenuChapitre8.innerHTML += '<hr>';

// 02
for (var i = 0; i < 5; i++) {
    contenuChapitre8.innerHTML += '<img src="image1.jpg" width="210"> ';
}
contenuChapitre8.innerHTML += '<hr>';

var i = 0;
while (i < 5) {
    contenuChapitre8.innerHTML += '<img src="image2.jpg" width="210"> ';
    i++;
}

contenuChapitre8.innerHTML += '<hr>';

// 03
for (var i = 1; i <= 5; i++) {
    contenuChapitre8.innerHTML += '<img src="image' + i + '.jpg" width="210"> ';
}
contenuChapitre8.innerHTML += '<hr>';

var i = 1;
while (i < 6) {
    contenuChapitre8.innerHTML += '<img src="image' + i + '.jpg" width="210"> ';
    i++;
}
contenuChapitre8.innerHTML += '<hr>';

/*
    09 : Fonctions prédéfinies (fonctions globales)
*/
let contenuChapitre9 = document.getElementById('contenuChapitre9');

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects

// isNaN() permet de savoir si une valeur est bien numérique quelque soit son type
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN

// parseInt() permet de transformer une valeur numérique de type string en type number (uniquement valeur entière, ça enlevera les décimales s'il y en a)

// parseFloat() permet de transformer une valeur numérique de type string en type number (avec les décimales)

let chaine = '123';
contenuChapitre9.innerHTML += chaine + 10; // affiche 12310 car du fait que la variable soit une chaine de caractère (string), le plus fait une concaténation.
// Ce souci de concaténation n'est pas présent pour les autres opérateurs !
contenuChapitre9.innerHTML += '<hr>';
// Pour régler ce souci, nous pouvons parser l'information (on change l'information en type number)

contenuChapitre9.innerHTML += parseInt(chaine) + 10; // affiche 133
contenuChapitre9.innerHTML += '<hr>';
contenuChapitre9.innerHTML += typeof parseInt(chaine) + '<hr>'; // number

// parseInt() ne prendra pas en copmpte les décimales
contenuChapitre9.innerHTML += parseInt('12.98');

contenuChapitre9.innerHTML += '<hr>';

// parseFloat() pour avoir les décimales
contenuChapitre9.innerHTML += parseFloat('12.98');
contenuChapitre9.innerHTML += '<hr>';
contenuChapitre9.innerHTML += `Valeur avec le parseFloat : ${parseFloat('12.98') * 2} <br>`;

/*
    10 : Fonctions utilisateur 
*/
let contenuChapitre10 = document.getElementById('contenuChapitre10');

// déclaration et exécuter

// fonction toute simple renvoyant du texte
// déclaration :
function maFonction() {
    // return représente la réponse de la fonction
    return 'Bonjour à tous<br>';
}
// exécution :
contenuChapitre10.innerHTML += maFonction();
contenuChapitre10.innerHTML += maFonction();
contenuChapitre10.innerHTML += maFonction();

contenuChapitre10.innerHTML += separateur(); // il est possible d'éxécuter une fonction avant sa déclaration.
// Effectivement, le navigateur va d'abord faire une pré lecture du code et isoler toutes les fonctions. Ensuite le code est exécuter et les fonctions sont déjà connues.

// fonction avec argument
function direBonjour(qui) {
    return 'Bonjour ' + qui + ', bienvenue sur notre site !<br>';
}

// Si une fonction attend un ou des argument(s) nous sommes obligé de les fournir
contenuChapitre10.innerHTML += direBonjour(); // undefined si l'argument n'est pas fourni
contenuChapitre10.innerHTML += direBonjour('Mathieu');
let pseudo3 = 'Admin'
contenuChapitre10.innerHTML += direBonjour(pseudo3);
/*
let pseudo4 = prompt('Quel est votre pseudo');

if(pseudo4) {
    contenuChapitre10.innerHTML += direBonjour('Mathieu');
}
*/

// fonction sans argument permettant de renvoyer 3 hr
function separateur() {
    return '<hr><hr><hr>';
}
contenuChapitre10.innerHTML += separateur();

// fonction permettant d'afficher la saison et la temperature
function meteo(saison, temperature) {

    var debut = 'Nous sommes en ' + saison;

    var suite = ', et il fait ' + temperature + ' degré(s).';

    return debut + suite + '<hr>';
}
contenuChapitre10.innerHTML += meteo('été', 32);
contenuChapitre10.innerHTML += meteo('printemps', 18);
contenuChapitre10.innerHTML += meteo('hiver', 0);
contenuChapitre10.innerHTML += meteo('automne', 7);

// Exercice :
// selon la valeur de la saison nous voulons l'article "en" ou "au"
// selon l avaleur de temperature on met le "s" ou pas à degré mais on ne veut pas les parenthèse (-1, 0, 1 : pas de s)
function meteo2(saison, temperature) {

    if (saison == 'printemps') {
        var debut = 'Nous sommes au ' + saison;
    } else {
        var debut = 'Nous sommes en ' + saison;
    }

    // if(temperature == 0 || temperature == -1 || temperature == 1) {
    if (temperature > -2 && temperature < 2) {
        var suite = ', et il fait ' + temperature + ' degré.';
    } else {
        var suite = ', et il fait ' + temperature + ' degrés.';
    }

    return debut + suite + '<hr>';

}
contenuChapitre10.innerHTML += meteo2('été', 32);
contenuChapitre10.innerHTML += meteo2('printemps', 18);
contenuChapitre10.innerHTML += meteo2('hiver', 0);
contenuChapitre10.innerHTML += meteo2('automne', 7);

contenuChapitre10.innerHTML += separateur();

function meteo3(saison, temperature) {
    var article = 'en';
    var s = 's';
    if (saison == 'printemps') {
        article = "au";
    }
    // Math.abs() nous renvoie la valeur positive d'une valeur négative exemple la valeur absolue de -1 sera 1
    // if(Math.abs(temperature) < 2) {
    if (temperature > -2 && temperature < 2) {
        s = '';
    }
    return 'Nous sommes ' + article + ' ' + saison + ' et il fait ' + temperature + ' degré' + s + ' <hr>';
}



contenuChapitre10.innerHTML += meteo3('été', 32);
contenuChapitre10.innerHTML += meteo3('printemps', 18);
contenuChapitre10.innerHTML += meteo3('hiver', 0);
contenuChapitre10.innerHTML += meteo3('automne', 7);

contenuChapitre10.innerHTML += separateur();

// Avec un argument facultatif
function appliqueTVA(prix, taux = 20) {
    return 'Le prix ttc pour ' + prix + ' € HT avec un taux de ' + taux + '% est égal à ' + (prix * (1 + (taux / 100))) + ' € TTC<hr>';
}
contenuChapitre10.innerHTML += appliqueTVA(1000);
contenuChapitre10.innerHTML += appliqueTVA(1000, 5.5);
// Sur cette fonction, le fait de dire que l'argument taux = 20 nous permet de la rendre facultatif.
// Si le deuxième argument n'est pas fourni lors de l'appel de la fonction, le deuxième argument aura sa valeur par defaut (20)
// Si on fourni deux argument, le deuxième écrase la valeur par défaut.


// Environnement Global | Local
// Le script complet est l'environnement global
// Dans les accolades d'une fonction c'est l'environnement local
// Une variable déclarée avec le mot clé var n'existe que dans la fonction où elle a été déclarée et n'écrase une variable extérieure

// Dans des accolades on parle d'un bloc

var animal = 'chien'; // variable global

function jardin() {
    var animal = 'chat'; // variable locale
    return animal;
}

contenuChapitre10.innerHTML += separateur();
contenuChapitre10.innerHTML += animal + '<br>'; // Affiche chien
contenuChapitre10.innerHTML += jardin() + '<br>'; // Affiche chat
contenuChapitre10.innerHTML += animal + '<br>'; // Affiche chien. Si on ne met pas le mot clé var dans la déclaration de la variable animal dans la fonction, cette ligne afficherait chat car la variable serait la même.




/*
    11 : Tableau de données ARRAY
*/
let contenuChapitre11 = document.getElementById('contenuChapitre11');
// array est un type de données
// outil de base : la variable simple : contient une seule valeur
// outil amélioré : une variable de type tableau array : contient plusieurs valeurs

// Un tableau array est toujours composé de deux colonnes uniquement
// une colonne contenant l'indice (numéro)
// une colonne contenant la valeur  

// déclaration (littérale) :
let tabFruits = ['bananes', 'fraises', 'pommes', 'poires', 'kiwis'];

console.log(tabFruits);
/*
0: "bananes"
1: "fraises"
2: "pommes"
3: "poires"
4: "kiwis"
*/

// les indices se génèrent tout seul, en commençant toujours par 0
contenuChapitre11.innerHTML += tabFruits + separateur(); // affiche les valeurs

// Pour piocher un des éléments du tableau, nous pouvons appeler l'indice entre crochet []
contenuChapitre11.innerHTML += tabFruits[1] + '<br>';

// Il est possible de changer une des valeurs :
tabFruits[4] = 'ananas';

console.log(tabFruits);

// il est possible de rajouter des éléments :
// en connaissant l'indice
tabFruits[5] = 'cerises';

// en demandant à js de le faire lui-même
tabFruits.push('grenades', 'abricots', 'tomates');
console.log(tabFruits);
/*
0: "bananes"
1: "fraises"
2: "pommes"
3: "poires"
4: "ananas"
5: "cerises"
6: "grenades"
7: "abricots"
8: "tomates"
*/

// il est possible de rajouter en debut du tableau
tabFruits.unshift('pêches');
console.log(tabFruits);

// pour ordonner les valeurs en ordre alphabétique
tabFruits.sort();
console.log(tabFruits);

// pour connaitre le nombre d'élément présent dans le tableau : length
contenuChapitre11.innerHTML += 'Nombre d\'élément dans la tableau tabFruits : ' + tabFruits.length + '<hr>';

contenuChapitre11.innerHTML += separateur();

for (var i = 0; i < tabFruits.length; i++) {
    contenuChapitre11.innerHTML += '- ' + tabFruits[i] + '<br>';
}

contenuChapitre11.innerHTML += separateur();

let listeFruit = '<ul>';
for (var i = 0; i < tabFruits.length; i++) {
    listeFruit += '<li>' + tabFruits[i] + '</li>';
}
listeFruit += '</ul>';

contenuChapitre11.innerHTML += listeFruit;

// Tableau multidimensionnel
let tabPersonnages = [
                        ['Arthur', 'Kaamelott', 'roi', 40],
                        ['Perceval', 'Kaamelott', 'chevalier', 35],
                        ['Lancelot', 'Kaamelott', 'chevalier', 28],
                        ['Guenievre', 'Kaamelott', 'reine', 38]                        
                    ];
console.log(tabPersonnages);

contenuChapitre11.innerHTML += tabPersonnages[2][0];
// Pour piocher dans un sous tableau array : on appelle une succession de crochet pour chaque sous niveau


/*
    12 : Les objets globaux
*/
let contenuChapitre12 = document.getElementById('contenuChapitre12');

// Dans le langage javascript on dit que tout est objet.
// effectivement, dès que l'on manipule une valeur, cette valeur possède les outils de l'objet global correspondant à son type.
// Par exemple : si on manipule une chaine de caractère, cette chaine possède tout de suite tout les outils de l'objet global "String"
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects

// En terme d'outil pour le dev : 
// 1 : la variable simple : une seule valeur
// 2 : variable array : un ensemble de valeur
// 3 : variable objet : un ensemble de valeur (attributs ou propriétés de l'objet) ainsi que des fonctions (methodes de l'objet)

// String :
contenuChapitre12.innerHTML += '<b>Objet string </b><hr>';

let phrase = 'Bonjour je m\'appelle Marie, nous sommes jeudi';
contenuChapitre12.innerHTML += phrase + '<br>';

// indexOf()
// indexOf() est une methode des objets string permettant de connaitre la position d'une chaine de caractère dans une autre chaine.

contenuChapitre12.innerHTML += 'position du mot Marie dans la variable phrase : ' + phrase.indexOf('Marie') + '<br>';

let email = 'mail@mail.fr';
contenuChapitre12.innerHTML += 'position du caractère @ dans la variable email : ' + email.indexOf('@') + '<br>';
// Affiche 4 car la première position est la position 0

// substring()
// permet de découper une chaine, deux argument à fournir :
// substring(positionDepart, positionFin)
let positionDepart = phrase.indexOf('Marie');
// length pour connaitre la longueur d'une chaine de caractère
let taille = 'Marie'.length;
let positionFin = positionDepart + taille;

// on découpe la chaine afin d'afficher Marie uniquement
contenuChapitre12.innerHTML += phrase.substring(positionDepart, positionFin) + '<br>';

// EXERCICE 1 :
// faire un prompt pour demander à l'utilisateur de choisir une pseudo, ensuite via un if, tester la taille du pseudo.
// Le pseudo doit avoir entre 4 et 14 caractères inclus
// Si la taille du pseudo est correcte, on affiche 'Bonjour "pseudo"' Sinon on affiche un message d'erreur en rouge du genre "Attention, le pseudo doit avoir entre 4 et 14 caractères inclus".

let demandePseudo = prompt('Veuillez saisir votre pseudo');
demandePseudo = demandePseudo.trim(); // on enlève les espaces en début et en fin de chaine.
contenuChapitre12.innerHTML += separateur();
contenuChapitre12.innerHTML += separateur();

if(demandePseudo.length >= 4 && demandePseudo.length <= 14) {
    contenuChapitre12.innerHTML += 'Bonjour ' + demandePseudo;
} else {
    contenuChapitre12.innerHTML += '<div style="background-color: red; color: white; padding: 20px">Attention, <br>Le pseudo doit avoir entre 4 et 14 caractères inclus</div>';
}


contenuChapitre12.innerHTML += separateur();
contenuChapitre12.innerHTML += separateur();



// toLowerCase()
// methode permettant de passer une chaine en minuscule
// toUpperCase()
// methode permettant de passer une chaine en majuscule
contenuChapitre12.innerHTML += 'hello'.toUpperCase() + '<br>';
contenuChapitre12.innerHTML += 'BONJOUR'.toLowerCase() + '<br>';

// EXERCICE 2 :
// Afficher le mot webforce avec la première lettre en majuscule en utilisant ces methodes
// Pour aller plus loin : faire une fonction permettant de passer la premier lettre d'un argument fourni en majuscule.

contenuChapitre12.innerHTML += separateur();
let mot = 'webforce';
contenuChapitre12.innerHTML += mot.substring(0, 1).toUpperCase() + mot.substring(1, mot.length);
contenuChapitre12.innerHTML += separateur();
// substring() : avec deux argument : le premier est la position de départ, le deuxieme est la position de fin
// substring() : avec un seul argument : cet argument représente la position de départ et on récupère toute la suite.
contenuChapitre12.innerHTML += mot.substring(0, 1).toUpperCase() + mot.substring(1);
contenuChapitre12.innerHTML += separateur();
// Il est possible de demander n'importe quelle lettre d'un mot en piochant dans le mot comme dans un tableau array
contenuChapitre12.innerHTML += mot[0].toUpperCase() + mot.substring(1);
contenuChapitre12.innerHTML += separateur();

contenuChapitre12.innerHTML += separateur();

// sous forme de fonction
function upperCaseFirstLetter (mot) {
    return mot.substring(0, 1).toUpperCase() + mot.substring(1);
}
contenuChapitre12.innerHTML += upperCaseFirstLetter('mathieu');

contenuChapitre12.innerHTML += separateur();

// Objet Date
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date

let aujourdhui = new Date();
contenuChapitre12.innerHTML += aujourdhui + '<br>';

// pour avvoir l'année en 4 chiffres : getFullYear()
// Pour avoir le numéro du jour dans le mois : getDate()
// pour avoir le numéro du mois dans l'année : getMonth() Attention, janvier est 0



let jour = aujourdhui.getDate();
if(jour < 10) {
    jour = '0' + jour; 
}
let mois = aujourdhui.getMonth();
mois += 1; // on rajoute 1 sur le mois car getMonth nous renvoie un chiffre entre 0 et 11
if(mois < 10) {
    mois = '0' + mois; 
}
let annee = aujourdhui.getFullYear();
contenuChapitre12.innerHTML += 'Nous sommes le : ' + jour + '/' + mois + '/' + annee;

// Objet Math
// Pour faire des maths
contenuChapitre12.innerHTML += separateur();

// Math.floor() pour arrondir à l'entier inférieur
contenuChapitre12.innerHTML += Math.floor(1.9) + '<br>'; // 1

// Math.ceil() pour arrondir à l'entier supérieur
contenuChapitre12.innerHTML += Math.ceil(1.1) + '<br>'; // 2

// Math.round() pour arrondi au plus proche
contenuChapitre12.innerHTML += Math.round(4.9) + '<br>'; // 5
contenuChapitre12.innerHTML += Math.round(3.1) + '<br>'; // 3
contenuChapitre12.innerHTML += Math.round(3.5) + '<br>'; // 4

// Math.random() pour avoir un chiffre entre 0 et 1 (1 est exclu)
contenuChapitre12.innerHTML += Math.random() + '<br>'; 
// pour avoir un chiffee entre 0 et 9
contenuChapitre12.innerHTML += Math.floor(Math.random() * 10) + '<br>'; 
contenuChapitre12.innerHTML += Math.random() + '<br>'; 

/*
    13 : Les objets
*/
let contenuChapitre13 = document.getElementById('contenuChapitre13');
// un objet est un nouveau type de donnée
// En terme d'outil pour le dev : 
// 1 : la variable simple : une seule valeur
// 2 : variable array : un ensemble de valeur
// 3 : variable objet : un ensemble de valeur (attributs ou propriétés de l'objet) ainsi que des fonctions (methodes de l'objet)

// Pour créer son propre objet
// pour créer un tableau on utilise les crochets []
// pour créer un objet on utilise les accolades {}

let perso = {
    // propriétés
    nom : 'Arthur',
    profession : "Roi",
    adresse : 'Kaamelott',
    competences : ['épée', 'tir à l\'arc', 'stratégie'],
    age : 40,
    
    // methode :
    changerAge : function() {
        // this représente l'élément parent : ici l'objet perso
        return this.age += 1;
    }
};

console.log(perso);

contenuChapitre13.innerHTML += perso.nom + '<br>'; // pour piocher on utilise le point ou les crochets
contenuChapitre13.innerHTML += perso['nom'] + '<br>'; // deux écritures possibles
contenuChapitre13.innerHTML += perso.competences[2] + '<br>'; // 

contenuChapitre13.innerHTML += perso.age + '<br>';
perso.changerAge() + '<br>';
contenuChapitre13.innerHTML += perso.age + '<br>';

contenuChapitre13.innerHTML += typeof perso;



