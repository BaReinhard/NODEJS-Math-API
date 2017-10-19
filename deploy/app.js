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

var _constants = require('./constants');

var _nth_term = require('./functions/algebra/arithmetic_progression/nth_term');

var _sum_of_first_n_terms = require('./functions/algebra/arithmetic_progression/sum_of_first_n_terms');

var _combinations = require('./functions/algebra/combinations/combinations');

var _factorial = require('./functions/algebra/combinations/factorial');

var _sender = require('./functions/sender');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// [START app]

app.get('/algebra', function (req, res) {
    res.header('Content-Type', 'application/json; charset=utf-8');

    res.status(200).send(JSON.stringify(Object.assign({}, {}, _constants.algebraFunctions))).end();
});
app.get('/algebra/:id', function (req, res) {
    res.header('Content-Type', 'application/json; charset=utf-8');

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

app.get('/', function (req, res) {
    console.log(_constants.calculusPath);
    res.header('Content-Type', 'application/json; charset=utf-8');

    res.status(200).send(JSON.stringify({
        author: {
            name: 'Brett Reinhard',
            DOB: '08/19/1989',
            age: 28,
            desiredPosition: 'AV Backend Developer Intern',
            desiredCompany: 'Snapchat',
            github: 'https://github.com/bareinhard',
            personalWebsite: 'http://brettreinhard.com',
            instagram: 'https://instagram.com/bareinhard',
            twitter: 'https://twitter.com/brett510',
            snapchat: '@bareinhard'
        },
        mathematics: {
            calculus: _constants.calculusPath,
            geometry: _constants.geometryPath,
            algebra: _constants.algebraPath
        }
    }, null, 4)).end();
});

// Start the server
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
    console.log('Press Ctrl+C to quit.');
});
// [END app]