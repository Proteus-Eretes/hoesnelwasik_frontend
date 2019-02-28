<template>
  <div id="app">
    <FinishTime time=500.15 bonusSeconds="15"></FinishTime>
  </div>
</template>

<script>
    // @ is an alias to /src
    import FinishTime from "@/components/Time/FinishTime.vue";
    import {Regatta} from "@/sercives/Regatta";



    export default {
        name: "home",
        components: {
            FinishTime
        },
        async mounted() {
            const regatta = new Regatta('https://beta.hoesnelwasik.nl/api', 'ww', 0);
            console.log(await regatta.getClubs());
            regatta.setMatch('wwk', 0);
            console.log(await regatta.getClubs());
        }
    };
</script>

<style lang="scss">

</style>
