import { hostname, links } from '../constants';

// Reusable function to display on each functions endpoint when the correct number of parameters are used via URI
let OK = (req, res, result) => {
    res
        .status(200)
        .send(
            JSON.stringify(
                {
                    result: result,
                    link: Object.assign(
                        {},
                        {
                            github: `https://brettreinhard.com/Hacktoberfest-Mathematics#${req._parsedUrl.pathname.split(
                                '/',
                            )[2]}`,
                            parent: `${hostname}/${req._parsedUrl.pathname.split('/')[1]}`,
                            self: `${hostname}${req._parsedUrl.pathname}`,
                        },
                        links,
                    ),
                },
                null,
                '\t',
            ),
        )
        .end();
};
// Reusable function to display on each functions endpoint when the incorrect number of parameters are used via URI
let ERROR = (req, res, func) => {
    res.status(200).send(
        JSON.stringify(
            {
                error: 'Incorrect number of parameters',
                function: {
                    name: func.name,
                    signature: func.toString(),
                },
            },
            null,
            '\n',
        ),
    );
};

// Reusable function to show details of each functions endpoint
let GIVEDETAILS = (req, res, func) => {
    let params = func.toString().substring(func.toString().indexOf('(') + 1, func.toString().indexOf(')'));
    let query = params
        .split(',')
        .map((item, index) => 'param' + parseInt(index + 1) + '=' + parseInt(Math.floor(Math.random() * 10) + 1));
    query = query.toString().replace(/,/g, '&');
    params = params.replace(/ /g, '').split(',');
    res.status(200).send(
        JSON.stringify(
            {
                function: {
                    name: func.name,
                    signature: func.toString(),
                    base64: Buffer.from(func.toString()).toString('base64'),
                    parameters: params,
                    example: `${hostname}${req._parsedUrl.pathname}?${query}`,
                },
                links: Object.assign({}, links, {
                    parent: `${hostname}/${req._parsedUrl.pathname.split('/')[1]}`,
                }),
            },
            null,
            '\n',
        ),
    );
};

// Reuseable Sender function to properly display each functions endpoint with params passed via URI
let SENDER = (req, res, func) => {
    let vals = Object.values(req.query);
    let params = func.toString().substring(func.toString().indexOf('(') + 1, func.toString().indexOf(')'));
    params = params.toString().split(',').length;

    if (vals.length === params) {
        let result = func(...vals);
        OK(req, res, result);
    } else if (vals.length === 0) {
        GIVEDETAILS(req, res, func);
    } else {
        ERROR(req, res, func);
    }
};
export { OK, ERROR, GIVEDETAILS, SENDER };
