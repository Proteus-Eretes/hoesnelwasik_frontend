import ResultOverview from '../../../src/components/Crews/ResultOverview';
import { mount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter();

localVue.use(BootstrapVue);

describe('ResultOverview', () => {
    it('Renders the title correctly and fields in a race with clocking locations', () => {
        const wrapper = mount(ResultOverview, {
            localVue,
            router,
            propsData: {
                crews: [
                    {
                        knrbid: '11e9-2fcd-3c1be544-b1c6-525400d1387d',
                        teamname: 'Orca',
                        fieldnameshort: 'DG 1x',
                        fieldnameshortsub: 'DG 1x',
                        clubname: 'Orca',
                        clubnameshort: 'ORC',
                        rower8: 'Piet de Test',
                        coachnames: 'Coach van piet',
                        times: [
                            {
                                knrbid: '11e9-2fcd-3c1be544-b1c6-525400d1387d',
                                status: '0',
                                rank: 1,
                                backnumber: '149',
                                bonussecond: '0',
                                comments: '',
                                disqualified: 0,
                                excluded: 0,
                                round: '11e9-17ee-922eab8e-bcfe-525400d1387d',
                                alteredTime: 1284.945,
                                times: [
                                    {
                                        time: 60.0,
                                        distance: '1000',
                                        name: '1000m',
                                        type: 'Clocking location',
                                        equal_time_correction: '0',
                                        alteredTime: 253.679
                                    },
                                    {
                                        time: 120.0,
                                        distance: '2000',
                                        name: '2000m',
                                        type: 'Clocking location',
                                        equal_time_correction: '0',
                                        alteredTime: 505.403
                                    },
                                    {
                                        time: 210.0,
                                        distance: '3000',
                                        name: '3000m',
                                        type: 'Clocking location',
                                        equal_time_correction: '0',
                                        alteredTime: 766.64
                                    },
                                    {
                                        time: 240.1,
                                        distance: '4000',
                                        name: '4000m',
                                        type: 'Clocking location',
                                        equal_time_correction: '0',
                                        alteredTime: 1025.554
                                    },
                                    {
                                        time: 301.2,
                                        distance: '5000',
                                        name: 'Finish',
                                        type: 'Finish',
                                        equal_time_correction: '0',
                                        alteredTime: 1284.945
                                    }
                                ],
                                subRank: 1
                            }
                        ]
                    }
                ]
            }
        });
        expect(wrapper.html()).toMatch('Blad');
        expect(wrapper.html()).toMatch('Pos');
        expect(wrapper.html()).toMatch('Veld');
        expect(wrapper.html()).toMatch('Rug#');
        expect(wrapper.html()).toMatch('Ploeg');
        expect(wrapper.html()).toMatch('Slag');
        expect(wrapper.html()).toMatch('1000m');
        expect(wrapper.html()).toMatch('2000m');
        expect(wrapper.html()).toMatch('3000m');
        expect(wrapper.html()).toMatch('4000m');
        expect(wrapper.html()).toMatch('Finish tijd');

        expect(wrapper.html()).toMatch('>1</td>');
        expect(wrapper.html()).toMatch('>DG 1x</td>');
        expect(wrapper.html()).toMatch('>149</td>');
        expect(wrapper.html()).toMatch('>Orca</td>');
        expect(wrapper.html()).toMatch('>Piet de Test</td>');
        expect(wrapper.html()).toMatch('>01:00.0</td>');
        expect(wrapper.html()).toMatch('>02:00.0</td>');
        expect(wrapper.html()).toMatch('>03:30.0</td>');
        expect(wrapper.html()).toMatch('>04:00.1</td>');
        expect(wrapper.html()).toMatch('05:01.2');
    });

    it('Renders the title correctly and fields in a race with multiple rounds', () => {
        const wrapper = mount(ResultOverview, {
            localVue,
            router,
            propsData: {
                crews: [
                    {
                        knrbid: '11e9-2fcd-3c1be544-b1c6-525400d1387d',
                        teamname: 'Orca',
                        fieldnameshort: 'DG 1x',
                        fieldnameshortsub: 'DG 1x',
                        clubname: 'Orca',
                        clubnameshort: 'ORC',
                        rower8: 'Piet de Test',
                        coachnames: 'Coach van piet',
                        times: [
                            {
                                knrbid: '11e9-2fcd-3c1be544-b1c6-525400d1387d',
                                status: '0',
                                rank: 1,
                                backnumber: '149',
                                bonussecond: '0',
                                comments: '',
                                disqualified: 0,
                                excluded: 0,
                                round: '11e9-17ee-922eab8e-bcfe-525400d1387f',
                                alteredTime: 1284.945,
                                times: [
                                    {
                                        time: 60.2,
                                        distance: '5000',
                                        name: 'Ronde 1',
                                        type: 'Finish',
                                        equal_time_correction: '0',
                                        alteredTime: 1284.945
                                    }
                                ],
                                subRank: 1
                            },
                            {
                                knrbid: '11e9-2fcd-3c1be544-b1c6-525400d1387s',
                                status: '0',
                                rank: 1,
                                backnumber: '149',
                                bonussecond: '0',
                                comments: '',
                                disqualified: 0,
                                excluded: 0,
                                round: '11e9-17ee-922eab8e-bcfe-525400d1387a',
                                alteredTime: 1284.945,
                                times: [
                                    {
                                        time: 120,
                                        distance: '3000',
                                        name: 'Ronde 2',
                                        type: 'Finish',
                                        equal_time_correction: '0',
                                        alteredTime: 1285.945
                                    }
                                ],
                                subRank: 1
                            },
                            {
                                totaltime: 1231,
                                rank: 1,
                                splash1: 0,
                                splash2: 0,
                                splash3: 0,
                                splash4: 0,
                                bonussecond: 0,
                                status: 0,
                                equal_time_correction: 0,
                                times: [
                                    {
                                        time: 301.2,
                                        distance: 0,
                                        name: 'Total',
                                        type: 'Calculation',
                                        equal_time_correction: 0,
                                        alteredTime: 1284.945
                                    }
                                ],
                                subRank: 1
                            }
                        ]
                    }
                ]
            }
        });
        expect(wrapper.html()).toMatch('Blad');
        expect(wrapper.html()).toMatch('Pos');
        expect(wrapper.html()).toMatch('Veld');
        expect(wrapper.html()).toMatch('Rug#');
        expect(wrapper.html()).toMatch('Ploeg');
        expect(wrapper.html()).toMatch('Slag');
        expect(wrapper.html()).toMatch('Ronde 1');
        expect(wrapper.html()).toMatch('Ronde 2');
        expect(wrapper.html()).toMatch('Finish tijd');


        expect(wrapper.html()).toMatch('>1</td>');
        expect(wrapper.html()).toMatch('>DG 1x</td>');
        expect(wrapper.html()).toMatch('>149</td>');
        expect(wrapper.html()).toMatch('>Orca</td>');
        expect(wrapper.html()).toMatch('>Piet de Test</td>');
        expect(wrapper.html()).toMatch('>01:00.2</td>');
        expect(wrapper.html()).toMatch('>02:00.0</td>');
        expect(wrapper.html()).toMatch('05:01.2');


    });

    it('does not return finish time when status is DNS, only returns DNS', () => {
        const wrapper = mount(ResultOverview, {
            localVue,
            router,
            propsData: {
                crews: [
                    {
                        knrbid: '11e9-2fcd-3c1be544-b1c6-525400d1387d',
                        teamname: 'Orca',
                        fieldnameshort: 'DG 1x',
                        fieldnameshortsub: 'DG 1x',
                        clubname: 'Orca',
                        clubnameshort: 'ORC',
                        rower8: 'Piet de Test',
                        coachnames: 'Coach van piet',
                        times: [
                            {
                                knrbid: '11e9-2fcd-3c1be544-b1c6-525400d1387d',
                                status: '8',
                                rank: 1,
                                backnumber: '149',
                                bonussecond: '0',
                                comments: '',
                                disqualified: 0,
                                excluded: 0,
                                round: '11e9-17ee-922eab8e-bcfe-525400d1387d',
                                alteredTime: 1284.945,
                                times: [
                                    {
                                        time: 60.0,
                                        distance: '1000',
                                        name: '1000m',
                                        type: 'Clocking location',
                                        equal_time_correction: '0',
                                        alteredTime: 253.679
                                    },
                                    {
                                        time: 301.2,
                                        distance: '5000',
                                        name: 'Finish',
                                        type: 'Finish',
                                        equal_time_correction: '0',
                                        alteredTime: 1284.945
                                    }
                                ],
                                subRank: 1
                            }
                        ]
                    }
                ]
            }
        });

        expect(wrapper.html()).not.toMatch('05:01.2');
        expect(wrapper.html()).toMatch('DNS');
    });

    it('does return finish time when status is Ooc, also returns Ooc', () => {
        const wrapper = mount(ResultOverview, {
            localVue,
            router,
            propsData: {
                crews: [
                    {
                        knrbid: '11e9-2fcd-3c1be544-b1c6-525400d1387d',
                        teamname: 'Orca',
                        fieldnameshort: 'DG 1x',
                        fieldnameshortsub: 'DG 1x',
                        clubname: 'Orca',
                        clubnameshort: 'ORC',
                        rower8: 'Piet de Test',
                        coachnames: 'Coach van piet',
                        times: [
                            {
                                knrbid: '11e9-2fcd-3c1be544-b1c6-525400d1387d',
                                status: '4',
                                rank: 1,
                                backnumber: '149',
                                bonussecond: '0',
                                comments: '',
                                disqualified: 0,
                                excluded: 0,
                                round: '11e9-17ee-922eab8e-bcfe-525400d1387d',
                                alteredTime: 1284.945,
                                times: [
                                    {
                                        time: 60.0,
                                        distance: '1000',
                                        name: '1000m',
                                        type: 'Clocking location',
                                        equal_time_correction: '0',
                                        alteredTime: 253.679
                                    },
                                    {
                                        time: 301.2,
                                        distance: '5000',
                                        name: 'Finish',
                                        type: 'Finish',
                                        equal_time_correction: '0',
                                        alteredTime: 1284.945
                                    }
                                ],
                                subRank: 1
                            }
                        ]
                    }
                ]
            }
        });

        expect(wrapper.html()).toMatch('05:01.2');
        expect(wrapper.html()).toMatch('Ooc');
    });
});
