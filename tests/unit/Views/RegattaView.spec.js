import {createLocalVue, shallowMount} from '@vue/test-utils';
import RegattaView from '../../../src/Views/RegattaView';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter();

router.options.api = 'api';
describe('RegattaView.vue', () => {
    it('Renders', () => {
        const initSpy = jest.fn();
        const wrapper = shallowMount(RegattaView, {
            localVue,
            router,
            methods: {
                init: initSpy
            }
        });
        expect(initSpy).toHaveBeenCalled();
        wrapper.setProps({ year: 0 });
        expect(initSpy.mock.calls.length).toBe(2);
    });
});
