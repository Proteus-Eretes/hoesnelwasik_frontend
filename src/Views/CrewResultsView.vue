<template>
    <div>
        <NavBar :regatta="regatta" :regattas="regattas" :editions="editions"></NavBar>
        <ResultOverview :crews="crews"> </ResultOverview>
    </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';
import { Crews } from '@/Services/Crews';
import ResultOverview from '../components/Crews/ResultOverview';
import { sendPageView } from './analytics';

export default {
    name: 'CrewResultsView',
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
            editions: [],
            regattas: []
        };
    },
    async mounted() {
        const crews = new Crews(
            this.$router.options.api,
            this.match,
            this.year,
            this.field,
            'uitslagen'
        );
        sendPageView();

        this.crews = await crews.getCrews();
        this.regattas = await crews.getRegattas(
            this.$router.currentRoute.params.iframe,
            this.match
        );
        this.editions = await crews.getEditions(this.match);
        this.regatta = await crews.getEdition();
    }
};
</script>
