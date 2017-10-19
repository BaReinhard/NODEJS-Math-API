'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var hostname = 'https://mathematics-api.appspot.com';
var algebraFunctions = {
    nth_term: hostname + '/algebra/nth_term',
    sum_of_first_n_numbers: hostname + '/algebra/sum_of_first_n_numbers',
    factorial: hostname + '/algebra/factorial',
    combinations: hostname + '/algebra/combinations'
};
var calculusPath = hostname + '/calculus';
var algebraPath = hostname + '/algebra';
var geometryPath = hostname + '/geometry';
exports.hostname = hostname;
exports.algebraFunctions = algebraFunctions;
exports.calculusPath = calculusPath;
exports.algebraPath = algebraPath;
exports.geometryPath = geometryPath;