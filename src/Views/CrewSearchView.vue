<template>
    <div>
        <NavBar
            :regatta="regatta"
            :regattas="regattas"
            :editions="editions"
        ></NavBar>
        <SearchOverview :crews="crews"> </SearchOverview>
    </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';
import { Crews } from '@/Services/Crews';
import SearchOverview from '../components/Crews/SearchOverview';
import { sendPageView } from './analytics';

export default {
    name: 'CrewSearchView',
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
            editions: [],
            crewService: {}
        };
    },
    methods: {
        async init() {
            this.crews = await this.crewService.getCrews();
            this.regattas = await this.crewService.getRegattas(
                this.$router.currentRoute.params.iframe,
                this.match
            );
            this.editions = await this.crewService.getEditions(this.match);
            this.regatta = await this.crewService.getEdition();
            sendPageView();
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
        if (this.$router.currentRoute.fullPath.includes('club')) {
            target = 'vereniging';
        } else {
            target = 'search';
        }
        this.crewService = new Crews(
            this.$router.options.api,
            this.match,
            this.year,
            this.field,
            target
        );
        this.init();
    }
};
</script>
