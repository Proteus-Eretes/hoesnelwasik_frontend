import TeamPopup from '../../../src/components/Team/TeamPopup';
import { shallowMount } from '@vue/test-utils';
import BootstravVue from 'bootstrap-vue';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();

localVue.use(BootstravVue);

describe('TeamPopup', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(TeamPopup, {
            localVue,
            propsData: {
                team: {}
            }
        });
    });

    it('calculates the right attributes depending on what is available', () => {
        wrapper.setProps({
            team: {
                clubname: 'pro',
                backnumber: '100',
                fieldnameshort: 'H 1x',
                rower8: 'bob',
                coachnames: 'foo\nbar',
                fieldnameshortsub: 'H 1x',
                times: [
                    {
                        comments: 'foo bar'
                    }
                ]
            }
        });
        expect(wrapper.vm.fields).toEqual([
            { key: 'clubname', label: 'Club' },
            { key: 'backnumber', label: 'Rugnummer' },
            { key: 'fieldnameshort', label: 'Veld' },
            { key: 'rower8', label: 'Slag' },
            { key: 'coachnames', label: 'Coach' },
            { key: 'times.0.comments', label: 'Commentaar' }
        ]);
        wrapper.setProps({
            team: {
                clubname: 'pro',
                backnumber: '100',
                fieldnameshort: 'H 1x',
                rower8: 'bob',
                rower3: 'bob',
                rower2: 'bob',
                rower1: 'bob',
                fieldnameshortsub: 'HE 1x',
                steername: 'piet',
                times: [
                    {
                        comments: ''
                    }
                ]
            }
        });
        expect(wrapper.vm.fields).toEqual([
            { key: 'clubname', label: 'Club' },
            { key: 'backnumber', label: 'Rugnummer' },
            { key: 'fieldnameshort', label: 'Veld' },
            { key: 'fieldnameshortsub', label: 'Subveld' },
            { key: 'rower8', label: 'Slag' },
            { key: 'rower3', label: '3' },
            { key: 'rower2', label: '2' },
            { key: 'rower1', label: 'Boeg' },
            { key: 'steername', label: 'Stuur' }
        ]);
        wrapper.setProps({
            team: {
                clubname: 'pro',
                fieldnameshort: 'H 1x',
                rower8: 'bob',
                rower3: 'bob',
                rower2: 'bob',
                rower1: 'bob',
                fieldnameshortsub: 'HE 1x',
                steername: 'piet',
                times: [
                    {
                        comments: '',
                        backnumber: 200
                    }
                ]
            }
        });
        expect(wrapper.vm.fields).toEqual([
            { key: 'clubname', label: 'Club' },
            { key: 'times.0.backnumber', label: 'Rugnummer' },
            { key: 'fieldnameshort', label: 'Veld' },
            { key: 'fieldnameshortsub', label: 'Subveld' },
            { key: 'rower8', label: 'Slag' },
            { key: 'rower3', label: '3' },
            { key: 'rower2', label: '2' },
            { key: 'rower1', label: 'Boeg' },
            { key: 'steername', label: 'Stuur' }
        ]);
    });
});
