let OK = (req, res, result) => {
    res
        .status(200)
        .send(
            JSON.stringify(
                {
                    result: result,
                },
                null,
                '\t',
            ),
        )
        .end();
};
let ERROR = (req, res, func) => {
    res.status(200).send(
        JSON.stringify(
            {
                error: 'Incorrect number of parameters',
                name: func.name,
                func_sig: func.toString(),
            },
            null,
            '\n',
        ),
    );
};
export { OK, ERROR };
