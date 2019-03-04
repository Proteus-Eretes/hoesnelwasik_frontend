<template>
    <div v-if="crews" class="crew-draw-overview">
        <b-table hover :items="crews" :fields="fields">
            <template slot="OarImage" slot-scope="row">
                <OarImage :club="row.item.clubnameshort"></OarImage>
            </template>
        </b-table>
    </div>
</template>

<script>
import OarImage from '@/components/Clubs/OarImage.vue';

export default {
    name: 'DrawOverview',
    props: {
        crews: Array
    },
    components: {
        OarImage
    },
    data() {
        return {
            fields: [
                {
                    key: 'OarImage',
                    label: 'blad',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                {
                    key: 'fieldnameshort',
                    label: 'veld',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                {
                    key: 'backnumber',
                    label: 'rug#',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                {
                    key: 'teamname',
                    label: 'ploeg',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                {
                    key: 'rower8',
                    label: 'slag',
                    thClass: 'font-italic',
                    class: 'text-center'
                }
            ]
        };
    }
};
</script>

<style scoped></style>