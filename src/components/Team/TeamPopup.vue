<template>
    <b-modal
        :title="team.teamname"
        ref="teamModalRef"
        hide-footer
        header-bg-variant="dark"
        header-text-variant="white"
        id="TeamPopup"
    >
        <div class="modal-content">
            <div class="modal-body" style="padding: 0rem">
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
            let attributes = [
                { key: 'clubname', label: 'Club' },
                { key: 'backnumber', label: 'Rugnummer' },
                { key: 'fieldnameshort', label: 'Veld' }
            ];
            let additionalAtt = [
                { key: 'rower8', label: 'Slag' },
                { key: 'rower7', label: '7' },
                { key: 'rower6', label: '6' },
                { key: 'rower5', label: '5' },
                { key: 'rower4', label: '4' },
                { key: 'rower3', label: '3' },
                { key: 'rower2', label: '2' },
                { key: 'rower1', label: 'Boeg' }
            ];
            let commentsField = { key: 'times.0.comments', label: 'Commentaar' };
            let subveldField = { key: 'fieldnameshortsub', label: 'Subveld' };

            if (this.team.fieldnameshortsub !== '0') {
                attributes.push(subveldField);
            }

            attributes = attributes
                .concat(
                    additionalAtt.filter(el => {
                        return this.team[el.key];
                    })
                )
                .concat([
                    { key: 'steername', label: 'Stuur' },
                    { key: 'coachnames', label: 'Coach' }
                ]);
            if (this.team.times !== undefined && this.team.times[0].comments) {
                attributes.push(commentsField);
            }
            return attributes;
        },
        items() {
            return [this.team];
        }
    }
};
</script>

<style scoped></style>
