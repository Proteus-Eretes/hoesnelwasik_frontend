import filterEvents from '../../../src/components/Events/filterEvents';

const events = fieldnameshort => [
    {
        id: 1,
        isman: true,
        islight: true,
        fieldnameshort
    },
    {
        id: 2,
        isman: true,
        islight: false,
        fieldnameshort
    },
    {
        id: 3,
        isman: false,
        islight: true,
        fieldnameshort
    },
    {
        id: 4,
        isman: false,
        islight: false,
        fieldnameshort
    },
    {
        id: 5,
        isman: 1,
        islight: 1,
        fieldnameshort
    },
    {
        id: 6,
        isman: 1,
        islight: 0,
        fieldnameshort
    },
    {
        id: 7,
        isman: 0,
        islight: 1,
        fieldnameshort
    },
    {
        id: 8,
        isman: 0,
        islight: 0,
        fieldnameshort
    },
    {
        id: 9,
        isman: '1',
        islight: '1',
        fieldnameshort
    },
    {
        id: 10,
        isman: '1',
        islight: '0',
        fieldnameshort
    },
    {
        id: 11,
        isman: '0',
        islight: '1',
        fieldnameshort
    },
    {
        id: 12,
        isman: '0',
        islight: '0',
        fieldnameshort
    },
    {
        id: 13,
        isman: 1,
        islight: null,
        fieldnameshort
    },
    {
        id: 14,
        isman: null,
        islight: 1,
        fieldnameshort
    },
    {
        id: 15,
        isman: 0,
        islight: null,
        fieldnameshort
    },
    {
        id: 16,
        isman: null,
        islight: 0,
        fieldnameshort
    }
];

describe('Events are filtered correctly', () => {
    it('Filter on man - isLight', () => {
        const fieldnameshort = 'X 1x';
        expect(filterEvents(events(fieldnameshort), true, true)).toEqual([
            {
                id: 1,
                isman: true,
                islight: true,
                fieldnameshort
            },
            {
                id: 5,
                isman: 1,
                islight: 1,
                fieldnameshort
            },
            {
                id: 9,
                isman: '1',
                islight: '1',
                fieldnameshort
            }
        ]);
    });

    it('Filter on man', () => {
        const fieldnameshort = 'X 1x';
        expect(filterEvents(events(fieldnameshort), true, false)).toEqual([
            {
                id: 2,
                isman: true,
                islight: false,
                fieldnameshort
            },
            {
                id: 6,
                isman: 1,
                islight: 0,
                fieldnameshort
            },
            {
                id: 10,
                isman: '1',
                islight: '0',
                fieldnameshort
            },
            {
                id: 13,
                isman: 1,
                islight: null,
                fieldnameshort
            }
        ]);
    });

    it('Filter on woman - isLight', () => {
        const fieldnameshort = 'X 1x';
        expect(filterEvents(events(fieldnameshort), false, true)).toEqual([
            {
                id: 3,
                isman: false,
                islight: true,
                fieldnameshort
            },
            {
                id: 7,
                isman: 0,
                islight: 1,
                fieldnameshort
            },
            {
                id: 11,
                isman: '0',
                islight: '1',
                fieldnameshort
            },
            {
                id: 14,
                isman: null,
                islight: 1,
                fieldnameshort
            }
        ]);
    });

    it('Filter on woman', () => {
        const fieldnameshort = 'X 1x';
        expect(filterEvents(events(fieldnameshort), false, false)).toEqual([
            {
                id: 4,
                isman: false,
                islight: false,
                fieldnameshort
            },
            {
                id: 8,
                isman: 0,
                islight: 0,
                fieldnameshort
            },
            {
                id: 12,
                isman: '0',
                islight: '0',
                fieldnameshort
            },
            {
                id: 15,
                isman: 0,
                islight: null,
                fieldnameshort
            },
            {
                id: 16,
                isman: null,
                islight: 0,
                fieldnameshort
            }
        ]);
    });

    it('Filter on mix - isLight', () => {
        const fieldnameshort = 'Mix 1x';
        expect(filterEvents(events(fieldnameshort), false, true, true)).toEqual(
            [
                {
                    id: 1,
                    isman: true,
                    islight: true,
                    fieldnameshort
                },
                {
                    id: 3,
                    isman: false,
                    islight: true,
                    fieldnameshort
                },
                {
                    id: 5,
                    isman: 1,
                    islight: 1,
                    fieldnameshort
                },
                {
                    id: 7,
                    isman: 0,
                    islight: 1,
                    fieldnameshort
                },
                {
                    id: 9,
                    isman: '1',
                    islight: '1',
                    fieldnameshort
                },
                {
                    id: 11,
                    isman: '0',
                    islight: '1',
                    fieldnameshort
                },
                {
                    id: 14,
                    isman: null,
                    islight: 1,
                    fieldnameshort
                }
            ]
        );
    });

    it('Filter on mix', () => {
        const fieldnameshort = 'Mix 1x';
        expect(filterEvents(events(fieldnameshort), true, false, true)).toEqual(
            [
                {
                    fieldnameshort,
                    id: 2,
                    islight: false,
                    isman: true
                },
                {
                    fieldnameshort,
                    id: 4,
                    islight: false,
                    isman: false
                },
                {
                    fieldnameshort,
                    id: 6,
                    islight: 0,
                    isman: 1
                },
                {
                    fieldnameshort,
                    id: 8,
                    islight: 0,
                    isman: 0
                },
                {
                    fieldnameshort,
                    id: 10,
                    islight: '0',
                    isman: '1'
                },
                {
                    fieldnameshort,
                    id: 12,
                    islight: '0',
                    isman: '0'
                },
                {
                    fieldnameshort,
                    id: 13,
                    islight: null,
                    isman: 1
                },
                {
                    fieldnameshort,
                    id: 15,
                    islight: null,
                    isman: 0
                },
                {
                    fieldnameshort,
                    id: 16,
                    islight: 0,
                    isman: null
                }
            ]
        );
    });
});
