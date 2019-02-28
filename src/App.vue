<template>
  <div id="app">
    <FinishTime time=500.15 bonusSeconds="15"></FinishTime>
  </div>
</template>

<script>
    // @ is an alias to /src
    import FinishTime from "@/components/Time/FinishTime.vue";

    export default {
        name: "home",
        components: {
            FinishTime
        }
    };
</script>

<style lang="scss">

</style>
