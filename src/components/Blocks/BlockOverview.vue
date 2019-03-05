<template>
    <div class="container mt-3">
        <b-card-group columns style="column-count: 2">
            <div v-for="block in blocks" :key="block[0].blockid">
                <b-card
                    header-tag="header"
                    header-bg-variant="dark"
                    header-text-variant="white"
                    no-body
                >
                    <h2 slot="header">{{getBlockTitle(block[0].blocknumber, block[0].starttime)}}</h2>
                    <b-table striped head-variant="dark" :items="block" :fields="fields">
                    </b-table>
                </b-card>
            </div>
        </b-card-group>
    </div>
</template>

<script>

export default {
    name: 'BlockOverview',
    props: {
        blocks: Array
    },
    data() {
        return {
            fields: [
                {key: 'fieldnameshort', label: 'Veld'},
                {key: 'numberofteams', label: 'Aantal ploegen'},
                {key: 'starttime', label: 'Starttijd'},
            ],
        }
    },
    methods: {
        removeSeconds(starttime) {
            return starttime.slice(0, starttime.lastIndexOf(':'));
        },
        getBlockTitle(blocknumber, starttime) {
            return 'Block ' + blocknumber + ':  ' + this.removeSeconds(starttime);
        }
    }
};
</script>

<style scoped>

</style>