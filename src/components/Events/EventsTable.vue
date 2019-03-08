<template>
    <b-table class="clickable" hover  :items="events" :fields="fields" head-variant="dark" @row-clicked="rowClicked" ></b-table>
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
            let target;
            if (this.$router.currentRoute.fullPath.includes('loting')) {
                target = 'loting';
            } else {
                target = 'uitslagen';
            }

            this.$router.push({
                path: `/iframe/${this.$router.currentRoute.params.match}/${this.$router.currentRoute.params.jaar}/${target}/${record.fieldnameshort}`
            });
        }
    }
};
</script>

<style scoped>
</style>