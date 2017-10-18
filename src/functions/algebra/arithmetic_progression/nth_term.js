import { OK, ERROR } from '../../sender';
let nth_term = (constant, variable, n) => {
    return constant + (n - 1) * variable;
};
let nth_term_sender = (req, res) => {
    let vals = Object.values(req.query);
    if (vals.length === 3) {
        let result = nth_term(...vals);
        OK(req, res, result);
    } else {
        ERROR(req, res, nth_term);
    }
};
export { nth_term, nth_term_sender };
