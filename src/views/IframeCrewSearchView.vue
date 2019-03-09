<template>
    <div>
        <NavBar :regatta="regatta" :regattas="regattas"></NavBar>
        <SearchOverview :crews="crews"> </SearchOverview>
    </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';
import { Crews } from '@/services/Crews';
import SearchOverview from "../components/Crews/SearchOverview";

export default {
    name: 'IframeCrewSearchView',
    props: {
        field: String,
        match: String,
        year: String,
        target: String
    },
    components: {
        SearchOverview,
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
        },
        $route: function(to, from) {
            window.gtag('event', 'page_view', { send_to: 'UA-92572628-1' });
        }
    },
    mounted() {
        let target;
        if (this.$router.currentRoute.fullPath.includes('club')) {
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
