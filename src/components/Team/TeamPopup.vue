<template>
    <div class='teamPopup'>
        <b-button @click="showModal">Show Team</b-button>

        <b-modal ref="teamModalRef" hide-footer hide-header id="TeamPopup" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        {{ team[0].teamname}}
                    </h5>
                </div>

                <div class="modal-body">
                    <b-table stacked :items="team" :fields="fields"/>
                </div>

                <div class="modal-footer">
                    <b-button block @click="hideModal">Close</b-button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'TeamPopup',
    data: function() {
        const team = this.getTeam();
        const attributes = [
            {key: 'clubname', label: 'Club'},
            {key: 'backnumber', label: 'Rugnummer'},
            {key: 'fieldnameshort', label: 'Veld'},
            {key: 'rower8', label: 'Slag'},
            {key: 'rower7', label: '7'},
            {key: 'rower6', label: '6'},
            {key: 'rower5', label: '5'},
            {key: 'rower4', label: '4'},
            {key: 'rower3', label: '3'},
            {key: 'rower2', label: '2'},
            {key: 'rower1', label: 'Boeg'},
            {key: 'steername', label: 'Stuur'},
            {key: 'coachnames', label: 'Coach'},
            {key: 'comments', label: 'Commentaar'}
        ];
        return {
            fields: attributes.filter(element => {
                return element.key in team;
            }),
            team: [team]
        };
    },
    methods: {
        getTeam() {
            return {
                knrbid: '11e8-c5c7-90793314-8c67-525400d1387d',
                teamname: 'Aegir 2',
                fieldnameshort: 'H C4+ Klassement',
                fieldnameshortsub: '0',
                clubname: 'Aegir',
                clubnameshort: 'AEG',
                slotid: '11e8-c5c7-9c854260-8af8-525400d1387d',
                raceid: '11e8-c5c8-287e415e-88f9-525400d1387d',
                tossorder: '1',
                backnumber: '38',
                comments: '',
                rower1: 'Floris van Lieshout',
                rower2: 'Matthias Bork',
                rower3: 'Sjoerd Dirkson',
                rower8: 'Alistair Cortes',
                steername: 'Julia Kleinhuis',
                coachnames: 'jari Roest'
            };
        },
        showModal() {
            this.$refs.teamModalRef.show();
        },
        hideModal() {
            this.$refs.teamModalRef.hide();
        }
    }
};
</script>

<style scoped>

</style>