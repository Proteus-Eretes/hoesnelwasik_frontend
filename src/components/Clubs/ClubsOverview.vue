<template>
    <div v-if="clubs">
        <b-table
            class="clickable"
            hover
            striped
            head-variant="dark"
            :items="clubs"
            :fields="fields"
            @row-clicked="rowClicked"
        >
            <template v-slot:cell(OarImage)="data">
                <OarImage :club="data.item.clubshort"></OarImage>
            </template>
        </b-table>
    </div>
</template>

<script>
// @ is an alias to /src
import OarImage from '@/components/Clubs/OarImage.vue';
import { openClub } from '../../Helpers/Routing';

export default {
    name: 'ClubsOverview',
    components: { OarImage },
    props: {
        clubs: Array
    },
    data() {
        return {
            fields: [
                {
                    label: 'Blad',
                    key: 'OarImage',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                {
                    label: 'Code',
                    key: 'clubshort',
                    thClass: 'font-italic',
                    class: 'text-center',
                    sortable: true
                },
                {
                    label: 'Vereniging',
                    key: 'clubname',
                    thClass: 'font-italic',
                    class: 'text-center',
                    sortable: true
                },
                {
                    label: 'Aantal ploegen',
                    key: 'numberofteams',
                    thClass: 'font-italic',
                    class: 'text-center',
                    sortable: true
                }
            ]
        };
    },
    methods: {
        rowClicked(record) {
            openClub(this.$router, record.clubshort);
        }
    }
};
</script>
