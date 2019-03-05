<template>
    <b-table :items="events" :fields="fields"></b-table>
</template>

<script>
export default {
    name: "EventsTable",
    props: {
        events: Array,
        title: String,
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
    mounted() {
        console.log(this.events);
    }
};
</script>

<style scoped>

</style>