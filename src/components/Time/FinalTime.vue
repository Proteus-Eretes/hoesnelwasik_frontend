<template>
    <td>
        <FinishTime :time="time" :bonus-seconds="bonusSeconds"></FinishTime>
        <template v-if="inValidTime">
            {{displayStatus}}
        </template>
    </td>
</template>

<script>
import {ResultStatus} from "../../helpers/ResultStatus";
import FinishTime from "./FinishTime";

export default {
    name: 'FinalTime',
    components: {FinishTime},
    props: {
        time: String,
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
}
</script>
