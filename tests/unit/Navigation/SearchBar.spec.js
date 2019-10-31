import {createLocalVue, shallowMount} from "@vue/test-utils";
import SearchBar from "../../../src/components/Navigation/SearchBar";

const localVue = createLocalVue();

describe('SwitchElement', () => {
    it('It renders a seach field with given text', () => {
        const element = shallowMount(SearchBar, {
            localVue,
            propsData: {
                searchString: 'Aapjes',
            }
        });

        expect(element.html()).toMatch('Aapjes');
    });
});