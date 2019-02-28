<template>
    <td class="FinishTime">
        {{prettyTime}}
        <span v-if="bonusSeconds > 0" style="font-size: 59%; "> +{{bonusSeconds}}</span>
    </td>
</template>

<script>
    import moment from "moment";

    export default {
        name: "FinishTime",
        props: {
            time: String,
            bonusSeconds: String,
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