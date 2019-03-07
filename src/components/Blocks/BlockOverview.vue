<template>
    <b-container class="mt-3">
        <b-card-group columns style="column-count: 2">
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
