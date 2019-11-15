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
import { sendPageView } from './analytics';

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
        init: function() {
            this.regattaService.getClubs().then(clubs => {
                this.clubs = clubs;
            });
            this.regattaService.getBlocks().then(blocks => {
                this.blocks = blocks;
            });
            this.regattaService.getFields().then(events => {
                this.events = events;
            });
            this.regattaService.getEditions(this.match).then(regattas => {
                this.regattas = regattas;
            });
            this.regattaService.getEdition().then(regatta => {
                this.regatta = regatta;
            });
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
