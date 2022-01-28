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
