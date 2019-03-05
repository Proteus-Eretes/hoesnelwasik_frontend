<template>
    <b-modal :title=team.teamname ref="teamModalRef" hide-footer id="TeamPopup">
        <div class="modal-content">
            <div class="modal-body">
                <b-table stacked :items="items" :fields="fields" />
            </div>

            <div class="modal-footer">
                <b-button block @click="hideModal">Close</b-button>
            </div>
        </div>
    </b-modal>
</template>

<script>
export default {
    name: 'TeamPopup',
    props: {
        team: Object
    },
    methods: {
        showModal() {
            this.$refs.teamModalRef.show();
        },
        hideModal() {
            this.$refs.teamModalRef.hide();
        }
    },
    computed: {
        fields() {
            const attributes = [
                { key: 'clubname', label: 'Club' },
                { key: 'backnumber', label: 'Rugnummer' },
                { key: 'fieldnameshort', label: 'Veld' },
                { key: 'rower8', label: 'Slag' },
                { key: 'rower7', label: '7' },
                { key: 'rower6', label: '6' },
                { key: 'rower5', label: '5' },
                { key: 'rower4', label: '4' },
                { key: 'rower3', label: '3' },
                { key: 'rower2', label: '2' },
                { key: 'rower1', label: 'Boeg' },
                { key: 'steername', label: 'Stuur' },
                { key: 'coachnames', label: 'Coach' },
                { key: 'comments', label: 'Commentaar' }
            ];
            return attributes.filter(element => {
                return this.team[element.key];
            });
        },
        items() {
            return [this.team];
        }
    }
};
</script>

<style scoped></style>
