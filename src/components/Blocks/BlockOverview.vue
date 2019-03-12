<template>
    <b-container class="mt-3">
        <b-card-group deck class="columns">
            <block-card
                v-for="block in sortedBlocks"
                :key="block[0].blockid"
                :block="block"
            />
        </b-card-group>
    </b-container>
</template>

<script>
import BlockCard from './BlockCard';
export default {
    name: 'BlockOverview',
    components: { BlockCard },
    props: {
        blocks: Array
    },
    computed: {
        sortedBlocks() {
            let copy = this.blocks;
            return copy.sort(function(a, b) {
                return a[0].blocknumber - b[0].blocknumber;
            });
        }
    }
};
</script>

<style type="scss">
.columns {
    flex-wrap: wrap !important;
    flex-grow: 1 !important;
}
.columns .card {
    flex-basis: 40% !important;
    margin: 15px 0 15px;
}
</style>
