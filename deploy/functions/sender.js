'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SENDER = exports.GIVEDETAILS = exports.ERROR = exports.OK = undefined;

var _constants = require('../constants');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var OK = function OK(req, res, result) {
    res.status(200).send(JSON.stringify({
        result: result,
        link: Object.assign({}, {
            github: 'https://brettreinhard.com/Hacktoberfest-Mathematics#' + req._parsedUrl.pathname.split('/')[2],
            parent: _constants.hostname + '/' + req._parsedUrl.pathname.split('/')[1],
            self: '' + _constants.hostname + req._parsedUrl.pathname
        }, _constants.links)
    }, null, '\t')).end();
};
var ERROR = function ERROR(req, res, func) {
    res.status(200).send(JSON.stringify({
        error: 'Incorrect number of parameters',
        function: {
            name: func.name,
            signature: func.toString()
        }
    }, null, '\n'));
};
var GIVEDETAILS = function GIVEDETAILS(req, res, func) {
    var params = func.toString().substring(func.toString().indexOf('(') + 1, func.toString().indexOf(')'));
    var query = params.split(',').map(function (item, index) {
        return 'param' + parseInt(index + 1) + '=' + parseInt(Math.floor(Math.random() * 10) + 1);
    });
    query = query.toString().replace(/,/g, '&');
    params = params.replace(/ /g, '').split(',');
    res.status(200).send(JSON.stringify({
        function: {
            name: func.name,
            signature: func.toString(),
            base64: Buffer.from(func.toString()).toString('base64'),
            parameters: params,
            example: '' + _constants.hostname + req._parsedUrl.pathname + '?' + query
        },
        links: Object.assign({}, _constants.links, {
            parent: _constants.hostname + '/' + req._parsedUrl.pathname.split('/')[1]
        })
    }, null, '\n'));
};
var SENDER = function SENDER(req, res, func) {
    var vals = Object.values(req.query);
    var params = func.toString().substring(func.toString().indexOf('(') + 1, func.toString().indexOf(')'));
    params = params.toString().split(',').length;

    if (vals.length === params) {
        var result = func.apply(undefined, _toConsumableArray(vals));
        OK(req, res, result);
    } else if (vals.length === 0) {
        GIVEDETAILS(req, res, func);
    } else {
        ERROR(req, res, func);
    }
};
exports.OK = OK;
exports.ERROR = ERROR;
exports.GIVEDETAILS = GIVEDETAILS;
exports.SENDER = SENDER;