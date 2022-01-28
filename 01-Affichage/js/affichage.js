/*
    01-Affichage
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
contenuChapitre13.innerHTML += typeof perso;