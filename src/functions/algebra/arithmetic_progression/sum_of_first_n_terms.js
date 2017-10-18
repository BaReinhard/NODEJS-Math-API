import { OK, ERROR } from '../../sender';
let sum_of_first_n = (a, d, n) => {
    return n / 2 * (2 * a + (n - 1) * d);
};
let sum_of_first_n_sender = (req, res) => {
    let vals = Object.values(req.query);
    if (vals.length === 3) {
        let result = sum_of_first_n(...vals);
        OK(req, res, result);
    } else {
        ERROR(req, res, sum_of_first_n);
    }
};
export { sum_of_first_n, sum_of_first_n_sender };
