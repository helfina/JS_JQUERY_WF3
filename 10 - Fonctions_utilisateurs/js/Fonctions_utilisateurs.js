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

// let pseudo4 = prompt('Quel est votre pseudo');
/*
if(pseudo4) {
    contenuChapitre10.innerHTML += direBonjour(pseudo4);
}
*/
// fonction sans argument permettant de renvoyer 3 hr
function separateur () {
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
// selon la valeur de temperature on met le "s" ou pas à degré mais on ne veut pas les parenthèse (-1, 0, 1 : pas de s)
function meteo2(saison, temperature) {

    if(saison === 'printemps'){
        var debut = 'Nous sommes au ' + saison;
    }else{
        var debut = 'Nous sommes en ' + saison;
    }

    if (temperature === -1 || temperature === 0 || temperature === 1){
        var suite = ', et il fait ' + temperature + ' degré.';
    }else {
        var suite = ', et il fait ' + temperature + ' degrés.';
    }
    return '<hr>'+ debut + suite + '<hr>';

}

contenuChapitre10.innerHTML += meteo2('été', 32);
contenuChapitre10.innerHTML += meteo2('printemps', 18);
contenuChapitre10.innerHTML += meteo2('hiver', 0);
contenuChapitre10.innerHTML += meteo2('automne', 7);

/*
* // Exercice :
// selon la valeur de la saison nous voulons l'article "en" ou "au"
// selon l avaleur de temperature on met le "s" ou pas à degré mais on ne veut pas les parenthèse (-1, 0, 1 : pas de s)
function meteo2(saison, temperature) {

    if(saison == 'printemps') {
        var debut = 'Nous sommes au ' + saison;
    } else {
        var debut = 'Nous sommes en ' + saison;
    }

    // if(temperature == 0 || temperature == -1 || temperature == 1) {
    if(temperature > -2 && temperature < 2) {
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
    if(saison == 'printemps') {
        article = "au";
    }
    // Math.abs() nous renvoie la valeur positive d'une valeur négative exemple la valeur absolue de -1 sera 1
    // if(Math.abs(temperature) < 2) {
    if(temperature > -2 && temperature < 2) {
        s = '';
    }
    return 'Nous sommes ' + article + ' ' + saison + ' et il fait ' + temperature + ' degré' + s + ' <hr>';
}
contenuChapitre10.innerHTML += meteo3('été', 32);
contenuChapitre10.innerHTML += meteo3('printemps', 18);
contenuChapitre10.innerHTML += meteo3('hiver', 0);
contenuChapitre10.innerHTML += meteo3('automne', 7);

contenuChapitre10.innerHTML += separateur();

* */

// Avec un argument facultatif
function appliqueTVA(prix, taux = 20) {
    return 'Le prix ttc pour ' + prix + ' € HT avec un taux de ' + taux + '% est égal à ' + (prix * (1+(taux/100))) + ' € TTC<hr>';
}
contenuChapitre10.innerHTML += appliqueTVA(1000);
contenuChapitre10.innerHTML += appliqueTVA(1000, 5.5);
// Sur cette fonction, le fait de dire que l'argument taux = 20 nous permet de la rendre facultatif.
// Si le deuxième argument n'est pas fourni lors de l'appel de la fonction, le deuxième argument aura sa valeur par defaut (20)
// Si on fourni deux argument, le deuxième écrase la valeur par défaut.
