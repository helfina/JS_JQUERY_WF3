/*
    08 : Structure itérative : Boucles
*/
let contenuChapitre8 = document.getElementById('contenuChapitre8');

// Une boucle permet de répéter un ensemble d'instruction autant de fois que nécessaire
// Pour mettre en place une boucle, nous avons besoin de 3 informations :
// 1 : une valeur de départ (compteur)
// 2 : une condition d'entrée
// 3 : une incrémentation ou décrémentation (le fait de changer la valeur du compteur)

// boucle while() {}

var i = 0; // valeur de départ
while(i < 10) { // condition d'entrée
    contenuChapitre8.innerHTML += i + ' ';
    i++; // incrémentation // équivaut à écrire : i = i + 1;
}

contenuChapitre8.innerHTML += '<hr>';

// boucle for() {}
// for(valeur_de_depart; condition; incrementation) {}
for(var i = 0; i < 10; i++) {
    contenuChapitre8.innerHTML += i + ' ';
}

contenuChapitre8.innerHTML += '<hr>';

let select = '<select>';

for(var i = 1930; i <= 2022; i++) {
    // contenuChapitre8.innerHTML += i + ' ';
    select += '<option>' + i + '</option>';
    // console.log(select);
}

select += '</select>';

contenuChapitre8.innerHTML += select;

contenuChapitre8.innerHTML += '<hr>';

// Récupérez 5 images sur le web et les nommer de cette manière : image1.jpg, image2.jpg, image3.jpg, image4.jpg et image5.jpg
// 01 - Affichez une des 5 images dans la page web via javascript
// 02 - Affichez 5 fois la même image avec un seul img src dans le code (indice : une boucle)
// 03 - Affichez les 5 différentes images toujours avec un seul img src dans le code

// 01
contenuChapitre8.innerHTML += '<p>exo 1 : </p><img src="../images/image1.png" width="210">';
contenuChapitre8.innerHTML += '<hr>';

// 02

for (i= 0; i < 5 ; i++){

    contenuChapitre8.innerHTML += '<hr>' + '<p>exo 2 : <br> <img src="../images/image4.png" width="210"></p>';
}

// 03
let imageArray = ['image1.png', 'image2.png','image3.png','image4.png','image5.png', ];
let img = 0;
while( img < 5){
    contenuChapitre8.innerHTML += '<hr><p>exo 3 : </p>' + '<img src="../images/'+ imageArray[img] + '" width="210">';
    img++;
}
contenuChapitre8.innerHTML += '<hr>';

/*corriger======================================================================================================
// 01
contenuChapitre8.innerHTML += '<img src="image1.jpg" width="210">';
contenuChapitre8.innerHTML += '<hr>';

// 02
for(var i = 0; i < 5; i++) {
    contenuChapitre8.innerHTML += '<img src="image1.jpg" width="210"> ';
}
contenuChapitre8.innerHTML += '<hr>';

var i = 0;
while(i < 5) {
    contenuChapitre8.innerHTML += '<img src="image2.jpg" width="210"> ';
    i++;
}

contenuChapitre8.innerHTML += '<hr>';

// 03
for(var i = 1; i <= 5; i++) {
    contenuChapitre8.innerHTML += '<img src="image' + i + '.jpg" width="210"> ';
}
contenuChapitre8.innerHTML += '<hr>';

var i = 1;
while(i < 6) {
    contenuChapitre8.innerHTML += '<img src="image' + i + '.jpg" width="210"> ';
    i++;
}
contenuChapitre8.innerHTML += '<hr>';

//==============================================================================================================================*/
