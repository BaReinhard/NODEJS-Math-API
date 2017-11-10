'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _sohcahtoa = require('./sohcahtoa/sohcahtoa');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Testing Geometry', function () {
    describe('Testing sohcahtoa', function () {
        it('Testing sohcahtoa', function () {
            (0, _expect2.default)((0, _sohcahtoa.sohcahtoa)(3, 6, 8)).toEqual([0.6816387600233341, 0.9305076219123143, -2.185039863261519]);
        });
    });
});