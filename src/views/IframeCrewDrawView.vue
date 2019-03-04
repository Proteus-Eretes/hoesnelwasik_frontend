<template>
    <div>
        <NavBar :regatta="regatta" :regattas="regattas"></NavBar>
        <DrawOverview :crews="crews"></DrawOverview>
    </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';
import DrawOverview from "@/components/Crews/DrawOverview";
import {Crews} from "@/services/Crews";

export default {
    name: 'IframeCrewDrawView',
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
            regattas: []
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

        this.crews = await crews.getCrews();
        this.regattas = await crews.getEditions(this.match);
        this.regatta = await crews.getEdition();
        console.log(this.regatta);
    }
};
</script>

<style scoped>

</style>