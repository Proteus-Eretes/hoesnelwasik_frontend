<template>
    <b-table
        class="clickable"
        hover
        :items="sorted_events"
        :fields="fields"
        head-variant="dark"
        @row-clicked="rowClicked"
    ></b-table>
</template>

<script>
import { openPage } from '../../helpers/Routing';

export default {
    name: 'EventsTable',
    props: {
        events: Array,
        title: String
    },
    data() {
        return {
            fields: [
                {
                    key: 'fieldnameshort',
                    label: this.title
                }
            ]
        };
    },
    computed: {
        sorted_events() {
            const order = [
                'E',
                'G',
                'B',
                'Ej',
                'Dev',
                'Cl',
                'V',
                'C4',
                'Bedr',
                '18',
                '16',
                '14'
            ];
            return this.events.sort((eA, eB) => {
                return order.indexOf(eA.category) > order.indexOf(eB.category);
            });
        }
    },
    methods: {
        rowClicked(record) {
            openPage(this.$router, record.fieldnameshort);
        }
    }
};
</script>

<style scoped></style>
