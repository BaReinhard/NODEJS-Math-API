import { factorial } from './factorial';
let combinations = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

export { combinations };
