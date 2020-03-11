"use strict";
exports.__esModule = true;
var call = function (tel) {
    var texte = "j'appelle le " + tel.numero + " de " + tel.proprietaire;
    console.log(texte);
};
// ici l'ibterface définit fortement la fonction
// fonction est DEPENDANTE de l'interface 
// => interet à transformer ce code en une class
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.call = function () {
        var texte = "j'appelle le " + this.numero + " de " + this.proprietaire;
        console.log(texte);
    };
    return Phone;
}());
// pour utiliser une fnction nom_de_la_fonction();
// pour executer une class new
var tel = new Phone;
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
var Vehicule = /** @class */ (function () {
    function Vehicule() {
    }
    Vehicule.prototype.rouler = function () {
        var instruction = " je roule depuis " + this.annee;
        console.log(instruction);
    };
    Vehicule.prototype.description = function () {
        var instruction = "je suis un v\u00E9hicule de la marque " + this.marque;
        return instruction;
    };
    return Vehicule;
}());
var car = new Vehicule;
car.marque = "Bentley";
car.annee = 2018;
car.rouler();
console.log(car.description());
