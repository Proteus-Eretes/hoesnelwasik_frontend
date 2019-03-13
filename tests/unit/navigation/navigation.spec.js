import { highlightLink } from "../../../src/components/Navigation/navigation";

describe('navigation', () => {
    it('Select correct link', () => {
        expect(highlightLink('localhost/sss/0/toss', 'toss')).toBe(true);
        expect(highlightLink('localhost/sss/0/toss', 'club')).toBe(false);
        expect(highlightLink('localhost/sss/0/uitslagen', 'club')).toBe(false);
        expect(highlightLink('localhost/sss/0/uitslagen', 'uitslagen')).toBe(true);
    });
});