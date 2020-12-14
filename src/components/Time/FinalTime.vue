<template>
    <div>
      <template v-if="outOfCompetition">
        <FinishTime :time="time" :bonus-seconds="bonusSeconds"></FinishTime>
        {{ displayStatus }}
      </template>
      <template v-else-if="inValidTime">
            {{ displayStatus }}
      </template>
      <template v-else>
        <FinishTime :time="time" :bonus-seconds="bonusSeconds"></FinishTime>
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
        outOfCompetition() {
            return ResultStatus.isOutsideCompetition(+this.status);
        },
        displayStatus() {
            return ResultStatus.getStatus(+this.status);
        }
    }
};
</script>
