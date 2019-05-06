import findClockingLocations from '../../../src/components/Crews/findClockingLocations';
const createtimes = n => {
    const times = [];
    for (let i = 1; i < n + 1; i++) {
        times.push({
            distance: i * 1000,
            name: i + 'm',
            type: 'Clocking location'
        });
    }
    times.push({
        distance: 3,
        name: 'Finish',
        type: 'Finish'
    });

    return times;
};

describe('findClockingLocation', () => {
    it('distance and name of clocking location', () => {
        expect(
            findClockingLocations([
                {
                    times: [
                        {
                            times: createtimes(2)
                        }
                    ]
                },
                {
                    times: [
                        {
                            times: createtimes(3)
                        }
                    ]
                }
            ])
        ).toEqual([
            { distance: 1000, name: '1m' },
            { distance: 2000, name: '2m' },
            { distance: 3000, name: '3m' }
        ]);
    });

    it('returns empty when no clokcing locations', () => {
        expect(
            findClockingLocations([
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
});
