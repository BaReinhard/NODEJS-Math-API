'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// Hostname to be deployed to
var hostname = 'https://api-math.herokuapp.com:';
// const hostname = 'http://localhost:8080';
var links = {
    root: '' + hostname
};
// repo url
var repoURL = 'https://github.com/BaReinhard/NODEJS-Math-API';
// Pathname for each
var calculusPath = hostname + '/calculus';
var calculusEndPoint = '/' + calculusPath.split('/')[3];
var algebraPath = hostname + '/algebra';
var algebraEndPoint = '/' + algebraPath.split('/')[3];
var geometryPath = hostname + '/geometry';
var geometryEndPoint = '/' + geometryPath.split('/')[3];
var physicsPath = hostname + '/physics';
var physicsEndPoint = '/' + physicsPath.split('/')[3];
var author = {
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
};
// Functions Under Algebra
var algebraFunctions = {
    functions: {
        nth_term: algebraPath + '/nth_term',
        sum_of_first_n_numbers: algebraPath + '/sum_of_first_n_numbers',
        factorial: algebraPath + '/factorial',
        combinations: algebraPath + '/combinations'
    },
    links: links
};

// Functions Under Physics
var physicsFunctions = {
    functions: {
        special_relativity: physicsPath + '/special_relativity'
    },
    links: links
};

// Functions Under Calculus
var calculusFunctions = {
    functions: {
        taylor_sine: calculusPath + '/taylor_sine'
    },
    links: links
};

// Functions Under Geometry
var geometryFunctions = {
    functions: {
        sohcahtoa: geometryPath + '/sohcahtoa'
    },
    links: links
};

exports.hostname = hostname;
exports.algebraFunctions = algebraFunctions;
exports.calculusPath = calculusPath;
exports.algebraPath = algebraPath;
exports.geometryPath = geometryPath;
exports.physicsPath = physicsPath;
exports.geometryFunctions = geometryFunctions;
exports.calculusFunctions = calculusFunctions;
exports.physicsFunctions = physicsFunctions;
exports.algebraEndPoint = algebraEndPoint;
exports.geometryEndPoint = geometryEndPoint;
exports.calculusEndPoint = calculusEndPoint;
exports.physicsEndPoint = physicsEndPoint;
exports.links = links;
exports.repoURL = repoURL;
exports.author = author;