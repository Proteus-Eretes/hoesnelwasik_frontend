import BlockCard from '../../../src/components/Blocks/BlockCard';
import { mount } from "@vue/test-utils";
import BootstrapVue from 'bootstrap-vue';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe('BlockCard', () => {
    it('Renders the title correctly and fields', () => {
        const wrapper = mount(BlockCard, {
            localVue,
            propsData: {
                block: [
                    {
                        fieldnameshort: 'H 1x',
                        numberofteams: 6,
                        blocknumber: 5,
                        starttime: '11:00:01'
                    },
                    {
                        fieldnameshort: 'H 2x',
                        blocknumber: 5,
                        numberofteams: 65,
                        starttime: '12:12:01'
                    }
                ]
            }
        });
        expect(wrapper.html()).toMatch('Blok 5: 11:00');
        expect(wrapper.html()).not.toMatch('Blok 5: 11:00:01');

        expect(wrapper.html()).toMatch(/H 1x.*6.*11:00/);
        expect(wrapper.html()).not.toMatch(/H 1x.*6.*11:00:01/);

        expect(wrapper.html()).toMatch(/H 2x.*65.*12:12/);
        expect(wrapper.html()).not.toMatch(/H 2x.*65.*12:12:01/);
    });
});
