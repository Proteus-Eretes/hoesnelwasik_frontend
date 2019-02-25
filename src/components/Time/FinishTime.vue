<template>
    <div class="FinishTime">
        <p>{{prettyTime}}</p>
    </div>
</template>

<script>
    import moment from "moment";

    export default {
        name: "FinishTime",
        props: {
            time: Number
        },
        computed: {
            prettyTime: function () {
                const momentTime = moment.unix(this.time).utc();
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