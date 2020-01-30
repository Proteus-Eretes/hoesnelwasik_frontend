import BlockCard from '../../../src/components/Blocks/BlockCard';
import { mount } from '@vue/test-utils';
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
                        starttime: '11:00:01',
                        field_starttime: null,
                        status: 0
                    },
                    {
                        fieldnameshort: 'H 2x',
                        blocknumber: 5,
                        numberofteams: 65,
                        starttime: '12:12:01',
                        field_starttime: '1212',
                        status: 0
                    }
                ]
            }
        });
        expect(wrapper.html()).toMatch('Blok 5: 11:00');
        expect(wrapper.html()).not.toMatch('Blok 5: 11:00:01');

        expect(wrapper.html()).toMatch(/H 1x.*6.*11:00/);
        expect(wrapper.html()).not.toMatch(/H 1x.*6.*11:00:01/);

        expect(wrapper.html()).toMatch(/H 2x.*65.*11:00/);
        expect(wrapper.html()).not.toMatch(/H 2x.*65.*11:00:01/);
    });

    it('Renders the time of iris2  correctly', () => {
        const wrapper = mount(BlockCard, {
            localVue,
            propsData: {
                block: [
                    {
                        fieldnameshort: 'H 1x',
                        numberofteams: 6,
                        blocknumber: 5,
                        starttime: '11:00:01',
                        field_starttime: '2019-03-09 09:45:00',
                        status: 0
                    },
                    {
                        fieldnameshort: 'H 2x',
                        blocknumber: 5,
                        numberofteams: 65,
                        starttime: '12:12:01',
                        field_starttime: '2019-03-09 10:45:00',
                        status: 0
                    }
                ]
            }
        });
        expect(wrapper.html()).toMatch('Blok 5: 11:00');
        expect(wrapper.html()).not.toMatch('Blok 5: 11:00:01');

        expect(wrapper.html()).toMatch(/H 1x.*6.*9:45/);
        expect(wrapper.html()).not.toMatch(/H 1x.*6.*11:00:01/);

        expect(wrapper.html()).toMatch(/H 2x.*65.*10:45/);
        expect(wrapper.html()).not.toMatch(/H 2x.*65.*11:00:01/);
    });

    it('Render correct field status', () => {
        const wrapper = mount(BlockCard, {
            localVue,
            propsData: {
                block: [
                    {
                        fieldnameshort: 'H 1x',
                        numberofteams: 6,
                        blocknumber: 1,
                        starttime: '11:00:00',
                        field_starttime: '2019-04-29 09:00:00',
                        status: 4
                    },
                    {
                        fieldnameshort: 'H 2x',
                        numberofteams: 4,
                        blocknumber: 1,
                        starttime: '12:00:00',
                        field_starttime: '2019-04-29 10:00:00',
                        status: 2
                    }
                ]
            }
        });

        expect(wrapper.html()).toMatch(/H 1x.*6.*Gestart/);
        expect(wrapper.html()).toMatch(/H 2x.*4.*Onderworpen aan protest/);
    });
});
