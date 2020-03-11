"use strict";
exports.__esModule = true;
var Vehicule = /** @class */ (function () {
    function Vehicule() {
    }
    Vehicule.prototype.rouler = function () {
        console.log(this.marque);
    };
    return Vehicule;
}());
exports.Vehicule = Vehicule;
// pour l'utiliser
var v = new Vehicule();
v.marque = "VW";
v.rouler();
// compacter les 2 instructions => const v et v.marque
// ajouter ds class une fonction qui est un mot clé langage
// constructor(){}
var Telephone = /** @class */ (function () {
    // fonction s'execute lorsque l'on fait un new
    function Telephone(num, prop) {
        //console.log ("constructeur de la class telephone")
        // dans le constructor nous allons mettre des instructions d'initialisation
        this.numero = num;
        this.proprietaire = prop;
        console.log(this.numero, this.proprietaire);
    }
    return Telephone;
}());
var t = new Telephone("010101101", "Alain");
new Telephone("0202022", "Beatrice");
// tsc 04-constructeur.ts && node 04-constructeur.js
