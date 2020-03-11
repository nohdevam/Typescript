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
    function Page(titre, contenu) {
        this.titre = titre;
        this.contenu = contenu;
    }
    Page.prototype.Description = function () {
        return "<article>\n    <h2>" + this.titre + "</h2>\n    <p>" + this.contenu + "</h2>\n</article>";
    };
    return Page;
}());
exports.Page = Page;
var Article = /** @class */ (function (_super) {
    __extends(Article, _super);
    function Article(titre, contenu, categories) {
        var _this = _super.call(this, titre, contenu) || this;
        _this.titre = titre;
        _this.contenu = contenu;
        _this.categories = categories;
        return _this;
    }
    Article.prototype.html = function () {
        var output = "<article>\n            <h2>" + this.titre + "</h2>\n            <p>" + this.contenu + "</h2>\n            <ul>\n            ";
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var item = _a[_i];
            output += "<li>" + this.categories + "</li>";
        }
        output +=
            "</ul>\n                </article>";
        return output;
    };
    return Article;
}(Page));
var p = new Page("page d'accueil", "contenu de la page d'accueil");
console.log(p.html());
var a = new Article("Blog", "page de présentation", ["photoshop", "illustrator"]);
console.log(a.html());
//tsc 11-exos.ts && node 11-exos.js
