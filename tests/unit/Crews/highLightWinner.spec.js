import { highLightWinner } from '../../../src/components/Crews/highLightWinner';

describe('highLightWinner', () => {
    it('Should return bold for the winnar', () => {
        expect(highLightWinner({ times: [{ subRank: 1 }] })).toBe(
            'font-weight-bold'
        );
        expect(highLightWinner({ times: [{ subRank: '-' }] })).toBe('');
        expect(highLightWinner({ times: [{ subRank: '' }] })).toBe('');
        expect(highLightWinner({ times: [{ subRank: 2 }] })).toBe('');
    });
});
