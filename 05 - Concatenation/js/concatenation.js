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
