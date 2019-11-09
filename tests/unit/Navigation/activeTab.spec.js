import {
    findTabIndex,
    getActiveTab
} from '../../../src/components/Navigation/activeTab';

describe('activeTab', () => {
    it('Return the correct active tab', () => {
        expect(getActiveTab(-1, 0)).toBe(true);
        expect(getActiveTab(0, 0)).toBe(true);
        expect(getActiveTab(0, -1)).toBe(true);
        expect(getActiveTab(1, 0)).toBe(false);
        expect(getActiveTab(0, 1)).toBe(false);
    });

    it('Return the selected tabindex based on hash', () => {
        expect(findTabIndex('', '')).toBe(-1);
        expect(findTabIndex('#velden', 'uitslagen')).toBe(0);
        expect(findTabIndex('#blocks', 'uitslagen')).toBe(1);
        expect(findTabIndex('#clubs', 'uitslagen')).toBe(2);
        expect(findTabIndex('#notFound', 'aap')).toBe(-1);
    });

    it('Return the selected tabindex based on path', () => {
        expect(findTabIndex('', '/ww/0/uitslagen/aa')).toBe(0);
        expect(findTabIndex('', '/ww/0/loting/aa')).toBe(1);
        expect(findTabIndex('', '/ww/0/club/argo')).toBe(2);
        expect(findTabIndex('', 'notFound')).toBe(-1);
    });
});
