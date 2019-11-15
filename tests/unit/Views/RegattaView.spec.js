import { shallowMount } from '@vue/test-utils';
import RegattaView from '../../../src/Views/RegattaView';

describe('RegattaView.vue', () => {
    it('Renders', () => {
        const initSpy = jest.fn();
        const wrapper = shallowMount(RegattaView, {
            methods: {
                init: initSpy
            }
        });
        expect(initSpy).toHaveBeenCalled();
        wrapper.setProps({ year: 0 });
        expect(initSpy.mock.calls.length).toBe(2);
    });
});
