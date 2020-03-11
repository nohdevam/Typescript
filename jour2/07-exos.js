"use strict";
exports.__esModule = true;
var Page = /** @class */ (function () {
    function Page(titre, contenu, categories) {
        this.titre = titre;
        this.contenu = contenu;
        this.categories = categories;
    }
    Page.prototype.genererHTML = function () {
        var output = "<div>\n    <h1>" + this.titre + "</h1>\n    <p>" + this.contenu + "</p>\n    <ul>";
        for (var i = 0; i < this.categories.length; i++) {
            output += "<li>" + this.categories[i] + "</li>";
        }
        output += "\n    </ul>\n<div>";
        return output;
    };
    return Page;
}());
exports.Page = Page;
var page1 = new Page("Home page", "lorem ipsum", ["ajax", "node", "angular"]);
console.log(page1.genererHTML());
