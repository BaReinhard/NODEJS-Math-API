'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _ = function _(vals) {
    return console.log(vals);
};
var special_relativity = function special_relativity(mass, velToLightSpeed) {
    return mass != 0 ? velToLightSpeed < 1 ? mass / Math.sqrt(1 - Math.pow(velToLightSpeed, 2.0)) : _('You cannot travel faster than light!') || 0 : _('You cannot weigh 0 units') || 0;
};
exports.special_relativity = special_relativity;