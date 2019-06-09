import { shallowMount } from "@vue/test-utils";
import IframeView from '../../../src/Views/IframeView';

describe("IframeView.vue", () => {

    it("Renders", () => {
        const initSpy = jest.fn();
        const wrapper = shallowMount(IframeView, {
            methods: {
                init: initSpy
            }
        });
        expect(initSpy).toHaveBeenCalled();
        wrapper.setProps({ year: 0 });
        expect(initSpy.mock.calls.length).toBe(2);
    });
});
