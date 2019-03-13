import {
    highlightLink,
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
});
