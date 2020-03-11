export

class Vehicule{
    marque:string;
    rouler() : void{
        console.log(this.marque);
    }
}

// pour l'utiliser
const v = new Vehicule();

v.marque = "VW";
v.rouler();

// compacter les 2 instructions => const v et v.marque

// ajouter ds class une fonction qui est un mot clé langage
// constructor(){}

class Telephone {numero:string;
                proprietaire: string;
    // fonction s'execute lorsque l'on fait un new
    constructor (num:string, prop: string){ // attention tjr en minuscule
        //console.log ("constructeur de la class telephone")
        // dans le constructor nous allons mettre des instructions d'initialisation
        this.numero = num;
        this.proprietaire = prop;
        console.log(this.numero, this.proprietaire);

    }
}

const t = new Telephone("010101101", "Alain");

new Telephone ("0202022", "Beatrice");

// tsc 04-constructeur.ts && node 04-constructeur.js
