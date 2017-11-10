'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _taylor_sine = require('./taylor_sine/taylor_sine');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Testing Calculus', function () {
    describe('Testing Taylor Sine', function () {
        it('Testing Taylor Sine', function () {
            (0, _expect2.default)((0, _taylor_sine.taylor_sine)(30, 20)).toEqual(0.9129040663436035);
        });
    });
});