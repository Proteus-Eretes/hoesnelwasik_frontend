<template>
    <b-card no-body header-class="p-0">
        <ViewNavigationBar type="uitslagen"></ViewNavigationBar>
        <b-container v-if="crews.length">
            <div class="text-center mt-3">
                <h3 class="text-secondary">{{ fieldName }}</h3>
            </div>
            <b-row>
                <div class="table-responsive">
                    <b-table
                        hover
                        :items="crews"
                        :fields="fields"
                        thead-class="thead-dark"
                        @row-clicked="openTeamDialog"
                    >
                        <template slot="OarImage" slot-scope="row">
                            <OarImage :club="row.item.clubnameshort"></OarImage>
                        </template>
                        <template slot="FinishTime" slot-scope="row">
                            <FinalTime
                                :time= "getFinishTime(row.item.times[0].times)"
                                :bonus-seconds="row.item.times[0].bonussecond"
                                :status="row.item.times[0].status"
                            ></FinalTime>
                        </template>
                        <template slot="FinishTimeSmall" slot-scope="row">
                            <FinalTime
                                :time="row.item.times[0].times[0].time"
                                :bonus-seconds="row.item.times[0].bonussecond"
                                :status="row.item.times[0].status"
                            ></FinalTime>
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
import FinalTime from '../Time/FinalTime';
import ViewNavigationBar from '../Navigation/ViewNavigationBar';
import {getFinishTime} from "../Time/Time";

export default {
    name: 'SearchOverview',
    props: {
        crews: Array
    },
    components: {
        ViewNavigationBar,
        FinalTime,
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
                    key: 'times.0.backnumber',
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
                },
                {
                    key: 'FinishTime',
                    label: 'Finish tijd',
                    thClass: 'font-italic',
                    class: 'd-none d-sm-table-cell'
                },
                {
                    key: 'FinishTimeSmall',
                    label: 'Tijd',
                    thClass: 'font-italic',
                    class: 'd-table-cell d-sm-none'
                }
            ]
        };
    },
    methods: {
        openTeamDialog(team, index, button) {
            this.team = team;
            this.$root.$emit('bv::show::modal', 'TeamPopup', button);
        },
        getFinishTime(times) {
            return getFinishTime(times);
        }
    },
    computed: {
        fieldName() {
            if (this.$router.currentRoute.fullPath.includes('club')) {
                return this.crews[0].clubname;
            }
            return `Zoekresultaten voor: ${
                this.$router.currentRoute.params.field
            }`;
        }
    }
};
</script>

<style scoped></style>
