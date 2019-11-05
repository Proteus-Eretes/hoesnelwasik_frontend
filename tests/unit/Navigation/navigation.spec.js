import {
    highlightLink,
    openNextRegatta,
    openPrevRegatta,
    switchType
} from '../../../src/components/Navigation/navigation';

describe('navigation', () => {
    it('Select correct link', () => {
        expect(highlightLink('localhost/sss/0/toss', 'toss')).toBe(true);
        expect(highlightLink('localhost/sss/0/toss', 'club')).toBe(false);
        expect(highlightLink('localhost/sss/0/uitslagen', 'club')).toBe(false);
        expect(highlightLink('localhost/sss/0/uitslagen', 'uitslagen')).toBe(
            true
        );
    });

    it('suggest correct type', () => {
        const data1 = {
            params: {
                match: 'sss',
                year: '0'
            },
            fullPath: 'localhost/sss/0/toss'
        };
        const data2 = {
            params: {
                match: 'sss',
                year: '0',
                field: 'E 8+'
            },
            fullPath: 'localhost/sss/0/uitslagen/E 8+'
        };
        const data3 = {
            params: {
                match: 'sss',
                year: '0'
            },
            fullPath: 'localhost/sss/0/toss/'
        };
        const data4 = {
            params: {
                match: 'sss',
                year: '0',
                field: 'E 8+'
            },
            fullPath: 'localhost/sss/0/toss'
        };
        expect(switchType(data1, 'toss')).toBe('/iframe/sss/0/toss');
        expect(switchType(data2, 'toss')).toBe('/iframe/sss/0/toss/E 8+');
        expect(switchType(data3, 'uitslagen')).toBe('/iframe/sss/0/uitslagen');
        expect(switchType(data4, 'toss')).toBe('/iframe/sss/0/toss/E 8+');
    });

    it('Opens the next edition of the regatta', () => {
        const router = {
            currentRoute: {
                params: {},
                fullPath: ''
            }
        };
        const pushSpy = jest.fn();
        router.push = pushSpy;
        openNextRegatta(
            router,
            [
                { match: 'ww', jaar: 2026 },
                { match: 'ww', jaar: 2018 },
                { match: 'ww', jaar: 2028 },
                { match: 'ww', jaar: 2025 },
                { match: 'ww', jaar: 2029 },
                { match: 'ww', jaar: 2016 }
            ],
            { iframe: true, match: 'ww', year: 2019 }
        );

        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy.mock.calls[0][0]).toEqual({
            path: '/iframe/ww/2025/uitslagen',
            hash: 'blocks'
        });
    });

    it('Opens the previous edition of the regatta', () => {
        const router = {
            currentRoute: {
                params: {},
                fullPath: ''
            }
        };
        const pushSpy = jest.fn();
        router.push = pushSpy;
        openPrevRegatta(
            router,
            [
                { match: 'ww', jaar: 2026 },
                { match: 'ww', jaar: 2016 },
                { match: 'ww', jaar: 2017 },
                { match: 'ww', jaar: 2025 },
                { match: 'ww', jaar: 2029 },
                { match: 'ww', jaar: 2015 }
            ],
            { iframe: true, match: 'ww', year: 2019 }
        );

        expect(pushSpy).toHaveBeenCalled();
        expect(pushSpy.mock.calls[0][0]).toEqual({
            path: '/iframe/ww/2017/uitslagen',
            hash: 'blocks'
        });
    });
});
