<template>
    <div class="FinishTime" :class="styling">
        {{prettyTime}}
        <span v-if="bonusSeconds > 0" style="font-size: 59%; ">+{{bonusSeconds}}</span>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'FinishTime',
    props: {
        time: Number,
        bonusSeconds: String
    },
    computed: {
        prettyTime() {
            const momentTime = moment.unix(this.time + this.bonusSeconds).utc();
            if (momentTime.hours()) {
                return momentTime.format('HH:mm:ss.S');
            }
            return momentTime.format('mm:ss.S');
        },
        styling() {
            if (this.bonusSeconds > 0) {
                return 'text-danger';
            }
            return '';
        }
    }
};
</script>

<style scoped>
</style>