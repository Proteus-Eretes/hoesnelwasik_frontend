<template>
    <b-dropdown
        :text="regatta.regattaname"
        style="background-color: black"
        class="black"
    >
        <b-dropdown-item
            v-for="regatta in regattasList"
            :key="regatta.id"
            v-on:click="openEdition(regatta)"
        >
            {{ regatta.regattaname }}
        </b-dropdown-item>
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
                (regattaA, regattaB) => {
                    return regattaA.regattaname > regattaB.regattaname;
                }
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
