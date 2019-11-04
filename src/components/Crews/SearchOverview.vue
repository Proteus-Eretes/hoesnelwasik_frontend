<template>
    <b-card no-body header-class="p-0">
        <ViewNavigationBar type="uitslagen"></ViewNavigationBar>
        <b-container v-if="crews.length" fluid>
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
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                    >
                        <template v-slot:cell(OarImage)="data">
                            <OarImage :club="data.item.clubnameshort"></OarImage>
                        </template>
                        <template v-slot:cell(fieldnameshortsub)="data">
                            <b-link
                                :href="
                                    toField(
                                        $router.currentRoute.params,
                                        'uitslagen',
                                        data.item.fieldnameshort
                                    )
                                "
                            >
                                {{ row.item.fieldnameshortsub }}
                            </b-link>
                        </template>
                        <template v-slot:cell(FinishTime)="data">
                            <FinalTime
                                :time="getFinishTime(data.item.times[0].times)"
                                :bonus-seconds="data.item.times[0].bonussecond"
                                :status="data.item.times[0].status"
                            ></FinalTime>
                        </template>
                        <template v-slot:cell(FinishTimeSmall)="data">
                            <FinalTime
                                :time="getFinishTime(data.item.times[0].times)"
                                :bonus-seconds="data.item.times[0].bonussecond"
                                :status="data.item.times[0].status"
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
import { getFinishTime } from '../Time/Time';
import { toField } from '../../Helpers/Routing';

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
            sortBy: 'times.0.backnumber',
            sortDesc: false,
            team: {},
            fields: [
                {
                    key: 'OarImage',
                    label: 'Blad',
                    thClass: 'font-italic',
                    class: 'text-center d-none d-sm-table-cell'
                },
                {
                    key: 'fieldnameshortsub',
                    label: 'Veld',
                    thClass: 'font-italic',
                    class: 'text-center'
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
        getFinishTime,
        toField
    },
    computed: {
        fieldName() {
            if (this.$router.currentRoute.fullPath.includes('club')) {
                return this.crews[0].clubname;
            }
            return `Zoekresultaten voor: ${this.$router.currentRoute.params.field}`;
        }
    }
};
</script>
