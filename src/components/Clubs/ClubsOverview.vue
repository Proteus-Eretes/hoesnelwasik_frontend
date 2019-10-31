<template>
    <div v-if="clubs">
        <b-table class="clickable" hover striped head-variant="dark" :items="clubs" :fields="fields" @row-clicked="rowClicked" >
            <template slot="OarImage" slot-scope="row">
                <OarImage :club="row.item.clubshort"></OarImage>
            </template>
        </b-table>
    </div>
</template>

<script>
// @ is an alias to /src
import OarImage from '@/components/Clubs/OarImage.vue';
import {openClub} from "../../Helpers/Routing";

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
                    label: 'Blad',
                    key: 'OarImage',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                clubshort: {
                    label: 'Code',
                    thClass: 'font-italic',
                    class: 'text-center',
                    sortable: true
                },
                clubname: {
                    label: 'Vereniging',
                    thClass: 'font-italic',
                    class: 'text-center',
                    sortable: true
                },
                numberofteams: {
                    label: 'Aantal ploegen',
                    key: 'numberofteams',
                    thClass: 'font-italic',
                    class: 'text-center',
                    sortable: true
                }
            }
        };
    },
    methods: {
        rowClicked(record) {
            openClub(this.$router, record.clubshort);
        }
    }
};
</script>
