<template>
    <div v-if="clubs">
        <b-table hover :items="clubs" :fields="fields">
            <template slot="OarImage" slot-scope="row">
                <OarImage :club="row.item.clubshort"></OarImage>
            </template>
        </b-table>
    </div>
</template>

<script>
// @ is an alias to /src
import OarImage from '@/components/Clubs/OarImage.vue';

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
                    key: 'OarImage',
                    label: 'Blad',
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
                }
            }
        };
    }
};
</script>

<style scoped></style>
