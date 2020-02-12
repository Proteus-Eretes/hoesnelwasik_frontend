import EventsTable from '../../../src/components/Events/EventsTable';
import {mount, shallowMount} from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import {createLocalVue} from '@vue/test-utils';

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe('EventsTable', () => {
    it('Renders the events correctly', () => {
        const wrapper = mount(EventsTable, {
            localVue,
            propsData: {
                events: [
                    {
                        fieldnameshort: 'DB 1x'
                    },
                    {
                        fieldnameshort: 'HG 4+'
                    }
                ]
            }
        });
        expect(wrapper.html()).toMatch('DB 1x');
        expect(wrapper.html()).toMatch('HG 4+');
        expect(wrapper.html()).not.toMatch('Fiets');
    });

    it('sorts the events accordingly', () => {
        const wrapper = shallowMount(EventsTable, {
            localVue,
            propsData: {
                events: []
            }
        });
        wrapper.setProps({
            events: [
                {
                    fieldnameshort: 'HB 1x',
                    category: 'B'
                },
                {
                    fieldnameshort: 'HG 1x',
                    category: 'G'
                },
                {
                    fieldnameshort: 'J18 1x',
                    category: '18'
                },
                {
                    fieldnameshort: 'HE 1x',
                    category: 'E'
                }
            ]
        });
        expect(wrapper.vm.sortedEvents).toEqual([
            {
                fieldnameshort: 'HE 1x',
                category: 'E'
            },
            {
                fieldnameshort: 'HG 1x',
                category: 'G'
            },
            {
                fieldnameshort: 'HB 1x',
                category: 'B'
            },
            {
                fieldnameshort: 'J18 1x',
                category: '18'
            }
        ]);
    });
});
