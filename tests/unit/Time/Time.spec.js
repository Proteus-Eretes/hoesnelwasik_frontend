import { getFinishTime, getSplash } from '../../../src/components/Time/Time';




describe('getFinishTime', () => {
    it('returns the finish time', () => {
        expect(getFinishTime([{ type: 'Finish', time: 1234.5 }])).toBe(1234.5);
    });

    it('returns the finish time when there are split times', () => {
        expect(
            getFinishTime([
                { type: 'Clocking location', time: 123.4 },
                { type: 'Clocking location', time: 234.5 },
                { type: 'Finish', time: 345.6 },
                { type: 'Clocking location', time: 456.7 }
            ])
        ).toBe(345.6);
    });

    it('returns 0 when there is no finish time', () => {
        expect(getFinishTime([{ type: 'iets', time: 123.4 }])).toBe(0);
    });

    it('returns the calculated time when there are split times', () => {
        expect(
            getFinishTime([
                { type: 'Clocking location', time: 123.4 },
                { type: 'Clocking location', time: 234.5 },
                { type: 'Calculation', time: 345.6 },
                { type: 'Clocking location', time: 456.7 }
            ])
        ).toBe(345.6);
    });
});

describe('getSplash', () => {
    it('returns the splash with correct distance', () => {
        expect(
            getSplash([
                { type: 'Clocking location', distance: 1000, time: 123.4 }
            ])(1000)
        ).toBe(123.4);
    });

    it('returns no time if not clocking location', () => {
        expect(
            getSplash([{ type: 'Finish', distance: 2000, time: 12.3 }])(2000)
        ).toBe(0);
    });

    it('returns no time if not the correct distance', () => {
        expect(
            getSplash([{ type: 'Finish', distance: 1500, time: 12.3 }])(2000)
        ).toBe(0);
    });

    it('returns correct time when multiple locations', () => {
        expect(
            getSplash([
                { type: 'Clocking location', distance: 1000, time: 12.3 },
                { type: 'Clocking location', distance: 2000, time: 112.3 },
                { type: 'Clocking location', distance: 3000, time: 1112.3 },
                { type: 'Finish', distance: 4000, time: 21112.3 }
            ])(2000)
        ).toBe(112.3);
    });
});
