<template>
    <b-table
        class="clickable"
        hover
        :items="sortedEvents"
        :fields="fields"
        head-variant="dark"
        @row-clicked="rowClicked"
    ></b-table>
</template>

<script>
import { openPage } from '../../Helpers/Routing';
import eventsOrder from './eventsOrder';

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
        sortedEvents() {
            return [...this.events].sort(
                (eA, eB) =>
                    eventsOrder.indexOf(eA.category) -
                    eventsOrder.indexOf(eB.category)
            );
        }
    },
    methods: {
        rowClicked(record) {
            openPage(this.$router, record.fieldnameshort);
        }
    }
};
</script>
