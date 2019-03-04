<template>
    <div class="crew-draw-overview">
        <b-table hover :items="draw" :fields="fields">
            <template slot="OarImage" slot-scope="row">
                <OarImage :club="row.item.clubshort"></OarImage>
            </template>
        </b-table>
    </div>
</template>

<script>
import OarImage from '@/components/Clubs/OarImage.vue';

export default {
    name: 'DrawOverview',
    props: {
        draw: Array
    },
    components: {
        OarImage
    },
    data() {
        return {
            fields: {
                blad: {
                    key: 'OarImage',
                    label: 'blad'
                }
            }
        };
    }
}
</script>

<style scoped></style>