<template>
    <div class="DeltaTime">
        +{{ prettyTime }}s
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'DeltaTime',
    props: {
        time: Number,
        firstTime: Number,
        bonusSeconds: String
    },
    computed: {
        prettyTime() {
            const momentTime = moment
                .unix(this.time + +this.bonusSeconds - this.firstTime)
                .utc();

            if (momentTime.utc().minutes()) {
                return momentTime.format('M.ss.S');
            } else if (momentTime.seconds() < 10) {
                return momentTime.format('s.S');
            } else {
                return momentTime.format('ss.S');
            }
        }
    }
};
</script>
