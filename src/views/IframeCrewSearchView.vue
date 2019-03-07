<template>
    <div>
        <NavBar :regatta="regatta" :regattas="regattas"></NavBar>
        <ResultOverview :crews="crews"> </ResultOverview>
    </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';
import { Crews } from '@/services/Crews';
import ResultOverview from '../components/Crews/ResultOverview';

export default {
    name: 'IframeCrewSearchView',
    props: {
        field: String,
        match: String,
        year: String,
        target: String
    },
    components: {
        ResultOverview,
        NavBar
    },
    data() {
        return {
            crews: [],
            regatta: {},
            regattas: []
        };
    },
    async mounted() {
        const crews = new Crews(
            'https://beta.hoesnelwasik.nl/api',
            this.match,
            this.year,
            this.field,
            'search'
        );

        this.crews = await crews.getCrews();
        this.regattas = await crews.getEditions(this.match);
        this.regatta = await crews.getEdition();
    }
};
</script>
