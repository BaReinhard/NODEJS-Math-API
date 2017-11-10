'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _special_relativity = require('./special_relativity/special_relativity');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Testing Physics', function () {
    describe('Testing Special Relativity', function () {
        it('Testing Special Relativity Velocity', function () {
            (0, _expect2.default)((0, _special_relativity.special_relativity)(3, 3)).toEqual(0);
        });
    });
});