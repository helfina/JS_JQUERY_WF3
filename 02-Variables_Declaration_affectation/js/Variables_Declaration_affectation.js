

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
