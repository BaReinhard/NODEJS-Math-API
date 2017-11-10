"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var taylor_sine = function taylor_sine(degree, x) {
    //degree being the number of terms in the sum
    //x being the value whose sine is being calculated

    function factorial(n) {
        if (n == 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    var ans = 0;
    for (var i = 1; i <= degree; i++) {
        ans += Math.pow(-1, i - 1) * Math.pow(x, 2 * i - 1) / factorial(2 * i - 1);
    }
    return ans;
};
exports.taylor_sine = taylor_sine;