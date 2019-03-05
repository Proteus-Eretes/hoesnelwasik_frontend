<template>
    <div class="container mt-3">
        <b-card-group columns style="column-count: 2">
            <div v-for="block in blocks" :key="block[0].blockid">
                <block-card :block="block"> </block-card>
            </div>
        </b-card-group>
    </div>
</template>

<script>
import BlockCard from "./BlockCard";
export default {
    name: 'BlockOverview',
    components: { BlockCard },
    props: {
        blocks: Array
    }
};
</script>
