// Hostname to be deployed to
const hostname = 'https://api-math.herokuapp.com:';
// const hostname = 'http://localhost:8080';
const links = {
    root: `${hostname}`,
};
// Pathname for each
const calculusPath = `${hostname}/calculus`;
const calculusEndPoint = `/${calculusPath.split('/')[3]}`;
const algebraPath = `${hostname}/algebra`;
const algebraEndPoint = `/${algebraPath.split('/')[3]}`;
const geometryPath = `${hostname}/geometry`;
const geometryEndPoint = `/${geometryPath.split('/')[3]}`;
const physicsPath = `${hostname}/physics`;
const physicsEndPoint = `/${physicsPath.split('/')[3]}`;

// Functions Under Algebra
const algebraFunctions = {
    functions: {
        nth_term: `${algebraPath}/nth_term`,
        sum_of_first_n_numbers: `${algebraPath}/sum_of_first_n_numbers`,
        factorial: `${algebraPath}/factorial`,
        combinations: `${algebraPath}/combinations`,
    },
    links,
};

// Functions Under Physics
const physicsFunctions = {
    functions: {
        special_relativity: `${physicsPath}/special_relativity`,
    },
    links,
};

// Functions Under Calculus
const calculusFunctions = {
    functions: {
        taylor_sine: `${calculusPath}/taylor_sine`,
    },
    links,
};

// Functions Under Geometry
const geometryFunctions = {
    functions: {
        sohcahtoa: `${geometryPath}/sohcahtoa`,
    },
    links,
};

export {
    hostname,
    algebraFunctions,
    calculusPath,
    algebraPath,
    geometryPath,
    physicsPath,
    geometryFunctions,
    calculusFunctions,
    physicsFunctions,
    algebraEndPoint,
    geometryEndPoint,
    calculusEndPoint,
    physicsEndPoint,
    links,
};
