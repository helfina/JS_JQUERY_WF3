
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
