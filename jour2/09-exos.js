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
    function Page(titre, description) {
        this.titre = titre;
        this.description = description;
    }
    Page.prototype.footer = function () {
        return "<h3>" + this.titre + "</h3>\n           <p>" + this.description + "</p>";
    };
    return Page;
}());
exports.Page = Page;
// class Enfant
var Portfolio = /** @class */ (function (_super) {
    __extends(Portfolio, _super);
    function Portfolio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Portfolio;
}(Page));
var p = new Portfolio("présentation", "travaille n°1");
console.log(p.footer());
// tsc 09-exos.ts && node tsc 09-exos.js
