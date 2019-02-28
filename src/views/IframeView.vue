<template>
    <div>
        <NavBar></NavBar>
        <FinishTime time="800" bonusSeconds="800"></FinishTime>
    </div>
</template>

<script>
// @ is an alias to /src
import FinishTime from '@/components/Time/FinishTime.vue';
import { Regatta } from '@/sercives/Regatta';
import NavBar from '@/components/Navigation/NavBar';

export default {
    name: 'iframe-view',
    components: {
        NavBar,
        FinishTime
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
