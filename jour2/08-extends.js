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
var Page = /** @class */ (function () {
    function Page(titre) {
        this.titre = titre;
    }
    Page.prototype.getTitre = function () {
        console.log(this.titre);
    };
    return Page;
}());
exports.Page = Page;
var p = new Page("bonjour");
p.titre = "hello";
var Article = /** @class */ (function (_super) {
    __extends(Article, _super);
    function Article() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Article.prototype.genererHTML = function () {
        this.getTitre();
        console.log(this.titre);
    };
    return Article;
}(Page));
var a = new Article("mon article");
a.getTitre();
a.genererHTML();
// attention vous pouvez utiliser d'autres mots clé que private
// PROTECTED / PUBLIC
// si vous avez choisi private = la variable ne peut être utilisée QUE DANS calss
// Protected = variable utilisable ds la class ainsi que dans les class qui herite de cette class
// Public = variable est utilisable n'importe ou
