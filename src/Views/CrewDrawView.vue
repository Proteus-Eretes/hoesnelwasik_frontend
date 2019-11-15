<template>
    <div>
        <NavBar :regatta="regatta" :regattas="regattas"></NavBar>
        <DrawOverview :crews="crews"></DrawOverview>
    </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';
import DrawOverview from '@/components/Crews/DrawOverview';
import { Crews } from '@/Services/Crews';
import { sendPageView } from './analytics';

export default {
    name: 'CrewDrawView',
    props: {
        field: String,
        match: String,
        year: String
    },
    components: {
        DrawOverview,
        NavBar
    },
    data() {
        return {
            crews: [],
            regatta: {},
            editions: []
        };
    },
    async mounted() {
        const crews = new Crews(
            'https://beta.hoesnelwasik.nl/api',
            this.match,
            this.year,
            this.field,
            'loting'
        );
        sendPageView();

        this.crews = await crews.getCrews();
        this.regattas = await crews.getEditions(this.match);
        this.regatta = await crews.getEdition();
    }
};
</script>
