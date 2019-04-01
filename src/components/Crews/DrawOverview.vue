<template>
    <b-card no-body header-class="p-0">
        <ViewNavigationBar type="loting"></ViewNavigationBar>
        <b-container v-if="crews.length" fluid>
            <div class="text-center mt-3">
                <h3 class="text-secondary">{{ fieldName }}</h3>
            </div>
            <b-row>
                <div class="table-responsive">
                    <b-table hover :items="crews" :fields="fields" thead-class="thead-dark" @row-clicked="openTeamDialog">
                        <template slot="OarImage" slot-scope="row">
                            <OarImage :club="row.item.clubnameshort"></OarImage>
                        </template>
                        <template slot="HEAD_OarImage">
                            <div class="d-none d-sm-block">
                                Blad
                            </div>
                        </template>
                    </b-table>
                </div>
            </b-row>
            <team-popup :team="team"></team-popup>
        </b-container>
    </b-card>
</template>

<script>
import OarImage from '@/components/Clubs/OarImage.vue';
import TeamPopup from '@/components/Team/TeamPopup.vue';
import ViewNavigationBar from "../Navigation/ViewNavigationBar";

export default {
    name: 'DrawOverview',
    props: {
        crews: Array
    },
    components: {
        ViewNavigationBar,
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
                    key: 'fieldnameshortsub',
                    label: 'Veld',
                    thClass: 'font-italic',
                    class: 'text-center'
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