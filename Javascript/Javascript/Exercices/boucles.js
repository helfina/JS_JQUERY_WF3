// exercice 1 :
let elementExercice1 = document.getElementById('exercice1');

for(var i = 0; i < 10; i++) {
    elementExercice1.innerHTML += i + ' ';
}



// exercice 3 :
let elementExercice3 = document.getElementById('exercice3');

for(var i = 0; i < 100; i++) {

    if(i == 50) {
        // elementExercice3.innerHTML += '<span style="color: red">' + i + '</span> ';
        elementExercice3.innerHTML += '<span class="rouge">' + i + '</span> ';
    } else {
        elementExercice3.innerHTML += i + ' ';
    }
    
}


// exercice 4 :
let elementExercice4 = document.getElementById('exercice4');

for(var i = 0; i < 100; i++) {

    if(i == 0 || i == 10 || i == 20 || i == 30 || i == 40 || i == 50 || i == 60 || i == 70 || i == 80 || i == 90) {
        elementExercice4.innerHTML += '<span class="rouge">' + i + '</span> ';
    } else {
        elementExercice4.innerHTML += i + ' ';
    }
    
}

elementExercice4.innerHTML += '<hr>';

for(var i = 0; i < 100; i++) {

    if(i % 10 == 0) {
        elementExercice4.innerHTML += '<span class="rouge">' + i + '</span> ';
    } else {
        elementExercice4.innerHTML += i + ' ';
    }
    
}

elementExercice4.innerHTML += '<hr>';

var i = 0;
while(i < 100) {

    if(i % 10 == 0) {
        elementExercice4.innerHTML += '<span class="rouge">' + i + '</span> ';
    } else {
        elementExercice4.innerHTML += i + ' ';
    }

    i++;
}
