<template>
    <b-card
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
        no-body
        class="table-responsive"
    >
        <template v-slot:header
            ><h2>{{ blockTitle }}</h2></template
        >
        <b-table
            class="clickable"
            striped
            hover
            head-variant="dark"
            :items="uniqueBlock"
            :fields="fields"
            @row-clicked="rowClicked"
        >
        </b-table>
    </b-card>
</template>

<script>
import moment from 'moment';
import { openPage } from '../../Helpers/Routing';
import { fieldStatus } from './fieldStatus';
import uniqBy from '../../Helpers/uniqBy';

export default {
    name: 'BlockCard',
    props: {
        block: Array
    },
    data() {
        return {
            fields: [
                { key: 'fieldnameshort', label: 'Veld' },
                { key: 'numberofteams', label: 'Aantal ploegen' },
                {
                    key: 'field_starttime',
                    label: 'Starttijd',
                    formatter: (time, key, field) => {
                        if (+field.status) {
                            return fieldStatus[field.status].name;
                        }
                        return this.removeSecondsFields(time);
                    },
                    tdClass: (time, key, field) => {
                        if (field.status > 0) {
                            return fieldStatus[field.status].class;
                        }
                    }
                }
            ]
        };
    },
    computed: {
        blockTitle() {
            return (
                'Blok ' +
                this.block[0].blocknumber +
                ': ' +
                this.removeSeconds(this.block[0].starttime)
            );
        },
        uniqueBlock() {
            return uniqBy(this.block, 'fieldnameshort')
        }
    },
    methods: {
        removeSecondsFields(starttime) {
            if (
                starttime === null ||
                starttime === this.block[0].starttime ||
                this.isNumber(starttime)
            ) {
                return this.removeSeconds(this.block[0].starttime);
            }
            return moment(starttime).format('H:mm');
        },
        removeSeconds(starttime) {
            return starttime.slice(0, starttime.lastIndexOf(':'));
        },
        rowClicked(record) {
            openPage(this.$router, record.fieldnameshort);
        },
        isNumber(num) {
            return !isNaN(num) && isFinite(num);
        }
    }
};
</script>

<style type="scss">
.stat_official {
    color: green;
    font-weight: bold;
}
.stat_protest {
    color: red;
    font-weight: bold;
}
.stat_unofficial {
    color: orange;
    font-weight: bold;
}
.stat_started,
.stat_finishing {
    animation: blinker 2s linear infinite;
    color: green;
    font-weight: bold;
}
.stat_canceled {
    color: #737373;
}
@keyframes blinker {
    50% {
        opacity: 0.4;
    }
}
</style>
