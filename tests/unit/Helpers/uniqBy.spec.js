import uniqBy from '../../../src/Helpers/uniqBy';

describe('uniqBy', () => {
    it('filters array to unique values only on key', () => {
        expect(
            uniqBy(
                [
                    { key: 'a', value: 1 },
                    { key: 'a', value: 1 },
                    { key: 'a', value: 2 },
                    { key: 'b', value: 2 },
                    { key: 'b', value: 1 },
                ],
                'key'
            )
        ).toEqual([{ key: 'a', value: 1 }, { key: 'b', value: 2 }]);
    });

    it('filters array to unique values only on key and adds first value without the key attribute', () => {
        expect(
            uniqBy(
                [
                    { key: 'a', value: 1 },
                    { key: 'a', value: 1 },
                    { key: 'a', value: 2 },
                    { key: 'b', value: 2 },
                    { key: 'b', value: 1 },
                    { value: 3 },
                    { value: 3 },
                    { value: 4 }
                ],
                'key'
            )
        ).toEqual([{ key: 'a', value: 1 }, { key: 'b', value: 2 }, {value: 3}]);
    });
});
