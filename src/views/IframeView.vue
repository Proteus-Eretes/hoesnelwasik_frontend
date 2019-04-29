<template>
    <div>
        <NavBar :regatta="regatta" :editions="editions" :regattas="regattas"></NavBar>
        <RegattaOverview
            :blocks="blocks"
            :clubs="clubs"
            :events="events"
        ></RegattaOverview>
    </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';
import RegattaOverview from '@/components/Regatta/RegattaOverview';
import { Regatta } from '../services/Regatta';
import {sendPageView} from "./analytics";

export default {
    name: 'iframe-view',
    components: {
        RegattaOverview,
        NavBar
    },
    props: {
        match: String,
        year: String
    },
    data() {
        return {
            clubs: [],
            regatta: {},
            regattaService: null,
            editions: [],
            regattas: [],
            blocks: [],
            events: []
        };
    },
    methods: {
        init: async function() {
            this.clubs = await this.regattaService.getClubs();
            this.blocks = await this.regattaService.getBlocks();
            this.events = await this.regattaService.getFields();
            this.editions = await this.regattaService.getEditions(this.match);
            this.regatta = await this.regattaService.getEdition();
            this.regattas = await this.regattaService.getRegattas();
            sendPageView();
        }
    },
    mounted() {
        this.regattaService = new Regatta(
            'https://beta.hoesnelwasik.nl/api',
            this.match,
            this.year
        );
        this.init();
    },
    watch: {
        year: function() {
            this.regattaService.setYear(this.year);
            this.init();
        },
        match: function() {
            this.regattaService.setMatch(this.match);
            this.init();
        }
    }
};
</script>

<style lang="scss">
.full-width .card-header-tabs {
    margin-right: -21px;
    margin-left: -21px;
}

.full-width .nav-tabs .nav-item {
    margin-bottom: -1px;
    flex-grow: 1;
    text-align: center;
}
</style>
