import { createLocalVue, shallowMount } from '@vue/test-utils';
import OarImage from '../../../src/components/Clubs/OarImage';

import BootstrapVue from 'bootstrap-vue';

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe('OarImage', () => {
    it('Calulates the correct image url', () => {
        const element = shallowMount(OarImage, {
            localVue,
            propsData: {
                club: 'PrO'
            }
        });

        expect(element.vm.sourceUrl).toBe(
            'https://images.poweredbyiris.nl/0/30/cluboars/pro.png'
        );
    });
});
