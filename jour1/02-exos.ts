const tableau = ["lundi","mardi","mercredi"];

// 1ere façon
console.log("manière 1");
console.log(tableau[0]);
console.log(tableau[1]);
console.log(tableau[2]);

// 2eme façon
console.log("manière 2");
for(var i=0 ; i < tableau.length ; i++)
{console.log(tableau[i])};

// il existe encore d'autres façon de faire (voir github)

//parcourir et mettre la prmeière lettre en maj

console.log("manière 3 et majuscule");
for (var jour of tableau)
{
    var premiereLettre = jour[0].toUpperCase();
    var resteDuMot = jour.slice(1,4); // couper le mot à partir de la 2éme lettre et récuperer les lettres jusqu'a la 4eme lettre
    console.log(premiereLettre+resteDuMot); 
}
