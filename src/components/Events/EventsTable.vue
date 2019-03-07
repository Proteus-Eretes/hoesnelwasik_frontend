<template>
    <b-table :items="events" :fields="fields" head-variant="dark" @row-clicked="rowClicked" ></b-table>
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
            console.log('link nu naar:');
            const fieldName= record.fieldnameshort;
            console.log(fieldName)
            this.$router.push({ path: '/iframe/ww/0/' + fieldName + '/loting'});
        }
    }
};
</script>
