
function separateur () {
    return '<hr><hr><hr>';
}
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

