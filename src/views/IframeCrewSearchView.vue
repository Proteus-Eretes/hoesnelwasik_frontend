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
            regattas: [],
            crewService: {}
        };
    },
    methods: {
        async init() {
            this.crews = await this.crewService.getCrews();
            this.regattas = await this.crewService.getEditions(this.match);
            this.regatta = await this.crewService.getEdition();
        }
    },
    watch: {
        field: function() {
            this.crewService.setField(this.field);
            this.init();
        }
    },
    mounted() {
        let target;
        if (this.target === 'clubs') {
            target = 'vereniging';
        } else {
            target = 'search';
        }
        this.crewService = new Crews(
            'https://beta.hoesnelwasik.nl/api',
            this.match,
            this.year,
            this.field,
            target
        );
        this.init();
    }
};
</script>
