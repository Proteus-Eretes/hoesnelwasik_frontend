<template>
    <div>
        <NavBar></NavBar>
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
            crews: []
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
    }
};
</script>

<style scoped>

</style>