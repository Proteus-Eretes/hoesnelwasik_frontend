<template>
    <div>
        {{ prettyTime }}
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'Time',
    props: {
        time: Number
    },
    computed: {
        prettyTime() {
            const momentTime = moment.unix(this.time).utc();
            if (momentTime.hours()) {
                return momentTime.format('HH:mm:ss.S');
            }
            return momentTime.format('mm:ss.S');
        }
    }
};
</script>
