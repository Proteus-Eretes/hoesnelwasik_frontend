<template>
    <b-dropdown
        :text="regatta.jaar"
        style="background-color: black"
        class="black"
    >
        <b-dropdown-item
            v-for="edition in regattasOrder"
            :key="edition"
            v-on:click="openEdition(edition)"
        >
            {{ edition }}
        </b-dropdown-item>
    </b-dropdown>
</template>

<script>
import { openRegatta } from '../../Helpers/Routing';

export default {
    name: 'SwitchEdition',
    props: {
        regatta: Object,
        editions: Array
    },
    computed: {
        regattasOrder() {
            return this.editions
                .map(edition => +edition.jaar)
                .sort()
                .reverse();
        }
    },
    methods: {
        openEdition(year) {
            openRegatta(this.$router, {
                ...this.$router.currentRoute.params,
                year
            });
        }
    }
};
</script>

<style scoped></style>
