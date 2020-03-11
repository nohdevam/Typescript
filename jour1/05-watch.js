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
var a = 2;
var b = "Bonjour";
var Formation = (function () {
    function Formation() {
        this.nom = "Javascript";
    }
    Formation.prototype.description = function () {
        return this;
    };
    return Formation;
}());
var JS = (function (_super) {
    __extends(JS, _super);
    function JS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.decouverte = "Initiation";
        return _this;
    }
    return JS;
}(Formation));
function genererLorem() {
    return "Lorem ipsum";
}
