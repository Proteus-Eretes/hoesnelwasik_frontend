import ClubsOverview from '../../../src/components/Clubs/ClubsOverview';
import { mount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe('ClubsOverview', () => {
    it('Renders the number of teams field correctly', () => {
        // mount mock clubs
        const wrapper = mount(ClubsOverview, {
            localVue,
            propsData: {
                clubs: [
                    {
                        clubname: 'testclub1',
                        clubshort: 'TEST1',
                        numberofteams: '1'
                    },
                    {
                        clubname: 'testclub2',
                        clubshort: 'TEST2',
                        numberofteams: '2'
                    },
                    {
                        clubname: 'testclub3',
                        clubshort: 'TEST3',
                        numberofteams: '3'
                    }
                ]
            }
        });

        // assert that the rendered html contains the clubs
        expect(wrapper.html()).toMatch(/>TEST1<.*>testclub1<.*>1</);
        expect(wrapper.html()).not.toMatch(/>TEST1<.*>1<.*>testclub1</);

        expect(wrapper.html()).toMatch(/>TEST2<.*>testclub2<.*>2</);
        expect(wrapper.html()).not.toMatch(/>TEST2<.*>2<.*>testclub2</);

        expect(wrapper.html()).toMatch(/>TEST3<.*>testclub3<.*>3</);
        expect(wrapper.html()).not.toMatch(/>TEST3<.*>3<.*>testclub3</);
    });
});
