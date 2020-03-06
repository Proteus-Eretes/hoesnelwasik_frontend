<template>
    <b-dropdown
        :text="regatta.regattaname"
        style="background-color: black"
        class="black"
    >
        <ul class="scrollable">
            <b-dropdown-item
                v-for="regatta in regattasList"
                :key="regatta.id"
                v-on:click="openEdition(regatta)"
            >
                {{ regatta.regattaname }}
            </b-dropdown-item>
        </ul>
    </b-dropdown>
</template>

<script>
import uniqBy from '../../Helpers/uniqBy';
import {openRegatta} from "../../Helpers/Routing";

export default {
    name: 'SwitchRegatta',
    props: {
        regattas: Array,
        regatta: Object
    },
    computed: {
        regattasList() {
            return uniqBy(this.regattas, 'regattaname').sort(
                (regattaA, regattaB) => regattaA.regattaname.localeCompare(regattaB.regattaname)
            );
        }
    },
    methods: {
        openEdition(regatta) {
            openRegatta(this.$router, {
                ...this.$router.currentRoute.params,
                match: regatta.shortname,
                year: 0
            });
        }
    }
};
</script>

<style type="scss">
.scrollable {
    height: auto;
    max-height: 300px;
    overflow-x: hidden;
    list-style-type: none;
    padding-left: 0px;
}
</style>
