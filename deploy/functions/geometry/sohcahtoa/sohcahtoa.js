'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sohcahtoa = function sohcahtoa(adjacent, opposite, hypotenuse) {
    adjacent = parseInt(adjacent);
    opposite = parseInt(opposite);
    hypotenuse = parseInt(hypotenuse);
    var ans = [];

    if (adjacent !== 0 && opposite !== 0 && hypotenuse !== 0) {
        ans[0] = Math.sin(opposite / hypotenuse);
        ans[1] = Math.cos(adjacent / hypotenuse);
        ans[2] = Math.tan(opposite / adjacent);
    } else {
        return 'Params cannot equal 0';
    }
    return ans;
};

exports.sohcahtoa = sohcahtoa;