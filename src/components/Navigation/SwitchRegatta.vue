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
import uniqBy from "../../helpers/uniqBy";

export default {
    name: "SwitchRegatta",
    props: {
        regattas: Array,
        regatta: Object
    },
    computed: {
        regattasList() {
            return uniqBy(this.regattas, 'regattaname').sort((regattaA, regattaB) => regattaA.regattaname > regattaB.regattaname);
        }
    },
    methods: {
        openEdition(regatta) {
            this.$router.push({
                path: `/iframe/${regatta.shortname}`
            });
        }
    }
};
</script>
