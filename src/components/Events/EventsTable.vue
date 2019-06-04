<template>
    <b-table class="clickable" hover  :items="events" :fields="fields" head-variant="dark" @row-clicked="rowClicked" ></b-table>
</template>

<script>
import {openPage} from "../../Helpers/Routing";

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
    methods: {
        rowClicked(record) {
            openPage(this.$router, record.fieldnameshort);
        }
    }
};
</script>

<style scoped>
</style>