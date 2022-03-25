import findMultipleRounds from '../../../src/components/Crews/findMultipleRounds';
const createtimes = n => {
    const times = [];
    if (n !== 0) {
        times.push({
            distance: n * 1000,
            name: n + 'm',
            type: 'Finish'
        });
    }
    times.push({
        distance: 3,
        name: 'Average',
        type: 'Calculated'
    });
    times.push({
        distance: 100,
        name: '100m',
        type: 'Clocking location'
    });

    return times;
};

describe('findRound', () => {
    it('distance and name of rounds', () => {
        expect(
            findMultipleRounds([
                {
                    times: [
                        {
                            times: createtimes(5)
                        }
                    ]
                },
                {
                    times: [
                        {
                            times: createtimes(1)
                        }
                    ]
                },
                {
                    times: [
                        {
                            times: createtimes(3)
                        }
                    ]
                },
            ])
        ).toEqual([
            { distance: 5000, name: '5m' },
            { distance: 1000, name: '1m' },
            { distance: 3000, name: '3m' }
        ]);
    });

    it('returns empty when no rounds', () => {
        expect(
            findMultipleRounds([
                {
                    times: [
                        {
                            times: createtimes(0)
                        }
                    ]
                },
                {
                    times: [
                        {
                            times: createtimes(0)
                        }
                    ]
                }
            ])
        ).toEqual([]);
    });

    it('returns empty when no times', () => {
        expect(
            findMultipleRounds( [
                {

                }
            ])
        ).toEqual([]);
    });
});
