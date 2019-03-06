<template>
    <div>
        <NavBar :regatta="regatta" :regattas="regattas"></NavBar>
        <RegattaOverview :blocks="blocks" :clubs="clubs"></RegattaOverview>
    </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';
import RegattaOverview from '@/components/Regatta/RegattaOverview';
import {Regatta} from "../services/Regatta";

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
            blocks: []
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
        this.regattas = await regatta.getEditions(this.match);
        this.regatta = await regatta.getEdition();
    }
};
</script>
