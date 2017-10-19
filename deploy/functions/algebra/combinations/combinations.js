'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combinations = undefined;

var _factorial = require('./factorial');

var combinations = function combinations(n, r) {
  return (0, _factorial.factorial)(n) / ((0, _factorial.factorial)(r) * (0, _factorial.factorial)(n - r));
};

exports.combinations = combinations;