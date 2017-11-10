"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var factorial = function factorial(n) {
    n = parseInt(n);
    if (n === 0) return 1;
    return n * factorial(n - 1);
};
exports.factorial = factorial;