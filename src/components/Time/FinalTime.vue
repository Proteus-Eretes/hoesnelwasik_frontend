<template>
    <div>
        <FinishTime :time="time" :bonus-seconds="bonusSeconds"></FinishTime>
        <template v-if="inValidTime">
            {{ displayStatus }}
        </template>
    </div>
</template>

<script>
import { ResultStatus } from '../../Helpers/ResultStatus';
import FinishTime from './FinishTime';

export default {
    name: 'FinalTime',
    components: { FinishTime },
    props: {
        time: Number,
        bonusSeconds: String,
        status: String
    },
    computed: {
        inValidTime() {
            return !ResultStatus.isValid(+this.status);
        },
        displayStatus() {
            return ResultStatus.getStatus(+this.status);
        }
    }
};
</script>
