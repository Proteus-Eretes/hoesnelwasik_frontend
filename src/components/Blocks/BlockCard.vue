<template>
    <b-card
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
        no-body
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
                    key: 'starttime',
                    label: 'Starttijd',
                    formatter: this.removeSeconds
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
        }
    }
};
</script>
