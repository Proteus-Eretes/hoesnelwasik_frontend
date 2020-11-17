import { getFinishTime, getSplash } from '../../../src/components/Time/Time';
import {mount} from "@vue/test-utils";
import ResultOverview from "@/components/Crews/ResultOverview";
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter();

localVue.use(BootstrapVue);



describe('getFinishTime', () => {
    it('returns the finish time', () => {
        expect(getFinishTime([{ type: 'Finish', time: 1234.5 }])).toBe(1234.5);
    });

    it('returns the finish time when there are split times', () => {
        expect(
            getFinishTime([
                { type: 'Clocking location', time: 123.4 },
                { type: 'Clocking location', time: 234.5 },
                { type: 'Finish', time: 345.6 },
                { type: 'Clocking location', time: 456.7 }
            ])
        ).toBe(345.6);
    });

    it('returns 0 when there is no finish time', () => {
        expect(getFinishTime([{ type: 'iets', time: 123.4 }])).toBe(0);
    });

    it('returns the calculated time when there are split times', () => {
        expect(
            getFinishTime([
                { type: 'Clocking location', time: 123.4 },
                { type: 'Clocking location', time: 234.5 },
                { type: 'Calculation', time: 345.6 },
                { type: 'Clocking location', time: 456.7 }
            ])
        ).toBe(345.6);
    });


    it('does not return finish time when statud is DNS, only returns DNS', () => {
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

    it('does  return finish time when status is OOC, only returns Ooc', () => {
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

describe('getSplash', () => {
    it('returns the splash with correct distance', () => {
        expect(
            getSplash([
                { type: 'Clocking location', distance: 1000, time: 123.4 }
            ])(1000)
        ).toBe(123.4);
    });

    it('returns no time if not clocking location', () => {
        expect(
            getSplash([{ type: 'Finish', distance: 2000, time: 12.3 }])(2000)
        ).toBe(0);
    });

    it('returns no time if not the correct distance', () => {
        expect(
            getSplash([{ type: 'Finish', distance: 1500, time: 12.3 }])(2000)
        ).toBe(0);
    });

    it('returns correct time when multiple locations', () => {
        expect(
            getSplash([
                { type: 'Clocking location', distance: 1000, time: 12.3 },
                { type: 'Clocking location', distance: 2000, time: 112.3 },
                { type: 'Clocking location', distance: 3000, time: 1112.3 },
                { type: 'Finish', distance: 4000, time: 21112.3 }
            ])(2000)
        ).toBe(112.3);
    });
});
