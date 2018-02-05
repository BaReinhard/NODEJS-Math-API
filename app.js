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
var JIRA_BOT = '@jira';

var app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
var BOT = { history: [], error: [] };
var initiated = false;
var ROOM_URL = 'https://chat.googleapis.com/v1/spaces/AAAAgK4qkZM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=GKn0U5pKXdMfnVHQEbi_h_y4Tpa_iNH02AOAy3o4OuY%3D';
//AV Dev Test "https://chat.googleapis.com/v1/spaces/AAAAFu57MYk/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=2mNZxlGZhx1jqz3vbUjhB2qknHFWsLDWYur5vdvETQo%3D";
// Example object
var defaultStep = void 0;
var stepCurrent = defaultStep = {
    allowedValues: [1, 2],
    menuItems: ['Internal Room Problem', 'External Room Problem'],
    id: 1,
    triggersCheck: [],
    next: [{ value: 1, id: 11 }, { value: 2, id: 12 }],
    ticketType: null
};
var steps = [{
    allowedValues: [1, 2],
    menuItems: ['Video Problem', 'Audio Problem'],
    id: 11,
    triggersCheck: [],
    next: [{ value: 1, id: 21 }, { value: 2, id: 22 }],
    ticketType: null
}, {
    allowedValues: [1, 2],
    menuItems: ['Internal Room Problem', 'External Room Problem'],
    id: 21,
    triggersCheck: [],
    next: [],
    ticketType: 'Video Issue'
}, {
    allowedValues: [1, 2],
    menuItems: ['Internal Room Problem', 'External Room Problem'],
    id: 22,
    triggersCheck: [],
    next: [],
    ticketType: 'Audio Issue'
}];
var stepPrevious = null;
var stepTriggered = {};
function parseBotInfo(rawObject) {
    return { choice: rawObject.text, rawText: rawObject.text };
}
function removeBotTag(text, tag) {
    var splitText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (splitText) {
        return text.replace(tag + ' ', '').split(' ')[0];
    }
    return text.replace(tag + ' ', '');
}
function escapeAt(string) {
    return string.replace('@', '@');
}
function respondToChat(postObj) {
    return _axios2.default.post(ROOM_URL, postObj);
}
function createMenu(currentStep) {
    try {
        var str = '';
        currentStep.menuItems.forEach(function (val, ind) {
            str += ind + 1 + '. ' + val + '\n';
        });
        return str;
    } catch (err) {
        BOT.error.push(err);
    }
}
function isValid(choice) {
    try {
        return { valid: true, choice: parseInt(choice) };
    } catch (err) {
        return { valid: false, choice: null };
    }
}
function getNextStep(currentStep, currentChoice) {
    try {
        var ret = {};
        var csId = '';
        currentStep.next.forEach(function (cs) {
            if (cs.value === parseInt(currentChoice)) {
                csId = cs.id;
            }
        });
        steps.forEach(function (obj) {
            if (parseInt(obj.id) === parseInt(csId)) {
                ret = obj;
            }
        });
        return ret;
    } catch (err) {
        BOT.error.push(err);
    }
}

try {
    app.get('/', function (req, res) {
        res.header.apply(res, header);

        res.status(200).send({ BOT: BOT }).end();
    });

    app.post('/', function (req, res) {
        var rawObject = req.body;
        var BOT_FLAG = void 0;
        var thread = rawObject.thread;

        var _parseBotInfo = parseBotInfo(rawObject),
            rawChoice = _parseBotInfo.rawChoice,
            rawText = _parseBotInfo.rawText;

        var _isValid = isValid(rawChoice),
            valid = _isValid.valid,
            choice = _isValid.choice;

        if (valid || initiated === false) {
            BOT.history.push(choice);
            if (initiated === false) {
                respondToChat({
                    text: 'Hello ' + rawObject.sender.displayName + ', please answer the following prompt: \n' + createMenu(stepCurrent),
                    thread: thread
                }).then(function (response) {
                    initiated = true;
                    res.end();
                }).catch(function (err) {
                    res.end();
                });
            } else if (stepPrevious === null && stepCurrent.allowedValues.includes(choice)) {
                BOT.history.push('Second Logic Level');
                respondToChat({
                    text: 'I see, so you currently have a ' + stepCurrent.menuItems[parseInt(choice) - 1] + ', now which next step? \n' + createMenu(getNextStep(stepCurrent, parseInt(choice))),
                    thread: thread
                }).then(function (response) {
                    stepPrevious = stepCurrent;
                    stepCurrent = getNextStep(stepCurrent, parseInt(choice));
                    res.end();
                }).catch(function (err) {
                    res.end();
                });
            } else if (getNextStep(stepCurrent, parseInt(choice)).next.length === 0) {
                // Make JIRA open issue ajax call
                BOT.history.push('Third Logic Level');
                respondToChat({
                    text: 'Thanks ' + rawObject.sender.displayName + ', There is currently no immediate fix, we will open a ' + getNextStep(stepCurrent, parseInt(choice)).ticketType + 'jira ticket for you',
                    thread: thread
                }).then(function (response) {
                    initiated = false;
                    stepPrevious = null;
                    stepCurrent = defaultStep;
                    res.end();
                }).catch(function (err) {
                    res.end();
                });
            }
        } else {
            respondToChat({
                text: 'Please enter a valid choice: \n' + createMenu(stepCurrent),
                thread: thread
            });
        }
    });
} catch (err) {
    console.log(err);
    BOT.other.push('An error was caught somewhere');
}

// Start the server
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
    console.log('Press Ctrl+C to quit.');
});
// [END app]