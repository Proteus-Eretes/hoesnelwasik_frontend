<template>
    <div>
        <NavBar :regatta="regatta" :regattas="regattas"></NavBar>
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
import { Regatta } from '../Services/Regatta';
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
            this.regattas = await this.regattaService.getEditions(this.match);
            this.regatta = await this.regattaService.getEdition();
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
