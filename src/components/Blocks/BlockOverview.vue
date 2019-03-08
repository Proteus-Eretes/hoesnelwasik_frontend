<template>
    <b-container class="mt-3">
        <b-card-group columns >
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
.columns {
    column-count: 2 !important;
}
@media (max-width: 575.98px) {
    .columns {
        column-count: 1 !important;
    }
}
</style>
