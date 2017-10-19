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
import { hostname, algebraFunctions, calculusPath, algebraPath, geometryPath } from './constants';
import { nth_term } from './functions/algebra/arithmetic_progression/nth_term';
import { sum_of_first_n_numbers } from './functions/algebra/arithmetic_progression/sum_of_first_n_terms';
import { combinations } from './functions/algebra/combinations/combinations';
import { factorial } from './functions/algebra/combinations/factorial';

import { SENDER } from './functions/sender';
// [START app]
import express from 'express';

const app = express();
app.get('/algebra', (req, res) => {
    res.header('Content-Type', 'application/json; charset=utf-8');

    res
        .status(200)
        .send(JSON.stringify(Object.assign({}, {}, algebraFunctions)))
        .end();
});
app.get('/algebra/:id', (req, res) => {
    res.header('Content-Type', 'application/json; charset=utf-8');

    switch (req.params.id) {
        case 'nth_term':
            SENDER(req, res, nth_term);
            break;
        case 'sum_of_first_n_numbers':
            SENDER(req, res, sum_of_first_n_numbers);
            break;
        case 'factorial':
            SENDER(req, res, factorial);
            break;
        case 'combinations':
            SENDER(req, res, combinations);
            break;
    }
});

app.get('/', (req, res) => {
    console.log(calculusPath);
    res.header('Content-Type', 'application/json; charset=utf-8');

    res
        .status(200)
        .send(
            JSON.stringify(
                {
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
                        snapchat: '@bareinhard',
                    },
                    mathematics: {
                        calculus: calculusPath,
                        geometry: geometryPath,
                        algebra: algebraPath,
                    },
                },
                null,
                4,
            ),
        )
        .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
// [END app]
