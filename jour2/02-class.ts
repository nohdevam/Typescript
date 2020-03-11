export

interface Telephone{
    numero : string,
    proprietaire : string
}

const call = function(tel : Telephone):void{
    const texte = `j'appelle le ${tel.numero} de ${tel.proprietaire}`;
console.log(texte);
}

// ici l'ibterface définit fortement la fonction
// fonction est DEPENDANTE de l'interface 
// => interet à transformer ce code en une class

class Phone { // nom de la class
    numero : string;
    proprietaire : string;

    call():void{ // methode de class
        const texte = `j'appelle le ${this.numero} de ${this.proprietaire}`;
        console.log(texte);
    }
}

// pour utiliser une fnction nom_de_la_fonction();

// pour executer une class new

const tel = new Phone;
// tel = Objet
// Phone = class
// lorsque vous utilisez le mot clé new => transformez une class en un objet => Instanciation

// console.log(tel); => renvoi Phone {} ds shell

// tsc 02-class.ts && node 02-class.js

tel.numero = "01010101";
tel.proprietaire = "Alain";

tel.call(); // ne pas oublier les () pour éxecuter la méthode 

// class = RANGER ET SECURISER plein de concept
    // variables
    // fonctions

// EXOS

class Vehicule { 
    marque : string ;
    annee : number;

    rouler() :void {
        const instruction :string =` je roule depuis ${this.annee}`;
        console.log(instruction) ;
    }
    description() :string {
        const instruction :string = `je suis un véhicule de la marque ${this.marque}`;
        return instruction ;
    }
}

const car = new Vehicule;

car.marque = "Bentley" ;
car.annee  = 2018;

car.rouler();
console.log(car.description());





