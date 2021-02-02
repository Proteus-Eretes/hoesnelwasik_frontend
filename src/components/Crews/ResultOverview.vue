<template>
    <b-card no-body header-class="p-0">
        <ViewNavigationBar type="uitslagen"></ViewNavigationBar>
        <b-container v-if="crews.length" fluid>
            <div class="text-center mt-3">
                <h3 class="text-secondary">Uitslagen {{ fieldName }}</h3>
            </div>
            <b-row>
                <div class="table-responsive">
                    <b-table
                        hover
                        :items="crews"
                        :fields="fields"
                        thead-class="thead-dark"
                        @row-clicked="openTeamDialog"
                        :tbody-tr-class="highLightWinner"
                    >
                        <template v-slot:cell(smallRank)="data">
                            {{ data.item.times[0].rank }}
                        </template>
                        <template v-slot:head(OarImage)>
                            <div class="d-none d-sm-block">
                                Blad
                            </div>
                        </template>
                        <template v-slot:cell(OarImage)="data">
                            <OarImage :club="data.item.clubnameshort"></OarImage>
                        </template>
                        <template v-slot:cell(FinishTime)="data">
                            <FinalTime
                                :time="getFinishTime(data.item.times[data.item.times.length - 1].times)"
                                :bonus-seconds="data.item.times[0].bonussecond"
                                :status="data.item.times[0].status"
                            ></FinalTime>
                        </template>
                        <template v-slot:cell(FinishTimeSmall)="data">
                            <FinalTime
                                :time="getFinishTime(data.item.times[data.item.times.length - 1].times)"
                                :bonus-seconds="data.item.times[0].bonussecond"
                                :status="data.item.times[0].status"
                            ></FinalTime>
                        </template>
                        <template v-slot:cell(DeltaTime)="data">
                            <DeltaTime
                                :time="getFinishTime(data.item.times[data.item.times.length - 1].times)"
                                :firstTime="getFinishTime(crews[0].times[crews[0].times.length - 1].times)"
                                :bonus-seconds="data.item.times[0].bonussecond"
                            >
                            </DeltaTime>
                        </template>
                        <template v-slot:cell(DeltaTimeSmall)="data">
                            <DeltaTime
                                :time="getFinishTime(data.item.times[data.item.times.length - 1].times)"
                                :firstTime="getFinishTime(crews[0].times[crews[0].times.length - 1].times)"
                                :bonus-seconds="data.item.times[0].bonussecond"
                            >
                            </DeltaTime>
                        </template>
                    </b-table>
                </div>
            </b-row>
            <team-popup :team="team"></team-popup>
        </b-container>
    </b-card>
</template>

<script>
import moment from 'moment';
import OarImage from '@/components/Clubs/OarImage.vue';
import TeamPopup from '@/components/Team/TeamPopup.vue';
import FinalTime from '../Time/FinalTime';
import DeltaTime from '../Time/DeltaTime';
import ViewNavigationBar from '../Navigation/ViewNavigationBar';
import { getFinishTime, getSplash, getRoundTime } from '../Time/Time';
import { highLightWinner } from './highLightWinner';
import findClockingLocations from './findClockingLocations';
import findMultipleRounds from './findMultipleRounds';

export default {
    name: 'ResultOverview',
    props: {
        crews: Array
    },
    components: {
        ViewNavigationBar,
        FinalTime,
        DeltaTime,
        TeamPopup,
        OarImage
    },
    data() {
        return {
            team: {}
        };
    },
    methods: {
        openTeamDialog(team, index, button) {
            this.team = team;
            this.$root.$emit('bv::show::modal', 'TeamPopup', button);
        },
        getFinishTime,
        getRoundTime,
        highLightWinner,
        getSplash
    },
    computed: {
        fieldName() {
            return this.crews[0].fieldnameshort;
        },
        fields() {
            return [
                {
                    key: 'smallRank',
                    label: '',
                    thClass: 'font-italic',
                    class: 'd-table-cell d-sm-none pl-1 pr-0'
                },
                {
                    key: 'OarImage',
                    label: 'Blad',
                    thClass: 'font-italic',
                    class: 'text-center d-none d-sm-table-cell'
                },
                {
                    key: 'times.0.rank',
                    label: 'Pos',
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
                ...findClockingLocations(this.crews).map(location => ({
                    key: location.distance,
                    label: location.name,
                    formatter: (val, distance, crew) => {
                        const time = getSplash(crew.times[0].times)(distance);
                        const momentTime = moment.unix(time).utc();
                        if (momentTime.hours()) {
                            return momentTime.format('HH:mm:ss.S');
                        }
                        return momentTime.format('mm:ss.S');
                    }
                })),
                ...findMultipleRounds(this.crews).map(location => ({
                    key: location.distance,
                    label: location.name,
                    formatter: (val, distance, crew) => {
                        const time = getRoundTime(crew.times)(distance);
                        const momentTime = moment.unix(time).utc();
                        if (momentTime.hours()) {
                            return momentTime.format('HH:mm:ss.S');
                        }
                        return momentTime.format('mm:ss.S');
                    }
                })),
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
                },
                {
                    key: 'DeltaTime',
                    label: 'Verschil met #1',
                    thClass: 'font-italic',
                    class: 'd-none d-sm-table-cell'
                },
                {
                    key: 'DeltaTimeSmall',
                    label: 'Verschil',
                    thClass: 'font-italic',
                    class: 'd-table-cell d-sm-none'
                }
            ];
        }
    }
};
</script>
