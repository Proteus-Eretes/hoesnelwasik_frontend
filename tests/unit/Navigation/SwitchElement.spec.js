import {createLocalVue, shallowMount} from "@vue/test-utils";
import VueRouter from 'vue-router';
import SwitchElement from "../../../src/components/Navigation/SwitchElement";

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter();

describe('SwitchElement', () => {
    it('Highlight on routing parh', () => {
        router.push('uitslagen');
        const element = shallowMount(SwitchElement, {
            localVue,
            router,
            propsData: {
                target: 'loting',
                linkClass: ''
            }
        });

        expect(element.vm.highlight).toBe(false);
        expect(element.vm.currentRoute).toBe('/uitslagen');
        expect(element.html()).not.toMatch('strong');
        router.push('loting');
        expect(element.vm.highlight).toBe(true);
        expect(element.html()).toMatch('strong');
        expect(element.vm.currentRoute).toBe('/loting');
    });
});