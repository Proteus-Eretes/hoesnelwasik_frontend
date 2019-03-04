<template>
    <div>
        <NavBar></NavBar>
        <DrawOverview :draw="draw"></DrawOverview>
    </div>
</template>

<script>
import DrawOverview from '@/components/Crews/DrawOverview.vue';
import NavBar from '@/components/Navigation/NavBar';
import { Regatta } from '../services/Regatta';

export default {
    name: 'IframeCrewDrawView',
    props: {
        fieldId: Number,
        match: String,
        year: String
    },
    components: {
        DrawOverview,
        NavBar
    },
    data() {
        return {
            draw: []
        };
    },
    async mounted() {
        console.log('hello world');
        const regatta = new Regatta(
            'https://beta.hoesnelwasik.nl/api',
            this.match,
            this.year
        );
        this.draw = await regatta.getFields();
        console.log(this.draw);
    }
};
</script>

<style scoped>

</style>