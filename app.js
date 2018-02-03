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

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _nth_term = require('./functions/algebra/arithmetic_progression/nth_term');

var _sum_of_first_n_terms = require('./functions/algebra/arithmetic_progression/sum_of_first_n_terms');

var _combinations = require('./functions/algebra/combinations/combinations');

var _factorial = require('./functions/algebra/combinations/factorial');

var _taylor_sine = require('./functions/calculus/taylor_sine/taylor_sine');

var _sohcahtoa = require('./functions/geometry/sohcahtoa/sohcahtoa');

var _special_relativity = require('./functions/physics/special_relativity/special_relativity');

var _sender = require('./functions/sender');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = ['Content-Type', 'application/json; charset=utf-8'];
// [START app]


var GIT_STARS = '@gitstars';
var TEST_BOT = '@testbot';

var app = (0, _express2.default)();
var ROOM_URL = 'https://chat.googleapis.com/v1/spaces/AAAAgK4qkZM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=GKn0U5pKXdMfnVHQEbi_h_y4Tpa_iNH02AOAy3o4OuY%3D';
//AV Dev Test "https://chat.googleapis.com/v1/spaces/AAAAFu57MYk/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=2mNZxlGZhx1jqz3vbUjhB2qknHFWsLDWYur5vdvETQo%3D";
function parseBotInfo(rawObject) {
    if (rawObject.text.includes(GIT_STARS)) {
        return {
            botType: GIT_STARS,
            rawText: rawObject.text.replace(GIT_STARS + ' ', '').split(' ')[0]
        };
    } else if (rawObject.text.includes(TEST_BOT)) {
        return {
            botType: TEST_BOT,
            rawText: rawObject.text.replace(TEST_BOT + ' ', '')
        };
    }
}
function respondToChat(postObj) {
    return _axios2.default.post(ROOM_URL, postObj);
}
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
var BOT = { gitstars: [], testbot: [] };
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

        res.status(200).send({ BOT: BOT }).end();
    });

    app.post('/', function (req, res) {
        var rawObject = req.body;
        var BOT_FLAG = void 0;

        var _parseBotInfo = parseBotInfo(rawObject),
            botType = _parseBotInfo.botType,
            rawText = _parseBotInfo.rawText;

        if (botType === GIT_STARS) {
            BOT.gitstars.push(rawObject);

            _axios2.default.get('http://git-awards.com/api/v0/users/' + rawText).then(function (response) {
                var starCount = 0;
                console.log(response.data);
                var topLanguage = { language: '', stars: 0 };
                var repoCount = 0;
                response.data.user.rankings.forEach(function (val) {
                    if (topLanguage.stars < val.stars_count) {
                        topLanguage.stars = val.stars_count;
                        topLanguage.language = val.language;
                    }
                    repoCount += val.repository_count;
                    starCount += val.stars_count;
                });
                respondToChat({
                    text: 'Hey ' + rawObject.sender.displayName + ', for the username ' + rawText + ', I have found ' + starCount + ' stars in ' + repoCount + ' different repos. Your top language is ' + topLanguage.language + ' with ' + topLanguage.stars + ' stars.',
                    thread: {
                        name: rawObject.thread.name
                    }
                }).then(function (r) {
                    res.end();
                }).catch(function (err) {
                    BOT = err;
                });
            }).catch(function (err) {
                respondToChat({
                    text: 'Hey ' + rawObject.sender.displayName + ' are you sure thats a valid username? Please be sure to use personal usernames. Enterprise github accounts don\'t work yet',
                    thread: {
                        name: rawObject.thread.name
                    }
                });
            });
        } else if (botType === TEST_BOT) {
            BOT.testbot.push(rawObject);

            respondToChat({
                text: '** In a mocking tone ** ' + rawText,
                thread: {
                    name: rawObject.thread.name
                }
            }).then(function (r) {
                res.end();
            }).catch(function (err) {
                BOT = err;
            });
        } else {
            res.send('Bad Flag');
        }
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