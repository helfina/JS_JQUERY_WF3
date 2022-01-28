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
