"use strict";
exports.__esModule = true;
var Telephone = /** @class */ (function () {
    function Telephone(annee, marque, prop, annuaire // ou Array<string>;
    ) {
        this.annee = annee;
        this.marque = marque;
        this.proprietaire = prop;
        this.annuaire = annuaire;
        console.log(this.annee, this.marque, this.proprietaire, this.annuaire);
    }
    return Telephone;
}());
exports.Telephone = Telephone;
var t = new Telephone(2020, "Iphone", "Edouard", ["ok"]);
