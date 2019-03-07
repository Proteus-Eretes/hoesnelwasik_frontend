<template>
    <div v-if="clubs">
        <b-table class="ClubTable" hover striped head-variant="dark" :items="clubs" :fields="fields" @row-clicked="rowClicked" >
            <template slot="OarImage" slot-scope="row">
                <OarImage :club="row.item.clubshort"></OarImage>
            </template>
        </b-table>
    </div>
</template>

<script>
// @ is an alias to /src
import OarImage from '@/components/Clubs/OarImage.vue';

export default {
    name: 'ClubsOverview',
    components: { OarImage },
    props: {
        clubs: Array
    },
    data() {
        return {
            fields: {
                blad: {
                    key: 'OarImage',
                    label: 'Blad',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                clubshort: {
                    label: 'Code',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                clubname: {
                    label: 'Vereniging',
                    thClass: 'font-italic',
                    class: 'text-center'
                }
            }
        };
    },
    methods: {
        rowClicked(record) {
            const par = this.$router.currentRoute.params;
            const year = par.year;
            const match = par.match;
            this.$router.push({
                path:
                    '/iframe/' + match + '/' + year + '/club/' + record.clubname
            })
        }
    }
};
</script>

<style scoped>
.ClubTable {
    cursor: pointer;
}
</style>
