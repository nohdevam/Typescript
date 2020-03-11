"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    Animal.prototype.description = function () {
        return "\n        je suis un Animal,\n        mon nom est " + this.nom + "\n        mon age est $" + this.age;
    };
    return Animal;
}());
exports.Animal = Animal;
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    // ajoute une nouvelle propriété à ma class Enfant
    function Chat(nom, age, couleur) {
        var _this = _super.call(this, nom, age) || this;
        _this.nom = nom;
        _this.age = age;
        _this.couleur = couleur;
        return _this;
        // récupèree les instructions du parent et on les modifies = polymorphisme
    }
    Chat.prototype.information = function () {
        return "\n        je suis un chat mon nom est " + this.nom + "\n        mon age est " + this.age + "\n        ma couleur est " + this.couleur;
    };
    return Chat;
}(Animal));
var c = new Chat("croquette", 4, "roux"); // surcharger la methode du parent = polymorphisme
console.log(c.description()); // methode du parent
console.log(c.information()); // methode de l'enfant
//tsc 10-extends-suite.ts && node 10-extends-suite.js
