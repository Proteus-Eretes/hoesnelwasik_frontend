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

    it('Return the selected tabindex', () => {
        expect(findTabIndex('')).toBe(-1);
        expect(findTabIndex('#velden')).toBe(0);
        expect(findTabIndex('#blocks')).toBe(1);
        expect(findTabIndex('#clubs')).toBe(2);
        expect(findTabIndex('#notFound')).toBe(-1);
    });
});
