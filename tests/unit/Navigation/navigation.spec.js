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
            match: 'sss',
            year: '0',
            iframe: false,
            fullPath: 'localhost/sss/0/toss'
        };
        const data2 = {
            match: 'sss',
            year: '0',
            field: 'E 8+',
            iframe: false,
            fullPath: 'localhost/sss/0/uitslagen/E 8+'
        };
        const data3 = {
            match: 'sss',
            year: '0',
            iframe: false,
            fullPath: 'localhost/sss/0/toss/'
        };
        const data4 = {
            match: 'sss',
            year: '0',
            field: 'E 8+',
            iframe: false,
            fullPath: 'localhost/sss/0/toss'
        };
        const data5 = {
            match: 'sss',
            year: '0',
            field: 'E 8+',
            iframe: true,
            fullPath: 'localhost/iframe/sss/0/toss'
        };
        expect(switchType(data1, 'toss')).toBe('/sss/0/toss');
        expect(switchType(data2, 'toss')).toBe('/sss/0/toss');
        expect(switchType(data3, 'uitslagen')).toBe('/sss/0/uitslagen');
        expect(switchType(data4, 'toss')).toBe('/sss/0/toss');
        expect(switchType(data5, 'toss')).toBe('/iframe/sss/0/toss');
    });
});
