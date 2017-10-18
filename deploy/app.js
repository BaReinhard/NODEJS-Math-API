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

var _nth_term = require('./functions/algebra/arithmetic_progression/nth_term');

var _nth_term2 = _interopRequireDefault(_nth_term);

var _sum_of_first_n_terms = require('./functions/algebra/arithmetic_progression/sum_of_first_n_terms');

var _sum_of_first_n_terms2 = _interopRequireDefault(_sum_of_first_n_terms);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// [START app]


var app = (0, _express2.default)();
app.get('/algebra/:id', function (req, res) {
    switch (req.params.id) {
        case 'nth_term':
            var result = _nth_term2.default.apply(undefined, _toConsumableArray(Object.values(req.query)));
            res.status(200).send(JSON.stringify({
                result: result
            })).end();
            break;
        case 'sum_of_n_terms':
    }

    //   res
    //     .status(200)
    //     .send(
    //         JSON.stringify({
    //           hobbies:["programming","making","raspberry-pi","web development","learning"],
    //           technologies:["nodejs",".NET","React","Angular","Google Cloud Platform","Azure Web Services"]
    //         })
    //     ).end();
});
app.get('/', function (req, res) {
    res.status(200).send(JSON.stringify({
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
    }, null, 4)).end();
});

// Start the server
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
    console.log('Press Ctrl+C to quit.');
});
// [END app]