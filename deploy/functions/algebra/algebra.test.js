'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _nth_term = require('./arithmetic_progression/nth_term');

var _sum_of_first_n_terms = require('./arithmetic_progression/sum_of_first_n_terms');

var _combinations = require('./combinations/combinations');

var _factorial = require('./combinations/factorial');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Testing Algebra ', function () {
    // Arithmetic Progression
    describe('Testing Arithmetic Progression', function () {
        it('Testing nth-term', function () {
            (0, _expect2.default)((0, _nth_term.nth_term)(1, 0, 0)).toEqual(1);
        });
    });
    // Combinations
    describe('Testing Combinations', function () {
        it('Testing combinations', function () {
            (0, _expect2.default)((0, _combinations.combinations)(2, 2)).toEqual(1);
        });
        it('Testing Factorial', function () {
            (0, _expect2.default)((0, _factorial.factorial)(3)).toEqual(6);
        });
    });
});