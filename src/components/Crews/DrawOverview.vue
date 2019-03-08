<template>
    <b-container v-if="crews.length">
        <div class="text-center mt-3">
            <h3 class="text-secondary">{{ fieldName }}</h3>
        </div>
        <b-row>
            <div class="table-responsive">
                <b-table hover :items="crews" :fields="fields" thead-class="thead-dark" @row-clicked="openTeamDialog">
                    <template slot="OarImage" slot-scope="row">
                        <OarImage :club="row.item.clubnameshort"></OarImage>
                    </template>
                </b-table>
            </div>
        </b-row>
        <team-popup :team="team"></team-popup>
    </b-container>
</template>

<script>
import OarImage from '@/components/Clubs/OarImage.vue';
import TeamPopup from '@/components/Team/TeamPopup.vue';

export default {
    name: 'DrawOverview',
    props: {
        crews: Array
    },
    components: {
        TeamPopup,
        OarImage
    },
    data() {
        return {
            team: {},
            fields: [
                {
                    key: 'OarImage',
                    label: 'Blad',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                {
                    key: 'fieldnameshort',
                    label: 'Veld',
                    thClass: 'font-italic',
                    class: 'text-center d-none d-sm-table-cell'
                },
                {
                    key: 'backnumber',
                    label: 'Rug#',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                {
                    key: 'teamname',
                    label: 'Ploeg',
                    thClass: 'font-italic',
                    class: 'text-center font-weight-bold ploeg'
                },
                {
                    key: 'rower8',
                    label: 'Slag',
                    thClass: 'font-italic',
                    class: 'text-center d-none d-sm-table-cell'
                }
            ]
        };
    },
    methods: {
        openTeamDialog(team, index, button) {
            this.team = team;
            this.$root.$emit('bv::show::modal', 'TeamPopup', button);
        }
    },
    computed: {
        fieldName() {
            return this.crews[0].fieldnameshort;
        }
    }
};
</script>

<style scoped></style>