import expect from 'expect';
import { taylor_sine } from './taylor_sine/taylor_sine';

describe('Testing Calculus', () => {
    describe('Testing Taylor Sine', () => {
        it('Testing Taylor Sine', () => {
            expect(taylor_sine(30, 20)).toEqual(0.9129040663436035);
        });
    });
});
