
// fonction sans argument permettant de renvoyer 3 hr
function separateur () {
    return '<hr><hr><hr>';
}
/*
    13 : Les objets
*/
let contenuChapitre13 = document.getElementById('contenuChapitre13');
// un objet est un nouveau type de donnée
// En terme d'outil pour le dev :
// 1 : la variable simple : une seule valeur
// 2 : variable array : un ensemble de valeur
// 3 : variable objet : un ensemble de valeur (attributs ou propriétés de l'objet) ainsi que des fonctions (methodes de l'objet)

// Pour créer son propre objet
// pour créer un tableau on utilise les crochets []
// pour créer un objet on utilise les accolades {}

let perso = {
    // propriétés
    nom : 'Arthur',
    profession : "Roi",
    adresse : 'Kaamelott',
    competences : ['épée', 'tir à l\'arc', 'stratégie'],
    age : 40,

    // methode :
    changerAge : function() {
        // this représente l'élément parent : ici l'objet perso
        return this.age += 1;
    }
};

console.log(perso);

contenuChapitre13.innerHTML += perso.nom + '<br>'; // pour piocher on utilise le point ou les crochets
contenuChapitre13.innerHTML += perso['nom'] + '<br>'; // deux écritures possibles
contenuChapitre13.innerHTML += perso.competences[2] + '<br>'; //

contenuChapitre13.innerHTML += perso.age + '<br>';
perso.changerAge() + '<br>';
contenuChapitre13.innerHTML += perso.age + '<br>';

contenuChapitre13.innerHTML += typeof perso;