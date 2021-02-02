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
            const firstplace = Math.floor(this.firstTime * 10);
            const yourtime =  Math.floor(this.time * 10);
            const delta = Math.round((yourtime - firstplace)) / 10;

            const momentTime = moment
                .unix(delta + +this.bonusSeconds)
                .utc();

            if (momentTime.utc().minutes()) {
                if (momentTime.utc().minutes() < 10) return momentTime.format('M.ss.S');
                else return momentTime.format('MM.ss.S');
            } else {
                if (momentTime.seconds() < 10) return momentTime.format('s.S');
                return momentTime.format('ss.S');
            }
        }
    }
};
</script>
