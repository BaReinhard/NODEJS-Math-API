/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
// Import Constants

var _constants = require('./constants');

var _nth_term = require('./functions/algebra/arithmetic_progression/nth_term');

var _sum_of_first_n_terms = require('./functions/algebra/arithmetic_progression/sum_of_first_n_terms');

var _combinations = require('./functions/algebra/combinations/combinations');

var _factorial = require('./functions/algebra/combinations/factorial');

var _taylor_sine = require('./functions/calculus/taylor_sine/taylor_sine');

var _sohcahtoa = require('./functions/geometry/sohcahtoa/sohcahtoa');

var _special_relativity = require('./functions/physics/special_relativity/special_relativity');

var _sender = require('./functions/sender');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = ['Content-Type', 'application/json; charset=utf-8'];
// [START app]


var app = (0, _express2.default)();
try {
    app.get(_constants.algebraEndPoint, function (req, res) {
        res.header.apply(res, header);

        res.status(200).send(JSON.stringify(Object.assign({}, {}, _constants.algebraFunctions))).end();
    });
    app.get(_constants.algebraEndPoint + '/:id', function (req, res) {
        res.header.apply(res, header);

        switch (req.params.id) {
            case 'nth_term':
                (0, _sender.SENDER)(req, res, _nth_term.nth_term);
                break;
            case 'sum_of_first_n_numbers':
                (0, _sender.SENDER)(req, res, _sum_of_first_n_terms.sum_of_first_n_numbers);
                break;
            case 'factorial':
                (0, _sender.SENDER)(req, res, _factorial.factorial);
                break;
            case 'combinations':
                (0, _sender.SENDER)(req, res, _combinations.combinations);
                break;
        }
    });
    app.get(_constants.calculusEndPoint, function (req, res) {
        res.header.apply(res, header);

        res.status(200).send(JSON.stringify(Object.assign({}, {}, _constants.calculusFunctions))).end();
    });
    app.get(_constants.geometryEndPoint, function (req, res) {
        res.header.apply(res, header);

        res.status(200).send(JSON.stringify(Object.assign({}, {}, _constants.geometryFunctions))).end();
    });
    app.get(_constants.calculusEndPoint + '/:id', function (req, res) {
        res.header.apply(res, header);
        switch (req.params.id) {
            case 'taylor_sine':
                (0, _sender.SENDER)(req, res, _taylor_sine.taylor_sine);
        }
    });
    app.get(_constants.geometryEndPoint + '/:id', function (req, res) {
        res.header.apply(res, header);

        switch (req.params.id) {
            case 'sohcahtoa':
                (0, _sender.SENDER)(req, res, _sohcahtoa.sohcahtoa);
        }
    });
    app.get(_constants.physicsEndPoint, function (req, res) {
        res.header.apply(res, header);
        res.status(200).send(JSON.stringify(Object.assign({}, {}, _constants.physicsFunctions))).end();
    });
    app.get(_constants.physicsEndPoint + '/:id', function (req, res) {
        res.header.apply(res, header);
        switch (req.params.id) {
            case 'special_relativity':
                (0, _sender.SENDER)(req, res, _special_relativity.special_relativity);
        }
    });
    app.get('/', function (req, res) {
        res.header.apply(res, header);

        res.status(200).send(JSON.stringify({
            author: _constants.author,
            links: {
                calculus: _constants.calculusPath,
                geometry: _constants.geometryPath,
                algebra: _constants.algebraPath,
                physics: _constants.physicsPath,
                repo: _constants.repoURL
            }
        }, null, 4)).end();
    });
} catch (err) {
    console.log(err);
}

// Start the server
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
    console.log('Press Ctrl+C to quit.');
});
// [END app]