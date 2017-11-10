'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nth_term = undefined;

var _sender = require('../../sender');

var nth_term = function nth_term(constant, variable, n) {
    return constant + (n - 1) * variable;
};
exports.nth_term = nth_term;