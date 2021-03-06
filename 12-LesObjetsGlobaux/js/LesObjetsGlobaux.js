
// fonction sans argument permettant de renvoyer 3 hr
function separateur () {
    return '<hr><hr><hr>';
}
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
