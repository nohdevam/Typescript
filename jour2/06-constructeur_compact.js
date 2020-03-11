"use strict";
exports.__esModule = true;
var Page = (function () {
    function Page(t) {
        this.titre = t;
    }
    return Page;
}());
exports.Page = Page;
var Article = (function () {
    function Article(titre, auteur) {
        this.titre = titre;
        this.auteur = auteur;
    }
    Article.prototype.genererHTML = function () {
        var output = "<article>\n            <h2>" + this.titre + "</h2>\n            <p>" + this.auteur + "</p>\n            </article>";
        return output;
    };
    return Article;
}());
var article1 = new Article("premier article", "Alain");
console.log(article1.genererHTML);
