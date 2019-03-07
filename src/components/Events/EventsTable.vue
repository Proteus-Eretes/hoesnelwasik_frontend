<template>
    <b-table class="FieldTable" hover  :items="events" :fields="fields" head-variant="dark" @row-clicked="rowClicked" ></b-table>
</template>

<script>
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
            this.$router.push({
                path:
                    this.$router.currentRoute.path + '/' + record.fieldnameshort
            });
        }
    }
};
</script>

<style scoped>
.FieldTable {
    cursor: pointer;
}
</style>