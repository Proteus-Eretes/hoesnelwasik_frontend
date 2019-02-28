<template>
    <td class="FinishTime">
        {{prettyTime}}
        <small v-if="bonusSeconds > 0"> +{{bonusSeconds}}</small>
    </td>
</template>

<script>
    import moment from "moment";

    export default {
        name: "FinishTime",
        props: {
            time: Number,
            bonusSeconds: Number,
        },
        computed: {
            prettyTime: function () {
                const momentTime = moment.unix(this.time + this.bonusSeconds).utc();
                if (momentTime.hours()) {
                    return momentTime.format('HH:mm:ss.S');
                }
                return momentTime.format('mm:ss.S');
            }
        }
    }
</script>

<style scoped>

</style>