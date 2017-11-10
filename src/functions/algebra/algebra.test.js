import expect from 'expect';
import { nth_term } from './arithmetic_progression/nth_term';
import { sum_of_first_n_terms } from './arithmetic_progression/sum_of_first_n_terms';
import { combinations } from './combinations/combinations';
import { factorial } from './combinations/factorial';
describe('Testing Algebra ', () => {
    // Arithmetic Progression
    describe('Testing Arithmetic Progression', () => {
        it('Testing nth-term', () => {
            expect(nth_term(1, 0, 0)).toEqual(1);
        });
    });
    // Combinations
    describe('Testing Combinations', () => {
        it('Testing combinations', () => {
            expect(combinations(2, 2)).toEqual(1);
        });
        it('Testing Factorial', () => {
            expect(factorial(3)).toEqual(6);
        });
    });
});
