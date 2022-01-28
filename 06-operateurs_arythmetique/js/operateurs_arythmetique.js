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
