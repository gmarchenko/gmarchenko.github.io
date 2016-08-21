"use strict";

module.exports = function () {
    var a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
    var b = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];


    var isNumeric = function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    var result = 1;

    if (!isNumeric(a)) {
        return a + " is not a number!";
    }

    if (!isNumeric(b)) {
        return b + " is not a number!";
    }

    if (a === 0) {
        return 0;
    }

    if (b === 0) {

        return 1;
    } else {

        if (b < 0) {
            b = -1 * b;
            for (var i = 0; i < b; i++) {
                result = result * a;
            }
            result = 1 / result;
        } else {

            for (var i = 0; i < b; i++) {
                result = result * a;
            }
        }
    }

    return result;
};