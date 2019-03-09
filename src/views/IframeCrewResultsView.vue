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
    name: 'IframeCrewResultsView',
    props: {
        field: String,
        match: String,
        year: String
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
    watch: {
        $route: function(to, from) {
            window.gtag('event', 'page_view', { send_to: 'UA-92572628-1' });
        }
    },
    async mounted() {
        const crews = new Crews(
            'https://beta.hoesnelwasik.nl/api',
            this.match,
            this.year,
            this.field,
            'uitslagen'
        );

        this.crews = await crews.getCrews();
        this.regattas = await crews.getEditions(this.match);
        this.regatta = await crews.getEdition();
    }
};
</script>
