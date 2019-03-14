<template>
    <b-container class="mt-3">
        <b-card-group deck class="blokDeck justify-content-center">
            <block-card
                v-for="block in blocks"
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
    }
};
</script>

<style type="scss">
.blokDeck {
    flex-wrap: wrap !important;
    flex-grow: 1 !important;
}
.blokDeck .card {
    flex-basis: 40% !important;
    margin: 15px 0 15px;
}
</style>
