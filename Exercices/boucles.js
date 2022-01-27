// exercice 1 :
let elementExercice1 = document.getElementById('exercice1');

for (let i = 0; i < 10; i++) {
    elementExercice1.innerHTML += i + ' ';
}

// exercice 2 :
let elementExercice2 = document.getElementById('exercice2');

for (let i = 0; i < 100; i++) {
    elementExercice2.innerHTML += i + ' ';
}

// exercice 3 :
let elementExercice3 = document.getElementById('exercice3');

for (let i = 0; i < 100; i++) {
    // if (i === 50) {
    //     elementExercice3.innerHTML += '<span style="color: red">' + i + '</span> ';
    // }else{
    //     elementExercice3.innerHTML += i + ' ';
    // }
    i === 50 ?  elementExercice3.innerHTML += '<span style="color: red">' + i + '</span> ' :  elementExercice3.innerHTML += i + ' ';

}

// exercice 4 :
let elementExercice4 = document.getElementById('exercice4');

for (let i = 0; i < 100; i++) {
    switch (i) {
        case 10 :
            elementExercice4.innerHTML += '<span style="color: red">' + i + '</span> ';
            break;
        case 20 :
            elementExercice4.innerHTML += '<span style="color: red">' + i + '</span> ';
            break;
        case 30 :
            elementExercice4.innerHTML += '<span style="color: red">' + i + '</span> ';
            break;
        case 40 :
            elementExercice4.innerHTML += '<span style="color: red">' + i + '</span> ';
            break;
        case 50 :
            elementExercice4.innerHTML += '<span style="color: red">' + i + '</span> ';
            break;
        case 60 :
            elementExercice4.innerHTML += '<span style="color: red">' + i + '</span> ';
            break;
        case 70 :
            elementExercice4.innerHTML += '<span style="color: red">' + i + '</span> ';
            break;
        case 80 :
            elementExercice4.innerHTML += '<span style="color: red">' + i + '</span> ';
            break;
        case 90 :
            elementExercice4.innerHTML += '<span style="color: red">' + i + '</span> ';
            break;
        default :
            elementExercice4.innerHTML += i + ' ';
            break;
    }
//if(i % 10 == 0){
// }
}

// exercice 5 :
let elementExercice5 = document.getElementById('exercice5');
let ul = '<ul>';
for (let i = 0; i < 10; i++) {
    elementExercice5.innerHTML = ul += '<li>' + i + '</li> ';
}
ul += '</ul>';


// exercice 6 :
let elementExercice6 = document.getElementById('exercice6');
let table = document.createElement("table");
let tbody = document.createElement("tbody");

for (let i = 0; i < 1; i++) {

    let ligne = document.createElement("tr");

    for (let number = 0; number < 10; number++) {
        let cellule = document.createElement("td");
        let numberCellule = document.createTextNode(number);
        cellule.appendChild(numberCellule);
        ligne.appendChild(cellule);
    }
    tbody.appendChild(ligne);
}

table.appendChild(tbody);
elementExercice6.appendChild(table);
table.setAttribute('border',"2");


// exercice 7 :
let elementExercice7 = document.getElementById('exercice7');
let table2 = document.createElement("table");
let tbody2 = document.createElement("tbody");
let nombre = 0;
for (let i = 0; i < 10; i++) {

    let ligne2 = document.createElement("tr");

    for (let number2 = 0; number2 < 10; number2++) {
        let cellule2 = document.createElement("td");
        let numberCellule2 = document.createTextNode(nombre);
        nombre++;
        cellule2.appendChild(numberCellule2);
        ligne2.appendChild(cellule2);
    }
    tbody2.appendChild(ligne2);
}
table2.appendChild(tbody2);
elementExercice7.appendChild(table2);
table2.setAttribute('border',"2");

elementExercice7.style.backgroundColor= "red";