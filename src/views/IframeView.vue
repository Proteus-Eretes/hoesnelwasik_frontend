<template>
    <div>
        <NavBar></NavBar>
        <FinalTime time="800" bonusSeconds="1" status="1"></FinalTime>
    </div>
</template>

<script>
// @ is an alias to /src
import { Regatta } from '@/services/Regatta';
import NavBar from '@/components/Navigation/NavBar';
import FinalTime from '@/components/Time/FinalTime';

export default {
    name: 'iframe-view',
    components: {
        FinalTime,
        NavBar
    },
    async mounted() {
        const regatta = new Regatta(
            'https://beta.hoesnelwasik.nl/api',
            'ww',
            0
        );
        console.log(await regatta.getClubs());
        console.log(await regatta.getBlocks());
        console.log(await regatta.getFields());
    }
};
</script>
