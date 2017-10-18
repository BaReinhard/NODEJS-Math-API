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
import { nth_term_sender } from './functions/algebra/arithmetic_progression/nth_term';
import { sum_of_first_n_sender } from './functions/algebra/arithmetic_progression/sum_of_first_n_terms';

// [START app]
import express from 'express';

const app = express();
app.get('/algebra/:id', (req, res) => {
    switch (req.params.id) {
        case 'nth_term':
            nth_term_sender(req, res);
            break;
        case 'sum_of_first_n_terms':
            sum_of_first_n_sender(req, res);
            break;
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
app.get('/', (req, res) => {
    res
        .status(200)
        .send(
            JSON.stringify(
                {
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
