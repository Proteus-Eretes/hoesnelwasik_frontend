import { Regatta } from '../../../src/services/Regatta';

describe('Service', () => {
    let fetchSpy;
    let regatta;

    beforeEach(() => {
        fetchSpy = jest.fn();
        regatta = new Regatta('url', 'ww', 0);
        regatta._fetch = fetchSpy;
    });

    it('The regatta fetchs blocks correctly', async () => {
        fetchSpy.mockReturnValue({
            error: false,
            fields: [
                {
                    blockid: 'aa',
                    field: '1',
                    daydate: '2019-01-01',
                    starttime: '12:00:01',
                    startorder: '2'
                },
                {
                    blockid: 'aa',
                    field: '2',
                    daydate: '2019-01-01',
                    startorder: '3',
                    starttime: '12:00:01'
                },
                {
                    blockid: 'ac',
                    field: '4',
                    daydate: '2019-01-02',
                    starttime: '12:00:01',
                    startorder: '1'
                },
                {
                    blockid: 'ab',
                    field: '3',
                    daydate: '2019-01-01',
                    startorder: '3',
                    starttime: '12:00:00'
                }
            ]
        });

        const blocks = regatta.getBlocks();
        expect(fetchSpy).toHaveBeenCalled();
        expect(fetchSpy.mock.calls[0][0]).toBe('/wd/ww/0/velden/');

        expect(await blocks).toEqual([
            [
                {
                    blockid: 'ab',
                    field: '3',
                    daydate: '2019-01-01',
                    startorder: '3',
                    starttime: '12:00:00'
                }
            ],
            [
                {
                    blockid: 'aa',
                    field: '1',
                    startorder: '2',
                    daydate: '2019-01-01',
                    starttime: '12:00:01'
                },
                {
                    blockid: 'aa',
                    field: '2',
                    daydate: '2019-01-01',
                    starttime: '12:00:01',
                    startorder: '3'
                }
            ],
            [
                {
                    blockid: 'ac',
                    field: '4',
                    daydate: '2019-01-02',
                    startorder: '1',
                    starttime: '12:00:01'
                }
            ]
        ]);
    });

    it('The regatta fetchs fields correctly', async () => {
        fetchSpy.mockReturnValue({
            error: false,
            fields: [
                {
                    numberofrowers: 1,
                    field: '1'
                },
                {
                    numberofrowers: 2,
                    field: '2'
                },
                {
                    numberofrowers: 1,
                    field: '3'
                },
                {
                    numberofrowers: 4,
                    field: '5'
                }
            ]
        });

        const fields = await regatta.getFields();
        expect(fetchSpy).toHaveBeenCalled();
        expect(fetchSpy.mock.calls[0][0]).toBe('/wd/ww/0/velden/');

        expect(fields).toEqual([
            undefined,
            [
                { field: '1', numberofrowers: 1 },
                { field: '3', numberofrowers: 1 }
            ],
            [{ field: '2', numberofrowers: 2 }],
            undefined,
            [{ field: '5', numberofrowers: 4 }]
        ]);

        expect(fields[1]).toEqual([
            { field: '1', numberofrowers: 1 },
            { field: '3', numberofrowers: 1 }
        ]);
        expect(fields[2]).toEqual([{ field: '2', numberofrowers: 2 }]);
        expect(fields[4]).toEqual([{ field: '5', numberofrowers: 4 }]);
    });

    it('Can get the current edition', async () => {
        regatta.regattas = [
            {
                shortname: 'head',
                jaar: 2017
            },
            {
                shortname: 'head',
                jaar: 2018
            },
            {
                shortname: 'head',
                jaar: 2019
            },
            {
                shortname: 'ww',
                jaar: 2017
            },
            {
                shortname: 'ww',
                jaar: 2018
            },
            {
                shortname: 'ww',
                jaar: 2019
            }
        ];

        const edition = await regatta.getEdition();

        expect(edition).toEqual({
            shortname: 'ww',
            jaar: 2019
        });
    });

    it('Can get the an sequnce of editions', async () => {
        regatta.regattas = [
            {
                shortname: 'head',
                jaar: 2017
            },
            {
                shortname: 'head',
                jaar: 2018
            },
            {
                shortname: 'head',
                jaar: 2019
            },
            {
                shortname: 'ww',
                jaar: 2017
            },
            {
                shortname: 'ww',
                jaar: 2018
            },
            {
                shortname: 'ww',
                jaar: 2019
            }
        ];

        const editions = await regatta.getEditions('head');

        expect(editions).toEqual([
            {
                shortname: 'head',
                jaar: 2017
            },
            {
                shortname: 'head',
                jaar: 2018
            },
            {
                shortname: 'head',
                jaar: 2019
            }
        ]);
    });

    it('Correctly reset data', () => {
        regatta._clubs = [];
        regatta._fields = [];
        regatta.setYear(5);
        expect(regatta._clubs).toBe(null);
        expect(regatta._fields).toBe(null);

        regatta._clubs = [];
        regatta._fields = [];
        regatta.setMatch('a', 5);
        expect(regatta._clubs).toBe(null);
        expect(regatta._fields).toBe(null);
    });
});
