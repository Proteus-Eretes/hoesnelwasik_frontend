<template>
    <b-card
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
        no-body
        class="table-responsive"
    >
        <h2 slot="header">{{ blockTitle }}</h2>
        <b-table
            class="clickable"
            striped
            hover
            head-variant="dark"
            :items="block"
            :fields="fields"
            @row-clicked="rowClicked"
        >
        </b-table>
    </b-card>
</template>

<script>
import moment from 'moment';
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
                    formatter: this.removeSecondsFields
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
        }
    },
    methods: {
        removeSecondsFields(starttime) {
            if (starttime === null || starttime === this.block[0].starttime || this.isNumber(starttime)) {
                return this.removeSeconds(this.block[0].starttime);
            }
            return moment(starttime).format('H:mm');
        },
        removeSeconds(starttime) {
            return starttime.slice(0, starttime.lastIndexOf(':'));
        },
        rowClicked(record) {
            let target;
            if (this.$router.currentRoute.fullPath.includes('loting')) {
                target = 'loting';
            } else {
                target = 'uitslagen';
            }
            this.$router.push({
                path: `/iframe/${this.$router.currentRoute.params.match}/${
                    this.$router.currentRoute.params.year
                }/${target}/${record.fieldnameshort}`
            });
        },
        isNumber(num) {
            return !isNaN(num) && isFinite(num);
        }
    }
};
</script>
