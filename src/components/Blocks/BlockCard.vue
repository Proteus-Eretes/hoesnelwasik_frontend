<template>
    <b-card
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
        no-body
    >
        <h2 slot="header">{{ blockTitle }}</h2>
        <b-table class="clickable" striped hover head-variant="dark" :items="getFixedField(block)" :fields="fields" @row-clicked="rowClicked" >
        </b-table>
    </b-card>
</template>

<script>
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
                { key: 'starttime', label: 'Starttijd' }
            ]
        };
    },
    computed: {
        blockTitle() {
            return (
                'Block ' +
                this.block[0].blocknumber +
                ':  ' +
                this.removeSeconds(this.block[0].starttime)
            );
        }
    },
    methods: {
        getFixedField(block) {
            console.log(block[0].blocknumber);
            for (let i = 0; i < block.length; i++) {
                let newtime = this.removeSeconds(block[i].starttime);
                console.log(newtime);
                block[i].starttime = newtime;
                // block[i].starttime = this.removeSeconds(block[i].starttime);
            }
            console.log(block);
            return block;
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
                path: `/iframe/${this.$router.currentRoute.params.match}/${this.$router.currentRoute.params.year}/${target}/${record.fieldnameshort}`
            });
        }
    }
};
</script>

<style scoped>
</style>