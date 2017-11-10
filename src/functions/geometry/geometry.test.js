import expect from 'expect';
import { sohcahtoa } from './sohcahtoa/sohcahtoa';

describe('Testing Geometry', () => {
    describe('Testing sohcahtoa', () => {
        it('Testing sohcahtoa', () => {
            expect(sohcahtoa(3, 6, 8)).toEqual([0.6816387600233341, 0.9305076219123143, -2.185039863261519]);
        });
    });
});
