import expect from 'expect';
import { special_relativity } from './special_relativity/special_relativity';

describe('Testing Physics', () => {
    describe('Testing Special Relativity', () => {
        it('Testing Special Relativity Velocity', () => {
            expect(special_relativity(3, 3)).toEqual(0);
        });
        it('Testing Special Relativity Mass', () => {
            expect(special_relativity(0, 3)).toEqual(0);
        });
    });
});
