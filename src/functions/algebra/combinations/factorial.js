let factorial = n => {
    n = parseInt(n);
    if (n === 0) return 1;
    return n * factorial(n - 1);
};
export { factorial };
