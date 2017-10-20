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
import {
    hostname,
    algebraFunctions,
    geometryFunctions,
    calculusFunctions,
    calculusPath,
    algebraPath,
    geometryPath,
    geometryEndPoint,
    calculusEndPoint,
    algebraEndPoint,
    physicsPath,
    physicsFunctions,
    physicsEndPoint,
} from './constants';
import { nth_term } from './functions/algebra/arithmetic_progression/nth_term';
import { sum_of_first_n_numbers } from './functions/algebra/arithmetic_progression/sum_of_first_n_terms';
import { combinations } from './functions/algebra/combinations/combinations';
import { factorial } from './functions/algebra/combinations/factorial';
import { taylor_sine } from './functions/calculus/taylor_sine/taylor_sine';
import { sohcahtoa } from './functions/geometry/sohcahtoa/sohcahtoa';
import { special_relativity } from './functions/physics/special_relativity/special_relativity';
import { SENDER } from './functions/sender';
// [START app]
import express from 'express';
const header = ['Content-Type', 'application/json; charset=utf-8'];

const app = express();
try {
    app.get(algebraEndPoint, (req, res) => {
        res.header(...header);

        res
            .status(200)
            .send(JSON.stringify(Object.assign({}, {}, algebraFunctions)))
            .end();
    });
    app.get(`${algebraEndPoint}/:id`, (req, res) => {
        res.header(...header);

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
    app.get(calculusEndPoint, (req, res) => {
        res.header(...header);

        res
            .status(200)
            .send(JSON.stringify(Object.assign({}, {}, calculusFunctions)))
            .end();
    });
    app.get(geometryEndPoint, (req, res) => {
        res.header(...header);

        res
            .status(200)
            .send(JSON.stringify(Object.assign({}, {}, geometryFunctions)))
            .end();
    });
    app.get(`${calculusEndPoint}/:id`, (req, res) => {
        res.header(...header);
        switch (req.params.id) {
            case 'taylor_sine':
                SENDER(req, res, taylor_sine);
        }
    });
    app.get(`${geometryEndPoint}/:id`, (req, res) => {
        res.header(...header);

        switch (req.params.id) {
            case 'sohcahtoa':
                SENDER(req, res, sohcahtoa);
        }
    });
    app.get(physicsEndPoint, (req, res) => {
        res.header(...header);
        res
            .status(200)
            .send(JSON.stringify(Object.assign({}, {}, physicsFunctions)))
            .end();
    });
    app.get(`${physicsEndPoint}/:id`, (req, res) => {
        res.header(...header);
        switch (req.params.id) {
            case 'special_relativity':
                SENDER(req, res, special_relativity);
        }
    });
    app.get('/', (req, res) => {
        res.header(...header);

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
                        links: {
                            calculus: calculusPath,
                            geometry: geometryPath,
                            algebra: algebraPath,
                            physics: physicsPath,
                            thisRepo: 'https://github.com/BaReinhard/NODEJS-Math-API',
                        },
                    },
                    null,
                    4,
                ),
            )
            .end();
    });
} catch (err) {
    console.log(err);
}

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
// [END app]
