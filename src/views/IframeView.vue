<template>
    <div>
        <NavBar :regatta="regatta" :regattas="regattas"></NavBar>
        <RegattaOverview :blocks="blocks" :clubs="clubs" :events="events"></RegattaOverview>
    </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';
import RegattaOverview from '@/components/Regatta/RegattaOverview';
import { Regatta } from "../services/Regatta";

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
            regattas: [],
            blocks: [],
            events: []
        };
    },
    async mounted() {
        const regatta = new Regatta(
            'https://beta.hoesnelwasik.nl/api',
            this.match,
            this.year
        );
        this.clubs = await regatta.getClubs();
        this.blocks = await regatta.getBlocks();
        this.events = await regatta.getFields();
        this.regattas = await regatta.getEditions(this.match);
        this.regatta = await regatta.getEdition();
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
