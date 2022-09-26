"use strict";
var Utility;
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calculateIva(price) {
            return (price * 0.21) + price;
        }
        Taxes.calculateIva = calculateIva;
        function calculatePanaltyIva(price) {
            return (price * 0.30) + price;
        }
        Taxes.calculatePanaltyIva = calculatePanaltyIva;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
///<reference path="utility.ts" />
let utils = Utility.Taxes;
console.log(utils.calculateIva(100));
